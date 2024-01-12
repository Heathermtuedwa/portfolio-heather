<template>
  <div class = "container">
   <div v-for="testimonial in Testimonials" :key="testimonial.id" class="card" style="width: 18rem;">
  <img :src="testimonial.url" class="card-img-top" :alt="testimonial.testimonialName">
  <div class="card-body">
    <h5 class="card-title">{{ testimonial.name }}</h5>
    <p class="card-text">{{ testimonial.description }}</p>
  </div> 
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
   .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Space around the cards */
}

.card {
  width: 18rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #555;
}
.card-text {
  color: #555; /* Text color for the description */
}


</style>