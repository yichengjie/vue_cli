<template>
  <div class="main-content">
      <QueryCondation :queryDB="queryDB" />
      <QueryList :pageBean="pageBean" :queryDB = "queryDB"/>
  </div>
</template>
<script>
  import QueryCondation from './QueryCondation.vue' ;
  import QueryList from './QueryList.vue' ;
  import util from 'common/util.js' ;
  import queryDBApi from './api.js' ;
  let defaultPageSize = 10 ;
  export default {
    components:{
       QueryCondation,
       QueryList
    },
    methods:{
      queryDB(formData){/**当点击查询按钮后，查询数据库操作*/
        console.info('准备去查询数据库....' , JSON.stringify(formData)) ;
        util.showLoading() ;
        //清空页面上一次查询的数据
        this.pageBean.list.splice(0,this.pageBean.list.length) ;
        let queryParam = {...this.pageBean.pagebar} ;
        let promise = queryDBApi(queryParam) ;
        promise.then((retData) => {
          util.hideLoading() ;
          this.pageBean.list = retData.list ; //将更新数据
          Object.assign(this.pageBean.pagebar,retData.pagebar) ;
        }) ;
      }
    },
    data () {
      return {
        pageBean:{
          list:[],
          pagebar:{
            "curPage":1,
            "pageSize":defaultPageSize,
            "pgArr":[],
            "pageCount":0,
            "recordCount":0,
            "isQueryDB":false/*是否从数据中查询的数据，有可能是页面上的排序获得*/
          }
        }
      } ;
    }
  };
</script>
<style>
  .main-content{
    margin: 0px;
  }
</style>
