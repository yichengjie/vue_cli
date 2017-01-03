<template>
  <OCForm>
     <OCFormItem label="姓名">
        <OCInput v-model ="formData.name" />
     </OCFormItem>
     <OCFormItem label="地址">
        <OCInput v-model ="formData.addr" />
     </OCFormItem>
     <OCFormItem label="星期">
        <OCCheckbox :options ="options.dayofweek" v-model ="formData.dayofweek"/>
     </OCFormItem>
  </OCForm>
</template>
<script>
  import OCForm from 'components/edit/form.vue' ;
  import OCFormItem from 'components/edit/form-item.vue' ;
  import OCInput from 'components/edit/input.vue' ;
  import OCCheckbox from 'components/edit/checkbox.vue' ;
  export default {
    props:{
      formData:Object,
      options:Object
    },
    components:{
      OCForm,
      OCFormItem,
      OCInput,
      OCCheckbox
    }
  } ;
</script>
<style>
  .edit-form {
    margin-top: 20px;
  }
</style>
