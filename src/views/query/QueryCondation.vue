<template>
   <div class="query-container">
      <form class="form-horizontal" role="form">
        <div class="row">
            <QueryCondationItem label="系别" :oneElemColNum="oneElemColNum"  />
            <QueryCondationItem label="班级" :oneElemColNum="oneElemColNum" inputType="select" :options ="options.classes"/>
            <QueryCondationItem label="姓名" :oneElemColNum="oneElemColNum" inputType="text" />
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
</style>
