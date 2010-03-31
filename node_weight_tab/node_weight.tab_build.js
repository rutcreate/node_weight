$(document).ready(function() {
  $(".node-weight-navi-tab").idTabs();
  $(".node-weight-navi-tab a").click(function() {
    $(".node-weight-navi-tab a").css('opacity', Drupal.settings.node_weight.tab.opacity);
    $(this).css('opacity', 1);
  });
  $(".node-weight-navi-tab a").mouseover(function() {
    if ($(this).attr('class') != 'selected') {
      $(this).css('opacity', 1);
    }
  });
  $(".node-weight-navi-tab a").mouseout(function() {
    if ($(this).attr('class') != 'selected') {
      $(this).css('opacity', Drupal.settings.node_weight.tab.opacity);
    }
  });
  $(".node-weight-navi-tab a:first").click();
});
