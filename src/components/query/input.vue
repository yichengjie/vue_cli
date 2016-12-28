<template>
  <span>
    <label  class="marginR5 title">SUBCODE</label>
    <input type="text" name="subcode" class="common_input"  style="width:150px;" placeholder="多个用/分割" />
  </span>
</template>
<script>
  export default {
    props:{
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
    render(createElement) {


      var labelElemArr = [] ;
      for(let item of this.options){
         let labelElem = createElement('label',createElement('input',{
           attrs:{
            type:'text'
           }
         })) ;
      }

      createElement('span',[

      ]) ;
    }

  } ;


</script>
