<template >
   <div>
    
   </div>
       
    
</template>

<script>
  export default {
    computed:{
      project(){
        return this.$store.state.project
      }
    },
    mounted(){
      this.$store.dispatch("fetchProject")
    }
  }
</script>
<style scoped>
   
</style>