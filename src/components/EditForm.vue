<template>
    <form>
        <div>
            <input type="text" v-model ="name">
        </div>
    </form>
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