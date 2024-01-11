<template >
   <div>
    <ul class="cards">
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--fence"></div>
    </div>
  </li>
    </ul>
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