<template>
  <div class="home">
    <navs />
		<div class="jumbotron">
			<div class="container">
				<h1>欢迎登录</h1>
				<p>想了解更多请看导航栏</p>
				</div>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navs from '../components/Nav.vue'


export default {
  name: 'Home',
  components: {
    Navs
  },
}
</script>

<style scoped>
#app {
  background: none;
}
</style>