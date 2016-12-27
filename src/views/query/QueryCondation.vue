<template>
  <div class ="query_section">
    <div class="query_row">
        <span class="query_title">基础信息</span>
        <input id ="releaseStatus01" name ="statusArr" type="checkbox" value ="1"
            /><label for="releaseStatus01">未发布</label>
        <input id ="releaseStatus02" name ="statusArr" type="checkbox" value ="2"
              /><label for="releaseStatus02">已发布</label>
        <input  id ="effectStatus01" name="effStatusArr" type="checkbox" value ="1"
            /><label for="effectStatus01"> 未生效</label>
        <input  id ="effectStatus02" name="effStatusArr" type="checkbox" value ="2"
             /> <label for="effectStatus02">已生效</label>
        <input  id ="effectStatus03" name="effStatusArr" type="checkbox" value ="3"
             /> <label for="effectStatus03">已过期</label>

        <label  class="marginR5 title">SUBCODE</label>
        <input type="text" name="subcode" class="common_input"  style="width:150px;"
            placeholder="多个用/分割" />
        <label  class="marginR5 title">优先级序号</label>
        <input type="text" name ="startSequenceNumber" class="common_input"  style="width:80px;"
             />
        <span class="marginRL2">—</span>
        <input type="text" name ="endSequenceNumber" class="common_input"  style="width:80px;"
             />
        <span class="pull-right marginR15">
            <input  id ="moreInputBtn" type="checkbox"  />
            <label for="moreInputBtn">更多条件</label>
            <button type="button" id="s7QueryBtn"
                    class="btn btn-sm btn-primary" >查询</button>
        </span>
    </div>
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
</style>
