document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Example: You can add code here to send the form data to a server using AJAX
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      
      // Reset form fields after submission
      contactForm.reset();
    });
    window.addEventListener('scroll', function() {
      var header = document.getElementById('main-header');
      if (window.scrollY > 100) { // Change the value according to when you want the header to appear
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    });
    
  });
  