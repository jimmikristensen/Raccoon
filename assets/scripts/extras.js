$(function() {
  $(extraButtons).each(function(i, v) {
    console.log('NODE', i, v);
    $("<a>", {
      class: "btn-subscribe-home animated bounceIn",
      id: "extra-btn-"+i,
      text: v.name
    }).appendTo("#cover-wrap-content");
  });
});
