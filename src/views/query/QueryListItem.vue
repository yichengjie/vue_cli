<template>
  <tr>
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.classes}}</td>
    <td>{{item.dept}}</td>
  </tr>
</template>
<script>
  export default {
    props:{
      item:Object
    }
  } ;
</script>
