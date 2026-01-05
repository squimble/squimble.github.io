// Photon game logic + sidebar particle visualization

var gameData = {
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
  photons: 0 // initialize photons
};

var randData = {
  wavelengthMod: 0.5,
};

// Map wavelength (nm) to an approximate RGB color string.
// Input: wavelength in nm (380 - 780). Output: "rgb(r,g,b)".
function wavelengthToRGB(wavelength) {
  var R = 0, G = 0, B = 0, factor = 0;

  if (wavelength >= 380 && wavelength < 440) {
    R = -(wavelength - 440) / (440 - 380);
    G = 0.0;
    B = 1.0;
  } else if (wavelength >= 440 && wavelength < 490) {
    R = 0.0;
    G = (wavelength - 440) / (490 - 440);
    B = 1.0;
  } else if (wavelength >= 490 && wavelength < 510) {
    R = 0.0;
    G = 1.0;
    B = -(wavelength - 510) / (510 - 490);
  } else if (wavelength >= 510 && wavelength < 580) {
    R = (wavelength - 510) / (580 - 510);
    G = 1.0;
    B = 0.0;
  } else if (wavelength >= 580 && wavelength < 645) {
    R = 1.0;
    G = -(wavelength - 645) / (645 - 580);
    B = 0.0;
  } else if (wavelength >= 645 && wavelength <= 780) {
    R = 1.0;
    G = 0.0;
    B = 0.0;
  } else {
    R = 0; G = 0; B = 0;
  }

  // Intensity factor near vision limits
  if (wavelength >= 380 && wavelength < 420) {
    factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
  } else if (wavelength >= 420 && wavelength <= 700) {
    factor = 1.0;
  } else if (wavelength > 700 && wavelength <= 780) {
    factor = 0.3 + 0.7 * (780 - wavelength) / (780 - 700);
  } else {
    factor = 0.0;
  }

  var gamma = 0.8;
  var r = Math.round(255 * Math.pow(R * factor, gamma));
  var g = Math.round(255 * Math.pow(G * factor, gamma));
  var b = Math.round(255 * Math.pow(B * factor, gamma));

  return "rgb(" + r + "," + g + "," + b + ")";
}

// Primary function: fire electrons, produce photons, create sidebar particles
function fireE() {
  var produced = Math.abs(gameData.atoms - (gameData.electrons + gameData.electronBeamNum));
  gameData.electrons += gameData.electronBeamNum;
  gameData.photons += produced;

  for (let i = 0; i < produced; i++) {
    const min = 380;
    const max = 780;
    const wavelength = Math.floor(randData.wavelengthMod * Math.random() * (max - min + 1)) + min;
    // compute money (kept your original idea but avoid dividing by zero)
    var mod = randData.wavelengthMod || 0.5;
    gameData.money += wavelength * gameData.atoms / mod * gameData.power * gameData.tierbonus;
    document.getElementById("money").innerHTML = "$" + Math.round(gameData.money);

    // create one sidebar particle per photon with the mapped color
    var color = wavelengthToRGB(wavelength);
    if (window.createSidebarParticle) {
      window.createSidebarParticle(color);
    }
  }

  // reset electrons for now (preserving your earlier behavior)
  gameData.electrons = 0;
}

// ========== Main photon canvas (kept similar but robust) ==========
const photonCanvas = document.getElementById("photonss");
const pctx = photonCanvas.getContext('2d');

function resizePhotonCanvas() {
  photonCanvas.width = 200;
  photonCanvas.height = window.innerHeight;
}
resizePhotonCanvas();
window.addEventListener('resize', resizePhotonCanvas);

// simple particle setup for the main view (uses gameData.photons as count)
class Point {
  constructor(x, y, radius, color, dy) {
    this.x = x; this.y = y; this.radius = radius; this.color = color; this.dy = dy;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  update(canvas) {
    this.y += this.dy;
    if (this.y > canvas.height + this.radius) {
      this.y = -this.radius;
      this.x = Math.random() * canvas.width;
    }
  }
}
const mainPoints = [];
function populateMainPoints() {
  mainPoints.length = 0;
  for (let i = 0; i < (gameData.photons || 0); i++) {
    const r = Math.random() * 5 + 2;
    const x = Math.random() * (photonCanvas.width - r * 2) + r;
    const y = Math.random() * photonCanvas.height;
    const dy = Math.random() * 1 + 0.5;
    mainPoints.push(new Point(x, y, r, "#6279a7", dy));
  }
}
populateMainPoints();

function animateMain() {
  requestAnimationFrame(animateMain);
  pctx.clearRect(0, 0, photonCanvas.width, photonCanvas.height);
  for (let i = 0; i < mainPoints.length; i++) {
    mainPoints[i].update(photonCanvas);
    mainPoints[i].draw(pctx);
  }
}
animateMain();

// ========== Sidebar canvas and particles ==========
const sidebarCanvas = document.getElementById("sidebarCanvas");
const sctx = sidebarCanvas.getContext('2d');

function resizeSidebarCanvas(){
  // match the visual sidebar width (CSS controls actual width, but keep canvas pixel sizing)
  const rect = sidebarCanvas.getBoundingClientRect();
  sidebarCanvas.width = Math.max(100, Math.floor(rect.width));
  sidebarCanvas.height = window.innerHeight;
}
resizeSidebarCanvas();
window.addEventListener('resize', resizeSidebarCanvas);

class SidebarParticle {
  constructor(x, y, radius, color, dy) {
    this.x = x; this.y = y; this.radius = radius; this.color = color; this.dy = dy;
  }
  update() {
    this.y += this.dy;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

const sidebarParticles = [];
// Expose a creation function globally so fireE can call it
window.createSidebarParticle = function(color) {
  // ensure canvas width is up-to-date
  const w = sidebarCanvas.width;
  const r = Math.random() * 6 + 3;
  const x = Math.random() * (w - r * 2) + r;
  const y = -r;
  const dy = 1 + Math.random() * 2;
  sidebarParticles.push(new SidebarParticle(x, y, r, color, dy));
};

// sidebar animation loop
function animateSidebar() {
  requestAnimationFrame(animateSidebar);
  sctx.clearRect(0, 0, sidebarCanvas.width, sidebarCanvas.height);
  for (let i = sidebarParticles.length - 1; i >= 0; i--) {
    const p = sidebarParticles[i];
    p.update();
    p.draw(sctx);
    if (p.y - p.radius > sidebarCanvas.height) {
      sidebarParticles.splice(i, 1);
    }
  }
}
animateSidebar();

// Optional: periodically sync main point population to photons count
setInterval(() => {
  // if photon count changed, repopulate main view
  if (mainPoints.length !== (gameData.photons || 0)) {
    populateMainPoints();
  }
}, 500);
