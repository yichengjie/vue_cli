<template>
  <div class="main-content">
      <QueryCondation :queryDB="queryDB" />
      <QueryList :list="list"/>
  </div>
</template>
<script>
  import QueryCondation from './QueryCondation.vue' ;
  import QueryList from './QueryList.vue' ;
  export default {
    components:{
       QueryCondation,
       QueryList
    },
    methods:{
      queryDB(formData){
        console.info('准备去查询数据库....' , JSON.stringify(formData)) ;
        var dbList = queryDBApi() ;
        //清空页面上一次查询的数据
        this.list.splice(0,this.list.length) ;
        for(let item of dbList){
          this.list.push(item) ;
        }
      }
    },
    data () {
      return {
        list:[]
      } ;
    }
  };

  function queryDBApi () {
    return [
       {id:'001',name:'ocName01',classes:'101',dept:'js'},
       {id:'001',name:'ocName02',classes:'101',dept:'js'},
       {id:'001',name:'ocName03',classes:'101',dept:'js'}
    ] ;
  }


</script>
<style>
  .main-content{
    margin: 0px;
  }
</style>
