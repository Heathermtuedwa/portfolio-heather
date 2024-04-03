<template >
  <div class="skills-section">
    <div class="skills-header">
     <h1>Skills</h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png"     alt="" class="skills-icons">
        </div>
         <h3>HTML</h3>
        </div>
        <!-- <P> Lorem  Lorem  Lorem  </P> -->
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" class="skills-icons">
        </div>
        <h3>CSS</h3>
        </div>
        <!-- <P> Lorem  Lorem  Lorem  </P>    -->
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://i.ibb.co/jRTFrpr/java-script.png" alt="" class="skills-icons">
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
        <!-- <P> Lorem  Lorem  Lorem  </P> -->
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" class="skills-icons">
        </div>
        <h3>NODE.JS</h3>
        </div>
        <!-- <P> Lorem  Lorem  Lorem  </P> -->
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://i.ibb.co/hMy6V8K/mysql.png" alt="" class="skills-icons">
        </div>
        <h3>MySQL</h3>
        </div>
        <!-- <P> Lorem  Lorem  Lorem  </P> -->
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://i.ibb.co/pzdwhkv/document.png" alt="" class="skills-icons">
        </div>
        <h3>Vue.Js</h3>
        </div>
        <!-- <P> Lorem  Lorem  Lorem  </P> -->
       </div>
       
       
       </div>
    
     </div>
   
   
    
</template>

<script>
export default {
    computed:{
      resume(){
        return this.$store.state.resume
      },
      skills(){
        return this.$store.skills
      }

    },
    mounted(){
      this.$store.dispatch("fetchResume")
    },
    methods: {
      getSkills(){
        this.$store.dispatch("fetchSkills")
      }
    }

  }

</script>

<style scoped>
*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: Arial, sans-serif;
background-color: #484343;


}

body{
background: #ccc;
/* height: 100vh; */
}

.skills-section{
padding-top: 20px;
}

.skills-header{
text-align: center;
color: #fff;
padding: 1rem;
position: relative;
}

.skills-header:after{
content: '';
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
width: 100px;
height: 4px;
background-color: #2ecc71;
border-radius: 2px;
}

.skills-container{
display: grid;
grid-tempLate-columns: repeat(5, 1fr);
justify-content:center;
align-items:center;
text-align: center;
grid-gap:1rem;
padding: 1rem 80px;
font-size: 1.2rem;
/* height: 100vh; */
}
.skills-box{
padding: 1rem;
color: #000;
cursor:pointer;
/* height: 100vh; */
}
/* .skills-box:hover > .skills-title: after
.skills-box:hover > .skills-title: before{
width: 30px;
} */
.skills-box:hover .skills-img{
transform: translateX(-20px);
}

.skills-title{
display:flex;
flex-direction: column;
align-items:center;
padding: 0.5rem;
margin-bottom: 0.5rem;
position: relative;
}

.skills-title:after{
content: '';
position:absolute;
bottom: 0;
right: 50%;
width:20px;
height:4px;
border-radius: 2px 0 0 2px;
background-color: #2ecc71;
transition: .5s;
}

.skills-title:before{
content: '';
position:absolute;
bottom: 0;
left: 50%;
width:100px;
height:4px;
border-radius: 0 2px 2px 0;
background-color: #2ecc71;
}

.skills-icons{
width:50px;
z-index:2;
}

.skills-img{
width:90px;
height:90px;
position: relative;
border-radius: 45px;
background-color: #fff;
display:flex;
justify-content:center;
align-items:center;
transition: .5s;
}

.skills-img:after{
content: '';
position:absolute;
top:0;
left: 0;
width:50%;
height:90px;
background: rgba(100, 100, 100, 0.5);
border-radius: 45px 0 0 45px;
}
.skills-title h3{
color: #333;
margin-top: 0.5rem;
}
@media screen and (max-width:990px){
 .skills-container{
 grid-tempLate-columns: repeat(2, 1fr);
 padding: 2rem 50px;
 }
}

@media screen and (max-width:650px){
 .skills-container{
 grid-tempLate-columns:2fr;
 padding: 2rem 50px;
 }
}

.skills-section{
  background-color: #484343 ;
  height:200vh;
}



</style>