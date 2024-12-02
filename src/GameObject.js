export default class GameObject {
    constructor( x, y, width, height, speed, color,){
        this.height = height
        this.width = width
        this.x = x
        this.y = y
        this.color = color
        this.speed = speed
    }


    update(deltaTime){
        this.x += this.speed

    }


    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

    }

}