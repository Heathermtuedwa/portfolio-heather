<template>
   <div v-for="testmonial in Testimonials" :key="testmonial.id">
     <p>{{ testmonial.name }}</p>
   </div>
</template>
<script>
export default {
    computed:{
      Testimonials(){
        return this.$store.state.testimonials
      }
    },
    mounted(){
      this.$store.dispatch('fetchTestimonials')
    }
  }
</script>
<style >
    
</style>