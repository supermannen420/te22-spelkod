
  import GameObject from "./GameObject"
  
  export default class Player extends GameObject {
    constructor(x, y, width, height, color, game) {
      super(x, y, width, height, color)
      this.game = game
      this.grounded = false
  
      this.image = new Image()
      this.image.src = ".picture/Overworld_Tileset.png"
  
      this.frameWidth = 129
      this.frameHeight = 128
      this.frameX = 0
      this.frameY = 0
      this.maxFrames = 7
      this.timer = 0
      this.fps = 20
      this.interval = 1000 / this.fps
  
      this.speedX = 0
      this.speedY = 0
      this.maxSpeedX = 0.1
      this.jumpSpeed = 20
      this.color = "255, 0, 0"
      


    }
  
    update(deltaTime) {
        if (this.game.input.keys.has("ArrowLeft")) {
            console.log("pil vänster")
            this.speedX -= this.maxSpeedX
        }
        if (this.game.input.keys.has("ArrowRight")) {
            this.speedX += this.maxSpeedX
        }


      if (
        this.game.input.keys.has("ArrowRight") &&
        this.game.input.keys.has("ArrowLeft")
      ) {
        this.speedX = 0
      }
      if (
        !this.game.input.keys.has("ArrowRight") &&
        !this.game.input.keys.has("ArrowLeft")
      ) {
        this.speedX = 0
      }
  
      if (this.game.input.keys.has("ArrowUp") && this.grounded) {
        this.speedY = -this.jumpSpeed
        this.grounded = false
      }
  
 
  
      this.y += this.speedY
      this.x += this.speedX

       // animation hantering
        if (!this.grounded) {
            this.frameY = 11;
            this.maxFrames = 8;
        } else if (this.isPunching) {
            this.frameY = 16;
            this.maxFrames = 6;
        } else {
            this.frameY = 0;
            this.maxFrames = 4;
        }
  
        if (this.speedX != 0) {
            this.frameY = 0
            this.maxFrames = 4
        } else {
            this.frameY = 0
            this.maxFrames = 1
        }
  
  
  
      // Simulate ground plane
      if (this.y > 150) {
        this.y = 150
        this.speedY = 0
        this.grounded = true
      }
      this.x = 350

      

      if (this.timer > this.interval) {
        this.frameX++
        this.timer = 0
      } else {
        this.timer += deltaTime
      }
  
      if (this.frameX >= this.maxFrames) {
        this.frameX = 0
      }
    }
  
    draw(ctx) {
      // ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      ctx.drawImage(
        this.image,
        this.frameWidth * this.frameX,
        this.frameHeight * this.frameY,
        this.frameWidth,
        this.frameHeight,
        this.x,
        this.y,
        this.width * 3,
        this.height * 3,
      ) // source x, y, w, h, destination x, y, w, h
    }
  }