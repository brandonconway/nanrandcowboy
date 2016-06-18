var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.lineWidth = 1;
ctx.lineJoin = ctx.lineCap = 'round';

var isDrawing, points = [ ];
var curx = 425;
var cury = 200;
var xdirection = 1;
var ydirection = 1;
var mod = 0;

function draw(e) {
    mod = mod+1;
    if(mod%29 == 0){
    xdirection = Math.random() < 0.5 ? 1 : -1;
    ydirection = Math.random() < 0.4 ? 1 : -1;
    }
  if (curx > 900)  xdirection = -1;
  if (curx < 60)  xdirection = 1;
  if (cury > 425 ) ydirection = -1;
  if (cury < 100 ) ydirection = 1;
  rand_x = (Math.floor(Math.random() * 9) + 1) * xdirection;
  rand_y = (Math.floor(Math.random() * 9) + 1) * ydirection;


  r = Math.floor(Math.random() * 220) + 1;
  g = Math.floor(Math.random() * 240) + 1;
  b = Math.floor(Math.random() * 160) + 1;

  curx = curx + rand_x;
  cury = cury + rand_y;
  points.push({ x: curx, y: cury });
  //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
  ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.stroke();

  for (var i = 0, len = points.length; i < len; i++) {
    dx = points[i].x - points[points.length-1].x;
    dy = points[i].y - points[points.length-1].y;
    d = dx * dx + dy * dy;
    area = Math.floor(Math.random() * 820) + 100;
    if (d < area) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba('+r+','+g+','+b+',0.3)';
      ctx.moveTo( points[points.length-1].x + (dx * 0.2), points[points.length-1].y + (dy * 0.2));
      ctx.lineTo( points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
      ctx.stroke();
    }
  }
};
function clear(){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
$(document).ready(function(e){
  points.push({ x: curx, y: cury });
    var d = window.setInterval(function(){draw(e);}, 50);
});

