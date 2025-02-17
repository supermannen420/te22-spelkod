import Ball from "./ball";
import GameObject from "./GameObject";
import Input from "./Input";
import Player from "./Player";
import Background from "./Background";
import Enemy from "./Enemy"; // Importera fiende-klassen
import backgroundImg from "./assets/floor_128px.png";



export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.input = new Input(this);
    this.player = new Player(835,375, 50, 50, "green", this);
    
    

    this.box = new GameObject(40, 100, 200, 200, 0, "purple");
    this.ball = new Ball(100, 200, 100, 100, 0, "red");

    this.background = new Background(backgroundImg, width, height);

    this.enemies = [];
    this.enemySpawnRate = 5000;
    this.enemySpawnTimer = 0;
    this.enemySpeed = 5;
    this.enemyHealth = 50;
    this.enemyWidth = 50;
    this.enemyHeight = 50;

    this.score = 0;
  }

    update(deltaTime) {
        this.background.update(this.player.speedX, this.player.speedY);
        this.player.update(deltaTime);

        for (let enemy of this.enemies) {
            enemy.update(deltaTime, this.player.x, this.player.y); // Update enemy with player position
            enemy.attack(this.player); // Check if enemy should attack the player
        }

        this.enemySpawnTimer += deltaTime;
        if (this.enemySpawnTimer > this.enemySpawnRate) {
            this.spawnEnemy();
            this.enemySpawnTimer = 0;
            this.enemySpawnRate = Math.max(500, this.enemySpawnRate - 100);
        }

    
  }

  draw(ctx) {
    this.background.draw(ctx);
    this.player.draw(ctx);

    for (let enemy of this.enemies) {
      enemy.draw(ctx);
    }
  }

  spawnEnemy() {
    
    const spawnDistance = 500;
    const angle = Math.random() * Math.PI * 2;
    const x = 960 + Math.cos(angle) * spawnDistance;
    const y = 520 + Math.sin(angle) * spawnDistance;

    const enemy = new Enemy(x, y, this.enemyWidth, this.enemyHeight, this.enemySpeed, this.enemyHealth, this);
    this.enemies.push(enemy);
    this.enemyHealth = this.enemyHealth + 20;

  }

  removeEnemy(enemy) {
    const index = this.enemies.indexOf(enemy);
    if (index > -1) {
      this.enemies.splice(index, 1);
      this.score ++;
      console.log(this.score);
      
    }
  }

  removePlayer(Player) {
    const index = this.enemies.indexOf(enemy);
    if (index > -1) {
      this.player.splice(index, 1);
    }
  }
  
}
