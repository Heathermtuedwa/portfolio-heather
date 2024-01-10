<template>
 <div  class="container">
  <div class="image">
    <img src="https://drive.google.com/uc?id=1pT91zGSoc8Gkws4qPrX-rQRr4iOtoY12" alt="About me">
  </div>
  <div class="content">
    <h2 class="h-animated">About Me</h2>
    <p class="animated">
      "Hello! I'm Heather Mtuedwa, a passionate individual with a keen interest in [mention your interests or field].
       With a background in [mention your educational or professional background], I am dedicated to [mention your goals or mission].
        In my free time, you can find me [mention any hobbies or activities you enjoy]. 
        I believe in [mention your values or principles], and I am always excited to [mention something you are enthusiastic about or working on].
         Let's connect and explore the world together!
    </p>
    <p class="animated">
      "Passionate individual with a love for [interest]. Dedicated to [goal].
       Enthusiastic, creative, and ready for new challenges."
    </p>
  </div>
</div>
 </template>



<style scoped>


body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  max-width: 800px;
  margin: 50px auto;
  opacity: 0; 
  animation: fadeIn 1s ease forwards; 
}

.image {
  flex: 1;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: auto;
  display: block;
}

.content {
  flex: 1;
  padding: 20px;
}

h2 {
  line-height: 1.6;
  color: #555;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

p{
  line-height: 1.6;
  color: #555;
  font-family: Georgia, 'Times New Roman', Times, serif;
}


@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.h-animated {
  position: relative;
  animation: slideIn 1s ease forwards;
}


@keyframes slideIn {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


.animated {
  opacity: 0;
  animation: fadeInText 1s ease forwards;
}


@keyframes fadeInText {
  to {
    opacity: 1;
  }
}
</style>