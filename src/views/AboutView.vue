<template>
 <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <div class="features">
      <div class="container">
        <div class="feat fl-float ">
          <h2>Values</h2>
          <p>I value kindness and compassion, seeing the worth in everyone and treating them with empathy and respect. I believe small acts of kindness can unite us and create a more caring world.

Resilience is important to me too. Life is tough, but how we respond to challenges shapes us. I believe in our ability to overcome obstacles, find meaning in tough times, and grow stronger from them.</p>
        </div>
        <div class="feat fl-float ">
          <h2>Goals</h2>
          <p>My goals light my path toward growth and fulfillment. With clarity and determination, I seek balance in personal and professional pursuits. Each goal is a step forward, whether in career advancement, building relationships, lifelong learning, or self-care. With resilience and passion, I embrace challenges, celebrating every milestone on my journey toward the life I envision</p>
        </div>
        <div class="feat fl-float ">
          <h2>Hobbies</h2>
          <p>
Reading and relaxing are essential parts of my routine as a coding student. They help me approach my studies with fresh focus and energy. These hobbies give me a mental break while also stimulating my intellect, ensuring I'm ready to tackle coding challenges with clarity and determination.</p>
        </div>
      </div>
    </div>
    <div class="about-me">
      <div class="container">
        <div class='image fl-float'>
          <img src="https://i.ibb.co/KVHrkpV/4198069b-3d0e-4968-b215-db60b34fbec7-1.jpg" alt="Test"/>
        </div>
        <div class="info fl-float">
          <h2>About Me</h2>
          <p>Hello! I'm Heather Mtuedwa, and I'm all about curiosity and growth.Born and raised in Cape Town, I've always had a hunger for learning and exploring new horizons.

After graduating from Queens Park High School in 2022, I set out on a journey of self-discovery and personal development. Along the way, I stumbled upon the fascinating world of coding. The thrill of unraveling the complexities of programming languages and tackling coding challenges quickly became a major passion of mine. It's like solving puzzles that not only challenge my mind but also fuel my creativity.

But life isn't just about coding! I believe in finding a balance between mental stimulation and relaxation. When I'm not immersed in lines of code, you can find me curled up with a good book, losing myself in captivating stories and expanding my imagination. Or perhaps you'll catch me enjoying moments of tranquility, whether it's through a leisurely walk in nature or a cozy afternoon spent unwinding.</p>
          <p> </p>
          <div class="hobbies">
		  <div class="content fl-float">
     <!--Start Icon Div-->
		  <div class="icon fl-float">
		  <i class="fa fa-home fa-2x"></i>	
    	  </div>
        <!--End Icon Div-->
        <!--Start Text-->
            <div class="text fl-float">
              <h3>Web Design</h3>
              <p>
I enjoy Web design . I blend coding skills with design principles to create beautiful, user-friendly websites. Whether it's choosing colors or crafting layouts, I enjoy every aspect of the process.</p>
            </div>
			</div>
        <!--End Text-->
		<div class="content fl-float">
             <!--Start Icon Div-->
		  
			</div>
      
		<div class="content fl-float">
                     
  </div>
          </div>
        </div>
      </div>
    </div>
    
 </template>


<style scoped>
.features{
  overflow:hidden;
  padding-top:30px;
  padding-bottom:40px;
}
.features .feat{width:32%;}

.features .feat p{padding:0 20px 0 0}





.about-me{background-color:#8e8888;overflow:hidden;}

.about-me .image{width:40%}

.about-me .image img{width:100%;}

.about-me .info{width:60%;padding:15px 0 0 25px}

.about-me .info p:last-of-type{margin-top:25px;}

.about-me .info .hobbies{overflow:hidden;}

.about-me .info .hobbies .content{
	width:50%;
  min-height:90px;
  overflow:hidden;
}
.about-me .info .hobbies .content .icon{width:10%;margin-right:5%;}

.about-me .info .hobbies .content .icon i{max-width:100%;margin:30px 0px 0px 5px;color:#2dcc70;}

.about-me .info .hobbies .content .text{width:85%;padding:10px;}

.about-me .info .hobbies .content .text p{margin-top:0;}

.about-me .info .hobbies .content .text h3{margin-bottom:5px}

.features {
  opacity: 0; /* Initially hide the features */
  animation: slide-in 0.5s ease forwards; /* Apply slide-in animation */
}

@keyframes slide-in {
  from {
    opacity: 0; /* Start with opacity 0 */
    transform: translateY(50px); /* Start position */
  }
  to {
    opacity: 1; /* End with opacity 1 */
    transform: translateY(0); /* End position */
  }
}
.h2{
  font-family:'Times New Roman', Times, serif;
}


</style>