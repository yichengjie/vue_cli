<template>
  <div class ="query_section">
    <div class="query_row">
        <span class="query_title">基础信息</span>
        <Checkbox name ="status1" v-model="formData.status1" :options ="options.status1" />

        <label  class="marginR5 title">SUBCODE</label>
        <input type="text" name="subcode" class="common_input"  style="width:150px;" placeholder="多个用/分割" />

        <label  class="marginR5 title">优先级序号</label>
        <input type="text" name ="startSequenceNumber" class="common_input"  style="width:80px;" />
        <span class="marginRL2">—</span>
        <input type="text" name ="endSequenceNumber" class="common_input"  style="width:80px;"/>
        <span class="pull-right marginR15">
            <button type="button" class="btn btn-sm btn-primary" >查询</button>
        </span>
    </div>
  </div>
</template>
<script>
  import QueryCondationItem from 'components/QueryCondationItem.vue' ;
  import Checkbox from 'components/query/checkbox.vue' ;
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
      QueryCondationItem,
      Checkbox
    },
    data() {
      return {
        formData:{
          status1:["1"]
        },
        options:{
          classes:[{name:'101班',value:'101'},{name:'102班',value:'102'},{name:'103班',value:'103'}],
          status1:[{name:'未发布',value:'1'},{name:'已发布',value:"2"}]
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
</style>
