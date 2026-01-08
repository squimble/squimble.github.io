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
///commmmitsssssss pleassseee
var randData ={
  wavelengthMod: 0.5,
}
//asbjdshjdbjuah
function fireE(){
  gameData.electrons += gameData.electronBeamNum;
  for (let i = 0; i < gameData.electrons-gameData.atoms; i++){
    const min = 380;
    const max = 780;
  
    const wavelength = Math.floor(randData.wavelengthMod * Math.random() * (max - min + 1)) + min;
    gameData.money += wavelength * gameData.atoms/randData.wavelengthMod * gameData.power * gameData.tierbonus
    document.getElementById("money").innerHTML= "$" + gameData.money
    
  }

  //hdsjbgrbwshdkj,f
}
function buyhyd(){
  if (gameData.money >= 100000) { 
    gameData.money -= 100000
    gameData.atoms += 1
    gameData.hydrogen += 1

  }
      document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("hydrogen").innerHTML= gameData.hydrogen + " Hydrogen Atoms"
} 
function buyhel(){
  if (gameData.money >= 100000) { 
    gameData.money -= 1000000
    gameData.atoms += 1
    gameData.helium += 1
   
  }
   document.getElementById("count").innerHTML= gameData.atoms + " Atoms"
    document.getElementById("money").innerHTML= "$" + gameData.money
    document.getElementById("helium").innerHTML= gameData.helium + " Helium Atoms"
}
