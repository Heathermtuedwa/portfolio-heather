<template>
<section id="portfolio-section">
  <div class="container-fluid text-white pb-5">
    <div class="row text-center text-uppercase pt-5">
      <hr class="col hr-white">
        <h1 class="col-4">Projects</h1> 
      <hr class="col hr-white">         
    </div>   
  <div class="container-fluid mb-5">
    <div class="row justify-content-center my-5">    
       <div class="card text-center mx-3 mb-5">
         <div class="content-overlay card-container">       
          <p class="content-text">CapStone</p>          
          <a href="https://github.com/Heathermtuedwa/backend_capstone.git" target="_blank" class="btn btn-light content-text">GitHub</a>  
          <a href="capestone-550f9.firebaseapp.com" target="_blank" class="btn btn-light content-text">FireBase</a>         
         </div>        
         <img class="card-img-top card-image" src="https://i.ibb.co/zhPZ0dP/5bdbfa5d-2e97-4f84-9a09-bcde5ef9a22c.webp" alt="Card image cap">       
       </div> 
         <div class="card text-center mx-3 mb-5">
         <div class="content-overlay card-container text-white">         
           <p class="content-text px-2">Netflix </p>
           <a href="https://github.com/Heathermtuedwa/Netflix-project.git" target="_blank" class="btn btn-light content-text">Github</a>
           <a href="https://netflix-project-roan.vercel.app/" target="_blank" class="btn btn-light content-text">Vercel</a>
         </div>       
         <img class="card-img-top card-image" src="
         https://iili.io/JYJfWkF.jpg" alt="Card image cap">       
       </div>         
   <div class="card text-center mx-3 mb-5">
         <div class="content-overlay card-container text-white">
           <p class="content-text">Age-to-Days</p>
           <a href="https://github.com/Heathermtuedwa/AgeToDays.git" class="btn btn-light content-text">Github</a>
           <a href="https://age-to-days-orcin.vercel.app/" target="_blank" class="btn btn-light content-text">Vercel</a>
         </div>        
         <img class="card-img-top card-image" src="https://iili.io/JYJVKvI.pngue" alt="Card image cap">       
       </div>   
       <div class="card text-center mx-3 mb-5">
         <div class="content-overlay card-container text-white">
           <p class="content-text">To-Do-List</p>
           <a href="https://github.com/Heathermtuedwa/todo---list.git" class="btn btn-light content-text">Github</a>
           <a href="https://todo-list-3s1q.vercel.app/" target="_blank" class="btn btn-light content-text">Vercel</a>
         </div>        
         <img class="card-img-top card-image" src="https://iili.io/JYJGbsf.png" alt="Card image cap">       
       </div>   
       <div class="card text-center mx-3 mb-5">
         <div class="content-overlay card-container text-white">
           <p class="content-text">E-commerce</p>
           <a href="https://github.com/Heathermtuedwa/E-commerce-website.git" class="btn btn-light content-text">Github</a>
           <a href="https://e-commerce-website-beta-sand.vercel.app/" target="_blank" class="btn btn-light content-text">Vercel</a>
         </div>        
         <img class="card-img-top card-image" src="https://iili.io/JYJEiZb.jpg" alt="Card image cap">       
       </div>   
       <div class="card text-center mx-3 mb-5">
         <div class="content-overlay card-container text-white">
           <p class="content-text">interest-amount</p>
           <a href="https://github.com/Heathermtuedwa/interestAmount.git" class="btn btn-light content-text">Github</a>
           <a href="https://interest-amount-one.vercel.app" target="_blank" class="btn btn-light content-text">Vercel</a>
         </div>        
         <img class="card-img-top card-image" src="https://iili.io/JYJXwBa.png" alt="Card image cap">       
       </div>    
    </div>
  </div>
 </div>
  <span id="end-of-portfolio-section" />
</section>
    
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

#portfolio-section {
  background-color: #000; 
  }
.imageSelf {
  height: 200px;
  border-radius: 50%;  
}
.hr-white {
  border-top: 1px solid white;
  position: relative;
  top: 10px;  
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  align-content:space-evenly;
  justify-content: center; 
} 
.card {
  transform: translateY(12px); 
  height: 450px;
  width: 350px;
  border: 0px solid black; 
  border-radius: 5%
}
 .card:hover {
    transform: translateY(0px);      
   }
.card-image {
  height: 450px;
  border-radius: 5%
}
.content-overlay {
  background: rgba(0,0,0,0.7);
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 2em; 
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;  
}
.card:hover .content-overlay{
  opacity: 1;
}
.content-text { 
  display: flex;
  align-content: center;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff; /* Blue background */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn:hover {
  background-color: #0056b3; /* Darker blue background on hover */
}
</style>