<template>
  <body>
    <div class="Projects">
        <div v-for="Project in Project" :key="Project.id" class="card" style="width: 27rem;">
            <img :src=" Project.url" class="card-img-top" :alt="Project.ProjectName">
            <div class="card-body">
              <h5 class="card-title">{{Project.ProjectName}}</h5>
              <a :href="Project.github" target="_blank"  class="btn btn-primary">GitHub</a>
              <a :href="Project.vercel" target="_blank" class="btn btn-primary">Vercel</a>
            </div>
          </div>
    </div>
  </body>
    
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

body{
  height: 100vh;
}
.Projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
}
.card {
  width: 5rem;
  border: 1px solid #3498db; /* Updated border color */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Updated box-shadow */
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Added transition properties */
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Updated box-shadow on hover */
  transform: scale(1.05); /* Added scale transformation on hover */
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
  background-color: #6f2826; /* Updated background color */
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin: 7px;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Updated transition properties */
  box-shadow: 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #371727; /* Updated background color on hover */
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Updated box-shadow on hover */
  transform: scale(1.1); /* Added scale transformation on hover */
}
</style>