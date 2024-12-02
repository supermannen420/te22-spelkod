import Ball from "./ball"
import GameObject from "./GameObject"
import Input from "./Input"
import Player from "./Player"
import Background from './Background.js'


export default class Game { // skapar klassen
  constructor(width, height) { // klassens constructor
    this.width = width
    this.height = height
    this.input = new Input(this)
    this.player = new Player(0, 0, 50, 50, "green", this)
    console.log("Ny instans av game ", this.width)
    this.box = new GameObject(40, 100, 200, 200, "purple")
    this.ball = new Ball(100, 200, 100, 100, "red")

    this.background = new Background(this)
    this.speed = 1
  }

  update(deltaTime) {
    this.box.update(deltaTime)
    this.ball.update(deltaTime)
    this.player.update(deltaTime)
    this.background.update(deltaTime)

  }

  draw(ctx) {
    this.box.draw(ctx)
    this.ball.draw(ctx)
    this.player.draw(ctx)
    this.background.draw(ctx)
  }
 }