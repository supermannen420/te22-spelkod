import GameObject from "./GameObject";
import Background from "./Background"; // Importera bakgrundshanteraren

export default class Player extends GameObject {
    constructor(x, y, width, height, color, game) {
        super(x, y, width, height, color);
        this.game = game;

        this.image = new Image();
        this.image.src = "./picture/karaktar_gang_128px.png";

        this.frameWidth = 129;
        this.frameHeight = 129;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrames = 7;
        this.timer = 0;
        this.fps = 20;
        this.interval = 1000 / this.fps;

        this.speedX = 0; // Hastigheten är kopplad till bakgrundens rörelse
        this.speedY = 0;

        // Bakgrund
        this.background = new Background('./picture/background.png', 1920, 1080);
    }

    attack() {
        const attackRange = 400; // Define the attack range
        for (let enemy of this.game.enemies) {
            const dx = enemy.x - this.x;
            const dy = enemy.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < attackRange) {
                enemy.takeDamage(50); // Deal 10 damage to the enemy
                console.log("damake give");
            }
        }
    }

    update(deltaTime) {
        // Listen for attack button (e.g., spacebar)
        if (this.game.input.keys.has(" ")) {
            this.attack();
        }
        // Återställ hastighet
        this.speedX = 0;
        this.speedY = 0;

        // Hantera inmatning och justera bakgrundens rörelse
        if (this.game.input.keys.has("ArrowLeft")) {
            this.speedX = -10; // Flytta bakgrunden åt höger (spelaren går vänster)
        }
        if (this.game.input.keys.has("ArrowRight")) {
            this.speedX = 10; // Flytta bakgrunden åt vänster (spelaren går höger)
        }
        if (this.game.input.keys.has("ArrowUp")) {
            this.speedY = -10; // Flytta bakgrunden nedåt (spelaren går uppåt)
        }
        if (this.game.input.keys.has("ArrowDown")) {
            this.speedY = 10; // Flytta bakgrunden uppåt (spelaren går nedåt)
        }
      

        // Uppdatera bakgrunden baserat på spelarens input
        this.background.update(this.speedX, this.speedY);

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
        // Rita bakgrunden först
       // this.background.draw(ctx);

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
}
