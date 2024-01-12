<!-- <template >
   <div>
   <div v-for="project in project" :key="project.id" class="card" style="width :18rem">
    <img :src= "project.url" class="card-img-top" :alt="{{ Project.Name }}"/>
    <div class="body">
      <h5 class="card-title"></h5>{{project}}</h5>
    </div> -->
    
     <!-- <p>{{ project.ProjectName }}</p> -->
   <!-- </div>
   
   </div>    -->
   <!-- <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ project.ProjectName }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="{{ project.url }}" class="btn btn-primary">Go somewhere</a>
  </div> -->
<!-- </div>  -->
<!-- </template>

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
   
</style> -->
<template>
    <div class="Projects">
        <div v-for="Project in Project" :key="Project.id" class="card" style="width: 27rem;">
            <img :src=" Project.url" class="card-img-top" :alt="Project.ProjectName">
            <div class="card-body">
              <h5 class="card-title">{{Project.ProjectName}}</h5>
              <a :href="Project.github" target="_blank"  class="btn btn-primary">GitHub</a>
              <a :href="Project.netlify" target="_blank" class="btn btn-primary">Vercel</a>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  computed: {
    Project() {
      return this.$store.state.Project
    },
  },
  mounted() {
    this.$store.dispatch('fetchProject');
  },
};
</script>
<style scoped>
.Projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.card {
  width: 27rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card-body {
  padding: 1rem;
}
.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.btn-primary {
  background-color: rgb(178, 173, 173);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin: 7px;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  box-shadow: 4px 8px 0px rgb(110, 109, 109) ;
}
.btn-primary:hover {
  background-color: #F3DEBA;
}
</style>