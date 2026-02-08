const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let fireworks = [];

function boom(x,y){
  for(let i=0;i<60;i++){
    fireworks.push({
      x,y,
      vx:(Math.random()-0.5)*6,
      vy:(Math.random()-0.5)*6,
      a:1
    });
  }
}

setInterval(()=>{
  boom(Math.random()*c.width, Math.random()*c.height/2);
},800);

function animate(){
  ctx.fillStyle="rgba(0,0,0,0.2)";
  ctx.fillRect(0,0,c.width,c.height);

  fireworks.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;
    p.a-=0.02;
    ctx.fillStyle=`rgba(255,105,180,${p.a})`;
    ctx.fillRect(p.x,p.y,3,3);
  });

  fireworks=fireworks.filter(p=>p.a>0);
  requestAnimationFrame(animate);
}

animate();
