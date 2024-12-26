require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const chalk = require('chalk')
const CFonts = require('cfonts')
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const { getBuffer } = require('./all/myfunc')
const { TelegraPh } = require('./lib/uploader')
const NodeCache = require("node-cache")
const msgRetryCounterCache = new NodeCache()
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
CFonts.say(` `)
CFonts.say(`caywzz`, {
   font: 'block',
  align: 'left',
  colors: ['cyan'],

});
console.log(chalk.cyan(`Wait...`))
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./taira_baileys`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state,
browser: ['Mac OS', 'Safari', '10.15.7'],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'おさらぎです'
}}
}

const cay = func.makeWASocket(connectionOptions)
if (usePairingCode && !cay.authState.creds.registered) {
var phoneNumber = await question(chalk.black(chalk.bgCyan(`\nSILAHKAN MASUKAN NOMOR AWALI DENGAN 62 :\n`)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
var code = await cay.requestPairingCode(phoneNumber.trim())
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgCyan(`Code : `)), chalk.black(chalk.bgWhite(code)))
}

cay.ev.on('creds.update', await saveCreds)
store?.bind(cay.ev)

cay.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await cay.decodeJid(cay.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await cay.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: global.imgreply, title: "乂 Panggilan Terdeteksi", body: "Powered By "+global.namabot, previewType: "PHOTO"}}}, {quoted: null})
cay.sendContact(ff.from, [owner], "Telfon Atau Vc = Block", sendcall)
await sleep(7000)
await cay.updateBlockStatus(ff.from, "block")
}}
}})

cay.public = true

cay.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) cay.readMessages([m.key])
}
if (!cay.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.isBaileys) return
if (global.autoread) cay.readMessages([m.key])
m = func.smsg(cay, m, store)
require("./setting/hutao.js")(cay, m, store)
} catch (err) {
console.log(err)
}
})

cay.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await cay.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}


cay.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await cay.decodeJid(cay.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await cay.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await cay.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://files.catbox.moe/sri4cd.jpg'
}
if (anu.action == 'add') {
let a = `🐣Welcome To ${metadata.subject} |\n> @${num.split("@")[0]} *${metadata.participants.length}*`
                    cay.sendMessage(anu.id, {
     text: a, 
         //dsni
forwardedNewsletterMessageInfo: {
                newsletterJid: `120363354192085229@newsletter`,
               newsletterName: `member ke: ${metadata.participants.length}`,
                serverMessageId: -1
            },

 forwardingScore: 999,
 isForwarded: true,
                        //disn
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: ` welcome kak semoga betahh >_<`,
         body: `member ke: ${metadata.participants.length}`,
         thumbnailUrl: ppuser,
         sourceUrl: "t.me/caywzzneh",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
} 
if (anu.action == 'remove') { 
let a = `👋 selamat tinggal @${num.split("@")[0]}`
                    cay.sendMessage(anu.id, {
     text: a, 
 forwardedNewsletterMessageInfo: {

                newsletterJid: `120363354192085229@newsletter`,

               newsletterName: `${metadata.participants.length}`,

                serverMessageId: -1

            },

 forwardingScore: 999,

 isForwarded: true,
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: `yahh:/ member berkurang`,
         body: `menjadi: ${metadata.participants.length}`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://t.me/caywzzneh",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
}
if (anu.action == "promote") {
let a = `✨ Promoted @${num.split("@")[0]} by Admin`
                    cay.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: `anjay admin`,
         body: `selamat`,
         thumbnailUrl: ppuser,
         sourceUrl: "https://t.me/caywzzneh",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
}
if (anu.action == "demote") {
let a = `✨ Demote @${num.split("@")[0]} by Admin`
                    cay.sendMessage(anu.id, {
     text: a, 
      contextInfo: {
         mentionedJid: [...tag],
         externalAdReply: {
         title: `kesian`,
         body: ``,
         thumbnailUrl: ppuser,
         sourceUrl: "t.me/caywzzneh",
         mediaType: 1,
         renderLargerThumbnail: false
    }}})
}
} 
} catch (err) {
console.log(err)
}})

cay.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
cay.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
cay.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let uinfo = "Bot Connected 🔥"
          await sleep(30000)
	  await cay.sendMessage("2348022235091@s.whatsapp.net", {text: uinfo })
	  await cay.sendMessage("2349060509982@s.whatsapp.net", {text: uinfo })
      await cay.sendMessage("2348078112891@s.whatsapp.net", {text: uinfo })
console.log(color('Bot Berhasil Tersambung'))
}
})

return cay
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
