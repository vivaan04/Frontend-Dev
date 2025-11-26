// a9_q7.js
// Search Courses with live filter using jQuery

$(function(){
  function updateCount() {
    $('#count').text('Matched: ' + $('#courses li:visible').length);
  }

  $('#search').on('keyup', function(){
    const q = $(this).val().toLowerCase();
    $('#courses li').each(function(){
      const text = $(this).text();
      if(q && text.toLowerCase().indexOf(q) >= 0) {
        // Highlight matched text by adding class and style
        $(this).addClass('match').show();
      } else if(q) {
        $(this).removeClass('match').hide();
      } else {
        $(this).removeClass('match').show();
      }
    });
    updateCount();
  });

  $('#clear').on('click', function(){
    $('#search').val('');
    $('#courses li').show().removeClass('match');
    updateCount();
  });

  updateCount();
});