<template>
  <div class="main-content">
      <QueryCondation :num ="3"/>
  </div>
</template>
<script>
  import QueryCondation from './QueryCondation.vue' ;
  export default {
    components:{
       QueryCondation
    }
  };
</script>
<style>
  .main-content{
    margin: 0px 5px;
    margin-right: 2px;
  }
</style>
