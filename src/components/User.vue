<template>
    <div>User {{ $route.params.id }}</div>
</template>
<script>
  export default {
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.info('to : ', to)
        console.info('from : ', from)
      }
    }
  }
</script>