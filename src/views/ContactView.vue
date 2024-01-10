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
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
    
    <div class="contact-info">
      <p>Email: your.email@example.com</p>
      <p>Phone: +1 (123) 456-7890</p>
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

/* Additional styling for the contact information */
.contact-info p {
  margin: 8px 0;
  font-weight: bold;
  color: #555;
}

</style>