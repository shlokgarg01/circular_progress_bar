
let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.90,
  fill: {gradient: ['#F9D423', '#e65c00']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".js .bar").circleProgress({
  value: 0.80
});
$(".react .bar").circleProgress({
  value: 0.70
});

