<template>
  <div>
    <userinfo/>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">题干描述</h3>
      </div>
      <div class="panel-body text-left">
        <div class="markdown-body" v-html="compiledMarkdown" />
      </div>
    </div>
    <div>
    <button class='btn btn-success btn-xs pull-left' @click="run_yx">运行</button>
    </div>
    <div>
    <button class='btn btn-success btn-xs pull-left' @click="run_tj">提交</button>
    </div>
    <div>
    <editor
      v-model="content"
      @init="editorInit"
      lang="python"
      theme="monokai"
      width="1000"
      height="500"
    ></editor>
    </div>
    <p class="data_test" />
  </div>
</template>

<script>
import Editor from "vue2-ace-editor";
import axios from 'axios';
import Userinfo from './UserInformation.vue'
import marked from 'marked'
import test from 'raw-loader!../assets/test.md'
import '../assets/markdown.css'
export default {
  data() {
    return {
      content: "",
    };
  },
  components: {
    Editor,Userinfo
  },
    computed: {
    compiledMarkdown: function() {
      return marked(test, { sanitize: true });
    }
  
  },
  methods: {
    async run_tj() {
      const res = await axios.post('http://127.0.0.1:8000/core/index', {
				data: this.content
      })
      console.log(res.data.output)
      alert('结果：' + res.data.output)
    },
    run_yx(){
      alert(this.content)
    },
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/python");
      require("brace/theme/monokai");
    },
  },
};
</script>

<style>
</style>