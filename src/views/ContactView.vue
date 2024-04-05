<template >
 <a class="anchor" id="contact-link"></a>
    <div id="contact" class="container-fluid text-center">
      <h1>Contact</h1>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h2>Social</h2>
            <a href="https://twitter.com/hash004">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="https://uk.linkedin.com/in/hashambabar">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="https://github.com/Heathermtuedwa">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="065 526 1545">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-phone fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
          <div class="col-lg-4">
            <h2>Location</h2>
            <address>
             Charlesville
            </address>
            <div class="embed-responsive embed-responsive-4by3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6618.478888037687!2d18.556915564837574!3d-33.960684616268146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc44d455026ac1%3A0xb14952350b32e3c4!2sCharlesville%2C%20Cape%20Town%2C%207490%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1712223591023!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div class="col-lg-4">
            <h2>Communication</h2>
            <a href="mailto:heathermtuedwa@gmail.com">
              <span class="fa-stack fa-3x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>



    <style scoped>
  #contact{
  background-image: url(https://raw.githubusercontent.com/hash004/freecodecamp/master/portfolioPage/images/contact.jpg);
  background-position: center;
  background-size: cover;
  height: 100%;
  padding-bottom: 50px;
  color: #fff;
  height: 100vh;
}

  #contact h1{
    font-size: 5em;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                 0px 8px 13px rgba(0,0,0,0.5),
                 0px 18px 23px rgba(0,0,0,0.1);
  }

  #contact h2{
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                 0px 8px 13px rgba(0,0,0,0.5),
                 0px 18px 23px rgba(0,0,0,0.1);
  }

  #contact address{
    font-size: 1.5em;
    color: #fff;
    font-weight: bold;
  }

  #contact .fa-stack{
    color: #333;
  }

  #contact .fa-stack:hover .fa-stack-1x{
    color: #333;
    transition: 0.5s;
  }

  #contact .fa-stack:hover .fa-stack-2x{
    color: #fff;
    transition: 0.5s;
  }

  #contact a{
    text-decoration: none;
  }

/* hr{
  width: 25%;
}t a:hover { color: #39F; }on: fadeIn 1s; */

</style>