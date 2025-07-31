var gameData={
  wings: 0,
  fuselage:0,
  engines:0,
  airplanes:0,
  points:0,
  bonus:1,
  cessna150:0,
  wingfactories:0,
  wfcost:10,
  ffactories:0,
  ffcost:10,
  enginefactories:0,
  efcost:10,
  cessna150f:0,
  cessna150fcost:25,
  ulockc172:1,
  enginelevel:1,
  upgrade1cost:200,
  cessna172:0,
  cessna172f:0,
  c172fcost:150,
  upgradewingc:200,
  winglevel:1,
  RDPoints:0,
  DHC6:0
}
/* guygutfyrvcgbhrtxcf gvfd6re5ctfvgbuy765dectfvgbygtfvgbh please commit*/
function wing(){
  gameData.wings+=1
  document.getElementById("wings").innerHTML = gameData.wings+" Wings"
}
function fuselage(){
  gameData.fuselage+=1
  document.getElementById("fuselage").innerHTML= gameData.fuselage+" Fuselages"
}
function engine(){
  gameData.engines+=1
  document.getElementById("engine").innerHTML= gameData.engines+" Engines"
}

function cessna150(){
  if(gameData.wings>=2){
    if(gameData.engines>=1){
      if(gameData.fuselage>=1){
        gameData.wings-=2
        gameData.engines-=1
        gameData.fuselage-=1
        gameData.airplanes+=1
        gameData.cessna150+=1
        document.getElementById("wings").innerHTML = gameData.wings+" Wings"
        document.getElementById("fuselage").innerHTML= gameData.fuselage+" Fuselages"
        document.getElementById("engine").innerHTML= gameData.engines+" Engines"
        document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
        document.getElementById("cessna150").innerHTML= gameData.cessna150+" Cessna 150s"
      }
    }
  }
}
function cessna172(){
  if(gameData.wings>=2){
    if(gameData.engines>=1){
      if(gameData.enginelevel>=2){
        if(gameData.fuselage>=1){
          gameData.wings-=2
          gameData.engines-=1
          gameData.fuselage-=1
          gameData.airplanes+=1
          gameData.cessna172+=1
          document.getElementById("wings").innerHTML = gameData.wings+" Wings"
          document.getElementById("fuselage").innerHTML= gameData.fuselage+" Fuselages"
          document.getElementById("engine").innerHTML= gameData.engines+" Engines"
          document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
          document.getElementById("cessna172").innerHTML= gameData.cessna172+" Cessna 172s"
       }
     }
   }
 }
}  
function dhc6(){
  if(gameData.wings>=2){
    if(gameData.winglevel>=2){
      if(gameData.engines>=2){
        if(gameData.enginelevel>=3){
          if(gameData.fuselage>=1){
            gameData.wings-=2
            gameData.engines-=3
            gameData.fuselage-=1
            gameData.airplanes+=1
            gameData.DHC6+=1
            document.getElementById("wings").innerHTML = gameData.wings+" Wings"
            document.getElementById("fuselage").innerHTML= gameData.fuselage+" Fuselages"
            document.getElementById("engine").innerHTML= gameData.engines+" Engines"
            document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
            document.getElementById("dhc6").innerHTML= gameData.DHC6+" DHC-6 Twin Otters"
       }
     }
   }
 }
}
}
function sell(){
  if(gameData.airplanes>= 1){
    gameData.points= gameData.points+((gameData.cessna172*2)+(gameData.DHC6*3)+gameData.cessna150)*gameData.bonus
    gameData.airplanes-=gameData.cessna150+gameData.cessna172
    gameData.cessna150-=gameData.cessna150
    gameData.cessna172-=gameData.cessna172
    document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
    document.getElementById("points").innerHTML= gameData.points+" Points"
    document.getElementById("cessna150").innerHTML= gameData.cessna150+" Cessna 150s"
    document.getElementById("cessna172").innerHTML= gameData.cessna172+" Cessna 172s"
    document.getElementById("dhc6").innerHTMl= gameData.DHC6+" DHC-6 Twin Otters"
  }
}
function wingfactory(){
  if(gameData.points>=gameData.wfcost){
    gameData.points-= gameData.wfcost
    gameData.wingfactories+=1
    gameData.wfcost+=5
    document.getElementById("points").innerHTML= gameData.points+" Points"
    document.getElementById("wingfactory").innerHTML= "Buy a Wing Factory for "+gameData.wfcost+" points"
  }
}
function ffactory(){
  if(gameData.points>=gameData.ffcost){
    gameData.points-= gameData.ffcost
    gameData.ffactories+=1
    gameData.ffcost+=5
    document.getElementById("points").innerHTML= gameData.points+" Points"
    document.getElementById("ffactory").innerHTML= "Buy a Fuselage Factory for "+gameData.ffcost+" points"
  }
}
function enginefactory(){
  if(gameData.points>=gameData.efcost){
    gameData.points-= gameData.efcost
    gameData.enginefactories+=1
    gameData.efcost+=5
    document.getElementById("points").innerHTML= gameData.points+" Points"
    document.getElementById("enginefactory").innerHTML= "Buy an Engine Factory for "+gameData.efcost+" points"
  }
}
function cessna150f(){
  if(gameData.points>=gameData.cessna150fcost){
    gameData.points-= gameData.cessna150fcost
    gameData.cessna150f+=1
    gameData.cessna150fcost*=2
    document.getElementById("points").innerHTML= gameData.points+" Points"
    document.getElementById("cessna150f").innerHTML= "Buy a Cessna 150 Factory for "+gameData.cessna150fcost+" points"
  }
}
function c172f(){
  if(gameData.points>=gameData.c172fcost){
    gameData.points-=gameData.c172fcost
    gameData.cessna172f+=1
    gameData.c172fcost*=3
    document.getElementById("points").innerHTML= gameData.points+" Points"
    document.getElementById("c172f").innerHTML= "Buy a Cessna 172 Factory for "+gameData.c172fcost+" points"
  }
}
function unlockC172() {
  if(gameData.cessna150>=250){
    gameData.airplanes-= 250
    gameData.cessna150-=250
    gameData.ulockc172=0
    document.getElementById("cessna150").innerHTML= gameData.cessna150+" Cessna 150s"
    document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
    document.getElementById("c172").style.display = "none";   
    document.getElementById("upgrade1").style.display="inline"
    document.getElementById("172cessna").style.display="inline"
    document.getElementById("c172f").style.display="inline"
    document.getElementById("uDHC6").style.display="inline"
  }
}
function upgrade1(){
  if(gameData.points>=gameData.upgrade1cost){
    gameData.points-=gameData.upgrade1cost
    gameData.enginelevel+=1
    gameData.upgrade1cost+=125
    document.getElementById("upgrade1").innerHTML= "Upgrade Engine to Level "+(gameData.enginelevel+1)+" for "+gameData.upgrade1cost+" points"
    
    document.getElementById("points").innerHTML= gameData.points+" Points"
  }
}
function upgradewing(){
  if(gameData.points>=gameData.upgradewingc){
    gameData.points-=gameData.upgradewingc
    gameData.winglevel+=1
    gameData.upgradewingc+=125
    document.getElementById("points").innerHTML= gameData.points+" Points"
    document.getElementById("upwing").innerHTML= "Upgrade wings to level "+(gameData.winglevel+1)+" for "+gameData.upgradewingc+" points"
  }
}

function unlockDHC6(){
  if(gameData.cessna172>=500){
    if(gameData.cessna150>=600){
    document.getElementById("uDHC6").style.display="none"
    document.getElementById("RD").style.display="inline"
    document.getElementById("send").style.display="inline"
    document.getElementById("research").style.display="inline"
    document.getElementById("upwing").style.display="inline"
    document.getElementById("otter").style.display="inline"
    document.getElementById("utech").style.display="inline"
    document.getElementById("tech").style.display="inline"  
    gameData.cessna172-=500
    gameData.cessna150-=600
    gameData.airplanes-=1100
    document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
    }
  }
}
function send2RD(){
  document.getElementById("send").innerHTML= "Send all Aircraft to the R&D Lab for "+((gameData.cessna172*2)+(gameData.DHC6*3)+gameData.cessna150)+" R&D Points"
  gameData.RDPoints+=((gameData.cessna172*2)+(gameData.DHC6*3)+gameData.cessna150)
  document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
  gameData.cessna150-=gameData.cessna150
  gameData.cessna172-=gameData.cessna172
  gameData.DHC6-=gameData.DHC6
  document.getElementById("rdp").innerHTML= gameData.RDPoints+" R&D Points"
  document.getElementById("cessna150").innerHTML= gameData.cessna150+" Cessna 150s"
  document.getElementById("cessna172").innerHTML= gameData.cessna172+" Cessna 172s"
  document.getElementById("dhc6").innerHTMl= gameData.DHC6+" DHC-6 Twin Otters"
}
window.setInterval(function(){
  document.getElementById("send").innerHTML= "Send all Aircraft to the R&D Lab for "+((gameData.cessna172*2)+gameData.cessna150+(gameData.DHC6*3))+" R&D Points"
  
  
})
window.setInterval(function(){
  document.getElementById("sell").innerHTML= "Sell your Aircraft for "+((gameData.cessna172*2)+(gameData.DHC6*3)+gameData.cessna150)*gameData.bonus+" Points!"
  document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
  document.getElementById("send").innerHTML= "Send all Aircraft to the R&D Lab for "+((gameData.cessna172*2)+(gameData.DHC6*3)+gameData.cessna150)+" R&D Points"
})
window.setInterval(function(){
  if(gameData.wingfactories>=1){
    gameData.wings+= gameData.wingfactories
    document.getElementById("wings").innerHTML = gameData.wings+" Wings"
  }
},1000)
window.setInterval(function(){
  if(gameData.ffactories>=1){
    gameData.fuselage+= gameData.ffactories
    document.getElementById("fuselage").innerHTML = gameData.fuselage+" Fuselages"
  }
},1000)
window.setInterval(function(){
  if(gameData.enginefactories>=1){
    gameData.engines+= gameData.enginefactories
    document.getElementById("engine").innerHTML = gameData.engines+" Engines"
  }
},1000)
window.setInterval(function(){
  if(gameData.cessna150f>=1){
   if(gameData.wings>=2*gameData.cessna150f){
    if(gameData.engines>=1*gameData.cessna150f){
      if(gameData.fuselage>=1*gameData.cessna150f){
        gameData.wings-=2*gameData.cessna150f
        gameData.engines-=1*gameData.cessna150f
        gameData.fuselage-=1*gameData.cessna150f
        gameData.airplanes+=1*gameData.cessna150f
        gameData.cessna150+=1*gameData.cessna150f
        document.getElementById("wings").innerHTML = gameData.wings+" Wings"
        document.getElementById("fuselage").innerHTML= gameData.fuselage+" Fuselages"
        document.getElementById("engine").innerHTML= gameData.engines+" Engines"
        document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
        document.getElementById("cessna150").innerHTML= gameData.cessna150+" Cessna 150s"
      }
    }
  }
  }
},500)
window.setInterval(function(){
  if(gameData.wings>=2*gameData.cessna172f){
    if(gameData.engines>=1*gameData.cessna172f){
      if(gameData.enginelevel>=2){
        if(gameData.fuselage>=1*gameData.cessna172f){
          gameData.wings-=2*gameData.cessna172f
          gameData.engines-=1*gameData.cessna172f
          gameData.fuselage-=1*gameData.cessna172f
          gameData.airplanes+=1*gameData.cessna172f
          gameData.cessna172+=1*gameData.cessna172f
          document.getElementById("wings").innerHTML = gameData.wings+" Wings"
          document.getElementById("fuselage").innerHTML= gameData.fuselage+" Fuselages"
          document.getElementById("engine").innerHTML= gameData.engines+" Engines"
          document.getElementById("count").innerHTML= gameData.airplanes+" Airplanes"
          document.getElementById("cessna172").innerHTML= gameData.cessna172+" Cessna 172s"
       }
     }
   }
 }
})
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("planes", JSON.stringify(gameData))

  if (isNaN(saveData.aQuantity)) {
  saveData.aQuantity = 0; // Set a default value
  }

var savegame = JSON.parse(localStorage.getItem("planes"))

if (saveGame !== null) {
  gameData = saveGame
}          
