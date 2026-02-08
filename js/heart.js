const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

function heart(t) {
  return {
    x: 16 * Math.pow(Math.sin(t), 3),
    y: -(13 * Math.cos(t) - 5*Math.cos(2*t)
       - 2*Math.cos(3*t) - Math.cos(4*t))
  };
}

let particles = [];

for (let i = 0; i < 700; i++) {
  let t = Math.random() * Math.PI * 2;
  let p = heart(t);
  particles.push({
    x: canvas.width/2 + p.x*10,
    y: canvas.height/2 + p.y*10,
    s: Math.random()*2 + 1
  });
}

function draw() {
  ctx.clearRect(0,0,400,400);
  particles.forEach(p => {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.s, 0, Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

draw();
