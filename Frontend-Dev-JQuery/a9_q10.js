// a9_q10.js
// Registration form validation using jQuery

$(function(){
  // Simulate existing emails for uniqueness check
  const existing = new Set(['test@example.com','user@domain.com']);

  function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  $('#register').on('submit', function(e){
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val();
    let ok = true;

    // Reset styles
    $('#register input').removeClass('error');

    if(!name){ $('#name').addClass('error'); ok = false; }

    if(!validateEmail(email)){ $('#email').addClass('error'); ok=false; }
    else if(existing.has(email)){ $('#email').addClass('error'); $('#result').text('Email already in use'); ok=false; }

    if(password.length < 8){ $('#password').addClass('error'); ok=false; }

    if(ok){
      $('#result').css('color','green').text('Registration successful!');
      // Optionally add to existing set
      existing.add(email);
    } else {
      $('#result').css('color','red').text('Please correct highlighted fields');
    }
  });
});