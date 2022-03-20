<template>
  <div class="auth-page">
      <div id="regist_frame">
	<form method="post" action="register.js">
		<p><label class="label_input">用户等级</label><input v-model="form.level" type="text" id="userdj" class="text_field" list="dj1_list"/></p>
		<datalist id="dj1_list">
			<option value="教师"/>
			<option value="学生"/>
		</datalist>
		<p><label class="label_input">用户名</label><input v-model="form.username" type="text" id="username" class="text_field"/></p>
		<p><label class="label_input">密码</label><input v-model="form.password" type="text" id="password" class="text_field"/></p>
		<p><label class="label_input">确认密码</label><input  v-model="form.password_confirm" type="text" id="password_confim" class="text_field"/></p>	
		<div id="regist_control">
			<router-link to="./"><input type="button" id="btn_regist" value="注册" @click="regist"/></router-link>
		</div>
	</form>
	</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                password_confirm: '',
                level: ''
            }
        }
    },
methods:{
    async regist(){
        if (this.form.password !== this.form.password_confirm) {
            alert('密码不一致')
            return;
        }
        
        const res = await axios.post('http://127.0.0.1:8000/test/', {
				"data": this.form
      })
      console.log(res.data);
      alert(this.form.level);
    }
}
}
</script>


<style>
#regist_frame{
	width: 400px;
    height: 260px;
    padding: 13px;
 
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
 
    background-color: rgba(240, 255, 255, 0.5);
 
    border-radius: 10px;
    text-align: center;
}

form p > * {
    display: inline-block;
    vertical-align: middle;
}

.label_input {
    font-size: 14px;
    font-family: 宋体;
 
    width: 65px;
    height: 28px;
    line-height: 28px;
    text-align: center;
 
    color: white;
    background-color: #3CD8FF;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
 
.text_field {
    width: 278px;
    height: 28px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 0;
}
 
#btn_regist {
    font-size: 14px;
    font-family: 宋体;
 
    width: 120px;
    height: 28px;
    line-height: 28px;
    text-align: center;
 
    color: white;
    background-color: #3BD9FF;
    border-radius: 6px;
    border: 0;
 
    float: left;
}
 
#login_control {
    padding: 0 28px;
}
</style>