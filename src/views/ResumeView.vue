<template >
    <div>
     <h1>style</h1>
    </div>
</template>
<script>
export default {
    computed:{
      resume(){
        return this.$store.state.resume
      }
    },
    mounted(){
      this.$store.dispatch("fetchResume")
    }
  }

</script>
<style >
    
</style>