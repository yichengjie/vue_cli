<template>
  <div class="query-list" v-if="list.length>0">
      <TableLayout :titleObj="titleObj" :list="list" />

  </div>
</template>
<script>
  import TableLayout from 'components/TableLayout.vue' ;
  import QueryListItem from './QueryListItem.vue' ;
  export default {
    props:{
      list:Array
    },
    components:{
      QueryListItem,
      TableLayout
    },
    data () {
      return {
        titleObj:{
          id:'#',
          name:'姓名',
          classes:'班级',
          dept:'系列'
        }
      } ;
    }
  } ;
</script>
<style>
  .query-list{
    border: 1px solid #D9D9D9 ;
    padding: 10px;
    border-radius: 5px;
  }
</style>
