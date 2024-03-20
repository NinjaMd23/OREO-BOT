import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '94757286833', process.env.OWNER_NAME || 'Developer Shizo 🤖', true],
  ['94757286833', 'Shizo Techie ❤️✨', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐁𝐎𝐓'
global.botname = process.env.BOT_NAME || '𝐃𝐀𝐑𝐊-𝐁𝐎𝐓'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || '𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐁𝐎𝐓-𝐁𝐎𝐓 🥵'
global.stkowner = process.env.OWNER_NAME || '© Shizo The Techie'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by OREO-BOT'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
