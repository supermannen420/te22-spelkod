import EnemyImage from "./assets/CharAni-Sheet4.png";

export default class Enemy {
    constructor(x, y, width, height, speed, health, game) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speed = speed;
      this.health = health;
      this.game = game; // Referens till spelet för att få tillgång till spelarens position
      this.maxSpeed = 10; // Max hastighet på fienden

      this.image = new Image();
        this.image.src = EnemyImage;
        this.frameWidth = 32;
        this.frameHeight = 38;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrames = 7;
        this.timer = 0;
        this.fps = 20;
        this.interval = 1000 / this.fps;
    }
  
    attack(player) {
        const attackRange = 150; // Define the attack range
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < attackRange) {
            player.takeDamage(10); // Deal 10 damage to the player
            // Play attack animation (this would be a method you need to implement)
            
        }
    }

    update(deltaTime, playerX, playerY) {
        // Call the attack 
        this.attack(this.game.player);
      // // Få avståndet till spelaren
      // const dx = 960 - this.x;
      // const dy = 520 - this.y;
  
      // // Beräkna riktningen mot spelaren
      // const angle = Math.atan2(dy, dx);
  
      // // Flytta fienden mot spelaren
      // this.x += Math.cos(angle) * this.maxSpeed;
      // this.y += Math.sin(angle) * this.maxSpeed;

      if(this.x < 830){
        this.x += this.speed
    }
    if(this.x > 830){
        this.x -= this.speed
    }
    if(this.y < 465){
        this.y += this.speed
    }
    if(this.y > 465){
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
    
     // Animationer
     if (this.speedX !== 0 || this.speedY !== 0) {
      this.frameY = 0; // Gång-animation
      this.maxFrames = 4;
  } else {
      this.frameY = 0; // Stilla-animation
      this.maxFrames = 1;
  }

  if (this.timer > this.interval) {
      this.frameX++;
      this.timer = 0;
  } else {
      this.timer += deltaTime;
  }

  if (this.frameX >= this.maxFrames) {
      this.frameX = 0;
  }

  
    }
  
    draw(ctx) {
     // ctx.fillStyle = this.color;
     
      
       // Rita spelaren i mitten av skärmen
       ctx.drawImage(
        this.image,
        this.frameWidth * this.frameX,
        this.frameHeight * this.frameY,
        this.frameWidth,
        this.frameHeight,
        this.x,
        this.y,
        this.width * 6,
        this.height * 6
    );
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
