var gameData ={
  money: 0,
  hydrogen: 1,
  helium: 0,
  argon: 0,
  xenon: 0,
  neon: 0,
  atoms: 1,
  mocvdUnlocked: 0,
  tier: 0,  
  electrons: 0,
  power: 10,
  electronBeamNum: 1,
  tierbonus: 1,
  maximumminl:410,
  maximummaxl: 656,
  hydcost:100000,
  helcost:1750000,
  argcost:10000000,
  xencost:20000000,
  neocost:1000000000,
  hydlamps:0,
  hellamps:0,
  arglamps:0,
  xenlamps:0,
  neolamps:0,
}
///commmmitsssssss pleassseee
var randData ={
  wavelengthMod: 0.5,
}

//asbjdshjdbjuah
function fireE(){
  gameData.electrons += gameData.electronBeamNum;
  for (let i = 0; i < gameData.electrons-gameData.atoms; i++){
    const min = gameData.maximumminl;
    const max = gameData.maximummaxl;
  
    const wavelength = Math.floor(randData.wavelengthMod * Math.random() * (max - min + 1)) + min;
    document.getElementById("wvd").innerHTML=wavelength+" nm"
    gameData.money += wavelength * gameData.atoms/randData.wavelengthMod * gameData.power * gameData.tierbonus
    document.getElementById("deltamoney").innerHTML= "+$"+ (wavelength * gameData.atoms/randData.wavelengthMod * gameData.power * gameData.tierbonus)
    document.getElementById("money").innerHTML= "$" + gameData.money
    
  }

  //hdsjbgrbwshdkj,f
}
function buyhyd(){
  if (gameData.money >= gameData.hydcost) { 
    gameData.money -= gameData.hydcost
    gameData.atoms += 1
    gameData.hydrogen += 1
    gameData.hydcost += gameData.hydcost*(randData.wavelengthMod+1)

  }
      document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("hydrogen").innerHTML= gameData.hydrogen + " Hydrogen Atoms"
    document.getElementById("buyhyd").innerHTML= "Buy 1 Hydrogen Atom for $" + gameData.hydcost
} 
function buyhel(){
  if (gameData.money >= gameData.helcost) { 
    gameData.money -= gameData.helcost
    gameData.atoms += 1
    gameData.helium += 1
    gameData.helcost += gameData.helcost*(randData.wavelengthMod+1)

    gameData.maximumminl = 388
    gameData.maximummaxl = 781
   
  }
   document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("helium").innerHTML= gameData.helium + " Helium Atoms"
    document.getElementById("buyhel").innerHTML= "Buy 1 Helium Atom for $" + gameData.helcost
}
function buyarg(){
  if (gameData.money >= gameData.argcost) {
    gameData.money -= gameData.argcost
    gameData.atoms += 1
    gameData.argon += 1
    gameData.argcost += gameData.argcost*(randData.wavelengthMod+1)

    gameData.maximumminl = 351
    gameData.minimummaxl = 810
    
  }
   document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("argon").innerHTML= gameData.argon + " Argon Atoms"
    document.getElementById("buyarg").innerHTML= "Buy 1 Argon Atom for $" + gameData.argcost
}
function buyxen(){
  if (gameData.money >= gameData.xencost){
    gameData.money -= gameData.xencost
    gameData.atoms += 1
    gameData.xenon += 1
    gameData.xencost += gameData.xencost*(randData.wavelengthMod+1)

    gameData.maximumminl = 350
    gameData.minimummaxl = 1100
  }
  document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("xenon").innerHTML= gameData.xenon + " Xenon Atoms"
    document.getElementById("buyxen").innerHTML= "Buy 1 Xenon Atom for $" + gameData.xencost
}
function buyneo(){
  if (gameData.money >= gameData.neocost){
    gameData.money -= gameData.neocost
    gameData.atoms += 1
    gameData.neon += 1
    gameData.neocost += gamedata.neocost*(randData.wavelengthMod+1)
    gameData.maximumminl = 350
    gameData.minimummaxl = 1100
    document.getElementById("tier1").style.display="inline"
  }
  document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("neon").innerHTML= gameData.neon + " Neon Atoms"
    document.getElementById("buyneo").innerHTML= "Buy 1 Neon Atom for $" + gameData.neocost
}
function mhydlamp(){
  if (gameData.hydrogen >= 30){
    gameData.hydrogen -= 30
    gameData.hydlamps += 1
  }
   document.getElementById("hydrogen").innerHTML= gameData.hydrogen + " Hydrogen Atoms"
}
function tier1(){
  if (gameData.neon >= 5){
    gameData.tier = 1
    gameData.money = 0
    gameData.atoms = 1 
    gameData.hydrogen = 1
    gameData.helium = 0
    gameData.argon = 0
    gameData.xenon = 0
    gameData.neon = 0
    gameData.power * 2 
    gameData.tierbonus * 2
    gameData.electronBeamNum = 1
    gameData.maximumminl = 410
    gameData.minimummaxl = 656
    gameData.hydcost = 100000
    gameData.helcost = 1750000
    gameData.argcost = 10000000
    gameData.xencost = 20000000
    gameData.neocost = 1000000000
  
  }
    document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("neon").innerHTML= gameData.neon + " Neon Atoms"
    document.getElementById("xenon").innerHTML= gameData.xenon + " Xenon Atoms"
    document.getElementById("buyxen").innerHTML= "Buy 1 Xenon Atom for $" + gameData.xencost
    document.getElementById("buyneo").innerHTML= "Buy 1 Neon Atom for $" + gameData.neocost
    document.getElementById("argon").innerHTML= gameData.argon + " Argon Atoms"
    document.getElementById("buyarg").innerHTML= "Buy 1 Argon Atom for $" + gameData.argcost
    document.getElementById("helium").innerHTML= gameData.helium + " Helium Atoms"
    document.getElementById("buyhel").innerHTML= "Buy 1 Helium Atom for $" + gameData.helcost
    document.getElementById("hydrogen").innerHTML= gameData.hydrogen + " Hydrogen Atoms"
    document.getElementById("buyhyd").innerHTML= "Buy 1 Hydrogen Atom for $" + gameData.hydcost
    document.getElementById("deltamoney").innerHTML= "+$"+ (wavelength * gameData.atoms/randData.wavelengthMod * gameData.power * gameData.tierbonus)
    document.getElementById("hydlamps").style.display="inline"
    document.getElementById("tier1").style.display="none"
  
}
window.setInterval(function(){
  randData.wavelengthMod=Math.random()
},100)
window.setInterval(function(){
  if (gameData.hydlamps >= 1){
     for (let i = 0; i < gameData.hydlamps; i++){
    const min = 410;
    const max = 656;
  
    const wavelength = Math.floor(randData.wavelengthMod * Math.random() * (max - min + 1)) + min;
    document.getElementById("wvd").innerHTML=wavelength+" nm"
    gameData.money += wavelength * gameData.atoms/randData.wavelengthMod * gameData.power * gameData.tierbonus
    document.getElementById("deltamoney").innerHTML= "+$"+ (wavelength * gameData.atoms/randData.wavelengthMod * gameData.power * gameData.tierbonus)
    document.getElementById("money").innerHTML= "$" + gameData.money
    }
  }  
},500)
