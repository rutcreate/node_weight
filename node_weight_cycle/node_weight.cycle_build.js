$(document).ready(function() {
  $('.node-weight-slide-content-cycle').each(function() {
    $(this).cycle({
      fx:     'fade',
      pager:  '#'+this.id.substr(7),
      speed:   Drupal.settings.node_weight.cycle.speed, 
      timeout: Drupal.settings.node_weight.cycle.timeout
    });
  });
});
