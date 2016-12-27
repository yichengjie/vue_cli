<template>
   <div class="query-container">
      <form class="form-horizontal" role="form">
        <div class="row query-row">
            <QueryCondationItem label="系别" :oneElemColNum="oneElemColNum"  />
            <QueryCondationItem label="班级" :oneElemColNum="oneElemColNum" inputType="select" :options ="options.classes"/>
            <QueryCondationItem label="姓名" :oneElemColNum="oneElemColNum" inputType="text" />
        </div>
        <div class="row query-row">
          <div class="col-sm-12">
             <div class="pull-right" style="margin-right: 15px;">
              <button class="btn btn-sm">查询</button>
             </div>
          </div>
        </div>
    </form>
   </div>
</template>
<script>
  import QueryCondationItem from 'components/QueryCondationItem.vue' ;
  export default {
    props:{
      lineElemCount:{//一行放几个元素
        type:Number,
        default:3
      }
    },
    computed:{
      oneElemColNum () {
        return 12 / this.lineElemCount ;
      }
    },
    components:{
      QueryCondationItem
    },
    data() {
      return {
        options:{
          classes:[{name:'101班',value:'101'},{name:'102班',value:'102'},{name:'103班',value:'103'}]
        }
      } ;
    }
  };
</script>
<style>
.query-container{
  background-color: #F8F8F8;
  padding: 10px;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
}
.query-row:not(:first-child){
  margin-top: 5px;
}
/**查询条件相关 start*/
.query_section{
    padding: 5px 0;
    width: 100%;
    background-color: #00b3ee;
    background:#fff url(../images/tui_div4_bg.png) repeat-x left bottom;
    border-bottom:1px solid #9ea7ab;
    box-shadow:0 0 2px 0;
    font-weight: 100;
    box-sizing: border-box;
}
.query_title{
    margin: 0 10px;
    color: #017ebc;
}
.query_row{
    display: block;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    overflow: hidden;
    box-sizing: border-box;
}
.query_row:after{
    clear: both;
    display: table;
    content: '';
}
/*.query_row:not(:last-child){
    margin-bottom: 3px;
}*/
.query_row input[type=text],.query_row select{
    margin-top: 0px;
    vertical-align: middle;
    width: 120px;
}
.query_row input[type=checkbox]{
    margin-top: 0px;
    vertical-align: middle;
}
.query_row select{
    padding-top: 1px;
}

.query_row label{
    margin: 0 5px;
    font-weight: 100;
}
.query_row .btn{
    vertical-align: middle;
    padding-top: 3px;
    padding-bottom: 3px;
    height: 26px;
    margin-bottom: 2px;
}
/**查询条件相关 end*/
</style>
