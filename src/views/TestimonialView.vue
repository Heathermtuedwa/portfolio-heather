<template>
  <div>
  <div class="flip-card-back"></div>
   <div v-for="testmonial in Testimonials" :key="testmonial.id">
     <p>{{ testmonial.name }}</p>
   </div>
   <div v-for="testmonial in Testimonials" :key="testmonial.description">
     <p>{{ testmonial.description}}</p>
   </div>
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
    .flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; 
}


.flip-card-inner {
  position: relative;
  width: 100%;
  height: 250%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}


.flip-card-front {
  background-color:#4caf50
  color(transparent)
}


.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>