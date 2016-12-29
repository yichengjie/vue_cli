<template>
  <div class="query-list" v-if="list.length>0">
      <TableLayout :titleArr="titleArr" v-model ="checkboxAll" :list ="list">
          <tr v-for="item in list">
            <td>
              <input type="checkbox"
                  name="checkboxItem"
                  :checked="item.checked"
                  @click="handleClickOper(item,$event)"/>
            </td>
            <td>{{item.name}}</td>
            <td>{{item.classes}}</td>
            <td>{{item.dept}}</td>
          </tr>
      </TableLayout>
  </div>
</template>
<script>
  import TableLayout from 'components/TableLayout.vue' ;
  export default {
    props:{
      list:Array
    },
    components:{
      TableLayout
    },
    data () {
      return {
        titleArr:["姓名","班级","系列"],
        checkboxAll:false
      } ;
    },
    methods:{
      handleClickOper(item,event){
        let flag = event.target.checked ;
        item.checked = flag ;
        //查询没有选中的index
        let index = this.list.findIndex(item => item.checked !== true ) ;
        this.checkboxAll = (index === -1) ;//如果为-1不存在没有选中的
      }
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
