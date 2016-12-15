<template>
    <form>
        <div>
            <input type="text" v-model ="name">
            <button type="button" @click ="handleClick">显示子表</button>
            <br>
            <h2>name :{{name}}</h2>
            <div id ="test">这里是子表信息</div>
        </div>
    </form>
</template>
<script>
    import Vue from 'vue'
    import SubTable196 from './SubTable196.vue'
    const List = Vue.extend(SubTable196)
    // var getSingle = function (fn) {
    //   var result
    //   return function () {
    //     return result || (result = fn.apply(this, arguments))
    //   }
    // }
    var getSingle = function (Fn) {
      var result
      return function () {
        return result || (result = new Fn())
      }
    }
    const instanceTmp = getSingle(List)
    export default{
      data () {
        return {
          name: ''
        }
      },
      methods: {
        handleClick () {
          var obj = {name: 'test123', add: 'henan', dept: 'javascript'}
          var {name, ...other} = obj
          console.info('name : ' + name)
          console.info('other : ', other)
          var c1 = instanceTmp()
          var c2 = instanceTmp()
          console.info('c1 === c2 : ' + (c1 === c2))
          console.info('显隐子表信息!')
          instanceTmp().$mount('#test')// $mount('#app')
          // new List().$mount('#test')//这样会new很多的table196实例出来
        }
      }
    }
</script>
