// a9_q8.js
// Blog post admin actions using jQuery

$(function(){
  let counter = 6;

  $('#add').on('click', function(){
    // Append new post to the list
    $('#posts').append($('<div>').addClass('post').text('Post ' + counter++ + ' - New'));
  });

  $('#prepend').on('click', function(){
    // Prepend a featured post
    $('#posts').prepend($('<div>').addClass('post').text('Featured - ' + (new Date()).toLocaleTimeString()));
  });

  $('#remove-last').on('click', function(){
    // Remove last element
    $('#posts .post').last().remove();
  });

  // Add tags to posts using before()/after()
  $('#posts').on('click', '.post', function(){
    $(this).after($('<div>').addClass('tag').text('Tag: demo').css('font-size','12px'));
  });

  // Highlight posts with keyword
  function highlightKeyword(keyword){
    $('#posts .post').each(function(){
      if($(this).text().toLowerCase().indexOf(keyword.toLowerCase())>=0) $(this).css('background','#fffae6');
      else $(this).css('background','');
    });
  }

  // Example highlight for 'release'
  highlightKeyword('release');
});