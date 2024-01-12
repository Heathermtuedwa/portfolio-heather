<template >
       <class class="container">
    <section class="education">
      <div class="timeline">
        <div v-for="res of $store.state.resume " v-bind:key="res.id" class="timeline-item">
          <div class="timeline-content">
            <h2>{{ res.name  }}</h2>
            <p><b>{{ res.description}}</b></p>
            
          </div>
        </div>
      </div>
    </section> 
      </class>
      <section class="experience">
     
    </section> 
    
    
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}
.timeline-item {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 30px;
}
.timeline-content {
  width: 600px;
  margin-left: 40px;
  padding: 20px;
  background-color: #F1F1F1;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.timeline-content h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
}
.timeline-content p {
  color: #555;
  font-size: 16px;
  margin-bottom: 10px;
}
.timeline-item:first-child .timeline-content {
  margin-top: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.timeline-item:last-child .timeline-content {
  margin-bottom: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.education,
.experience,
.skills {
  margin-bottom: 40px;
}
.skills h2 {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}
.containerr {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #F9F9F9; /* New background color */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(33.33% - 20px);
}
.card-img-top {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}
.card-text {
  font-size: 16px;
  font-weight: bold;
}
.card-link {
  display: flex;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: rgb(178, 173, 173);
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px rgb(110, 109, 109);
  margin-top: 20px;
}
.card-link:hover {
  background-color: #F3DEBA;
}
</style>