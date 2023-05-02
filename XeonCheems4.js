
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xeonkey = require('xfarr-api')
const cheerio = require ("cheerio")
const { PRAMESHTiktok } = require('./lib/tiktokbyxeon')
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { PRAMESHWiki } = require('./lib/xeonywiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const xeontod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')

const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "18:00:00"){
var ucapanWaktu = `~*සුබ රාත්‍රියක්*~🌌`
 }
 if(time2 < "16:00:00"){
var ucapanWaktu = `~*උබ සවසක්*~🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `~*සුබ සවසක්*~🌃`
 }
 if(time2 < "12:00:00"){
var ucapanWaktu = `~*සුබ සන්ද්‍යාවක්*~ 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `~*සුබ උදෑසනක්*~ 🌄`
 }
 if(time2 < "00:00:01"){
var ucapanWaktu = `~*සුබ උදෑසනක්*~🌄`
 } 
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database omther\\
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = PRAMESH = async (PRAMESH, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await PRAMESH.decodeJid(PRAMESH.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
        const groupMetadata = m.isGroup ? await PRAMESH.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
autoreadsw = true
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	// FAKE TEXT IMG
const textImg = (teks) => {
PRAMESH.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./XeonMedia/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           PRAMESH.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            PRAMESH.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!PRAMESH.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await PRAMESH.setStatus(`${PRAMESH.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return PRAMESH.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
//}
	
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		PRAMESH.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await PRAMESH.sendPresenceUpdate('composing', m.chat)
PRAMESH.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { PRAMESH.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
  //auto recording all
    if (global.autoRecord) { if (m.chat) { PRAMESH.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { PRAMESH.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { PRAMESH.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await PRAMESH.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await PRAMESH.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await PRAMESH.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await PRAMESH.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

	// AntiLinkgc
if (AntiLink) {
linkgce = await PRAMESH.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
PRAMESH.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
  reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  PRAMESH.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await PRAMESH.groupParticipantsUpdate(m.chat, [kice], 'remove')
PRAMESH.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

                //auto reply by xeon
  //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
					PRAMESH.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./XeonMedia/audio/${anju}.mp3`)
					PRAMESH.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					PRAMESH.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					PRAMESH.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
PRAMESH.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: PRAMESH.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, PRAMESH.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        PRAMESH.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            PRAMESH.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await PRAMESH.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, PRAMESH.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await PRAMESH.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, PRAMESH.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await PRAMESH.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, PRAMESH.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await PRAMESH.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, PRAMESH.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await PRAMESH.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, PRAMESH.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await PRAMESH.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, PRAMESH.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await PRAMESH.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, PRAMESH.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await PRAMESH.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await PRAMESH.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    PRAMESH.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    PRAMESH.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) PRAMESH.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) PRAMESH.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) PRAMESH.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    PRAMESH.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) PRAMESH.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) PRAMESH.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
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
	    PRAMESH.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

switch(command) {
case 'alive': case 'menu': case 'panel': {
    PRAMESH.sendMessage(from, { react: { text: `🦁`, key: m.key }})     
    let buttons = [
    {buttonId: `bbb`, buttonText: {displayText: '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'}, type: 1},
    {buttonId: `allmenu`, buttonText: {displayText: '📚𝐀𝐋𝐋 𝐌𝐄𝐍𝐔📚'}, type: 1},
    {buttonId: `rateus`, buttonText: {displayText: '✨𝚁𝙰𝚃𝙴_𝚄𝚂✨'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `${global.alivepic}` },
    caption: `*හායි ${pushname}*\n *I AM ALIVE NOW*\n *☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒\n❤️❤️❤️❤️❤️\n${ucapanWaktu}\n${global.alivemsg}`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    PRAMESH.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break
 case 'setalivemsg':{
 if (!isCreator) return reply(`${mess.owner}`)
 if (!text) return reply(`*_මැසේජ් එක ඇතුලත් කරන්න_*`)
 PRAMESH.sendMessage(from, { react: { text: `⚙️`, key: m.key }})
   global.alivemsg = text
   m.reply("🌍🔗alive masege එක වෙනස් කරා🔗🌍")
}
break
 case 'setalivepic':{
 if (!isCreator) return reply(`${mess.owner}`)
 if (!text) return reply(`_*alive picture එකේ link එක ඇතුලත් කරන්න*_`)
 PRAMESH.sendMessage(from, { react: { text: `⚙️`, key: m.key }})
   global.alivepic = text
   m.reply("🌍🔗alive picture එක වෙනස් කරා🔗🌍")
}
break
case 'owner': case 'creator': case 'moderator': case 'mod': {
PRAMESH.sendMessage(from, { react: { text: `🙋`, key: m.key }})
PRAMESH.sendContact(m.chat, owner, m)
}
            break
case 'ratestar': case 'rateus': case 'rate': {
    PRAMESH.sendMessage(from, { react: { text: `✡️`, key: m.key }}) 
    let buttons = [
    {buttonId: `1star`, buttonText: {displayText: '😊★★★★★😊'}, type: 1},
    {buttonId: `2star`, buttonText: {displayText: '😐★★★😐'}, type: 1},
    {buttonId: `3star`, buttonText: {displayText: '😒★😒'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://i.ibb.co/0qyRJvQ/Picsart-23-01-24-16-24-18-396.jpg` },
    caption: `හායි ${pushname}\n*★𝐑𝐀𝐓𝐄 𝐔𝐒★*\n*𝐒𝐄𝐋𝐄𝐂𝐓 𝐘𝐎𝐔𝐑 𝐑𝐀𝐓𝐄 𝐒𝐓𝐀𝐑*`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    PRAMESH.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
 break
            case '3star': {
            PRAMESH.sendMessage(from, { react: { text: `😒`, key: m.key }})
                PRAMESH.sendMessage(from, { text: `*★ඔය එක තරුව තියල ඉදගනින්😒*` }, { quoted: m })
            }
            break
            case '2star': {
            PRAMESH.sendMessage(from, { react: { text: `😐`, key: m.key }})
                PRAMESH.sendMessage(from, { text: `*★★★thanks your rate😐*` }, { quoted: m })
            }
            break
            case '1star': {
            PRAMESH.sendMessage(from, { react: { text: `☺️`, key: m.key }})
                PRAMESH.sendMessage(from, { text: `*☺️★★★★★\n𝚃𝙷𝙰𝙽𝙺𝚂 𝚈𝙾𝚄𝚁 𝚁𝙰𝚃𝙴☺️*` }, { quoted: m })
            }
            break
case 'allmenu': {
    PRAMESH.sendMessage(from, { react: { text: `📜`, key: m.key }}) 
    let buttons = [
    {buttonId: `bbb`, buttonText: {displayText: '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'}, type: 1},
    {buttonId: `allmenu`, buttonText: {displayText: '📚𝐀𝐋𝐋 𝐌𝐄𝐍𝐔📚'}, type: 1},
    {buttonId: `rateus`, buttonText: {displayText: '✨𝚁𝙰𝚃𝙴_𝚄𝚂✨'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://i.ibb.co/CMCNByx/Picsart-22-07-03-15-45-00-698.jpg` },
    caption: `╒ ☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒☷▕━⛟
┠──☾owner☽────◑
┃${global.menuimoji}owner
┃${global.menuimoji}setalivepic
┃${global.menuimoji}setalivemsg
┃${global.menuimoji}antikall
┃${global.menuimoji}join
┃${global.menuimoji}leavegc
┃${global.menuimoji}block
┃${global.menuimoji}unblock
┠──☾Group☽────◑
┃${global.menuimoji}add
┃${global.menuimoji}kick
┃${global.menuimoji}tagall
┃${global.menuimoji}antilink
┃${global.menuimoji}antitoxic
┃${global.menuimoji}antiwame
┃${global.menuimoji}antilinkfb
┃${global.menuimoji}antilinktiktok
┃${global.menuimoji}antilinktwitter
┃${global.menuimoji}antilinkyoutubech
┃${global.menuimoji}antilinkyoutubevideo
┃${global.menuimoji}antilinkinstagram
┃${global.menuimoji}antilinktelegram
┠──☾media☽────◑
┃${global.menuimoji}song
┃${global.menuimoji}video
┃${global.menuimoji}mediafire
┃${global.menuimoji}fb
┃${global.menuimoji}tiktok
┃${global.menuimoji}ehi
┃${global.menuimoji}img
┃${global.menuimoji}spotify
┃${global.menuimoji}instagram
┃${global.menuimoji}serchsong
┃${global.menuimoji}serchvideo
┃${global.menuimoji}apk
┃${global.menuimoji}film
┃${global.menuimoji}lyrics
┠─☾Logo packs☽───◑
┃${global.menuimoji}logo1
┃${global.menuimoji}logo2
┃${global.menuimoji}logo3
┠─☾covert☽─────◑
┃${global.menuimoji}sticker
┃${global.menuimoji}translate
┃${global.menuimoji}tomp3
┠─☾other☽─────◑
┃${global.menuimoji}alive
┃${global.menuimoji}script
┃${global.menuimoji}allmenu
┃${global.menuimoji}rate
┃${global.menuimoji}
┗━━━━━━━━━━━⛟`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    PRAMESH.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
 break
case 'bbb': case 'pn': case 'script': {
    PRAMESH.sendMessage(from, { react: { text: `⚙️`, key: m.key }}) 
    let buttons = [
    {buttonId: `alive`, buttonText: {displayText: '𝐀𝐋𝐈𝐕𝐄'}, type: 1},
    {buttonId: `owner`, buttonText: {displayText: '𝐎𝐖𝐍𝐄𝐑'}, type: 1},
    {buttonId: `notes`, buttonText: {displayText: '💚𝐍𝐎𝐓𝐄💚'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://i.ibb.co/bH371tY/Picsart-22-10-02-11-18-47-805.jpg` },
    caption: `*▕☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒▕*

*🪀𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐄𝐋 𝐋𝐈𝐍𝐊🪀*
https://youtube.com/channel/UCOlt2_XK6tS2KJn6fTdpPew

*🪀𝐁𝐎𝐓 𝐒𝐂𝐑𝐈𝐏𝐓 𝐋𝐈𝐍𝐊🪀*
https://sites.google.com/view/pramesh-lion-bot/%E0%B6%B1%E0%B7%80%E0%B7%83?read_current=1

*🪀𝐁𝐎𝐓 𝐇𝐄𝐋𝐏𝐈𝐍𝐆 𝐆𝐑𝐎𝐔𝐏🪀*
https://chat.whatsapp.com/FDpARRbNUKjLkfbm2xRv2M

💠💠💠💠💠💠💠💠💠💠💠
*⃦ 𝐓𝐇𝐀𝐍𝐊𝐒 ⃦*`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    PRAMESH.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
            break
case 'song': case 'yt': case 'play': {
 if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
PRAMESH.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[0] 
                let buf = await getBuffer(anu.thumbnail)
                let caption = `
*| ☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒ |*
◈━━━━━━━━━━━━━━━◈            
╒════════════════
┝ 📝 Title : ${anu.title}
┝ 🔍 Ext : Search
┝ 🔗 ID : ${anu.videoId}
┝ ⏰ Duration : ${anu.timestamp}
┝ 🌝 Viewers : ${anu.views}
┝ ⏳ Uploaded : ${anu.ago}
┝ 🔮 Author : ${anu.author.name}
┝ 🌐 Channel : ${anu.author.url}
┝ ⛓️ Description : ${anu.description}
┝ ✏️ Url : ${anu.url}
┕────────────
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   PRAMESH.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: caption,
                            imageMessage: message.imageMessage,
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
          urlButton: {
                  displayText: '🎸YOUTUBE CHANEL🎸',
                  url: `https://youtube.com/channel/UCOlt2_XK6tS2KJn6fTdpPew`
          }
                            }, {
                            	urlButton: {
          displayText: `🪀SUPPORT GROUP🪀`, 
                  url: `https://chat.whatsapp.com/FDpARRbNUKjLkfbm2xRv2M`
          }
                            }, {
          quickReplyButton: {
                  displayText: `༺🎬𝐕𝐈𝐃𝐄𝐎🎬༻`,
                  id: `${prefix}video ${anu.url}`
          }
          }, {
          quickReplyButton: {
                  displayText: `༺🎶𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓🎶༻`,
                  id: `${prefix}ytdoc ${anu.url}`
          }
           },{
          quickReplyButton: {
                  displayText: `༺🎶𝐒𝐎𝐍𝐆🎶༻`,
                  id: `${prefix}ytmp3 ${anu.url}`
          }
           }]
                        }
                    }
                
                }), { userJid: m.chat })
                PRAMESH.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'video': { 
    PRAMESH.sendMessage(from, { react: { text: `📽️`, key: m.key }})    
        if (!text) return reply(`Example : ${prefix + command} lelena`)
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `ytmp4 ${anu.url} 360p`, buttonText: {displayText: '⚡360p⚡'}, type: 1},
 {buttonId: `ytmp4 ${anu.url} 480p`, buttonText: {displayText: '⚡480p⚡'}, type: 1},
 {buttonId: `ytmp4 ${anu.url} 720p`, buttonText: {displayText: '⚡720p⚡'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `*║☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒☬║*
     
   📥 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄𝐑
 
*┃🎬Title :* ${anu.title} 
 
*┃🎲Duration :* ${anu.timestamp} 
 
*┃🌐Author :* ${anu.author.name} 
 
*┃📃Url :* ${anu.url} 

*┃🔖Runtime :* ${runtime(process.uptime())}
 
*┃BOT NAME :* *☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒*

┗━━━━━━━━━❊`,
 footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
 buttons: buttons,
 headerType: 4,
 }
 PRAMESH.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
                            case 'ytmp3': {	 
PRAMESH.sendMessage(from, { react: { text: `🎶`, key: m.key }})   
                     let { yta } = require('./lib/y2mate')
                     if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                     if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                     let quality = args[1] ? args[1] : '128kbps'
                     let media = await yta(text, quality)
                     if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))                
                     buf = await getBuffer(media.thumb) 
                     const auddown = await PRAMESH.sendMessage(from , { text: '📥 Downloading Your Song...' }, { quoted: m } )
                     await PRAMESH.sendMessage(from, { delete: auddown.key })
                     const audup = await PRAMESH.sendMessage(from , { text: '📤 Uploading Your Song...' }, { quoted: m } )
                     const aud = await PRAMESH.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`}, { quoted: m }) .catch((err) => reply(mess.error))
                     await PRAMESH.sendMessage(from, { delete: audup.key })               
                     }
                 break
case 'ytdoc': {	    
PRAMESH.sendMessage(from, { react: { text: `📂`, key: m.key }})
    let { yta } = require('./lib/y2mate')
    if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
    if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(text, quality)
    if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))                
    buf = await getBuffer(media.thumb) 
    const auddown = await PRAMESH.sendMessage(from , { text: '📥 Downloading Your Song...' }, { quoted: m } )
    await PRAMESH.sendMessage(from, { delete: auddown.key })
    const audup = await PRAMESH.sendMessage(from , { text: '📤 Uploading Your Song...' }, { quoted: m } )
    const aud = await PRAMESH.sendMessage(m.chat, {document:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`}, { quoted: m }) .catch((err) => reply(mess.error))
    await PRAMESH.sendMessage(from, { delete: audup.key })               
    }
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
PRAMESH.sendReadReceipt(m.chat, m.sender, [m.key.id])
PRAMESH.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
PRAMESH.sendReadReceipt(m.chat, m.sender, [m.key.id])
PRAMESH.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    PRAMESH.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})