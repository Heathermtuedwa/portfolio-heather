<template >
    <div class="contact">
    <h2>Contact Me</h2>
    <p>Feel free to reach out to me using the form below or through the provided contact information.</p>
    <form
  action="https://formspree.io/f/mnqkljjd"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  
  <button type="submit">Send</button>
</form>
    <div class="contact-info">
      <p>heathermtuedwa@gmail.com</p>
      <p>Phone: 065 526 1545 </p>
    </div>

  </div >
  <div class="container">
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6618.478888037705!2d18.556915564837613!3d-33.96068461626794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc44d455026ac1%3A0xb14952350b32e3c4!2sCharlesville%2C%20Cape%20Town%2C%207490!5e0!3m2!1sen!2sza!4v1709641065177!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">" width="400" height="300" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
  </div>
</template>



    <style>
     .contact {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  animation: fadeIn 0.5s ease-in-out; /* Adding fadeIn animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.contact h2 {
  color: #333;
  font-size: 1.5em; /* Increase font size */
  margin-bottom: 15px; /* Increase margin bottom */
}

.contact p {
  color: #666;
  line-height: 1.6; /* Adjust line height */
}

.contact form label {
  display: block;
  margin-bottom: 10px;
}

.contact form input[type="email"],
.contact form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease; /* Adding transition effect */
}

.contact form input[type="email"]:focus,
.contact form textarea:focus {
  border-color: #007bff; /* Change border color on focus */
}

.contact form button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Adding transition effect */
}

.contact form button[type="submit"]:hover {
  background-color: #0056b3; /* Change background color on hover */
}

.contact-info {
  margin-top: 20px;
}

.contact-info p {
  margin: 5px 0;
}

.map {
  margin-top: 20px;
}

.map iframe {
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 5px; /* Adding border radius */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adding box shadow */
}
</style>