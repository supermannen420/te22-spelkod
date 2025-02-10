export default class Input {
    constructor(game) {
        this.game = game
        this.keys = new Set()
        this.mouse = new Set()

        // Listen for keydown events
        window.addEventListener("keydown", (event) => {
            this.keys.add(event.key);
        });

        // Listen for keyup events
        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key);
        });

        // Listen for mouse click events
        window.addEventListener("click", () => {
            this.mouse.add("attack"); // Add attack action on mouse click
        });
  
  
  
  
        window.addEventListener("keydown", (event) => {
            console.log(event.key)
            this.keys.add(event.key)
  
        })
  
        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key)
  
        })

        
       
  
  
    }
    
  }
