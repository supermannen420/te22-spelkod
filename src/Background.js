export default class Background {
  constructor(imageSrc, width, height) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.width = width;
    this.height = height;

    this.offsetX = 0; // Förskjutning i X-led
    this.offsetY = 0; // Förskjutning i Y-led

    this.image.onload = () => {
      console.log("Background image loaded successfully");
      this.isLoaded = true; // Bilden är laddad
    };

    this.image.onerror = () => {
      console.error("Failed to load background image");
      this.isLoaded = false; // Bilden kunde inte laddas
    };
  }

  update(speedX, speedY) {
    // Rörelse för bakgrunden (inverterad spelarens rörelse)
    this.offsetX -= speedX;
    this.offsetY -= speedY;

    // Begränsa förskjutning för att repetera bakgrunden
    this.offsetX %= this.width;
    this.offsetY %= this.height;
  }

  draw(ctx) {
    if (!this.isLoaded) return; // Vänta tills bilden är laddad

    // Rita bakgrundens fyra sektioner för att täcka canvasen
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        ctx.drawImage(
          this.image,
          this.offsetX + x * this.width,
          this.offsetY + y * this.height,
          this.width,
          this.height
        );
      }
    }
  }
}
