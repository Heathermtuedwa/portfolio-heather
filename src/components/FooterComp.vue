<template >
    <footer>
        Footer &copy;
    </footer>
</template>

<style scoped>
   
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: auto;
  
}
/* .footer {
  background-color: #333;
  color: white;
  text-align: bottom;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
 
} */
/* Adjusting body padding to prevent content from hiding under the footer */
body {
  padding-bottom: 60px; /* Adjust this value to match your footer's height */
}
footer p {
  margin: 0;
}
</style>
