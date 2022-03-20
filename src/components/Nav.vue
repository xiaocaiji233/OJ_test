<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
    <div class="navbar-header">
	<router-link class="navbar-brand" to="Writetimuu">OJ DEMO</router-link>
    </div>
    <div>
    <ul class="nav navbar-nav">
      <li class="active"><router-link to="oj_test">首页</router-link></li>
      <li class="dropdown">
      <router-link to="#" class="dropdown-toggle" data-toggle="dropdown">题目<b class="caret"></b></router-link>
		<ul class="dropdown-menu">
          <li><router-link to="Timu">我的题目</router-link></li>
          <li><router-link to="Writetimu">编写题目</router-link></li>
       </ul>
	</li>
    <li><router-link to="practice">训练</router-link></li>
    <li><router-link to="timu">作业</router-link></li>
    </ul>	
    </div>
    <user-nav />
    </div>
  </nav>
</template>

<script>
import UserNav from './UserNav.vue'
export default {
  components: { UserNav },

}
</script>

<style>

</style>