<template>
  <link
      href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Playfair+Display&=familyDancing+Script&family=Raleway:wght@400;500&family=Roboto+Slab:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
   <header class="header">
      <div class="logo-box">
        <!-- <img src="https://i.ibb.co/pyxK0Mz/prev2.gif" alt="logo" class="logo" /> -->
      </div>
      <div class="text-box">
        <h1 class="heading-primary">
           <span class="heading-primary-main">Heather Mtuedwa</span>
          <span class="heading-primary-sub">Portfolio</span>
        </h1>
        <!-- <button class="btn">Enter</button> -->
      </div> 
      <div class="socials">
        <div class="facebook">
          <a href="https://facebook.com">
          <img src="img/facebook.png" alt="logo" class="fit" />
          </a>
        </div>

        <div class="twitter">
          <a href="https://www.twitter.com"
            ><img src="img/Twitter.png" alt="logo" class="fit"
          /></a>
        </div>
      </div>
    </header>
</template>

<script>

</script>


<style scoped>
body {
  margin: 0;
  padding: 50px;
  font-family: "Raleway", sans-serif;
}

.header {
  height: 93vh;
  background-image: linear-gradient(#111111be, #fccbcbe7),
    url(https://images.unsplash.com/photo-1614349596894-ddb833522bec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2160&q=80);
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
  position: relative;
}

.logo-box {
  position: absolute;
  top: 10px;
  left: 25px;
}

.logo {
  cursor: pointer;
  height: 60px;
  width: 60px;
  animation: fadeIn ease 7s;
  animation-duration: 15s;
  backface-visibility: hidden;
  transition: 0.3s ease-in-out;
}

.logo:hover {
  height: 80px;
  width: 80px;
}

.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.heading-primary {
  color: #fff;
  text-align: center;

  backface-visibility: hidden;
}

.heading-primary-main {
  font-size: 80px;
  font-family: "Playfair Display", serif;
  display: block;
  letter-spacing: 1px;
  animation-name: moveInTop;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
}

.heading-primary-sub {
  font-size: 20px;
  display: block;
  letter-spacing: 15px;
  animation-name: moveInRight;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
}

.btn {
  border: 1px solid #fff;
  color: #fff;
  background: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 40px;
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 100px;
  transition-delay: 1s;
  transition: color 4s;
  animation: fadeIn ease 10s;
}

.btn:hover {
  color: #838383;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0;
  background: #fff;
  z-index: -1;
  transition: 0.8s ease-in-out;
  top: 0;
}

.btn:hover::before {
  content: "";
  height: 100%;
}

.socials {
  
  height: 100px;
  width: 800px;
  bottom: 400px;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  text-align: center;
  align-items: center;
}

.fit {
  height: 50px;
  width: 50px;
  animation: fadeIn ease 7s;
  transition: 0.5s ease;
}

.twitter {
  cursor: pointer;
  margin: 10px;
  display: inline;
}

.facebook {
  cursor: pointer;
  margin: 10px;
  display: inline;
}

.instagram {
  cursor: pointer;
  margin: 10px;
  display: inline;
}

.fit:hover {
  height: 75px;
  width: 75px;
}

.form {
  width: 50%;
  position: relative;
  height: 50%;
  margin: 100px;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInTop {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes zoomOut {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translateZ(80px);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>

