export default class Enemy {
    constructor(x, y, width, height, speed, health, game) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speed = speed;
      this.health = health;
      this.game = game; // Referens till spelet för att få tillgång till spelarens position
      this.color = 'red'; // Fiendens färg
      this.maxSpeed = 10; // Max hastighet på fienden
    }
  
    update(deltaTime, playerX, playerY) {
      // // Få avståndet till spelaren
      // const dx = 960 - this.x;
      // const dy = 520 - this.y;
  
      // // Beräkna riktningen mot spelaren
      // const angle = Math.atan2(dy, dx);
  
      // // Flytta fienden mot spelaren
      // this.x += Math.cos(angle) * this.maxSpeed;
      // this.y += Math.sin(angle) * this.maxSpeed;

      if(this.x < 960){
        this.x += this.speed
    }
    if(this.x > 960){
        this.x -= this.speed
    }
    if(this.y < 520){
        this.y += this.speed
    }
    if(this.y > 520){
        this.y -= this.speed
    }

    if (this.game.input.keys.has("ArrowLeft")) {
      this.x += this.maxSpeed
    }
    if (this.game.input.keys.has("ArrowRight")) {
      this.x -= this.maxSpeed
    }
    if (this.game.input.keys.has("ArrowUp")) {
      this.y += this.maxSpeed
    }
    if (this.game.input.keys.has("ArrowDown")) {
      this.y -= this.maxSpeed
    }
  

  
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    
  
    // Metod för att ta skada
    takeDamage(damage) {
      this.health -= damage;
      if (this.health <= 0) {
        // Döda fienden om hälsan är 0
        this.game.removeEnemy(this); // Anropa spelets metod för att ta bort fienden
      }
    }
  }
  