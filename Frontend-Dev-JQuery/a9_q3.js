// a9_q3.js
// Interactive FAQ using jQuery

$(function() {
  // Toggle answer visibility on question click
  $('#faq').on('click', 'dt', function() {
    $(this).next('dd').slideToggle(); // nice toggle animation
  });

  // Hover change question color
  $('#faq').on('mouseenter', 'dt', function() {
    $(this).css('color', 'teal');
  }).on('mouseleave', 'dt', function() {
    $(this).css('color', '');
  });

  // Double-click on a question -> collapse all answers
  $('#faq').on('dblclick', 'dt', function() {
    $('#faq').find('dd').slideUp();
  });

  // Focus on input inside answer -> highlight parent question
  $('#faq').on('focus', 'dd input', function() {
    $(this).closest('dd').prev('dt').css('background', '#f0f8ff');
  }).on('blur', 'dd input', function() {
    $(this).closest('dd').prev('dt').css('background', '');
  });
});