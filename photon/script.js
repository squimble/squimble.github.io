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
  maximumminl:410,
  maximummaxl: 656,
  hydcost:100000,
  helcost:175000,
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
} 
function buyhel(){
  if (gameData.money >= 175000) { 
    gameData.money -= 175000
    gameData.atoms += 1
    gameData.helium += 1
    gameData.helcost += gameData.helcost*(randData.wavelengthMod+1)

    gameData.maximumminl = 388
    gameData.maximummaxl = 781
   
  }
   document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("helium").innerHTML= gameData.helium + " Helium Atoms"
}

window.setInterval(function(){
  randData.wavelengthMod=Math.random()
},100)
  
