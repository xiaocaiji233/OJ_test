<template>
<div>
<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
<div class="navbar-header">
  <router-link class="navbar-brand" to="#">OJ DEMO</router-link>
</div>
<div>
<ul class="nav navbar-nav">
<li class="active"><a to="oj_test">首页</a></li>
<li class="dropdown">
  <router-link to="#" class="dropdown-toggle" data-toggle="dropdown">题目<b class="caret"></b></router-link>
<ul class="dropdown-menu">
  <li><router-link to="Writetimu">我的题目</router-link></li>
  <li><router-link to="Timu">全部题目</router-link></li>
</ul>
</li>
</ul>
<ul class="nav navbar-nav navbar-right">
<li><router-link to="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user"></span> 信息</router-link></li>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
<h4 class="modal-title" id="myModalLabel">个人信息</h4>
</div>
<div class="modal-body">
<table class="table">
<tbody>
<tr>
<td>权限</td>
<td>
<input type="text" class="form-control">
</td>
</tr>
<tr>
<td>名字</td>
<td>
<input  type="text" class="form-control">
</td>
</tr>
<tr>
<td>学院</td>
<td>
<input type="text" class="form-control">
</td>
</tr>
<tr>
<td>学号</td>
<td>
<input type="text" class="form-control">
</td>
</tr>
</tbody>
</table>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
<button id=" changes" type="button" class="btn btn-primary">提交更改</button>
</div>
</div><!-- /.modal-content -->
</div><!-- /.modal -->
</div>
<li><router-link to="./"><span class="glyphicon glyphicon-log-in"></span> 退出</router-link></li>
</ul>
</div>
</div>
</nav>
</div>
</template>

<script>
export default {
 name: 'Userinfo'
}
</script>

<style>

</style>