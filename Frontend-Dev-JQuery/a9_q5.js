// a9_q5.js
// Team directory interactions using jQuery

$(function(){
  // Click a manager -> highlight direct reports (.children())
  $('#teams').on('click', '.manager', function(e){
    e.stopPropagation();
    $(this).find('> ul > li').addClass('highlight');
    setTimeout(()=> $(this).find('> ul > li').removeClass('highlight'), 1500);
  });

  // Hover on employee -> show contact using .next() (actually .find .contact inside li)
  $('#teams').on('mouseenter', '.employee', function(){
    $(this).find('.contact').show();
  }).on('mouseleave', '.employee', function(){
    $(this).find('.contact').hide();
  });

  // Click department -> change background of all members using .children()
  $('#teams').on('click', '.department', function(e){
    e.stopPropagation();
    $(this).children('ul').find('li').css('background','#f6f9ff');
    setTimeout(()=> $(this).children('ul').find('li').css('background',''),1200);
  });

  // Select random employee -> highlight siblings
  $('#random').on('click', function(){
    const employees = $('#teams .employee');
    const pick = employees.eq(Math.floor(Math.random() * employees.length));
    pick.siblings().addBack().css('border','2px solid #4CAF50');
    setTimeout(()=> employees.css('border','1px solid #ddd'),1200);
  });

  // Collapse/expand team using parent() and find()
  $('#toggle-team').on('click', function(){
    $('#teams').find('ul').slideToggle();
  });
});