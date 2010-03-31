$(document).ready(function() {
  $('select#edit-display-style').change(function() {
    var val = this.value;
    $.each(Drupal.settings.node_weight.types, function(i, type) {
      var _type = type.replace('node_weight_', '');
      var legend = _type.charAt(0).toUpperCase() + _type.slice(1) + ' settings';
      var a = $('a:contains("'+legend+'")');
      if (type == val) {
        if (a.parent().parent().is('.collapsed')) {
          a.click();
        }
      }
      else {
        if (!a.parent().parent().is('.collapsed')) {
          a.click();
        }
      }
    });
  });
});
