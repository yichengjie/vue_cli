<template>
  <div class="main-content">
      <QueryCondation :num ="3"/>
      <QueryList />
  </div>
</template>
<script>
  import QueryCondation from './QueryCondation.vue' ;
  import QueryList from './QueryList.vue' ;
  export default {
    components:{
       QueryCondation,
       QueryList
    }
  };
</script>
<style>
  .main-content{
    margin: 0px;
  }
</style>
