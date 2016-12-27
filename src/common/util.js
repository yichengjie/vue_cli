var util = {};
util.getJspPageParam=function(){
  var carrCode = "" ;
  var contextPath = "" ;
  var action = "" ;
  var id = "" ;
  return {carrCode,contextPath,action,id} ;
}
//这种导出只能使用es6的import才能导入
export default util ;
//下的方式既可以使用require导出也可以使用es6的import导入
//module.exports = util ;
