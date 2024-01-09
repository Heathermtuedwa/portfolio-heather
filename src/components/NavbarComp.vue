<template >
    <nav>
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/project">Project</router-link> 
        <router-link to="/resume">Resume</router-link> 
        <router-link to="/testimonial">Testimonial</router-link>
        <router-link to="/contact">Contact</router-link> 
  </nav>
</template>
<script>
export default {
    
}
</script>
<style >
    nav {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #34495e;
}

nav {
  background-color: #6b7a84;
  padding: 15px;
}

nav a {
  font-weight: normal;
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #304452;
}

nav a.router-link-exact-active {
  background-color: #575464;
  color: #fff;
}
</style>