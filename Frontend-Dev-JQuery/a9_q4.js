// a9_q4.js
// Banner show/hide effects and automatic rotation using jQuery

$(function() {
  const banners = $('#banners .banner');
  let rotated = 0;
  let rotInterval;

  $('#hide').on('click', function() { banners.hide(); });
  $('#show').on('click', function() { banners.show(); });

  $('#slide').on('click', function() { banners.slideToggle(); });
  $('#fade').on('click', function() { banners.fadeToggle(); });

  // Auto rotate through banners every 5 seconds
  function startRotation() {
    rotInterval = setInterval(() => {
      const current = banners.eq(rotated % banners.length);
      banners.not(current).fadeOut(400);
      current.fadeIn(400);
      rotated++;
    }, 5000);
  }

  // Start rotation on load
  banners.hide();
  banners.eq(0).show();
  startRotation();

  // Pause rotation when hovering any banner
  $('#banners').on('mouseenter', function() { clearInterval(rotInterval); })
               .on('mouseleave', function() { startRotation(); });
});