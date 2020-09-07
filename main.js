var gurka = document.getElementById("gurka")
var gurkortext = document.getElementById("gurkortext")
var ranktext = document.getElementById("ranktext")
var nameinput = document.getElementById("nameinput")
var nametext = document.getElementById("nametext")
var gurka_rot = 0
var gurka_rot_destination = 0
var gurkor = 0
var gpc = 1
var upgradeprice = 12
var autoclickers = 0
var rank = 1
var doubled = 0
var name = "Gurka Factory"

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
var guccigurkaskin = new Skin("Gucci Gurka",10000,"guccigurka.png",300,300)
var laptopskin = new Skin("Laptop",3000,"laptop.png",400,300)
var coronaskin = new Skin("Corona",70000,"corona.png",300,300)
var rblxnoobskin = new Skin("Roblox Noob",90000,"rblxnoob.png",300,300)
var cakeskin = new Skin("Cake",500000,"cake.png",300,300)
var grassskin = new Skin("Grass",300000,"grass.png",300,300)
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
    nametext.innerHTML = name
}

function Save() {
    localStorage.setItem("name",name)
    localStorage.setItem("doubled",doubled)
    localStorage.setItem("rank",rank)
    localStorage.setItem("autoc",autoclickers)
    localStorage.setItem("upgradeprice",upgradeprice)
    localStorage.setItem("skin",ownedskin.name)
    localStorage.setItem("gpc",gpc)
    localStorage.setItem("gurkor",gurkor)
}

function Load() {
    name = localStorage.getItem("name")
    doubled = parseInt(localStorage.getItem("doubled"))
    rank = parseInt(localStorage.getItem("rank"))
    gurkor = parseInt(localStorage.getItem("gurkor"))
    gpc = parseInt(localStorage.getItem("gpc"))
    upgradeprice = parseInt(localStorage.getItem("upgradeprice"))
    autoclickers = parseInt(localStorage.getItem("autoc"))
    for (i = 0; i < skins.length; i++) {
        if (skins[i].name == localStorage.getItem("skin")) {
            ownedskin = skins[i]
        }
    }
    nameinput.value = name
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

function Rebirth() {
    if (rank == 5) {
        gurkor = 0
        rank = 1
        gpc += 1
        doubled += 2
        autoclickers = 0
        upgradeprice = 12
        gurka_rot_destination = 0
        ownedskin = deafultskin
        UpdateGurka()
    }
}

UpdateGurka()

var felwayunlocked = false
function Tick() {
    if (document.getElementById("autobbox").checked == true) {
        Upgrade()
    }
    if (nameinput.value != "") {
        name = nameinput.value
        UpdateGurka()
    }
    if (gurkor >= 0 && gurkor <= 1000) {
        rank = 1
    }
    if (gurkor > 1000 && gurkor <= 10000) {
        rank = 2
    }
    if (gurkor > 10000 && gurkor <= 100000) {
        rank = 3
    }
    if (gurkor > 100000 && gurkor <= 1000000) {
        rank = 4
    }
    if (gurkor > 1000000 && gurkor <= 99999999999999999999999999) {
        rank = 5
    }
    if (rank == 1) {
        ranktext.innerHTML = "Rank: Noob"
    }
    if (rank == 2) {
        ranktext.innerHTML = "Rank: Not good"
    }
    if (rank == 3) {
        ranktext.innerHTML = "Rank: Good"
    }
    if (rank == 4) {
        ranktext.innerHTML = "Rank: Very good"
    }
    if (rank == 5) {
        ranktext.innerHTML = "Rank: Expert"
    }
    
    if (doubled <= 0) {
        gurkor += autoclickers
    } else {
        gurkor += autoclickers * doubled
    }
    
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

function Autosaving() {
    console.log(document.getElementById("autosbox").checked)
    if (document.getElementById("autosbox").checked == true) {
        Save()
    }
}

setInterval(Autosaving,60000)
setInterval(Tick,1000)
setInterval(ZeroTick,1)
