export default class Projectile {
    constructor(x, y, vx, vy) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.radius = 5;
    }
  
    update(deltaTime) {
      this.x += this.vx * deltaTime;
      this.y += this.vy * deltaTime;
    }
  
    draw(ctx) {
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  