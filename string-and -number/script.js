let name  = "Eda"
let surName = "İnal"
let age = 20
let emeklilik = (65 - age) ? "Emekliliğe " + (65-age) +  " yaş kaldı" : "Zaten emekli oldunuz"
let message = `Sayın ${name}  ${surName}  ${emeklilik}`
console.log(message)



let url = "https://www.edainal.com/"
let kursAdi = "komple web geliştirme kursu"
console.log(url.length)
console.log(kursAdi.split(" ").length)
console.log(url.startsWith("https"))
console.log(kursAdi.includes("eğitimi"))
let x = (kursAdi.replaceAll(" ", "-"))
console.log(url.concat(x))

let suan = new Date()
sonuc = suan
sonuc = suan.getDate()
sonuc = suan.getDay()
sonuc = suan.getFullYear()
sonuc = suan.getHours()
suan.setFullYear(2026)
sonuc = suan


console.log(sonuc)
