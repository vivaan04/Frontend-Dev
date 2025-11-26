// a9_q1.js
// Welcome Page Greeting using jQuery

$(function() {
  // Decide greeting based on current hour
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  $('#greeting').text(greeting + '!');

  // When greeting clicked -> show alert
  // jQuery: .on('click', handler) attaches event handler
  $('#greeting').on('click', function() {
    alert('Greeting clicked: ' + $(this).text());
  });

  // Change Greeting button -> motivational quote
  $('#change-greeting').on('click', function() {
    $('#greeting').text('Keep going — you are doing great!');
  });

  // Toggle visibility of welcome message
  $('#toggle-welcome').on('click', function() {
    // jQuery: .toggle() toggles display
    $('#welcome-msg').toggle();
  });
});