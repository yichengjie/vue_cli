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



  //查询数据库
  function queryDBApi (queryParam) {
    //这一部分是通过数据库查询过来的数据
    let recordList =[
       {id:'001',name:'ocName01',classes:'101',dept:'js'},
       {id:'001',name:'ocName02',classes:'101',dept:'js'},
       {id:'001',name:'ocName03',classes:'101',dept:'js'}
    ] ;
    let toPage = queryParam.curPage ;
    let pageSize = queryParam.pageSize ;
    let recordCount = 135 ;
    let pageBeanDB = util.assamblePageBean(toPage, pageSize, recordCount, recordList) ;
    //将数据库返回来的PageBean对象解析
    let pagebar = {
      "curPage":pageBeanDB.curPage,
      "pageSize":pageBeanDB.pageSize,
      "pgArr":pageBeanDB.pageNumList,
      "pageCount":pageBeanDB.pageCount,
      "recordCount":pageBeanDB.recordCount,
      "isQueryDB":true
    } ;
    let retData = {list:pageBeanDB.recordList,pagebar} ;
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve(retData) ;
      },300) ;
    }) ;
  }
</script>
<style>
  .main-content{
    margin: 0px;
  }
</style>
