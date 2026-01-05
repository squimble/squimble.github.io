var gameData ={
  money: 0,
  hydrogen: 1,
  helium: 0,
  argon: 0,
  xenon: 0,
  atoms: 1,
  mocvdUnlocked: 0,
  tier: 1,  
  electrons: 0,
  power: 10,
  electronBeamNum: 1,
  tierbonus: 1,
}
var randData ={
  wavelengthMod: 0.5,
}

function fireE(){
  gameData.electrons += gameData.electronBeamNum;
  gameData.photons += Math.abs(gameData.atoms-gameData.electrons)
  for (let i = 0; i < Math.abs(gameData.atoms-gameData.electrons); i++){
    const min = 380;
    const max = 780;
  
    const wavelength = Math.floor(randData.wavelengthMod * Math.random() * (max - min + 1)) + min;
    gameData.money += wavelength * gameData.atoms/randData.wavelengthMod * gameData.power * gameData.tierbonus
    document.getElementById("money").innerHTML= "$" + gameData.money
  gameData.electrons = 0
  gameData.photons = 0
  }
  
  
  
}
//sorry guys its for aesthetic
const canvas = document.getElementById("pointCanvas");
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 200; // Match CSS width
canvas.height = window.innerHeight; // Match viewport height

// Point class to manage individual points
class Point {
    constructor(x, y, radius, color, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dy = dy; // vertical velocity
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.y += this.dy;

        // If point goes off the bottom, reset it to the top
        if (this.y > canvas.height + this.radius) {
            this.y = -this.radius;
            this.x = Math.random() * canvas.width; // new random horizontal position
        }

        this.draw();
    }
}

// Create an array of points
const points = [];
for (let i = 0; i < gameData.photons; i++) {
    const radius = Math.random() * 5 + 2;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * canvas.height;
    const dy = Math.random() * 1 + 0.5; // slow downward movement
    points.push(new Point(x, y, radius, "#6279a7", dy));
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas each frame
    // ctx.fillStyle = "#333"; // Optional: redraw background if not using clearRect
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < points.length; i++) {
        points[i].update();
    }
}

// Handle window resize to keep canvas height correct
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
});

animate();
