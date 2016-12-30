<template>
  <OCForm>
     <OCFormItem label="姓名">
        <OCInput v-model ="formData.name" />
     </OCFormItem>
     <OCFormItem label="地址">
        <OCInput v-model ="formData.addr" />
     </OCFormItem>
  </OCForm>
</template>
<script>
  import OCForm from 'components/edit/form.vue' ;
  import OCFormItem from 'components/edit/form-item.vue' ;
  import OCInput from 'components/edit/input.vue' ;
  export default {
    props:{
      formData:Object
    },
    components:{
      OCForm,
      OCFormItem,
      OCInput
    }
  } ;
</script>
<style>
  .edit-form {
    margin-top: 20px;
  }
</style>
