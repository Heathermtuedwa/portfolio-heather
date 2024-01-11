<template >
    <div>
      
    </div>
</template>
<script>
export default {
    computed:{
      testmonial(){
        return this.$store.state.testmonial
      }
    },
    mounted(){
      this.$store.dispatch("fetchTestmonial")
    }
  }
</script>
<style >
    
</style>