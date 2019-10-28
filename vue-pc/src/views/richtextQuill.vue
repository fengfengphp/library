<template>
    <div>
        <h1>46</h1>
        <quill-editor ref="myTextEditor"
                      v-model="content">
        </quill-editor>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: 'richtextQuill',
  components: {
    quillEditor
  },
  data () {
    return {
      content: '<h2>I am Example</h2>'
    }
  },
  methods: {

  }

}
</script>

<style scoped>

</style>
