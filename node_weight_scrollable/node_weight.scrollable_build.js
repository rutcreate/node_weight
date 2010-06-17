$(document).ready(function() {
  $('.node-weight-slide-content-scrollable .node-weight-page').show();
  $('.node-weight-slide-content-scrollable').each(function(i, item) {
    var conf = {
      delta: $(item).attr('id').substr(24),
      size: Drupal.settings.node_weight.scrollable.size,
      loop: Drupal.settings.node_weight.scrollable.loop == 0 ? false : true,
      interval: Drupal.settings.node_weight.scrollable.interval,
      linked: Drupal.settings.node_weight.scrollable.linked == 0 ? false : true
    }
    var options = {
      size: parseInt(conf.size),
      loop: conf.loop
    }
    if (conf.interval != 'no') {
      options.interval = parseInt(conf.interval);
    }
    $(item).scrollable(options);
  });
   
});
