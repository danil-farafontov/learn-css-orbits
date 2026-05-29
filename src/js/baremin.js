$.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: startAngle}).animate({deg: endAngle}, args);
  });
};

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

console.log('baremin js loaded');
object1count = 0;
$(document).ready(function() {
    console.log("doc ready");
    $('.object1').on('click', function() {
        console.log("clicked");
        object1count++;
        $(this).text(object1count);
    });

    $('.wrapper3 input[type=range]').on('mousemove', function() {
        //console.log($(this).val());
        $('.wrapper3 .orbit1').animateRotate(
            getRotationDegrees($('.wrapper3 .orbit1')), 
            $(this).val()
        );
    })
})