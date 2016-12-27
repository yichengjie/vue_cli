<template>
  <div class="query-list">
      <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <QueryListItem v-for ="item in list" :item="item"/>
          </tbody>
    </table>
  </div>
</template>
<script>
  import QueryListItem from './QueryListItem.vue' ;
  export default {
    components:{
      QueryListItem
    },
    data () {
      return {
        list:[
          {id:'001',name:'ocName01',classes:'101',dept:'js'},
          {id:'001',name:'ocName02',classes:'101',dept:'js'},
          {id:'001',name:'ocName03',classes:'101',dept:'js'}]
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
