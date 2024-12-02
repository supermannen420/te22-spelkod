import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    this.width = 1708
    this.height = 500

    this.fg = new Image()
    this.fg.src = "./pictures/foreground_layer.png"
    this.gl = new Image()
    this.gl.src = "./pictures/ground_layer.png"
    this.ml = new Image()
    this.ml.src = "./pictures/middle_layer.png"
    this.sl = new Image()
    this.sl.src = "./pictures/sky_layer.png"

    this.backgroundLayers = [
      new Layer(this.game, this.width, this.height, 0.1, this.sl),
      new Layer(this.game, this.width, this.height, 0.2, this.ml),
      new Layer(this.game, this.width, this.height, 0.5, this.gl),
      new Layer(this.game, this.width, this.height, 1, this.fg)
    ]
  }

  update(deltaTime) {
    this.backgroundLayers.forEach(layer => {
      layer.update(deltaTime)
    })
  }

  draw(ctx) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(ctx)
    })
  }

}