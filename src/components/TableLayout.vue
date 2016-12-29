<script>
export default {
  props:{
    titleObj:Object,
    list:Array
  },
  render(h) {
    let thead = h('thead', [h('tr',getThsByTr(this.titleObj,h))]) ;
    let tbody = h('tbody',getTrsByList(this.titleObj,this.list,h)) ;
    let table = h('table',{
      attrs:{
        class:'table table-bordered'
      }
    },[thead,tbody]) ;
    return table ;
  }
} ;
//遍历表头中的每一列
function getThsByTr (titleObj,h) {
    let keys = Object.keys(titleObj) ;
    return keys.map(key =>{
      return h('th',titleObj[key]) ;
    }) ;
}
//遍历tr中的每一列
function getTdsByTr (keys,item,h){
  return keys.map(key => {
    return h('td',item[key]) ;
  }) ;
}
//遍历表格中的每一行
function getTrsByList (titleObj,list,h) {
  let keys = Object.keys(titleObj) ;
  return list.map(item => {
      return h('tr',getTdsByTr(keys,item,h)) ;
  }) ;
}
</script>
