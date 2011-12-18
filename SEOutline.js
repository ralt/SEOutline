(function($) {
  // If the elements have already been added
  var SEOutline = $('.SEOutline');
  if (SEOutline.length) {
    // Just toggle the visibility
    SEOutline.toggle();
  }
  // If the elements don't exist, create them
  else {
    // Create an element that will be cloned for performance
    var span = $('<span></span>')
      .addClass('SEOutline')
      .css({
        'display': 'block',
        'font-family': 'Helvetica',
        'font-size': '15px',
        'color': '#000',
        'border': '1px solid',
        'background': '#EEE',
        'position': 'absolute',
        'font-weight': 'bold'
      });
    $('h1, h2, h3, h4, h5, h6').each(function() {
      // Prepend at every heading tag
      $(this).prepend(
        // Clone the element precedently created
        span.clone().text(this.nodeName)
      );
    });
  }
}(jQuery));

