export default class Input {
    constructor(game) {
        this.game = game
        this.keys = new Set()
        this.mouse = new Set()
  
  
  
  
        window.addEventListener("keydown", (event) => {
            console.log(event.key)
            this.keys.add(event.key)
  
        })
  
        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key)
  
        })
  
  
    }
  }