<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
      <ul class="nav navbar-nav d--flex flex-column nav nav-tabs">
          <li><router-link to="Timu">题目列表</router-link></li>
          <li><router-link to="">提交列表</router-link></li>
          <li><router-link to="/Userinfo">返回上级</router-link></li>
          <li><router-link to="">...</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
   name: 'TimuNav'
}
</script>

<style>

</style>