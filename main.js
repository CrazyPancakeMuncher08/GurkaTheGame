var gurka = document.getElementById("gurka")
var gurkortext = document.getElementById("gurkortext")
var tokenstext = document.getElementById("tokenstext")
var ranktext = document.getElementById("ranktext")
var nameinput = document.getElementById("nameinput")
var nametext = document.getElementById("nametext")
var bginput = document.getElementById("backgroundinput")
var inputfile = document.getElementById("inputfile")
var gurka_rot = 0
var gurka_rot_destination = 0
var gurkor = 0
var gpc = 1
var code = "2021"
var autocn = false
var securitybypass = true
var menabled = false
var upgradeprice = 12
var autoclickers = 0
var rank = 1
var rankstring = ""
var doubled = 0
var name = "Gurka Factory"
var background = ""
var tokens = 0.00

var skins = []
var ownedskin = null

var lastinputValue = 0
var lastgpc = 0
var lastdoubled = 0
var lastautoclickers = 0

var lastgurkorsaved = 0
var lastgpcsaved = 0
var lastdoubledsaved = 0
var lastautoclickerssaved = 0

function ResetCode() {
    if (securitybypass == false) {
        code = ""
    }
}

function waitenable() {
    menabled = true
    console.log("M_AntiCheat enabled!")
}

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
          code = 2041
          lastinputValue = gurkor
          gurkor -= this.price
          ownedskin = this
          gurkortext.innerHTML = "Gurkor: " + gurkor.toString()
          gurka.src = this.path
          this.resize()
          lastinputValue = gurkor
          setTimeout(ResetCode,500)
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
var bananaskin = new Skin("Banana",8000000,"banana.png",300,300)
var meatballskin = new Skin("Meatball",90000000,"meatball.png",300,300)
var croissantskin = new Skin("Croissant",10000,"croissant.png",300,300)
var milkskin = new Skin("Milk",300000,"milk.png",300,300)
var fortniteskin = new Skin("Fortnite",50000,"fortnite.png",300,300)
var thicksteveskin = new Skin("Thick Steve",18000,"thicksteve.png",400,300)
var nuggetskin = new Skin("Nugget",900000000000000,"nugget.png",300,300)
var turtleskin = new Skin("Turtle",9000,"turtle.png",400,300)
var solskin = new Skin("Sol",7000,"sol.png",300,300)
var wrongwayskin = new Skin("Wrong Way",0,"wrongwaygurka.png",300,300)
var gskin = new Skin("G",0,"g.png",300,300)
var eyesskin = new Skin("Eyes",300,"g.png",300,300)

ownedskin = deafultskin

var lastClick = 0
function DetectAutoclicker() {
    if (securitybypass == false) {
        var d = new Date()
        var t = d.getTime()
        if (lastClick < t &&  lastClick > t - 100) {
            autocn = true
            setTimeout(ResetAutocn,500)
            console.log("Autoclicker detected!")
        }
        lastClick = t
    }
}

function ResetAutocn() {
    autocn = false
}

function News() {
}

function ConvertToken() {
    if (gurkor >= 100) {
        gurkor -= 100
        tokens += 0.01
    }
}

function Click() {
    DetectAutoclicker()
    code = 2041
    lastinputValue = gurkor
    if (autocn == false) {
        gurkor += gpc * 2
        if (ownedskin != wrongwayskin) {
            gurka_rot_destination += gpc
        } else {
            gurka_rot_destination -= gpc
        }
    }
    UpdateGurka()
    lastinputValue = gurkor
    setTimeout(ResetCode,500)
}

function UpdateGurka() {
    gurka.style = "transform:rotate(" + gurka_rot.toString() + "deg)"
    if (ownedskin != null) {
        gurka.src = ownedskin.path
        gurka.width = ownedskin.width
        gurka.height = ownedskin.height
    }
    gurkortext.innerHTML = "Gurkor: " + gurkor.toString()
    tokenstext.innerHTML = "Tokens: " + tokens.toFixed(2).toString()
    document.getElementById("upgradepricetxt").innerHTML = "AutoClickers: " + autoclickers.toString()
    document.getElementById("upgradebtn").innerHTML = "Buy 1 AutoClicker for " + upgradeprice.toString() + " Gurkor"
    nametext.innerHTML = name
    document.body.style.backgroundImage = "url('" + background +  "')"
}

function Save() {
    code = 2041
    localStorage.setItem("bg",background)
    localStorage.setItem("tokens",tokens)
    localStorage.setItem("name",name)
    localStorage.setItem("doubled",doubled)
    localStorage.setItem("rank",rank)
    localStorage.setItem("autoc",autoclickers)
    localStorage.setItem("upgradeprice",upgradeprice)
    localStorage.setItem("skin",ownedskin.name)
    localStorage.setItem("gpc",gpc)
    localStorage.setItem("gurkor",gurkor)
    setTimeout(ResetCode,500)
}

function SaveFile() {
    download(gurkor + "|" + gpc + "|" + doubled + "|" + upgradeprice + "|" + autoclickers + "|" + rank + "|" + name + "|" + background + "|" + ownedskin.name, "game.save", "text/plain")
}

function LoadFile() {
    var inputfile = document.getElementById("inputfile")
    var files = inputfile.files
    if(files.length == 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split("|");
        gurkor = parseInt(lines[0])
        gpc = parseInt(lines[1])
        doubled = parseInt(lines[2])
        upgradeprice = parseInt(lines[3])
        autoclickers = parseInt(lines[4])
        rank = parseInt(lines[5])
        name = lines[6]
        background = lines[7]
        for (i = 0; i < skins.length; i++) {
            if (skins[i].name == lines[8]) {
                ownedskin = skins[i]
            }
        }
    }
    reader.readAsText(file);
    UpdateGurka()
}

function Load() {
    code = 2041
    tokens = parseFloat(localStorage.getItem("tokens"))
    background = localStorage.getItem("bg")
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
    bginput.value = background
    UpdateGurka()
    setTimeout(ResetCode,500)
}

function Buy(skin) {
    skins[skin].buy()
}

function Upgrade() {
    if (gurkor >= upgradeprice) {
        code = 2041
        lastinputValue = gurkor
        gurkor -= upgradeprice
        autoclickers += 1
        upgradeprice += 12
        UpdateGurka()
        lastinputValue = gurkor
        setTimeout(ResetCode,500)
    }
}

function Upgrade10() {
    for (var i = 0; i < 10; i++) {
        Upgrade()
    }
}

function Rebirth() {
    if (rank == 7) {
        code = 2041
        lastinputValue = gurkor
        gurkor = 0
        rank = 1
        gpc += 1
        doubled += 2
        autoclickers = 0
        upgradeprice = 12
        gurka_rot_destination = 0
        ownedskin = deafultskin
        UpdateGurka()
        lastinputValue = gurkor
        setTimeout(ResetCode,500)
    }
}

UpdateGurka()

var felwayunlocked = false
var gunlocked = false
function Tick() {
    if (bginput.value != "") {
        background = bginput.value
        UpdateGurka()
    }
    if (document.getElementById("autobbox").checked == true) {
        Upgrade()
    }
    if (nameinput.value != "") {
        name = nameinput.value
        UpdateGurka()
    }
    if (gurkor >= 0 && gurkor <= 700) {
        rank = 1
    }
    if (gurkor > 700 && gurkor <= 1000) {
        rank = 2
    }
    if (gurkor > 1000 && gurkor <= 10000) {
        rank = 3
    }
    if (gurkor > 10000 && gurkor <= 100000) {
        rank = 4
    }
    if (gurkor > 100000 && gurkor <= 150000) {
        rank = 5
    }
    if (gurkor > 150000 && gurkor <= 1000000) {
        rank = 6
    }
    if (gurkor > 1000000 && gurkor <= 9999999999999999999999999999999999999999999999) {
        rank = 7
    }
    if (rank == 1) {
        ranktext.innerHTML = "Rank: Noob"
        rankstring = "Noob"
    }
    if (rank == 2) {
        ranktext.innerHTML = "Rank: Not good"
        rankstring = "Not good"
    }
    if (rank == 3) {
        ranktext.innerHTML = "Rank: Good"
        rankstring = "Good"
    }
    if (rank == 4) {
        ranktext.innerHTML = "Rank: Very good"
        rankstring = "Very good"
    }
    if (rank == 5) {
        ranktext.innerHTML = "Rank: Expert"
        rankstring = "Expert"
    }
    if (rank == 6) {
        ranktext.innerHTML = "Rank: Titan"
        rankstring = "Titan"
    }
    if (rank == 7) {
        ranktext.innerHTML = "Rank: Hacker"
        rankstring = "Hacker"
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
    if (document.getElementById("autosbox").checked == true) {
        Save()
    }
}

function FiveTick() {
    if (ownedskin == gskin) {
        gurkor += 5
    }
}

function logKey(e) {
    console.log(e.keyCode)
    if (e.keyCode == 77) {
    }
}

function ZeroZeroTick() {
    if (code != "2021" && menabled == true) {
        newValue = gurkor
        newgpc = gpc
        newdoubled = doubled
        newautoclickers = autoclickers
        newgurkorsaved = parseInt(localStorage.getItem("gurkor"))
        newautoclickerssaved = parseInt(localStorage.getItem("autoc"))
        newgpcsaved = parseInt(localStorage.getItem("gpc"))
        newdoubledsaved = parseInt(localStorage.getItem("doubled"))
        if (lastinputValue != newValue) {
            gurkor = lastinputValue
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
        if (lastgpc != newgpc) {
            gpc = lastgpc
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
        if (lastdoubled != newdoubled) {
            doubled = lastdoubled
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
        if (lastautoclickers != newautoclickers) {
            autoclickers = lastautoclickers
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
        //Saves
        if (lastgurkorsaved != newgurkorsaved) {
            localStorage.setItem("gurkor",lastgurkorsaved)
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
        if (lastgpc != newgpc) {
            gpc = lastgpc
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
        if (lastdoubled != newdoubled) {
            doubled = lastdoubled
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
        if (lastautoclickers != newautoclickers) {
            autoclickers = lastautoclickers
            alert("M_AntiCheat has detected you cheating! Dont worry you wont be banned but the changes you made will not be applied.")
        }
    }
}

function SetOlds() {
    lastinputValue = gurkor
    lastgpc = gpc
    lastdoubled = doubled
    lastautoclickers = autoclickers
    lastgurkorsaved = parseInt(localStorage.getItem("gurkor"))
    lastautoclickerssaved = parseInt(localStorage.getItem("autoc"))
    lastgpcsaved = parseInt(localStorage.getItem("gpc"))
    lastdoubledsaved = parseInt(localStorage.getItem("doubled"))
}

function BypassSecurity(key) {
    if (key == "2021") {
        securitybypass = true
        code = "2021"
    } else {
        console.log("Wrong security bypass key!")
    }
}

console.log("Cheated gurkor dont taste as good as normal gurkor.")

document.addEventListener('keydown', logKey);
setInterval(Autosaving,60000)
setInterval(FiveTick,10000)
setInterval(Tick,1000)
setInterval(ZeroTick,1)
setInterval(SetOlds,500)
setInterval(ZeroZeroTick,0.03)
