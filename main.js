var gurka = document.getElementById("gurka")
var gurkortext = document.getElementById("gurkortext")
var gurka_rot = 0
var gurkor = 0
var gpc = 1
var upgradeprice = 50

var skins = []
var ownedskin = null

class Skin {
  constructor(name,price,path) {
    this.name = name
    this.price = price
    this.path = path
    skins.push(this)
  }
  buy() {
      if (gurkor >= this.price) {
          gurkor -= this.price
          ownedskin = this
          gurkortext.innerHTML = "Gurkor: " + gurkor.toString()
          gurka.src = this.path
      }
  }
}

var deafultskin = new Skin("Deafult",0,"gurka.png")
var uhohskin = new Skin("Uh Oh Stinky",900,"uhohstinky.png")
var donaldskin = new Skin("Donald Trump",2000,"donaldface.png")
var kunggurkaskin = new Skin("Kung Gurka",5000,"kunggurka.png")

ownedskin = deafultskin

function Click() {
    gurkor += gpc
    gurka_rot += gpc
    UpdateGurka()
}

function UpdateGurka() {
    gurka.style = "transform:rotate(" + gurka_rot.toString() + "deg)"
    if (ownedskin != null) {
        gurka.src = ownedskin.path
    }
    gurkortext.innerHTML = "Gurkor: " + gurkor.toString()
    document.getElementById("upgradepricetxt").innerHTML = "GPC: " + gpc.toString()
    document.getElementById("upgradebtn").innerHTML = "Upgrade gpc for " + upgradeprice.toString() + " Gurkor"
}

function Save() {
    localStorage.setItem("upgradeprice",upgradeprice)
    localStorage.setItem("skin",ownedskin.name)
    localStorage.setItem("gpc",gpc)
    localStorage.setItem("gurkor",gurkor)
}

function Load() {
    gurkor = parseInt(localStorage.getItem("gurkor"))
    gpc = parseInt(localStorage.getItem("gpc"))
    upgradeprice = parseInt(localStorage.getItem("upgradeprice"))
    for (i = 0; i < skins.length; i++) {
        if (skins[i].name == localStorage.getItem("skin")) {
            ownedskin = skins[i]
        }
    }
    UpdateGurka()
}

function Buy(skin) {
    skins[skin].buy()
}

function Upgrade() {
    if (gurkor >= upgradeprice) {
        gurkor -= upgradeprice
        gpc += 1
        upgradeprice += 50
        document.getElementById("upgradebtn").innerHTML = "Upgrade gpc for " + upgradeprice.toString() + " Gurkor"
        UpdateGurka()
    }
}

UpdateGurka()

var felwayunlocked = false
function CheckSecrets() {
    if (gurka_rot < 0) {
        if (felwayunlocked == false) {
            felwayunlocked = true
            alert("WRONG WAY!")
        }
    }
}

setInterval(CheckSecrets,1000)