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
  constructor(name,price,path,width,height) {
    this.name = name
    this.price = price
    this.path = path
    this.width = width
    this.height = height
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
  resize() {
      gurka.width = this.width
      gurka.height = this.height
  }
}

var deafultskin = new Skin("Deafult",0,"gurka.png",300,300)
var colorinverteddeafultskin = new Skin("Color Inverted Deafult",250,"invertedgurka.png",300,300)
var uhohskin = new Skin("Uh Oh Stinky",500,"uhohstinky.png",300,300)
var donaldskin = new Skin("Donald Trump",1000,"donaldface.png",300,300)
var kunggurkaskin = new Skin("Kung Gurka",3000,"kunggurka.png",300,300)
var thanosskin = new Skin("Thanos",8000,"thanos.png",300,300)
var coinskin = new Skin("Coin",5000,"coin.png",400,300)
var appleskin = new Skin("Apple",2000,"apple.png",300,300)
var pancakeskin = new Skin("Pancake",20000,"pancake.png",300,300)
var wrongwayskin = new Skin("Wrong Way","0","wrongwaygurka.png",300,300)

ownedskin = deafultskin

function Click() {
    gurkor += gpc
    if (ownedskin != wrongwayskin) {
        gurka_rot_destination += gpc
    } else {
        gurka_rot_destination -= gpc
    }
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
    skins[skin].resize()
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
    if (ownedskin != wrongwayskin) {
        gurka_rot_destination += autoclickers
    } else {
        gurka_rot_destination -= autoclickers
    }
    UpdateGurka()
    if (gurka_rot < 0) {
        if (felwayunlocked == false) {
            felwayunlocked = true
            UpdateGurka()
            alert("WRONG WAY!")
            ownedskin = wrongwayskin
        }
    }
}

function ZeroTick() {
    gurka_rot = lerp(gurka_rot,gurka_rot_destination,0.03)
    UpdateGurka()
}

setInterval(Tick,1000)
setInterval(ZeroTick,1)