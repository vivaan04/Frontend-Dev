// a9_q6.js
// Event subscription panel using jQuery

$(function(){
  // Subscribe -> enable notifications (simulated by adding .subscribed class)
  $('#panel').on('click', '.subscribe', function(){
    const topic = $(this).closest('.topic');
    topic.addClass('subscribed');
    $('#messages').append($('<div>').text(topic.data('name') + ' subscribed'));
  });

  // Unsubscribe -> disable notifications
  $('#panel').on('click', '.unsubscribe', function(){
    const topic = $(this).closest('.topic');
    topic.removeClass('subscribed');
    $('#messages').append($('<div>').text(topic.data('name') + ' unsubscribed'));
  });

  // Dynamically add new subscription topics -> attach .on() by delegating to #panel
  $('#add-topic').on('submit', function(e){
    e.preventDefault();
    const name = $('#topic-name').val().trim();
    if(!name) return;
    const node = $('<div>').addClass('topic').attr('data-name', name).text(name + ' ') ;
    node.append('<button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button>');
    $('#dynamic').append(node);
    $('#messages').append($('<div>').text('Topic added: ' + name));
    $('#topic-name').val('');
  });

  // Remove specific subscription -> detach .off() (we simulate removing subscribe/unsubscribe handlers by removing element)
  // Add a remove button to demonstrate off/detach
  $('#panel').on('click', '.remove-topic', function(){
    $(this).closest('.topic').remove();
  });

  // Show success message dynamically inserted into DOM
  // We already append messages to #messages on subscribe/unsubscribe and add
});