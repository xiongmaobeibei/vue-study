<template>
  <div class="alist">
    <table id="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创建时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in lists" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.ctime}}</td>
        <td><a href="#">删除</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    data(){
      lists:[
        {id:1,name:'奔驰',ctime:new Date},
        {id:2,name:'宝马',ctime:new Date}
      ];
      return lists;
    }
      
  }
  
</script>
<style>
 #tb{
  width: 800px;
  border-collapse: collapse;
  margin: 20px auto;
 }
  
 #tb th{
  background-color: #0094ff;
  color: white;
  font-size: 16px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
 }

 #tb td{
  background-color: white;
  color: black;
  font-size: 16px;
  padding: 5px;
  text-align: center;
  border: 1px solid black;
 }
  
</style>


