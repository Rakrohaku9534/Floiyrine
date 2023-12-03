global.owner = ['447389661153']  
global.mods = ['447389661153'] 
global.prems = ['447389661153']
global.nameowner = 'Alia.'
global.numberowner = '447389661153' 
global.mail = 'rakrohaku@gmail.com ' 
global.gc = 'https://www.instagram.com/fahrul_mt'
global.instagram = 'https://www.instagram.com/fahrul_mt'
global.wm = '© Floiyrine'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp   +62 857-1240-8309'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'xPQzgABf' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'xPQzgABf'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'xPQzgABf' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
