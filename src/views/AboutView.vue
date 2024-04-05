<template>
 <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
 <div class="features">
            <div class="container">
                <div class="feat">
                    <h3>Values</h3>
                    <p>I value kindness and compassion, seeing the worth in everyone and treating them with empathy and respect. I believe small acts of kindness can unite us and create a more caring world.

Resilience is important to me too. Life is tough, but how we respond to challenges shapes us. I believe in our ability to overcome obstacles, find meaning in tough times, and grow stronger from them.
</p>
                </div>
                <div class="feat">
                    <h3>Goals</h3>
                    <p>My goals light my path toward growth and fulfillment. With clarity and determination, I seek balance in personal and professional pursuits. Each goal is a step forward, whether in career advancement, building relationships, lifelong learning, or self-care.</p>
                </div>
                <div class="feat">
                    <h3>Hobbies</h3>
                    <p>Reading and relaxing are essential parts of my routine as a coding student. They help me approach my studies with fresh focus and energy. These hobbies give me a mental break while also stimulating my intellect, ensuring I'm ready to tackle coding challenges with clarity and determination. </p>
                </div>
            </div>
        </div>
        <!-- End of Features -->
        
        
        <!-- Start About Me Section -->
        <div class="about-me">
            <div class="container">
                <div class="image">
                    <img src="https://i.ibb.co/KVHrkpV/4198069b-3d0e-4968-b215-db60b34fbec7-1.jpg" alt="Picture of me">
                </div>
                <div class="info">
                    <h2>About Me</h2>
                    <p>I graduated from QueensPark High in 2022, where I laid the groundwork for my academic journey. It was here that I developed a strong foundation in various subjects.My passion for coding blossomed at Life Choices, where I had the opportunity to hone my skills and explore the world of programming.I believe in the power of collaboration and continuous learning. Every project is an opportunity to grow, adapt, and refine my craft. I approach each task with creativity, attention to detail, and a relentless pursuit of excellence.</p>
                    
                    <!-- <p>Failure will never overtake me if my determination to succeed is strong enough. "og mandino"</p> -->
                
                    <div class="creative">
                        <div class="content">
                            <div class="icon">
                                <img src="https://s8.postimg.cc/5bjb1ik2d/icon_4.png" alt="Video Editing Image">
                            </div>
                            <div class="text">
                                <h3>Web development</h3>
                                <p>I love web development because it allows me to bring ideas to life in a dynamic and interactive way. </p>
                            </div> 
                        </div>
                        <div class="content">
                            <div class="icon">
                                <img src="https://s8.postimg.cc/vl4djxvlh/icon_1.png" alt="Computer Image">
                            </div>
                            <!-- <div class="text">
                                <h3>Computer Engineering</h3>
                                <p>I love my crazy lifestyle, and I love my hard discipline. I love my freedom of speech.</p>
                            </div> 
                        </div>
                        <div class="content">
                            <div class="icon">
                                <img src="https://s8.postimg.cc/wnek2m45x/icon_3.png" alt="Brush Image">
                            </div> -->
                            <div class="text">
                                <h3>Graphic Design</h3>
                                <p>
Graphic design is my passion because it combines creativity with functionality to communicate ideas visually.</p>
                            </div> 
                        </div>
                        <!-- <div class="content">
                            <div class="icon">
                                <img src="https://s8.postimg.cc/z4qb9xdsl/icon_2.png" alt="Group Image">
                            </div>
                            <div class="text">
                                <h3>Online Marketing</h3>
                                <p>Failure will never overtake me if my determination to succeed is ..</p>
                            </div> 
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
  
   
 </template>


<style scoped>
.features {
    overflow: hidden;
    padding-top: 40px;
    padding-bottom: 40px;
}

.features .feat {
    float: left;
    width: 33.3333%;
    height: 200px;
    
   
}

.features .feat h3  {
    text-transform: uppercase;
    color: #404950; /* لون الخطوط اللرئيسية اللي بدون خلفية */
    margin-top: 0;
    margin-bottom: 10px;
}

.features .feat p {
    line-height: 1.65;
    color: #54666F; /* لون الكلام اللي ملوش خلفية */
    text-align: justify;
    margin: 0 40px 0 0;
}
/** End Style for Features **/


/** Start of About Me Section **/
.about-me {
    background-color: #484343  /*beige*/;
    overflow: hidden;
    max-height: 410px;
    
}

.about-me .image {
    float: left;
    width: 35%;
}

.about-me .image img {width: 100%}

.about-me .info {
    float: left;
    width: 65%;   
}

.about-me .info h2 {
    overflow: hidden;
    padding-left: 15px;
    color:#FFE4C4;
    margin: 30px 0 15px 30px;
        
}

.about-me .info > p {
    padding-left: 15px;
    margin: 10px 0 0 30px;
    text-align: justify;
    
}

.about-me .info p {
    line-height: 1.65;
    color:aliceblue;
    margin-top: 5px;
}

.about-me .info .creative {
    overflow: hidden;
    margin-left: 30px; 
    color:aliceblue;
    overflow: hidden;
}

.about-me .info .creative .content .icon {float: left; width: 10%; margin-top: 3.25%;}

.about-me .info .creative .content .icon img {max-width: 100%}

.about-me .info .creative .content .text {float: left;width: 82%;padding-left: 3%;}

.about-me .info .creative .content .text h3{color: #FFE4C4; margin-bottom: 0;}

.about-me .info .creative .text p {margin-bottom:0; margin-top: 2px;}

.about-me .info .creative > div {float: left;width: 50%;}

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