<template>
  <div class="query-list" v-if="list.length>0">
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
    props:{
      list:Array
    },
    components:{
      QueryListItem
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
