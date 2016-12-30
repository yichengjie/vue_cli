<template>
  <div class="main-content">
    <QueryCondation :formData="formData"/>
    <EditForm :formData="formData"/>
  </div>
</template>
<script>
  import EditForm from './EditForm.vue' ;
  import QueryCondation from './QueryCondation.vue' ;
  export default {
    components:{
      EditForm,
      QueryCondation
    },
    data() {
      return {
        formData:{
          name:'',
          addr:''
        }
      } ;
    }
  } ;
</script>
<style>
  .main-content{
    margin: 0px;
  }
</style>
