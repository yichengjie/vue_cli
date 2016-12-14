<template>
    <div id ="test">
        <h2>hello i am is table 196</h2>
        <input type="text" v-model ="name">
        <br>
        <h3>{{name}}</h3>
    </div>
</template>
<script>
    export default{
      data () {
        return {
          name: ''
        }
      }
    }
</script>