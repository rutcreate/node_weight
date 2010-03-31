$(document).ready(function() {
  $('.node-weight-slide-content-scrollable .node-weight-page').show();
  $('.node-weight-slide-content-scrollable').each(function(i, item) {
    var delta = $(item).attr('id').substr(24);
    var size = Drupal.settings.node_weight.scrollable.size;
    var loop = Drupal.settings.node_weight.scrollable.loop == 0 ? false : true;
    var auto = Drupal.settings.node_weight.scrollable.auto == 0 ? false : true;
    var interval = Drupal.settings.node_weight.scrollable.interval;
    var linked = Drupal.settings.node_weight.scrollable.linked == 0 ? false : true;
    
    if (linked) {
      var img = $($(item).children('div.items').children('div').children('.node-weight-slide-image').children('a').children('img').get(0));
    }
    else {
      var img = $($(item).children('div.items').children('div').children('.node-weight-slide-image').children('img').get(0));
    }
    var width = img.width();
    var height = img.height();

    $(item).css({
      width: width * size,
      height: height
    });
    $(item).children('div.items').children('div').css('width', width);
    $(item).scrollable({
      size: size,
      loop: loop
    });
    
    if (auto) {
      var as = setTimeout('autoScroll()', interval);
      $('a.next, a.prev').click(function() {
        clearTimeout(as);
        as = setTimeout('autoScroll()', interval);
      });
    }
    
  });
   
});

function autoScroll() {
  $('a.next').trigger('click');
}

