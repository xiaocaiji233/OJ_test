<template>
<div>
<div class="panel panel-primary">
<div class="panel-heading">
  <h3 class="panel-title">题目详情</h3>
</div>
<div class="panel-body">
    <form role="form">
        <div class="form-group">
            <label for="name">题干描述</label>
            <textarea v-model="form.tigan" class="form-control" rows="4"></textarea>
        </div>
    </form>
     <form role="form">
        <div class="form-group">
            <label for="name">函数接口</label>
            <textarea v-model="form.hanshu" class="form-control" rows="3"></textarea>
        </div>
    </form>
     <form role="form">
        <div class="form-group">
            <label for="name">裁判样例</label>
            <textarea v-model="form.yangli" class="form-control" rows="5"></textarea>
        </div>
    </form>

</div>
</div>
<button @click="submit" class="btn btn-success btn-xs">submit</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
        return {
            form: {
                tigan: '',
                hanshu: '',
                yangli: ''
            }
        }
    },
    methods: {
    async submit() {
       console.log(this.form)

       const res = await axios.post('http://127.0.0.1:8000/test/', {
				"data": this.form
      })
      console.log(res.data);
    }
  }
}
</script>

<style>

</style>