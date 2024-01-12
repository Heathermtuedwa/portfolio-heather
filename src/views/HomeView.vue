<template>
  <div class="home">
    <div class="container">
    <div class="menu">
    <div class="menu-logo">
      <div class="avatar"></div>
      <div class="discription">
        
        <small class="d_small">
         
        </small>
      </div>
    </div>

   
    </div>
  </div>

  <div class="container">
    <section class="hero">
      <div class="hero-info">
        <span class="subtitle">
          Welcome to my Portfolio!
        </span>
      
          <h1 class="title">
            <span>H</span>
            <span>e</span>
            <span>a</span>
            <span>t</span>
            <span>h</span>
            <span>e</span>
            <span>r</span>
            <span> </span>
            <span>M</span>
            <span>t</span>
            <span>u</span>
            <span>e</span>
            <span>d</span>
            <span>w</span>
            <span>a</span>
</h1>
       
        <small class="description">
       Aspiring web-developer
        </small>
        <div class="h-social">
             <a href="" class="social vk-bg"><i class="fa-solid fa-globe"></i>
               </a>
              <a href="" class="social facebook-bg"><i class="fa-brands fa-facebook"></i></a>
            <a href="" class="social instagram-bg">
              <i class="fa-brands fa-instagram"></i>
             </a>
           <a href="" class="social behance-bg">
            <i class="fa-brands fa-github"></i>
            </a>
</div>
        <div class="buttons">
          <a href="contact" class="button button-primary">
            Contact me
          </a>
          <a href="/about" class="button button-o">
          Learn more about me
          </a>
        </div>
      </div>
    </section>
  </div>
  </div>
  
</template>


<style scoped>
.home {
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: white;
  height: 85vh;
}

header {
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5em;
  margin: 0;
}

p {
  color: #b15858;
  margin-bottom: 30px;
}
body{
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  
  
}
img{
  max-width: 100%;
}
.container{
  width: 100%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: -10px;
}
.menu{
  margin-top: 18px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}

.menu-logo{
  display: flex;
  align-items: center;
}

.avatar{
  width: 57px;
  height: 57px;
  background-size: 100%;
  border-radius: 50%;
}

.discription{
  margin-left: 9px;
}

.name{
  display: block;
  font-size: 16px;
  font-weight: 800;
}

.hero{
  padding-top: 80px;
  padding-bottom: 80px;
  background:  linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 10%,rgba(0,0,0,0) 100%), url(https://iili.io/JYJdqYu.jpg) no-repeat right bottom;
  background-size: 50% auto;
  
}

.subtitle{
  font-family: "Open Sans";
  font-size: 32px;
  font-weight: 400;
}

.title {
  overflow: hidden;
  white-space: nowrap;
  font-size: 2em;
  /* display: block; */
}

.title span {
  opacity: 0;
  transform: translateY(1em);
  display: inline-block;
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.title span:nth-child(2) {
  animation-delay: 0.2s;
}

.title span:nth-child(3) {
  animation-delay: 0.4s;
}


.description{
  font-size: 18px;
  color: #6a696b;
}
.h-social{
  margin-top: 30px;
}

.social{
  display: inline-block;
  width: 41px;
  height: 41px;
  margin-right: 10px;
  color: #fff;
  text-align: center;
  line-height: 41px;
}

.vk-bg{
  background-color: #56acef;
}
.facebook-bg{
  background-color: #3a5898;
}
.instagram-bg{
  background-color: #13578a;
}
.behance-bg{
  background-color: #1869ff;
}

.buttons{
  margin-top: 40px;
}
.button{
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  background-color: #2b2a2c;
  border-radius: 50px;
  padding: 20px 34px;
  
}
.button-primary{
  color: #fff;
  margin-right: 17px;
  margin-bottom: 10px;
}
.button-o{
  background-color: #fff;
  color: #6a696b;
  border: 1px solid #6a696b;
  
}

i {
  color: #333333;
}


</style>

<script>
 
</script>