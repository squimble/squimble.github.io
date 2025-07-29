var gameData = {
  tachs: 0,
  tachYield: 1,
  tachsYieldCost: 10,
  timesUpgraded: 1,
  tachsUpgradeCost: 40,
  autoTachsCost: 160,
  autobuyers: 0,
  autoYield: 0,
  timesInfinitied: 0,
  universeCost: 200000000000,
  strangeQuarks: 0,
  timesBought: 0,
  reduceCost: 1,
  time: 1000,
  multiplyCost: 1,
  multiplier: 1,
  converterCost: 1,
  converter: 0,
  cUCost: 2
}
var strangeData = {
  strangeYield: 1,
  price: 40,
  isEternityP: 0,
  aPrice:  80000000000000,
  aQuantity: 0,
  qfMultiplier: 1,
  bPrice: 160000000000000,
  bQuantity: 0,
  isBeta: 0,
  isGamma:0,
  gPrice:3200000000000000,
  gQuantity:0
}
function collide(){
  gameData.tachs += gameData.tachYield
  document.getElementById("tachies").innerHTML = gameData.tachs + " Tachyons"
}
function autocollide() {
  gameData.tachs += gameData.autoYield * gameData.autobuyers^gameData.timesInfinitied^strangeData.qfMultiplier
  document.getElementById("tachies").innerHTML = gameData.tachs + " Tachyons"
}

function buyColliders() {
  if (gameData.tachs >= gameData.tachsYieldCost) {
    gameData.tachs -= gameData.tachsYieldCost
    gameData.tachYield += 1
    gameData.autoYield += 1
    gameData.tachsYieldCost *= 2
    document.getElementById("tachies").innerHTML = gameData.tachs + " Tachyons"
    document.getElementById("burnYaMoney").innerHTML = "Buy Colliders (Currently Only  " + gameData.tachYield + ") Cost: " + gameData.tachsYieldCost + " Tachyons"
  }
}
function upgradeColliders() {
  if (gameData.tachs >= gameData.tachsUpgradeCost) {
    gameData.tachs -= gameData.tachsUpgradeCost
    gameData.tachYield *= 2
    gameData.autoYield *= 2
    gameData.timesUpgraded += 1
    gameData.tachsUpgradeCost *= 2
    document.getElementById("tachies").innerHTML = gameData.tachs + " Tachyons"
    document.getElementById("hulkSMASH").innerHTML = "Collide more particles (Currently Only  " + gameData.timesUpgraded + "x) Cost: " + gameData.tachsUpgradeCost + " Tachyons"
  }
}
function buyAutomatic() {
  if (gameData.tachs >= gameData.autoTachsCost) {
    gameData.tachs -= gameData.autoTachsCost
    gameData.autoTachsCost *= 2
    gameData.autobuyers += 1
    document.getElementById("tachies").innerHTML = gameData.tachs + " Tachyons"
    document.getElementById("superSMASH").innerHTML = "Buy Auto Colliders (Currently Only  " + gameData.autobuyers + ") Cost: " + gameData.autoTachsCost + " Tachyons"
  }
}
function infinity(){
  if (gameData.tachs >= gameData.universeCost){
     gameData.tachs = 0
     gameData.autobuyers = 1
     gameData.tachYield = 1*gameData.multiplier
     gameData.autoYield = 1*gameData.multiplier
     gameData.timesUpgraded =1
     gameData.timesInfinitied += 1
     gameData.tachsYieldCost = 10
     gameData.autoTachsCost = 160
     gameData.tachsUpgradeCost = 40
     gameData.strangeQuarks += 1
     document.getElementById("tachies").innerHTML = gameData.tachs + " Tachyons"
     document.getElementById("superSMASH").innerHTML = "Buy Auto Colliders (Currently Only  " + gameData.autobuyers + ") Cost: " + gameData.autoTachsCost + " Tachyons"
     document.getElementById("hulkSMASH").innerHTML = "Collide more particles (Currently Only  " + gameData.timesUpgraded + ") Cost: " + gameData.tachsUpgradeCost + " Tachyons"
     document.getElementById("burnYaMoney").innerHTML = "Buy Colliders (Currently Only  " + gameData.tachYield + ") Cost: " + gameData.tachsYieldCost + " Tachyons"
     document.getElementById("strange").innerHTML = gameData.strangeQuarks + " Strange Quarks"
  }
}
function multiply(){
  if (gameData.strangeQuarks >= gameData.multiplyCost){
    gameData.strangeQuarks -= gameData.multiplyCost
    gameData.multiplier *= 4
    gameData.multiplyCost*=2
    document.getElementById("multiply").innerHTML = "Multiply your gain by 4x PERMANENTLY "+"Cost:"+ " "+gameData.multiplyCost+" Strange Quarks" 
    document.getElementById('strange').innerHTML= gameData.strangeQuarks + " Strange Quarks"
  }
}
function convert(){
  if (gameData.strangeQuarks >= gameData.converterCost){
    gameData.strangeQuarks -= gameData.converterCost
    gameData.converter += 1
    gameData.convertTachs = 3000000000000 / gameData.converter
    gameData.converterCost+= 1
    document.getElementById("convert").innerHTML = "Turn every "+ gameData.convertTachs+"Tachyons to 5 Strange Quarks Cost:" +gameData.converterCost
    document.getElementById("strange").innerHTML = gameData.strangeQuarks + " Strange Quarks"
  }
}
function cUpgrade(){
  if (gameData.strangeQuarks >= gameData.cUCost){
    gameData.strangeQuarks -= gameData.cUCost
    gameData.converter *= 2
    gameData.cUCost *= 2
    document.getElementById("strange").innerHTML = gameData.strangeQuarks + " Strange Quarks"
    document.getElementById("convert").innerHTML = "Turn every "+ gameData.convertTachs+"Tachyons to 5 Strange Quarks Cost:" +gameData.converterCost
    document.getElementById('cUpgrade').innerHTML = "Optimize your converter (tachs needed to convert *2) Cost:"+ gameData.cUCost+" Strange Quarks"
  }
    
}
function annihilate(){
  gameData.autobuyers = 0
  gameData.timesBought = 0
}
function sqCollide(){
 if (gameData.timesInfinitied >= 5){
  gameData.strangeQuarks += strangeData.strangeYield
  document.getElementById("strange").innerHTML = gameData.strangeQuarks + " Strange Quarks"
 }
}
function sqUpgrade(){
 if (gameData.timesInfinitied >= 5){
  if (gameData.strangeQuarks >= strangeData.price) {
    gameData.strangeQuarks -= strangeData.price
    strangeData.price *= 2
    strangeData.strangeYield *= 4
    document.getElementById("strange").innerHTML = gameData.strangeQuarks + " Strange Quarks"
    document.getElementById("sqU").innerHTML = "Upgrade your sQ colliders  Cost:"+strangeData.price+" Strange Quarks"
   }
  }
}
function eternity(){
  if (gameData.strangeQuarks >= 1000000000000){
     gameData.tachYield = 1*gameData.multiplier
     gameData.autoYield = 1*gameData.multiplier
     gameData.timesUpgraded =1
     gameData.timesInfinitied += 1
     gameData.tachsYieldCost = 10
     gameData.autoTachsCost = 160
     gameData.tachsUpgradeCost = 40
     gameData.strangeQuarks = 0
     gameData.reduceCost= 1
     gameData.time= 1000
     gameData.multiplyCost= 1
     gameData.multiplier=1
     gameData.converterCost= 1
     gameData.converter = 0
     gameData.cUCost = 2
     gameData.tachs = 0
     strangeData.price= 40
     strangeData.isEternityP = 1
     strangeData.strangeYield = 1
     strangeData.EMultiplier *= 4
     document.getElementById("sqU").innerHTML = "Upgrade your sQ colliders  Cost:"+strangeData.price+" Strange Quarks"
     document.getElementById("convert").innerHTML = "Turn every "+ gameData.convertTachs+"Tachyons to 5 Strange Quarks Cost:" +gameData.converterCost
     document.getElementById('cUpgrade').innerHTML = "Optimize your converter (tachs needed to convert *2) Cost:"+ gameData.cUCost+" Strange Quarks"
     document.getElementById("tachies").innerHTML = gameData.tachs + " Tachyons"
     document.getElementById("multiply").innerHTML = "Multiply your gain by 4x PERMANENTLY "+"Cost:"+ " "+gameData.multiplyCost+" Strange Quarks"
     document.getElementById("superSMASH").innerHTML = "Buy Auto Colliders (Currently Only  " + gameData.autobuyers + ") Cost: " + gameData.autoTachsCost + " Tachyons"
     document.getElementById("hulkSMASH").innerHTML = "Collide more particles (Currently Only  " + gameData.timesUpgraded + ") Cost: " + gameData.tachsUpgradeCost + " Tachyons"
     document.getElementById("burnYaMoney").innerHTML = "Buy Colliders (Currently Only  " + gameData.tachYield + ") Cost: " + gameData.tachsYieldCost + " Tachyons"
     document.getElementById("strange").innerHTML = gameData.strangeQuarks + " Strange Quarks"
  }
    
}
function alpha(){
  if (strangeData.isEternityP >= 1){
    if(gameData.strangeQuarks >=  strangeData.aPrice){
      strangeData.aQuantity += 10
      strangeData.qfMultiplier = strangeData.qfMultiplier*strangeData.aQuantity*strangeData.EMultiplier
      gameData.strangeQuarks -= strangeData.aPrice
      strangeData.aPrice *= 2
      document.getElementById("alpha").innerHTML="Buy an Alpha Particle ("+strangeData.aQuantity+" owned) Cost:"+strangeData.aPrice
    }
  }
}
function beta(){
  if (strangeData.isEternityP >= 1){
    if(gameData.strangeQuarks >=  strangeData.bPrice){
      strangeData.bQuantity += 10
      strangeData.qfMultiplier = strangeData.qfMultiplier*strangeData.aQuantity*strangeData.EMultiplier
      gameData.strangeQuarks -= strangeData.bPrice
      strangeData.bPrice *= 2
      document.getElementById("beta").innerHTML="Buy a Beta Particle ("+strangeData.bQuantity+" owned) Cost:"+strangeData.bPrice
    }
  }
}
function gamma(){
  if (strangeData.isEternityP >= 1){
    if(gameData.strangeQuarks >=  strangeData.gPrice){
      strangeData.gQuantity += 10
      strangeData.qfMultiplier = strangeData.qfMultiplier*strangeData.aQuantity*strangeData.EMultiplier
      gameData.strangeQuarks -= strangeData.gPrice
      strangeData.gPrice *= 2
      document.getElementById("gamma").innerHTML="Buy a Gamma Particle ("+strangeData.gQuantity+" owned) Cost:"+strangeData.gPrice
    }
  }
}
  window.setInterval(function(){
autocollide()
if (gameData.tachs >= gameData.convertTachs){
  gameData.tachs-= gameData.convertTachs
  gameData.strangeQuarks += 5
  document.getElementById("tachies").innerHTML = gameData.tachs+ " Tachyons"
  document.getElementById("strange").innerHTML = gameData.strangeQuarks + " Strange Quarks"
}

while(gameData.tachs<0){
  gameData.tachs=gameData.tachs * -1
}

}, gameData.time)

  var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("tachyons", JSON.stringify(gameData))
  localStorage.setItem("strange", JSON.stringify(strangeData))
  if (isNaN(strangeData.aQuantity)) {
  strangeData.aQuantity = 0; // Set a default value
  }

  if (isNaN(strangeData.bQuantity)) {
    strangeData.bQuantity = 0; // Set a default value
  }

// Perform the addition
strangeData.aQuantity += strangeData.bQuantity;

document.getElementById("alpha").innerHTML = "Buy an Alpha Particle (" + strangeData.aQuantity + " owned) Cost:" + strangeData.aPrice;
if (isNaN(strangeData.bQuantity)) {
  strangeData.bbQuantity = 0; // Set a default value
  }

  if (isNaN(strangeData.gQuantity)) {
    strangeData.gQuantity = 0; // Set a default value
  }

// Perform the addition
strangeData.bQuantity += strangeData.gQuantity;

document.getElementById("beta").innerHTML = "Buy a Beta Particle (" + strangeData.bQuantity + " owned) Cost:" + strangeData.bPrice;
}, 15000)
var savegame = JSON.parse(localStorage.getItem("tachyons"))
var strangeGame = JSON.parse(localStorage.getItem("strange"))
if (savegame !== null) {
  gameData = savegame
}          
if (strangeGame !== null) {
  strangeData = strangeGame
}          
