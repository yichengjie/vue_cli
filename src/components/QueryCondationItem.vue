<script>
  export default {
    props:{
      id:String,
      oneElemColNum:{
        type:Number,
        default:4
      },
      label:{
        type:String,
        default:' '
      },
      inputType:{
        type:String,
        default:'text'
      },
      options:Array
    },
    render (createElement) {
      //label标签
      let labelElem = createElement('label',{
        attrs:{class:'col-sm-3 control-label'}
      },this.label) ;
      //input具体的html控件
      let inputElem = inputElemObj[this.inputType].call(this,createElement,this.options) ;
      //input外面包的那层div
      let inputContainer = createElement('div',{
        attrs: {class: 'col-sm-9'}
      },[inputElem]) ;
      //返回整个item
      return createElement('div',{
          attrs: {class: 'col-sm-'+this.oneElemColNum}
      },[labelElem,inputContainer]) ;
    }
  } ;


  var inputElemObj = (function (){
    //最普通的input，type=text
    function getTextElem (createElement) {
        let inputElem = null ;
        inputElem = createElement('input',{
          attrs:{type:'text',class:'form-control'}
        }) ;
        return inputElem ;
    }
    //select
    function getSelectElem (createElement,options) {
        let inputElem = null ;
        var arr = [] ;
        for(let item of options){
          let tmp = createElement('option',{
            attrs: {value: item.value}
          },item.name) ;
          arr.push(tmp) ;
        }
        inputElem = createElement('select',{
            attrs:{class:'form-control'}
        },arr) ;
        return inputElem ;
    }
    return {
      text:getTextElem,
      select:getSelectElem
    }
  })();
</script>
