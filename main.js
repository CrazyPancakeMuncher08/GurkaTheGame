var gurka = document.getElementById("gurka")
var gurkortext = document.getElementById("gurkortext")
var gurka_rot = 0
var gurka_rot_destination = 0
var gurkor = 0
var gpc = 1
var upgradeprice = 12
var autoclickers = 0

var skins = []
var ownedskin = null

function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}

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
var colorinverteddeafultskin = new Skin("Color Inverted Deafult",250,"invertedgurka.png")
var uhohskin = new Skin("Uh Oh Stinky",500,"uhohstinky.png")
var donaldskin = new Skin("Donald Trump",1000,"donaldface.png")
var kunggurkaskin = new Skin("Kung Gurka",3000,"kunggurka.png")

ownedskin = deafultskin

function Click() {
    gurkor += gpc
    gurka_rot_destination += gpc
    UpdateGurka()
}

function UpdateGurka() {
    gurka.style = "transform:rotate(" + gurka_rot.toString() + "deg)"
    if (ownedskin != null) {
        gurka.src = ownedskin.path
    }
    gurkortext.innerHTML = "Gurkor: " + gurkor.toString()
    document.getElementById("upgradepricetxt").innerHTML = "AutoClickers: " + autoclickers.toString()
    document.getElementById("upgradebtn").innerHTML = "Buy 1 AutoClicker for " + upgradeprice.toString() + " Gurkor"
}

function Save() {
    localStorage.setItem("autoc",autoclickers)
    localStorage.setItem("upgradeprice",upgradeprice)
    localStorage.setItem("skin",ownedskin.name)
    localStorage.setItem("gpc",gpc)
    localStorage.setItem("gurkor",gurkor)
}

function Load() {
    gurkor = parseInt(localStorage.getItem("gurkor"))
    gpc = parseInt(localStorage.getItem("gpc"))
    upgradeprice = parseInt(localStorage.getItem("upgradeprice"))
    autoclickers = parseInt(localStorage.getItem("autoc"))
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
        autoclickers += 1
        upgradeprice += 12
        UpdateGurka()
    }
}

UpdateGurka()

var felwayunlocked = false
function Tick() {
    gurkor += autoclickers
    gurka_rot_destination += autoclickers
    UpdateGurka()
    if (gurka_rot < 0) {
        if (felwayunlocked == false) {
            felwayunlocked = true
            UpdateGurka()
            alert("WRONG WAY!")
        }
    }
}

function ZeroTick() {
    gurka_rot = lerp(gurka_rot,gurka_rot_destination,0.03)
    UpdateGurka()
}

setInterval(Tick,1000)
setInterval(ZeroTick,1)