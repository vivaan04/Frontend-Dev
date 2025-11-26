// a9_q9.js
// Using two jQuery versions via noConflict

// jQuery1 will handle carousel (older API) and jQuery3 will handle modal/tooltips
(function($1, $3){
  // Carousel using jQuery1 (v1.x)
  $1(function(){
    const slides = $1('.slide');
    let idx = 0;
    function show(i){ slides.hide(); slides.eq(i%slides.length).show(); }
    show(0);
    setInterval(()=> { idx++; show(idx); }, 3000);
  });

  // Modal and widget highlights with jQuery3
  $3(function(){
    $3('#open-modal').on('click', function(){ $3('#modal').fadeIn(); });
    $3('#close').on('click', function(){ $3('#modal').fadeOut(); });

    // Highlight active widget using jQuery1 (simulate cross-version interaction)
    // Use jQuery3 to attach tooltip behavior
    $3('.widget').on('mouseenter', function(){ $3(this).css('background','#eef'); })
                .on('mouseleave', function(){ $3(this).css('background',''); });

    // Example of using both versions without conflict
    // jQuery1 and jQuery3 operate on separate namespaces ($1 and $3)
  });
})(window.jQuery1, window.jQuery3);