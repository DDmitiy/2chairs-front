<template>
  <div class="select-file">
    <input
      ref="input"
      type="file"
      multiple
      :accept="extensions.join(',')"
      :disabled="disabled"
      @change="changed($event.target.files)">
    <v-card>
      <v-container>
        <v-select
          :loading="loading"
          v-model="items"
          :append-icon="readOnly ? '' : 'file_upload'"
          readonly
          item-text="name"
          item-value="name"
          return-object
          multiple
          multi-line
          :error-messages="errors"
          :disabled="disabled"
          :label="label"
          :items="items"
          :required="required"
          :append-icon-cb="clicked">
          <template
            slot="selection"
            slot-scope="props">
            <v-chip
              class="chip--select-multi"
              :close="!readOnly"
              :key="props.item.name"
              :selected="props.selected"
              @input="remove(props.index)"
              @click="preview(props.item)">{{ props.item.name.slice(0,45) }}</v-chip>
          </template>
        </v-select>
      </v-container>
    </v-card>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      width="1000px"
      scrollable
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>{{ label }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            icon
            dark
            @click.native="downloadFile(data, selected.name)">
            <v-icon>file_download</v-icon>
          </v-btn>
          <v-btn
            icon
            dark
            @click="selected = null">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <template v-if="data !== null && type !== null">
          <!--<embed-->
          <!--v-if="type === 'application/pdf'"-->
          <!--class="view-pdf"-->
          <!--:type="type"-->
          <!--:src="data"-->
          <!--:key="data">-->

          <v-card-text v-if="type.substring(0, 6) === 'image/'">
            <img
              :src="data"
              :key="data"
              width="100%"
            >
          </v-card-text>

          <v-card-text v-else>
            <v-alert
              type="error"
              :value="true">Предпросмотр "{{ type }}" не поддерживается.
            </v-alert>
          </v-card-text>
        </template>

      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  import axios from '../../http'

  export default {
    name: 'input-file',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      value: {
        default: null
      },
      extensions: {
        type: Array,
        default() {
          return []
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      errorMessages: {
        type: Array,
        default: () => {
          return []
        }
      },
      multiple: {
        type: Boolean,
        default: false
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        items: [],
        dialog: false,
        data: null,
        type: null,
        selected_: null,
        errorList: [],
        loading: false
      }

    },
    computed: {
      selected: {
        get() {
          return this.selected_
        },
        set(value) {
          if (this.data) {
            URL.revokeObjectURL(this.data)
          }
          if (value) {
            this.data = URL.createObjectURL(value.file || value.blob)
            this.type = value.type
            this.dialog = true
          } else {
            this.dialog = false
            this.type = null
            this.data = null
          }
          this.selected_ = value
        }
      },
      errors() {
        return this.errorList.concat(this.errorMessages)
      }
    },
    beforeDestroy() {
      this.selected = null
    },
    mounted() {
      if (!this.multiple) {
        this.getFilesByIds(this.value ? [this.value] : []).then((res) => {
          this.items = res
        })
      } else {
        this.getFilesByIds(this.value).then((res) => {
          this.items = res
        })
      }
    },
    methods: {
      clicked() {
        if (!this.readOnly) {
          this.$refs.input.click()
        }
      },
      async changed(files) {
        this.errorList = []
        const types = this.extensions
        let update = false
        for (let i = 0, file, push; i < files.length; i++) {
          file = files[i]
          push = false
          // Цикл для проверки типа входящего файла
          for (let j in types) {
            const type = types[j].trim()
            if (type === '.' + file.name.split('.').pop().toLowerCase()){
              push = true
              break
            }
          }
          if (!push) {
            this.errorList.push('Расширение файла должно быть '+ this.extensions.join(', '))
          }
          // Проверка на повторение имени файла
          for (let i in this.items) {
            const item = this.items[i]
            if (item.name === file.name) {
              push = false
              break
            }
          }
          // Проверка на размер файла(20 mb)
          if (file.size >= 20971520) {
            this.errorList.push('Файл не должен быть больше 20 мегабайт')
            push = false
          }
          // Проверка на multiple параметр (если false - не больше одного файла
          if (!this.multiple && (this.items.length !== 0)) {
            this.errorList.push('В данном поле не может быть больше одного файла')
            push = false
          }
          // Проверка на тип файла
          // Если все проверки пройдены - добавить файл в Array
          if (push) {
            let formData = new FormData()
            formData.append('file', file, file.name)
            const res = await axios.post(
              '/api/file',
              formData
            )
            this.items.push({
              id: res.data.fileId,
              name: file.name,
              type: file.type,
              size: file.size,
              file
            })
            update = true
          }
        }
        this.$refs.input.value = ''
        if (update) {
          this.update()
        }
      },
      remove(index) {
        this.items.splice(index, 1)
        this.update()
      },
      update() {
        if (!this.multiple) {
          const id = (this.items.length === 1) ? this.items[0].id : null
          this.$emit('change', id)
        } else {
          this.$emit('change', this.items.map(
            (item) => { return item.id }
          ))
        }
      },
      preview(item) {
        if (item.file || item.blob) {
          this.selected = item
        }
      },
      async getFilesByIds(ids) {
        this.loading = true
        const files = []
        for (let i in ids) {
          const id = ids[i]
          let response = await this.axios.get(`/api/file/${id}`, {responseType: 'arraybuffer'})
          let file = new File(
            [response.data],
            String(response.headers['content-disposition']).slice(21),
            {type: response.headers['content-type']}
          )
          files.push({
            id: id,
            name: file.name,
            type: file.type,
            size: file.size,
            file
          })
        }
        this.loading = false
        return files
      },
      downloadFile(data, name) {
        const link = document.createElement('a')
        link.href = data
        link.setAttribute('download', name)
        document.body.appendChild(link)
        link.click()
      },
    },
  }
</script>

<style scoped>
  .view-pdf {
    width: 100%;
    height: 100%;
  }
  .select-file input[type=file] {
    position: absolute;
    filter: alpha(opacity=0);
    opacity: 0;
  }
</style>
