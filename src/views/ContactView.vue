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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border-radius: 10px;

}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.contact-info {
  margin-top: 20px;
}


.contact-info p {
  margin: 8px 0;
  font-weight: bold;
  color: #555;
}
.container {
  display: flex;
}

.content {
  flex: 1; /* Take remaining space */
}

.map {
  width: 400px; /* Set the width of the map */
  margin-left: 20px; /* Add some space between the content and the map */
}

</style>