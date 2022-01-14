$(document).ready(function(){
  $("[data-group]").each(function() {
    var t = ($(this).find("[data-target]"),
    $(this).find("[data-click]"))
      , a = "active";
    t.click(function(t) {
        t.preventDefault();
        var i = $(this).data("click")
          , o = $('[data-target="' + i + '"]');
          $("[data-target]").removeClass(a),
          $("[data-click]").removeClass(a),
        $(this).hasClass(a) ? (o.removeClass(a),
        $(this).removeClass(a)) : (o.addClass(a),
        $(this).addClass(a))
    })
  })
});