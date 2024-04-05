<template >
  <body>
    
    <div class="navbar   navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/testimonial">Testimonial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
 
    
    <nav class="d-md-block d-sm-none">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/project">Project</router-link> 
        <router-link to="/resume">Education/Skills</router-link> 
        <router-link to="/testimonial">Testimonial</router-link>
        <router-link to="/contact">Contact</router-link> 
  </nav>

  
  </body>
</template>
<script>
export default {
    
}
</script>
<style scoped>
nav {
  font-family: Arial, sans-serif; /* Change font */
  background-color: rgb(64, 62, 62); /* Change background color */
  color: #fff; /* Change text color */
  padding: 30px 15px; /* Reduce padding */
  border-bottom: 2px solid #34495e; /* Add border at the bottom */
  text-align: center;
}

/* Link styles with effect */
nav a {
  font-weight: bold; /* Make font bold */
  color: #fff; /* Text color */
  text-decoration: none; /* Remove underline */
  margin: 0 10px; /* Reduce margin */
  padding: 8px 12px; /* Adjust padding */
  border-radius: 5px; /* Increase border radius */
  transition: background-color 0.3s ease; /* Transition effect */
  position: relative; /* Position for pseudo-element */
}

/* Hover effect on links */
/* nav a:hover {
  background-color: #2980b9; /* Change background color on hover */
/* }  */

/* Active link styles */
nav a.router-link-exact-active {
  /* background-color: #1abc9c; Change background color for active link */
  color: #fff; /* Text color for active link */
}

/* Effect */
nav router-link {
  display: inline-block;
  overflow: hidden;
  position: relative;
  padding: 10px;
}

nav router-link:before,
nav router-link:after {
  content: "";
  position: absolute;
  background: #492059;
}

nav router-link:before {
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
}

nav router-link:after {
  width: 2px;
  height: 100%;
  top: 0;
  right: 0;
  transform: translateY(-100%);
}

nav router-link:hover:before,
nav router-link:hover:after {
  transform: translate(0, 0);
}
nav {
  display: none; /* Initially hide the Bootstrap navbar */
}

@media (min-width: 576px) {
  nav {
    display: none; /* Hide the second navbar on small screens */
  }
}

@media (min-width: 768px) {
  .navbar {
    display: none; /* Hide the Bootstrap navbar on medium screens */
  }
}
</style>