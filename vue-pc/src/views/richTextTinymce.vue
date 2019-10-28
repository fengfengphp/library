<template>
    <div>
        <h1>text</h1>
        <editer
                ref="tinymce"
                v-model="content">
        </editer>
    </div>
</template>

<script>
import editer from '@tinymce/tinymce-vue'
export default {
  name: 'richText',
  components: {
    editer
  },
  data () {
    return {
      content: '<p>大师傅爱迪生发的</p>',
      setting: {
        height: 400,
        language_url: 'langs/zh_CN.js'
        // block_formats: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;"
      }
    }
  }
}
</script>

<style>
    .tox .tox-notification--in{
        display: none;
    }
    .tox .tox-notification{
        display: none !important;
    }
</style>
