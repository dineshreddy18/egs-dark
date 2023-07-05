// var checkbox = document.querySelector('input[name=mode]');

// select images 
// let images = document.querySelectorAll('img');


// checkbox.addEventListener('change', function() {
//     if(this.checked) {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'dark') 
        
//     } else {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'light')
//     }
// })

// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition');
//     }, 1000)
// }

var menuButton = document.getElementById('menu_button');
var menu = document.querySelector('ul');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuButton.classList.toggle('is-active');
});


// contact form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          // send form data to php file
          var formData = new FormData(form);
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'php/contact-form.php', true);
          xhr.onload = function () {
            if (this.status === 200) {
              var response = JSON.parse(this.responseText);
              if (response.success) {
                form.querySelector('.alert-success').style.display = 'block';
              } else {
                form.querySelector('.alert-danger').style.display = 'block';
              }
            }
          };
          xhr.send(formData);
          
          form.classList.add('was-validated')
        }, false)
      })
  })()


  let navbar = document.querySelector('.navbar');

//   on scroll fix navbar
window.addEventListener('scroll', function() {
    if(window.scrollY > 0) {
        navbar.classList.add('fixed-top');
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('fixed-top');
        navbar.classList.remove('bg-dark');
    }
}
)
  