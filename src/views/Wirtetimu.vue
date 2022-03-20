<template>
  <div>
  <userinfo/>
  <div class="text-left">
 <div id="vditor"/>
  </div>
  <button @click="submit" class="btn btn-success btn-xs">submit</button>
  </div>
</template>

<script>
import Userinfo from './UserInformation.vue'
import marked from 'marked'
import test from 'raw-loader!../assets/test.md'
import '../assets/markdown.css'

import Vditor from 'vditor'
import "vditor/dist/index.css"

export default {
  components: { Userinfo },
  computed: {
    compiledMarkdown: function() {
      return marked(test, { sanitize: true });
    }
  },
  data() {
    return {
      contentEditor: ''
    }
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', {
      height: 600,
      mode: "wysiwyg",
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after: () => {
        this.contentEditor.setValue('## 题干描述：\n 请在这里输入题干\n## 函数接口定义：\n请定义自己的函数接口\n ## 裁判测试程序样例：\n 请输入样例\n ')
      },
    })
  },
  methods: {
    submit() {
      console.log(this.contentEditor.getValue())
    }
  }
}
</script>

<style>

</style>
