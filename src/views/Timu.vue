<template>
<div>
  <div>
    <timu-nav/>
   </div>
   <div>
     <table class="table table-striped">
       <thead>
         <tr class="text-center">
         <th>编号</th>
         <th>标题</th>
         <th>分数</th>
         <th>通过数</th>
         <th>提交数</th>
         <th>通过率</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>练习1</td>
           <td><router-link to="practice">求m到n的和</router-link></td>
           <td>10</td>
           <td>35096</td>
           <td>162392</td>
           <td><router-link to="tubiao">0.22</router-link></td>
         </tr>
         <tr>
           <td>练习2</td>
           <td><router-link to="practice">求两个数中最大者</router-link></td>
           <td>10</td>
           <td>29308</td>
           <td>69096</td>
           <td><router-link to="tubiao">0.42</router-link></td>
         </tr>
       </tbody>
       <tfoot>
       </tfoot>
     </table>
   </div>
   <div>
   </div>
</div>

</template>

<script>
import TimuNav from '../components/TimuNav.vue'

export default {
  components: { TimuNav },
}
</script> 

<style scoped>
table th {
  text-align: center;
}
</style>