/*

HAI NAMAKU NAYLA
YAH DISINI AKU SEBAGAI PEMULA 
MAU MENCOBA MEMBUAT BOT SENDIRI
YANG PASTINYA PASTI BANYAK YG
BAKAL COPY PASTE/NYOLONG CASE
OKE TERIMA KASIH

*/
// [❗] THX TO JGN DIHAPUS/DIGANTI
// [❗] NAMA AUTHOR "NAYLA" JGN DI GANTI
// [❗] JANGAN DI PERJUAL BELIKAN
// [❗] PERATURAN DI LANGGAR? GW BERHENTI UPDATE

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		processTicksAndRejections,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto') 
const ms = require('parse-ms')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const imgbb = require('imgbb-uploader')  
const ApikeyZailani = 'ZailaniGans'
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))
const { LeysApi, LolHuman, DapApi } = JSON.parse(fs.readFileSync('./src/apikey.json'))
/*OTRO**////
const { codepais } = require('./src/codepais')
const { g } = require('./src/g')
const { persona } = require('./src/persona')
const { destrava } = require('./src/destrava')
const { idioma } = require('./src/idioma')
const { modapk } = require('./src/modapk')
const { felix } = require('./src/felix')
const { fxxxx } = require('./src/fxxxx')
const { porno } = require('./src/por')
const { termux } = require('./src/termux')
const { ayuda } = require('./src/ayuda')
const { instalar } = require('./src/instalar')
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	   

apikey = nayz.apikey
auth0r = nayz.auth0r
replytroli = nayz.replytroli
prefix = setting.prefix
blocked = []
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz
tz = setting.tz 
cr1 = setting.cr1
cr2 = setting.cr
promote = '*Holiii que bueno verte por aca cosa hermosa presentate y asi te conocemos 🥺*'
numbernye = '0'
demote = '*Jajajajajajaa ya no eres admin🤣*'
leave = '\`\`\`Hasta qhe te fuiste Pedazo De Aborto 🥺 igual Nunca Te Quisimos👋\`\`\`'
numberbot = setting.numberbot
apivhtear = setting.apivhtear
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
naylachan = setting.naylachan
namebot = setting.namebot
ownername = setting.ownername
donasi = setting.donasi
l0lhuman = setting.l0lhuman
pulsa = setting.pulsa
ftake = 'Lord Manik Mengintai•_•',
gopay = setting.gopay
ovo = setting.ovo
baterai = {
    baterai: 0,
    cas: false
}
dana = setting.dana
 
// NOTE MAU UBAH??? SILAHKAN UBAH DI SRC + SETTINGS.JSON
/* ===================================================[ Felixcrack ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse(fs.readFileSync('./nayla/Elite.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./nayla/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./nayla/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./nayla/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))
const botx = JSON.parse(fs.readFileSync('./nayla/botx.json')) 
/* ===================================================[ Samurai ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/* ===================================================[ Samurái ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	 
            async function starts() {
        	const nayla = new WAConnection()
	        nayla.logger.level = 'warn'
	        console.log(banner.string)
        	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('SAMURAI :)'))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Connecting...')
        	})
	        nayla.on('open', () => {
	    	success('2', 'Connected')
         	})
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
        	})
/* ===================================================[ Samurái ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
            nayla.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await nayla.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  = `┏━━━━━━━━━━━━━━━━━
┃          「 *𝗛𝗢𝗟𝗔* 」
┃@${num.split('@')[0]}👋
┃seas bienvenid@ al grupo 😉
┃*${mdata.subject}*
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┃   「 *_BIENVENIDO_* 」
┗━━━━━━━━━━━━━━━━━,
┏━━━━━━━━━━━━━━━━━
┠⊷️ *Escribe ${prefix}samuraibot
┃⊷️ *Para Poder Usar El Bot*
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
┠⊷️「 *DESCRIPCIÓN* 」
┗━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━
  ${mdata.desc}*
┗━━━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Adiós : @${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await nayla.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙉𝙐𝙀𝙑𝙊 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Date : NOW\`\`\` 

\`\`\`Grupo :\`\`\` ${mdata.subject}

${promote}`
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await nayla.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙎𝙀 𝙈𝘼𝙏𝙊 𝘼 𝙐𝙉 𝘼𝙆𝙈𝙄𝙉
			
\`\`\`Nombre :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Dato : Reciente\`\`\`

\`\`\`Grupo :\`\`\` ${mdata.subject}

${demote}`
			nayla.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
/* ===================================================[ Samurai ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	                 
	        
	        nayla.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.prefix
			global.blocked		
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	const nay1 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": fake1} } } 
			const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const itsMe = sender == botNumber ? true : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
            const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./src/fx.jpg`)}, "title": ftake, "description": "FzBot", "currencyCode": "USD", "priceAmount1000": "5000000000", "retailerId": "ManikGanz", "productImageCount": 1}, "businessOwnerJid": `12603763944@s.whatsapp.net`}}}
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
            
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false			 
			const isPrem = prem.includes(sender) || isOwner				
			const isBotx = isGroup ? botx.includes(from) : false
			pushname = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined									            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `LA FUNCION ${command} NO ESTA EN EL MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: nay1})
			}
			const nayz = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }	
            const addEliteUser = (userid, sender, time, serials) => {
	         const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./nayla/Elite.json', JSON.stringify(_Elite))
            }	
            const checkEliteUser = (sender) => {
	        let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }              
            const nayBulan = ['enero', 'febrero', 'Marzo', 'abril', 'Mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
            const bulan = nayBulan[moment().format('MM') - 1]
			const isElite = checkEliteUser(sender)
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','??','🍇','🍒']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: NAYLACHAN\n` 
            + `ORG: AUTHOR;\n`
            + `TEL;type=CELL;type=VOICE;waid=68124874133914:+6 8124-8741-33914\n`
            + 'END:VCARD' 
            colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mFELIXCRACK BOT1\x1b[1;37m]', time, color(command), 'De', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mFELIXCRACK BOT2\x1b[1;37m]', time, color('Comando'), 'De', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mFELIXCRACK BOT3\x1b[1;37m]', time, color(command), 'De', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mFELIXCRACK BOT4\x1b[1;37m]', time, color('Comando'), 'De', color(pushname), 'in', color(groupName), 'args :', color(args.length))
            const xxx = '```' 
//============================
// AUTHOR SAMURAI
//============================ 
menuZ = `╭────────────────────╮  
│                𝙎𝘼𝙈𝙐𝙍𝘼𝙄                                                    
╰────────────────────╮
╭────────────────────╯
${tz}DUEÑO : ${ownername}
${tz}AUTOR : SAMURÁI
${tz}MES : ${bulan}
╰────────────────────╮  
╭────────────────────╯
${tz}NO SPAM AL BOT
${tz}NO AÑADIR A GRUPOS
╰────────────────────╮  
╭────────────────────╯
${tz}${prefix}ownermenu
${tz}${prefix}grupmenu
${tz}${prefix}makermenu
${tz}${prefix}downloadmenu
${tz}${prefix}soundmenu
${tz}${prefix}pornmenu
${tz}${prefix}internalmenu
${tz}${prefix}cekmenu
${tz}${prefix}spesialmenu
${tz}${prefix}tagmenu
${tz}${prefix}gamemenu
${tz}${prefix}randomtext
${tz}${prefix}fastmenu
${tz}${prefix}islammenu
${tz}${prefix}sertifikat
${tz}${prefix}editfoto
╰────❲ BY ${ownername} ❳─────`
//============================
// THX TO JGN DI HAPU
//============================ 
const info1 = `🐳 = $200
🦈 = $121
🐬 = $104
🐋 = $94
🐟 = $87
🐠 = $79
🦐 = $62
🦑 = $34
🦀 = $17
🐚 = $2
${xxx}NOTE${xxx} : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`

const info2 = `🐔 = $200
🦃 = $121
🐿 = $104
🐐 = $94
🐏 = $87
🐖 = $79
🐑 = $62
🐎 = $34
🐺 = $17
🦩 = $2
${xxx}NOTE${xxx} : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`

const info3 = `🦋 = $200
🕷 = $121
🐝 = $104
🐉 = $94
?? = $87
🦅 = $79
🕊 = $62
🐧 = $34
🐦 = $17
🦇 = $2
${xxx}NOTE${xxx} : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`

const grupmenu = `╭──❲ ${tz}WHATSAPP${tz} ❳  
${tz}${prefix}hideta
${tz}${prefix}add
${tz}${prefix}kick
${tz}${prefix}promote
${tz}${prefix}demote
${tz}${prefix}antilink
${tz}${prefix}welcome
${tz}${prefix}hidetag10
${tz}${prefix}group
${tz}${prefix}antigay
${tz}${prefix}antibocil
${tz}${prefix}antiwibu
${tz}${prefix}antijawa
${tz}${prefix}setout
${tz}${prefix}setwelcome
${tz}${prefix}setthumb
${tz}${prefix}katajago
${tz}${prefix}linkgc
${tz}${prefix}tagall
${tz}${prefix}delete
╰──❲ BY ${ownername} ❳`

const makermenu = `╭──❲ ${tz}WHATSAPP${tz} ❳
${tz}${prefix}tahta
${tz}${prefix}neon2
${tz}${prefix}wall
${tz}${prefix}wolf
${tz}${prefix}tfire
${tz}${prefix}ytgol
${tz}${prefix}ytsilver
${tz}${prefix}t3d
${tz}${prefix}logoa
${tz}${prefix}pornhub
${tz}${prefix}marvel
${tz}${prefix}leavest
${tz}${prefix}phcoment
${tz}${prefix}nulis
${tz}${prefix}neon1
${tz}${prefix}text3d
${tz}${prefix}galaxy
${tz}${prefix}gaming
${tz}${prefix}colors$
${tz}${prefix}kling
${tz}${prefix}barcode
${tz}${prefix}qrcode
${tz}${prefix}8bit
${tz}${prefix}burn
${tz}${prefix}fire
${tz}${prefix}google
${tz}${prefix}battle
${tz}${prefix}block
${tz}${prefix}candy
${tz}${prefix}potter
${tz}${prefix}silk
${tz}${prefix}water
${tz}${prefix}pubg
${tz}${prefix}neon
${tz}${prefix}coffe1
${tz}${prefix}coffe
${tz}${prefix}tiktok
${tz}${prefix}shadow
${tz}${prefix}romance
${tz}${prefix}glass
${tz}${prefix}naruto
${tz}${prefix}mug1
${tz}${prefix}love
${tz}${prefix}mug
${tz}${prefix}neon1
${tz}${prefix}smoke
${tz}${prefix}rainbow
${tz}${prefix}nulis1
${tz}${prefix}nulis2
${tz}${prefix}nulis3
${tz}${prefix}nulis4
${tz}${prefix}nulis5
${tz}${prefix}nulis6
${tz}${prefix}video1
${tz}${prefix}video2
${tz}${prefix}video3
${tz}${prefix}video4
${tz}${prefix}video5
${tz}${prefix}video6
╰──❲ BY ${ownername} ❳`

const downloadmenu = `╭──❲ ${tz}WHATSAPP${tz} ❳
${tz}${prefix}telesticker
${tz}${prefix}tiktokmusic
${tz}${prefix}tiktoknowm
${tz}${prefix}igfoto
${tz}${prefix}igvideo
${tz}${prefix}ytsearch
${tz}${prefix}ytmp3
${tz}${prefix}ytmp4
${tz}${prefix}play
${tz}${prefix}brainly
╰──❲ BY ${ownername} ❳`

const soundmenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}sound1${xxx}
├${tz} ${tz} ${xxx}${prefix}sound2${xxx}
├${tz} ${tz} ${xxx}${prefix}sound3${xxx}
├${tz} ${tz} ${xxx}${prefix}sound4${xxx}
├${tz} ${tz} ${xxx}${prefix}sound5${xxx}
├${tz} ${tz} ${xxx}${prefix}sound6${xxx}
├${tz} ${tz} ${xxx}${prefix}sound7${xxx}
├${tz} ${tz} ${xxx}${prefix}sound8${xxx}
├${tz} ${tz} ${xxx}${prefix}sound9${xxx}
├${tz} ${tz} ${xxx}${prefix}sound10${xxx}
├${tz} ${tz} ${xxx}${prefix}sound11${xxx}
├${tz} ${tz} ${xxx}${prefix}sound12${xxx}
├${tz} ${tz} ${xxx}${prefix}sound13${xxx}
├${tz} ${tz} ${xxx}${prefix}sound14${xxx}
├${tz} ${tz} ${xxx}${prefix}sound15${xxx}
├${tz} ${tz} ${xxx}${prefix}sound16${xxx}
├${tz} ${tz} ${xxx}${prefix}sound17${xxx}
├${tz} ${tz} ${xxx}${prefix}sound18${xxx}
├${tz} ${tz} ${xxx}${prefix}sound19${xxx}
├${tz} ${tz} ${xxx}${prefix}sound20${xxx}
├${tz} ${tz} ${xxx}${prefix}sound21${xxx}
├${tz} ${tz} ${xxx}${prefix}sound22${xxx}
├${tz} ${tz} ${xxx}${prefix}sound23${xxx}
├${tz} ${tz} ${xxx}${prefix}sound24${xxx}
├${tz} ${tz} ${xxx}${prefix}sound25${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const pornmenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}indo1${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo2${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo3${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo4${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo5${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo6${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo7${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo8${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo9${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo10${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo11${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo12${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo13${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo14${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo15${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo16${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo17${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo18${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo19${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo20${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo21${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo22${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo23${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo24${xxx} 
├${tz} ${tz} ${xxx}${prefix}indo25${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const internalmenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}chatlist${xxx}
├${tz} ${tz} ${xxx}${prefix}addsticker${xxx}
├${tz} ${tz} ${xxx}${prefix}addvn${xxx}
├${tz} ${tz} ${xxx}${prefix}getvn${xxx}
├${tz} ${tz} ${xxx}${prefix}getsticker${xxx}
├${tz} ${tz} ${xxx}${prefix}liststicker${xxx}
├${tz} ${tz} ${xxx}${prefix}listvn${xxx}
├${tz} ${tz} ${xxx}${prefix}addimage${xxx}
├${tz} ${tz} ${xxx}${prefix}getimage${xxx}
├${tz} ${tz} ${xxx}${prefix}imagelist${xxx}
├${tz} ${tz} ${xxx}${prefix}addvideo${xxx}
├${tz} ${tz} ${xxx}${prefix}getvideo${xxx}
├${tz} ${tz} ${xxx}${prefix}listvideo${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const cekmenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}gantengcek${xxx}
├${tz} ${tz} ${xxx}${prefix}cantikcek${xxx}
├${tz} ${tz} ${xxx}${prefix}jelekcek${xxx}
├${tz} ${tz} ${xxx}${prefix}goblokcek${xxx}
├${tz} ${tz} ${xxx}${prefix}begocek${xxx}
├${tz} ${tz} ${xxx}${prefix}pintercek${xxx}
├${tz} ${tz} ${xxx}${prefix}jagocek${xxx}
├${tz} ${tz} ${xxx}${prefix}nolepcek${xxx}
├${tz} ${tz} ${xxx}${prefix}babicek${xxx}
├${tz} ${tz} ${xxx}${prefix}bebancek${xxx}
├${tz} ${tz} ${xxx}${prefix}baikcek${xxx}
├${tz} ${tz} ${xxx}${prefix}jahatcek${xxx}
├${tz} ${tz} ${xxx}${prefix}anjingcek${xxx}
├${tz} ${tz} ${xxx}${prefix}haramcek${xxx}
├${tz} ${tz} ${xxx}${prefix}kontolcek${xxx}
├${tz} ${tz} ${xxx}${prefix}pakboycek${xxx}
├${tz} ${tz} ${xxx}${prefix}pakgirlcek${xxx}
├${tz} ${tz} ${xxx}${prefix}sangecek${xxx}
├${tz} ${tz} ${xxx}${prefix}bapercek${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const tagmenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}ganteng${xxx}
├${tz} ${tz} ${xxx}${prefix}cantik${xxx}
├${tz} ${tz} ${xxx}${prefix}jelek${xxx}
├${tz} ${tz} ${xxx}${prefix}goblok${xxx}
├${tz} ${tz} ${xxx}${prefix}bego${xxx}
├${tz} ${tz} ${xxx}${prefix}pinter${xxx}
├${tz} ${tz} ${xxx}${prefix}jago${xxx}
├${tz} ${tz} ${xxx}${prefix}babi${xxx}
├${tz} ${tz} ${xxx}${prefix}beban${xxx}
├${tz} ${tz} ${xxx}${prefix}baik${xxx}
├${tz} ${tz} ${xxx}${prefix}jahat${xxx}
├${tz} ${tz} ${xxx}${prefix}anjing${xxx}
├${tz} ${tz} ${xxx}${prefix}monyet${xxx}
├${tz} ${tz} ${xxx}${prefix}haram${xxx}
├${tz} ${tz} ${xxx}${prefix}kontol${xxx}
├${tz} ${tz} ${xxx}${prefix}pakboy${xxx}
├${tz} ${tz} ${xxx}${prefix}pakgirl${xxx}
├${tz} ${tz} ${xxx}${prefix}sadboy${xxx}
├${tz} ${tz} ${xxx}${prefix}sadgirl${xxx}
├${tz} ${tz} ${xxx}${prefix}wibu${xxx}
├${tz} ${tz} ${xxx}${prefix}nolep${xxx}
├${tz} ${tz} ${xxx}${prefix}hebat${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const gamemenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}slot${xxx}
├${tz} ${tz} ${xxx}${prefix}simi${xxx}
├${tz} ${tz} ${xxx}${prefix}jumlah${xxx}
├${tz} ${tz} ${xxx}${prefix}reverse${xxx}
├${tz} ${tz} ${xxx}${prefix}tebakgambar${xxx}
├${tz} ${tz} ${xxx}${prefix}nickff${xxx}
├${tz} ${tz} ${xxx}${prefix}kapankah${xxx}
├${tz} ${tz} ${xxx}${prefix}apakah${xxx}
├${tz} ${tz} ${xxx}${prefix}ramalnomer${xxx} 
├${tz} ${tz} ${xxx}${prefix}ramalcinta${xxx} 
├${tz} ${tz} ${xxx}${prefix}jodohbali${xxx} 
├${tz} ${tz} ${xxx}${prefix}ramalnikah${xxx} 
├${tz} ${tz} ${xxx}${prefix}taksirmimpi${xxx} 
├${tz} ${tz} ${xxx}${prefix}suit${xxx}                   
├${tz} ${tz} ${xxx}${prefix}boomtext${xxx}
├${tz} ${tz} ${xxx}${prefix}holoh${xxx}
├${tz} ${tz} ${xxx}${prefix}heleh${xxx}
├${tz} ${tz} ${xxx}${prefix}huluh${xxx}
├${tz} ${tz} ${xxx}${prefix}hilih${xxx}
├${tz} ${tz} ${xxx}${prefix}halah${xxx} 
├${tz} ${tz} ${xxx}${prefix}kapital${xxx}
├${tz} ${tz} ${xxx}${prefix}textfont${xxx}
├${tz} ${tz} ${xxx}${prefix}tebak${xxx}
├${tz} ${tz} ${xxx}${prefix}oxo${xxx}
├${tz} ${tz} ${xxx}${prefix}pesan${xxx}
├${tz} ${tz} ${xxx}${prefix}tebakkimia${xxx}
├${tz} ${tz} ${xxx}${prefix}tebaklirik${xxx}
├${tz} ${tz} ${xxx}${prefix}tebakin1${xxx}
├${tz} ${tz} ${xxx}${prefix}tebakin2${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const randomtext = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}quotes2${xxx}
├${tz} ${tz} ${xxx}${prefix}quotes1${xxx}
├${tz} ${tz} ${xxx}${prefix}kusonime${xxx}
├${tz} ${tz} ${xxx}${prefix}renungan${xxx}
├${tz} ${tz} ${xxx}${prefix}samehadaku${xxx}
├${tz} ${tz} ${xxx}${prefix}infonomer${xxx}
├${tz} ${tz} ${xxx}${prefix}jadwaltv${xxx}
├${tz} ${tz} ${xxx}${prefix}tvjadwal${xxx}
├${tz} ${tz} ${xxx}${prefix}fml${xxx}
├${tz} ${tz} ${xxx}${prefix}cinta${xxx}
├${tz} ${tz} ${xxx}${prefix}resepmasakan${xxx}
├${tz} ${tz} ${xxx}${prefix}cersex${xxx}
├${tz} ${tz} ${xxx}${prefix}cerpen${xxx}
├${tz} ${tz} ${xxx}${prefix}jadwalsholat${xxx}
├${tz} ${tz} ${xxx}${prefix}pantun${xxx}
├${tz} ${tz} ${xxx}${prefix}cuaca${xxx}
├${tz} ${tz} ${xxx}${prefix}namaninja${xxx}
├${tz} ${tz} ${xxx}${prefix}fake${xxx}
├${tz} ${tz} ${xxx}${prefix}spamcall${xxx}
├${tz} ${tz} ${xxx}${prefix}spamemail${xxx}
├${tz} ${tz} ${xxx}${prefix}quotes${xxx}
├${tz} ${tz} ${xxx}${prefix}quotesnime${xxx}
├${tz} ${tz} ${xxx}${prefix}kbbilazimedia${xxx}
├${tz} ${tz} ${xxx}${prefix}covid${xxx}
├${tz} ${tz} ${xxx}${prefix}wikiid${xxx}
├${tz} ${tz} ${xxx}${prefix}wikien${xxx}
├${tz} ${tz} ${xxx}${prefix}covidid${xxx}
├${tz} ${tz} ${xxx}${prefix}kbbi${xxx}
├${tz} ${tz} ${xxx}${prefix}infogempa${xxx}
├${tz} ${tz} ${xxx}${prefix}randomquran${xxx}
├${tz} ${tz} ${xxx}${prefix}kisanabi${xxx}
├${tz} ${tz} ${xxx}${prefix}artinama${xxx}
├${tz} ${tz} ${xxx}${prefix}artimimpi${xxx}
├${tz} ${tz} ${xxx}${prefix}artijadian${xxx}
├${tz} ${tz} ${xxx}${prefix}chord${xxx}
├${tz} ${tz} ${xxx}${prefix}lirik${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const fastmenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}fb${xxx}
├${tz} ${tz} ${xxx}${prefix}tts${xxx}
├${tz} ${tz} ${xxx}${prefix}steam${xxx}
├${tz} ${tz} ${xxx}${prefix}stalktwit${xxx}
├${tz} ${tz} ${xxx}${prefix}stalkgithub${xxx} 
├${tz} ${tz} ${xxx}${prefix}randomhusbu${xxx}
├${tz} ${tz} ${xxx}${prefix}pinterest${xxx}
├${tz} ${tz} ${xxx}${prefix}randomwaifu${xxx}
├${tz} ${tz} ${xxx}${prefix}randomwaifu1${xxx}
├${tz} ${tz} ${xxx}${prefix}stalkig${xxx}
├${tz} ${tz} ${xxx}${prefix}estetikpic${xxx}
├${tz} ${tz} ${xxx}${prefix}memeindo${xxx}
├${tz} ${tz} ${xxx}${prefix}darkjokes${xxx}
├${tz} ${tz} ${xxx}${prefix}urlshort${xxx}
├${tz} ${tz} ${xxx}${prefix}shortener${xxx}
├${tz} ${tz} ${xxx}${prefix}fox${xxx}
├${tz} ${tz} ${xxx}${prefix}dog${xxx}
├${tz} ${tz} ${xxx}${prefix}cat${xxx}
├${tz} ${tz} ${xxx}${prefix}panda${xxx}
├${tz} ${tz} ${xxx}${prefix}panda1${xxx}
├${tz} ${tz} ${xxx}${prefix}bird${xxx}
├${tz} ${tz} ${xxx}${prefix}koala${xxx}
├${tz} ${tz} ${xxx}${prefix}meme${xxx}  
├${tz} ${tz} ${xxx}${prefix}asupan${xxx}
├${tz} ${tz} ${xxx}${prefix}asupan1${xxx}
├${tz} ${tz} ${xxx}${prefix}asupan2${xxx}
├${tz} ${tz} ${xxx}${prefix}ngakak${xxx}
├${tz} ${tz} ${xxx}${prefix}pin${xxx} 
├${tz} ${tz} ${xxx}${prefix}foto${xxx} 
├${tz} ${tz} ${xxx}${prefix}bts${xxx}
├${tz} ${tz} ${xxx}${prefix}exo${xxx}
├${tz} ${tz} ${xxx}${prefix}blackpink${xxx}
├${tz} ${tz} ${xxx}${prefix}attp${xxx}
├${tz} ${tz} ${xxx}${prefix}manga1${xxx}
├${tz} ${tz} ${xxx}${prefix}character${xxx}
├${tz} ${tz} ${xxx}${prefix}ttp4${xxx}
├${tz} ${tz} ${xxx}${prefix}ttp3${xxx}
├${tz} ${tz} ${xxx}${prefix}ttp2${xxx}
├${tz} ${tz} ${xxx}${prefix}ttp1${xxx}
├${tz} ${tz} ${xxx}${prefix}sticker${xxx}
├${tz} ${tz} ${xxx}${prefix}stickergif${xxx}
├${tz} ${tz} ${xxx}${prefix}bug${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const sertifikat = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}ffserti${xxx} 
├${tz} ${tz} ${xxx}${prefix}ffserti2${xxx}
├${tz} ${tz} ${xxx}${prefix}ffserti3${xxx}
├${tz} ${tz} ${xxx}${prefix}ffserti4${xxx}
├${tz} ${tz} ${xxx}${prefix}ffserti5${xxx}
├${tz} ${tz} ${xxx}${prefix}pubgserti${xxx}
├${tz} ${tz} ${xxx}${prefix}pubgserti2${xxx}
├${tz} ${tz} ${xxx}${prefix}pubgserti3${xxx}
├${tz} ${tz} ${xxx}${prefix}pubgserti4${xxx}
├${tz} ${tz} ${xxx}${prefix}pubgserti5${xxx}
├${tz} ${tz} ${xxx}${prefix}mlserti${xxx}
├${tz} ${tz} ${xxx}${prefix}mlserti2${xxx}
├${tz} ${tz} ${xxx}${prefix}mlserti3${xxx}
├${tz} ${tz} ${xxx}${prefix}mlserti4${xxx}
├${tz} ${tz} ${xxx}${prefix}mlserti5${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const ownermenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}dellprem${xxx} 
├${tz} ${tz} ${xxx}${prefix}addprem${xxx}
├${tz} ${tz} ${xxx}${prefix}clearall${xxx}
├${tz} ${tz} ${xxx}${prefix}bc${xxx}
├${tz} ${tz} ${xxx}${prefix}owner${xxx}
├${tz} ${tz} ${xxx}${prefix}author${xxx}
├${tz} ${tz} ${xxx}${prefix}bugtroli${xxx}
├${tz} ${tz} ${xxx}${prefix}setout${xxx}
├${tz} ${tz} ${xxx}${prefix}setwelcome${xxx}
├${tz} ${tz} ${xxx}${prefix}settz${xxx}
├${tz} ${tz} ${xxx}${prefix}setthum${xxx}
├${tz} ${tz} ${xxx}${prefix}setpp${xxx}
├${tz} ${tz} ${xxx}${prefix}setprefix${xxx}
├${tz} ${tz} ${xxx}${prefix}setreply${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const editfoto = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}crossgun${xxx} 
├${tz} ${tz} ${xxx}${prefix}bakar${xxx}
├${tz} ${tz} ${xxx}${prefix}pensil${xxx}
├${tz} ${tz} ${xxx}${prefix}pantaimalam${xxx}
├${tz} ${tz} ${xxx}${prefix}costumwp${xxx}
├${tz} ${tz} ${xxx}${prefix}facebookpage${xxx}
├${tz} ${tz} ${xxx}${prefix}gtav${xxx}
├${tz} ${tz} ${xxx}${prefix}deteksiumur${xxx}
├${tz} ${tz} ${xxx}${prefix}removebg${xxx}
├${tz} ${tz} ${xxx}${prefix}deteksiwajah${xxx}
├${tz} ${tz} ${xxx}${prefix}wanted${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const islammenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}asmaulhusna${xxx} 
├${tz} ${tz} ${xxx}${prefix}ayatkursi${xxx}
├${tz} ${tz} ${xxx}${prefix}bacaansholat${xxx}
├${tz} ${tz} ${xxx}${prefix}doaharian${xxx}
├${tz} ${tz} ${xxx}${prefix}kisahnabi${xxx}
├${tz} ${tz} ${xxx}${prefix}niatsholat${xxx}
├${tz} ${tz} ${xxx}${prefix}tahlil${xxx}
├${tz} ${tz} ${xxx}${prefix}wirid${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const spesialmenu = `╭──❲ ${xxx}WHATSAPP${xxx} ❳
├${tz} ${tz} ${xxx}${prefix}randomwibu${xxx}
├${tz} ${tz} ${xxx}${prefix}phkomen${xxx}
├${tz} ${tz} ${xxx}${prefix}semoji${xxx}
├${tz} ${tz} ${xxx}${prefix}jadian${xxx}
├${tz} ${tz} ${xxx}${prefix}citacita${xxx}
├${tz} ${tz} ${xxx}${prefix}laut${xxx}
├${tz} ${tz} ${xxx}${prefix}darat${xxx}
├${tz} ${tz} ${xxx}${prefix}udara${xxx}
├${tz} ${tz} ${xxx}${prefix}fakta${xxx}
├${tz} ${tz} ${xxx}${prefix}gcard${xxx}
├${tz} ${tz} ${xxx}${prefix}ssweb${xxx}
├${tz} ${tz} ${xxx}${prefix}katailham${xxx}
├${tz} ${tz} ${xxx}${prefix}randomwibu${xxx}
╰──❲ ${xxx}BY ${ownername}${xxx} ❳`

const prem1 = `MAAF TAPI FITUR ${xxx}${command}${xxx} KHUSUS MEMBER PREMIUM. INGIN DAFTAR PREMIUM?? SILAHKAN HUBUNGI OWNER`
    
const nayzelite = `╭════════════════════⊷
┃✜╿➻ *NO ESTAS VERIFICADO* ]─
┃✜╿➻ Estado: No verificado ❌
┃✜╿➻ Nombre: ${pushname}
┃✜╿➻ Escribe ${prefix}samuraibot
┃✜╰──────────────────
╰════════════════════⊷`

const elitenay = `╭════════════════════⊷ 
┃✜╭─[ *VERIFICACIÓN* ]───
┃✜╿➻ Estado: Verificado ✔️
┃✜╿➻ Nombre: ${pushname}
┃✜╿➻ Escribe: ${prefix}menu
┃✜╿➻ Info Del Dot? ${prefix}info
┃✜╿➻ Dueño? ${prefix}owner
┃✜╿➻ Otro? ${prefix}other
┃✜╿➻ Escribe ${prefix}samubot para mas información
┃✜╰──────────────────
╰════════════════════⊷`
			

        
			       switch (command) {
/* ===================================================[ samurái ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
/*			        
			        
			        
			        MAU NYOLOMG CASE YA OM?? 
			        SETIDAKNYA ADD NAMA GW LAH
			        DI THX TO BOT KLEAN "NAYLA"
			        GK MAU?? OKE TERIMAKASIH			       			        
			        			       			        			       			        			       			        			        
			        
			        
//		 NUEVAS FUNCIONES***/
case 'glow':
               //Update By Mzailani & Adi Official
               
               tahtaq = `${body.slice(5)}`
                    if (args.length < 1) return reply('Y el texto?')
                    if (args.length > 10) return reply('Maximo 10 letras')
                    reply(naylachan)
                    anu = await fetchJson(`https://gratisancok.herokuapp.com/api/textmaker/metallic?text=${tahtaq}&theme=glow&apikey=${ApikeyZailani}`, {method: 'get'})
                    buffer = await getBuffer(anu.result.url)
                    nayla.sendMessage(from, buffer, image, { quoted: mek, caption: `BY SAMURAI`})
                    

             break
case 'simi':
					if (args.length < 1) return reply('¿Dónde está el texto??')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					reply(anu)
					break
case 'dropwater':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=SAMURAI-BOT&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
case 'firetexto':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?apikey=SAMURAI-BOT&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
case 'ffire':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/epep?apikey=SAMURAI-BOT&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay})
                   break 
 case 'thunder':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/thundertext?apikey=SAMURAI-BOT&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break    
                   case 'sandia':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=SAMURAI-BOT&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
case 'test':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://naylabot-api.herokuapp.com/api/textmaker/alam?text=Zhirrr&theme=flower&apikey=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break

case 'clone':
					  if (!isOwner) return reply(mess.only.ownerB)
					  if (args.length < 1) return reply('Tag target')
					  if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag cvk')
					  mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid[0]
					  let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					  try {
						  pp = await nayla.getProfilePicture(id)
						  buffer = await getBuffer(pp)
						  nayla.updateProfilePicture(botNumber, buffer)
						  mentions(`La foto de perfil se actualizó correctamente usando la foto de perfil @${id.split('@')[0]}`, [jid], true)
					  } catch (e) {
						  reply('Error')
					  }
					  break

case 'ping':
	case 'speed':
  const timestamp = speed();
  const latensi = speed() - timestamp
  nayla.updatePresence(from, Presence.composing)
  uptime = process.uptime()
  nayla.sendMessage(from, `*El bot responde en*\n‣ *Speed* : ${latensi.toFixed(4)} _Segundos_\n\n*Info bot*\n‣ *Total de chats* : ${totalchat.length}\n‣ *Total de usuarios* :ME DA PAJA PONERLO MALPARIDO HIJO DE PUTA\n‣ *Bloqueados* : ${blocked.length}\n‣ *Tiempo activo* : ${kyun(uptime)}`, text, {
	quoted: nay
  })
  break

case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de administradores facheros del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Solo En Grupos`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(nayla.chats.get(ido).presences), nayla.user.jid]
                nayla.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: nay1,
                    contextInfo: { mentionedJid: online }
                })
                break

case 'infoall':
                if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* - [𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥 ] -\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMACIÓN* ⟫━━━┓`+teks+'╚═ *「 SAMURAI-BOT」* ', members_id, true)
					break

case 'runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
├ *Nama bot : SamuraiBot*
├ *Server :* _*Baileys*_
├ *Runtime :*
├   \`\`\`${kyun(uptime)}\`\`\`
├   \`\`\`${latensip.toFixed(4)} Second\`\`\`
└─────────────`
			             nayla.sendMessage(from, anjink, text,{quoted : nay1})
			           break
case 'runt':
exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " dias, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
break
case 'setwelcome':
					if (!isOwner) return reply(`Quien verga eres puto pendejo de mierda hijo de puta chinga toda tu puta madre malparido `) 
	    	       
					if (args.length < 1) return reply('*¿Dónde está el texto??*')
                    nayla.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					nayla.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : nay1})
				break 
case 'profile':
				if (nay.message.extendedTextMessage != undefined){
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await nayla.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					nayla.sendMessage(from, thumb, MessageType.image)
				{quoted : nay1}}
				break

case 'random':

             		var group3 = await nayla.groupMetadata(from)
        				var member3 = group3['participants']
        				var mem3 = []
        				member3.map( async adm => {
	        			mem3.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				        let randomv = mem3[Math.floor(Math.random() * mem3.length)]
        				console.log(randomv)
        				nayla.sendMessage(from, `╔✯〘 Te han seleccionado! 〙✯═ \n\n @${randomv.split('@')[0]}\n\n═✯〘 Para: ${body.slice(8)} 〙✯═`, text, {quoted : nay, contextInfo: {mentionedJid : [randomv], "forwardingScore": 999, "isForwarded": true}})
        				break
case 'seberapagay':
	
	
	if (args.length < 1) return nayla.sendMessage(from, 'Escribe el nombre', text, {
  quoted: mek
	})
	teks = body.slice(13)
	nayla.updatePresence(from, Presence.composing)
	data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)
	hasil = `*Gay Detectado*\n‣ Nombre : *${args[0]}*\n‣ Porcentaje : *${data.persen}%*\n*${data.desc}*`
	reply(hasil)
	
	break
		case 'reglas':
			        tuh = fs.readFileSync(`./src/fx.jpg`)
                    nehh = `* REGLAS DEL BOT *

1. NO LLAME POR AL BOT!!
2. NO HAGA SPAM BOT
4. NO USARLO POR PRIVADO
5. NO AÑADIR A GRUPOS


JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
		            nayla.sendMessage(from, tuh, image, { quoted: nay, caption: nehh, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
		            break
case 'notif':
  if (!isElite) return reply(nayzelite)	
					if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
teks = `Notif dada por @${sender.split("@")[0]}\n*Mensaje : ${body.slice(7)}*`
group = await nayla.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await nayla.sendMessage(from, options, text)
break
case 'kicktime':
					  if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					nayla.sendMessage(from, '🖕🏻 Otra cosa Alan Es GAY', text)
					}, 8000)
					setTimeout( () => {
					reply('🥵')
					}, 7000)
					setTimeout( () => {
					nayla.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					nayla.sendMessage(from, `Huy pronto sacare a este JOTO @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					nayla.sendMessage(from, 'Adios Joto', text)
					}, 2500)
					setTimeout( () => {
					reply('Huy, Que bien, esto lo voy a disfrutar como no tienes idea')
					}, 0)
					break
case 'musica':
												case 'música':
                									play2 = body.slice(5)
													await nayla.sendMessage(from, `*Descargando musica...*`, text)
													const playOptions = {
														limit: 1,
														gl: 'ID',
														hl: 'pt'
													}
													const res = await ytsr(play2, playOptions).catch(err => {
														return nayla.sendMessage(from, `We no encuentro nada con  título en YouTube`, MessageType.extendetext, {quoted : mek})
													})
									
													const videoResult = res.items.filter(item => item.type === 'video')[0]
									
													if (!videoResult) {
														return nayla.sendMessage(from, `We no encuentro nada con  título en YouTube`, MessageType.extendetext, {quoted : mek})
													}
									
													const playInfo = await ytdl.getInfo(videoResult.url, {
														quality: 'highestaudio'
													});
									
													let playStream = ytdl(videoResult.url, {
														quality: 'highestaudio'
													});
									
													let songPlayInfo = {
														title: playInfo.videoDetails.title,
														url: playInfo.videoDetails.video_url,
														lengthSeconds: playInfo.videoDetails.lengthSeconds,
														authorName: playInfo.videoDetails.author.name,
														videoId: playInfo.videoDetails.videoId,
														isPrivate: playInfo.videoDetails.isPrivate,
													}
											const durase = `${songPlayInfo.lengthSeconds}/60`
													console.log(durase)
													const getpic = await getBuffer(videoResult.bestThumbnail.url)
													
													await nayla.sendMessage(from, getpic, MessageType.image, {caption : `*PLAY YOUTUBE MP3*\n\n*Titulo:*  ${songPlayInfo.title.replace('Official','').replace('Unofficial','').replace('Cover','').replace('Video','').replace('Clip','').replace('|','').replace('Music','').replace('UNOFFICIAL','').replace('OFFICIAL','').replace('MUSIC','').replace('VIDEO','').replace('(','').replace(')','').replace('lirik','').replace('Lyric','').replace('Lirik','')}\n\n*Formato Del Archivo:*  MPEG-2 Audio Layer III\n\n*Enviando tu audio...*\n\n*Espere...*`}).catch(err => nayla.sendMessage(from, `*PLAY YOUTUBE MP3*\n\n*Titulo:*  ${songPlayInfo.title.replace('Official','').replace('Unofficial','').replace('Cover','').replace('Video','').replace('Clip','').replace('|','').replace('Music','').replace('UNOFFICIAL','').replace('OFFICIAL','').replace('MUSIC','').replace('VIDEO','').replace('(','').replace(')','').replace('lirik','').replace('Lyric','').replace('Lirik','')}\n\n*Formato Del Archivo:*  MPEG-2 Audio Layer III\n\n*Enviando tu audio...*\n\n*Espere...*`, text, {quoted : mek}))
									
													//console.log(songinfo);
													let testPlaySize = (((songPlayInfo.lengthSeconds * 128000) / 8) / 1024) / 1024
													console.log(`Tamaño de la musica : ${testPlaySize} MB`);
									
													if (testPlaySize >= 15) {
														return nayla.sendMessage(from, `Lo siento el limite de audio es de 15MB.`, text)
													}
									
													if (songPlayInfo.lengthSeconds > 900) {
														return nayla.sendMessage(from, `Lo siento el limite de audio es de 15MB.`, text)
													}
									
													ffmpeg(playStream)
														.audioBitrate(128)
														.save(`./temp/${songPlayInfo.videoId}.mp3`)
														.on('end', async function()  {
															var playStats = fs.statSync(`./temp/${songPlayInfo.videoId}.mp3`)
															let realSize = playStats.size / (1024 * 1024);
															console.log(`Tama�o original: ${realSize} MB`);
															if (realSize <= 15) {
																await exec(`ffmpeg -i ./temp/${songPlayInfo.videoId}.mp3 -vn -ab 128k -ar 44100 -f ipod ./temp/${songPlayInfo.videoId}2.mp3 -y`)
																await sleep(5000)																	
																const auid = fs.readFileSync(`./temp/${songPlayInfo.videoId}2.mp3`)
																await nayla.sendMessage(from, auid, MessageType.audio, {quoted: mek, mimetype: Mimetype.mp4Audio, ptt : true}).then(f => {
																	try {
																		fs.unlinkSync(`./temp/${songPlayInfo.videoId}.mp3`);
																		fs.unlinkSync(`./temp/${songPlayInfo.videoId}2.mp3`);
																		console.log(`Archivo Temporal Eliminado: ${songPlayInfo.videoId}.mp3`);
																		nayla.sendMessage(from, `Archivo Temporal Eliminado: ${songPlayInfo.videoId}.mp3`, text);
																	} catch (err) {
																		// handle the error
																		console.log(err);
																	}
																})
																
															} else {
																return nayla.sendMessage(from, `Upsss no he podido descargar la música señor.`, text)
															}
														});
													break
case 'playstore':
                    if (!isElite) return reply(nayzelite)	
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${ZeksApi}&q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break


case 'nickff2': 
  if (!isElite) return reply(nayzelite)	
					nayla.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nombre* : ${i}\n=================\n`
					}
					reply(teks.trim())
					break
case 'bitly':
                   if (!isElite) return reply(nayzelite)	
				nayla.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				
				break
		case 'cuttly':	
                   if (!isElite) return reply(nayzelite)	
				nayla.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nProducción : ${data.result.Short}`
				reply(hasil)
				
				break
case 'opentime':
  if (!isElite) return reply(nayzelite)	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
				if (args[1]=="seg") {var timer = args[0]+"000"
				} else if (args[1]=="min") {var timer = args[0]+"0000"
				} else if (args[1]=="horas") {var timer = args[0]+"00000"
				} else {return reply("*SELECCIONE:*\nsegundos\nminutos\nhoras")}
				setTimeout( () => {
			    nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
				reply("Se Acabó El Tiempo, El Grupo Se Abrira")
				}, timer)
				break
case 'closetime':
  if (!isElite) return reply(nayzelite)	
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
				if (args[1]=="seg") {var timer = args[0]+"000"
				} else if (args[1]=="min") {var timer = args[0]+"0000"
				} else if (args[1]=="horas") {var timer = args[0]+"00000"
				} else {return reply("*SELECCIONE:*\nsegundos\nminutos\nhoras")}
				setTimeout( () => {
			    nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
				reply("Se Acabó El Tiempo, El Grupo Se Cerrara")
				}, timer)
				break


case 'botgay':
  if (!isElite) return reply(nayzelite)	
reply('Calla mongolo de mrd')
break
case 'bothdp':
  if (!isElite) return reply(nayzelite)	
reply('Calla puto joto')
break
case 'bot':
  if (!isElite) return reply(nayzelite)	
reply('Me Hablas A Mi?🥺')
break
case 'botlindo':
  if (!isElite) return reply(nayzelite)	
reply('👉🏻👈🏻')
break

case 'yo':
	  if (!isElite) return reply(nayzelite)	
	try {
  ppimg = await nayla.getProfilePicture(`${sender.split('@')[0]}@c.us`)
	} catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `‣ *Nombre* : ${pushname}
	‣ *Número* : ${sender.split("@")[0]}
	‣ *Link* : wa.me/${sender.split("@")[0]}`
	its = await getBuffer (ppimg)
	nayla.sendMessage(from, its, image, {
  quoted: nay, caption: teks
	})
	
	break
case 'rate':
				  if (!isElite) return reply(nayzelite)	
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					nayla.sendMessage(from, 'Pregunta: *'+rate+'*\n\nPorcentaje : '+ te+'%', text, { quoted: nay })
					
					break
				case 'verdad':
                  if (!isElite) return reply(nayzelite)	
                const trut =['¿Alguna vez te ha gustado alguien? ¿Cuánto tiempo?','Si es posible o si quieres, en gc / fuera de gc, ¿con quién te harás amigo? (Puede ser diferente / del mismo tipo)','¿Cuál es tu mayor miedo?','¿Alguna vez te ha gustado alguien y has sentido a esa persona como tú también?','Cual es el nombre de la exnovia de tu amigo que una vez te gustó en secreto?','¿Alguna vez ha robado el dinero de su madre o su padre? ¿La razón?','que te hace feliz cuando estas triste','¿Alguna vez amor no correspondido? si alguna vez con quien? ¿cómo se siente brou?','¿Alguna vez ha tenido una aventura con alguien?','Cual es tu mayor miedo?','quién es la persona que tiene más influencia en tu vida?','algo orgulloso de lo que obtuviste este año','quién es la persona que puede hacerte sentir incómodo','¿Quién es la persona que alguna vez te hizo sentir incómodo?','(para los musulmanes) ¿nunca has rezado en todo el día?','¿Quién está más cerca de su tipo de pareja ideal aquí?','¿Con quién te gusta jugar?','¿Alguna vez has rechazado a alguien? ¿la razón por la cual?','Menciona eventos que te hacen daño y que aún recuerdas','¿Qué logros has obtenido este año?','¿Cuál fue tu peor hábito en la escuela?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nayla.sendMessage(from, truteh, image, { caption: '*Pregunta*\n\n'+ ttrth, quoted: nay })
					case 'matrix':
					if (!isElite) return reply(nayzelite)	
					gh = `${body.slice(8)}`
					confus = gh.split("/")[0];				
					if (args.length < 1) return reply('Donde esta el texto?')	
					reply(naylachan)
		    buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${confus}`)
		        nayla.sendMessage(from, buffer, image, {quoted: nay})
					break
					break
				case 'reto':
				  if (!isElite) return reply(nayzelite)	
				const dare =['Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌??','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌??','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈??🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Pasa pack 😈👌🏻','Envía un mensaje a tu ex diciéndole "Aún me gustas','enamoramiento telefónico / novia ahora y ss al jugador','Papanicolaou a un miembro del grupo','Dile "ERES TAN HERMOSA NO AMIGOS" a los chicos','ss llamadas recientes de whatsapp','suelta el emoji "🦄 ??" cada vez que escribes en hola durante 1 día','envía una nota de voz que diga ¿puedo llamarte bebé?','suelte la cita de la canción / cita, luego etiquete al miembro apropiado para esa cita','manda foto en calzones','Escribe en ingles por un dia','Cambia tu nombre a "Soy gay" durante 5 horaschatea para contactar con el pedido según el% de batería, sigues diciéndole "tengo suerte de tenerte','Publica en tu estado, soy gay','Dile a tu ex "te amo vuelve conmigo"','Manda una nota de voz haciendo gemidos','Dile a alguien de tu sexo opuesto que lo amas','Dile al siguiente que mande mensaje que lo amas','Manda fotos de tu crush','Borra tu whatsapp','Toma foto de cara y mandala','envía tu foto con una leyenda, soy un niño adoptado','Manda un audio gritando','Sal afuera de tu casa y grita','Cambia tu nombre a 3cm por un dia','Finge ser un bot durante 2 horas']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nayla.sendMessage(from, tod, image, { quoted: nay, caption: '*Reto*\n\n'+ der })
					
					break
case 'trumpsay' :
  if (!isElite) return reply(nayzelite)	
			 const ses = body.slice(10)
			 	if (args.length < 1) return reply(`Usa el comando correctamente ${prefix}trumpsay texto, Ejemplo  ${prefix}trumpsay simp bot`)
         
					reply(naylachan)
			 sayso = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${ses}`)
			 stufff = await getBuffer(sayso.message)
			 nayla.sendMessage(from, stufff, image, {quoted : nay, caption : "By FX-BOT"})
	                  
	                  break
       case 'join':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SUBSCRIBE YT RIMURUBOTZ`} } } })                    
                   reply('BOT AKAN SEGERA MASUK...')                     
					break   
				case 'codepais':
					nayla.sendMessage(from, codepais(prefix, sender), text, { quoted: nay })
					break
case 'persona':
					nayla.sendMessage(from, persona(prefix, sender), text, { quoted: nay })
					break
case 'g':
					nayla.sendMessage(from, g(prefix, sender), text, { quoted: nay })
					break
case 'samubot':
					nayla.sendMessage(from, felix(prefix, sender), text, { quoted: nay })
					break
case 'idioma':
					nayla.sendMessage(from, idioma(prefix, sender), text, { quoted: nay })
					break
case 'modapk':
					nayla.sendMessage(from, modapk(prefix, sender), text, { quoted: nay })
					break
case 'termux':
					nayla.sendMessage(from, termux(prefix, sender), text, { quoted: nay })
					break
case 'destrava':
					nayla.sendMessage(from, destrava(prefix, sender), text, { quoted: nay })
					break
case 'porno':
					nayla.sendMessage(from, porno(prefix, sender), text, { quoted: nay })
					break
case 'ayuda':
					nayla.sendMessage(from, ayuda(prefix, sender), text, { quoted: nay })
					break
case 'instalar':
					nayla.sendMessage(from, instalar(prefix, sender), text, { quoted: nay })
					break
			        case 'info':
			        
			        uptime = process.uptime()
			        me = nayla.user 
			        inf1 = `➻Nombre Del Bot: ${namebot}\n`
			        inf1 += `➻Nombre Del Dueño: ${ownername}\n`
			        inf1 += `➻Autor: SamuraiBot\n`
			        inf1 += `➻Número Del Bot: ${numberbot}\n`
			        inf1 += `➻Velocidad: ${process.uptime()}\n`
                    inf1 += `➻Prefijo: ${xxx}${prefix}${xxx}\n`
                    inf1 += `➻Chats Totales: ${totalchat.length}\n`
                    inf1 += `➻Usuarios Bloqueados: ${blocked.length}\n`
                    inf1 += `➻Version De Whatsapp* : ${nayla.user.phone.wa_version}\n`
                    inf1 += `➻Tiempo activo*: ${kyun(uptime)}\n`
                    inf1 += `➻Tu Eres: ${pushname}\n`
                    inf1 += `➻Verificado: ✓\n`
                    inf1 += `➻Baterai :* ${baterai.baterai}%\n`
			        reply(inf1)
			        break
					case 'samuriabot': 					
					const serialUser = createSerial(20)
					veri = sender
					if (isGroup) {
					addEliteUser(sender, pushname, time, serialUser)
					try {					 
					} catch {						 
					}
				   	reply(elitenay)
					console.log(color(`HORE !!!! ${pushname} BARU SAJA MENJADI KAUM ELITE DI BOT INI`, 'yellow'))
					} else {
					addEliteUser(sender, pushname, time, serialUser)
					try {						 
					} catch {						  
			    	}
			     	reply(elitenay)
		         	console.log(color(`HORE !!!! ${pushname} BARU SAJA MENJADI KAUM ELITE DI BOT INI`, 'yellow'))
				    }
				    break						       	 			            			         
                  	case 'help':  
			    	case 'menu': wew = fs.readFileSync(`./src/fx.jpg`)                     
			    	if (!isElite) return reply(nayzelite)	
                    runtime = process.uptime()
                    const SS2 = fs.readFileSync('menu/undef2.png')                    
                    reply(menuZ)                                    
                    const SS1 = fs.readFileSync('sound/chann.mp3')
                    nayla.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    break
                    case 'fastmenu':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(fastmenu)                                                         
                    break                    
                    case 'editfoto':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(makerfoto) 
                    break                                                                                           
                    case 'ownermenu':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(ownermenu)                                    
                    break
                    case 'spesialmenu':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(spesialmenu)
                    break                    
                    case 'sertifikat':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(sertifikat) 
                    break                                   
                    case 'randomtext':                      
                    if (!isElite) return reply(nayzelite)	
                    reply(randomtext)  
                    break                                  
                    case 'gamemenu':                      
                    if (!isElite) return reply(nayzelite)	 
                    reply(gamemenu)  
                    break 
                    case 'tagmenu':                      
                    if (!isElite) return reply(nayzelite)	                                 
                    reply(tagmenu) 
                    break
                    case 'cekmenu':                      
                    if (!isElite) return reply(nayzelite)	                                   
                    reply(cekmenu) 
                    break
                    case 'internalmenu':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(internalmenu) 
                    break 
                    case 'pornmenu':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(pornmenu)  
                    break
                    case 'soundmenu':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(soundmenu)  
                    break
                    case 'downloadmenu':                      
                    if (!isElite) return reply(nayzelite)	                                  
                    reply(downloadmenu)
                    break
                    case 'makermenu':                      
                    if (!isElite) return reply(nayzelite)	                                                        	
                    reply(makermenu)  
                    break    
                    case 'grupmenu':                      
                    if (!isElite) return reply(nayzelite)	                              
                    reply(grupmenu)
                    break    
                    case 'islammenu':                      
                    if (!isElite) return reply(nayzelite)	                              
                    reply(islammenu)                                    
                    break
                    case 'donasi':  
                    if (!isElite) return reply(nayzelite)	                      	
                    donasi1 = `[ *${donasi}* ]\n`
                    donasi1 += `➻ *PULSA* : ${pulsa}\n`
                    donasi1 += `➻ *GOPAY* : ${gopay}\n`
                    donasi1 += `➻ *OVO* : ${ovo}\n`
                    donasi1 += `➻ *DANA* : ${dana}\n`
                    reply(donasi1)
                    break

case 'semoji':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_nayla = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=SAMURAI-BOT&emoji=${emoji}`)
                    nayla.sendMessage(from, ini_nayla, sticker, {quoted: nay})
                    break
case 'narutologo2':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(13)
                   reply(naylachan)
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break        
                   case 'test':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(13)
                   reply(naylachan)
                   anu = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/under-orchids?teks=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break        
                     
				    case 'ytmp4':
                if (args.length < 1) return reply(`Linknya Mana Cuy?\nContoh : ${prefix + command} https://youtu.be/b0md2fEIFpg`)
                reply(naylachan)
                ini_link = args[0]
                get_result = await fetchJson(``)
                get_result = get_result.result
                ini_txt = `Titulo : ${get_result.title}\n`
                ini_txt += `Carga : ${get_result.uploader}\n`
                ini_txt += `Duración : ${get_result.duration}\n`
                ini_txt += `Vistas : ${get_result.view}\n`
                ini_txt += `Like : ${get_result.like}\n`
                ini_txt += `Dislike : ${get_result.dislike}\n`
                ini_txt += `Descripción :\n ${get_result.description}\n\n\n`
                ini_buffer = await getBuffer(get_result.thumbnail)
                nayla.sendMessage(from, ini_buffer, image, { quoted: nay1, caption: ini_txt })
                get_audio = await getBuffer(get_result.link[0].link)
                nayla.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoed: nay1})
                break
case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'amongus':
                if (!isElite) return reply(nayzelite)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dppa = args.join(" ")
                reply(naylachan)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolHuman}&text=${dppa}`)
                nayla.sendMessage(from, nayla, sticker, {quoted: nay})
                break
				    
                    case 'stalktwit':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(naylachan) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NOMBRE* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USUARIO* : ${anu.result.username}\n`
                    anu2 += `➻ *SEGUIDORES* : ${anu.result.followers}\n`
                    anu2 += `➻ *SIGUIENDO* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PÚBLICO* : ${anu.result.verified}\n`
                    anu2 += `➻ *LISTA* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVORITO* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
                    case 'stalkgithub':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NOMBRE* : ${anu.result.username}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *USUARIO* : ${anu.result.fullname}\n`
                    anu2 += `➻ *EMPRESA* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCALIZACIÓN* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *CONTRATABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFÍA* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PÚBLICO 1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *SEGUIDORES* : ${anu.result.followers}\n`
                    anu2 += `➻ *SIGUIENDO* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *ACTUALIZAR* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
                    case 'steam':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN JUDUL') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu1 += `➻ *USER* : ${anu.result.username}\n`
                    anu1 += `➻ *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    nayla.sendMessage(from, anu1, text,{quoted: nay1})
                    break 
                    case 'fb':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `➻ *TÍTULO* : ${anu.result.judul}\n`
                    nayla.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: nay1})
                    break 
                    case 'igfoto':                      	  
                    if (!isElite) return reply(nayzelite)	
		            
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] FOTO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.image_text)
                    nayla.sendMessage(from, anu3, image, {quoted: nay1})
                    break
                    case 'igvideo':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.video)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay1})
                    break                          
                    case 'ytsearch':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.data.thumbnail)
                    anu2 = `➻ *NAME* : ${anu.result.data.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.data.id}\n`                    
                    anu2 += `➻ *DURASI* : ${anu.result.data.duration}\n`
                    anu2 += `➻ *CHANEL* : ${anu.result.data.id}\n`
                    anu2 += `➻ *PUBLIC.AT* : ${anu.result.data.published_at}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.data.views}\n`
                    anu2 += `➻ *DESK* : ${anu.result.data.description}\n`  
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                    break    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
                    case 'reverse':                     	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('Y el texto?') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break    
                    case 'contpalabra':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('Y el texto?') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break       
                    case 'hilih':                      	  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('Y el texto?') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ RANDOM CEK ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'gayme':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `Este es el porcentaje de gay de ${pushname} 🏳️‍🌈\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':  
                    if (!isElite) return reply(nayzelite)	                      	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':                      	  
                    if (!isElite) return reply(nayzelite)		
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':                      	  
                    if (!isElite) return reply(nayzelite)	
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😘`
                    reply(N)
                    break                   
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
                    case 'spamemail':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN EMAIL&NOMER&PESAN') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
                    case 'spamcall':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply('MASUKKAN NOMER') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        
                    case 'quotes':                      	  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    case 'fakta':                      	  
                    if (!isElite) return reply(nayzelite)	 
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                  
                    case 'gcard':                      	  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                                                                                                                                                                                                                                                        
                    case 'tebakgambar':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, image,{caption: 'JAWAB BRO... WAKTU 60  Segundo', quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50  Segundo LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           

/* ======================================================[ ANIME-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                    
                    case 'quotesnime':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    
/* ======================================================[ ANJAY-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                   case 'lazimedia':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply('MASUKKAN NAMA PRODUK')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
                   case 'covid':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
                   case 'wikiid':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break  
                   case 'wikien':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.title}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.desc}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break   
                   case 'covidid':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
                   case 'kbbi':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply('MASUKKAN QUERY')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
                   case 'infogempa':  
                   if (!isElite) return reply(nayzelite)		                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break
                   case 'randomquran':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break                    
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case '8bit':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} kamu&aku*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'google':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} kamu & aku & dia*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'fire':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'burn':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'battle':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'mug':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                    case 'love':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                   break 
                   case 'mug1':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                   break 
                   case 'naruto':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                   break 
                   case 'glass':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                   break 
                   case 'romance':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                   break 
                   
                   case 'shadow':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} Felixcrack*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'tiktok':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'coffe':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break  
                   case 'coffe1':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'neon':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break  
                   case 'pubg':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'water':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'silk':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'potter':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'candy':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break                     
                   case 'block':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                    
                   
  
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    case 'artinama':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
                    case 'artimimpi':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
                    case 'artijadian':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
                    case 'chord':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
                    case 'lirik':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API   ............... ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                
/* ==================================================[ GK TAU v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case 'kusonime':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
                   case 'renungan':  
                   if (!isElite) return reply(nayzelite)		 
                   reply(naylachan) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
                   case 'samehadaku':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay })
                   break
                   case 'neon1':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break  
                   case 'text3d':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break                   
                   case 'galaxy':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'gaming':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'colors':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'kling':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'infonomer':  
                   if (!isElite) return reply(nayzelite)		
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
                   case 'jadwaltv':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
                   case 'tvjadwal':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'fml':  
                   if (!isElite) return reply(nayzelite)		 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
                   case 'cinta':  
                   if (!isElite) return reply(nayzelite)		 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
                   case 'twich':  
                   if (!isElite) return reply(nayzelite)		 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                   
                   case 'fake':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
                   case 'pin':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} https://link*`)
                   reply(naylachan)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'qrcode':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'resepmasakan':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
                   case 'barcode':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'cersex':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
                   case 'cerpen':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                   
                   case 'tongue':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'jadwalsholat':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
                   case 'pantun':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
                   case 'cuaca':  
                   if (!isElite) return reply(nayzelite)		 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
                   case 'namaninja':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NOMBRE* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
                   
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
                   case 'stalkig':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
                   case 'quran':  
                   if (!isElite) return reply(nayzelite)		
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
                   case 'estetikpic':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'memeindo':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'darkjokes':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'nickff':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'neon2':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break                    
                   case 'wall':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break   
                   case 'wolf':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'tfire':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break                
                   case 'ytgold':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(8)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'ytsilver':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(10)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 't3d':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(5)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'logoa':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'pornhub':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'marvel':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'leavest':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: 𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break                    
                   case 'phcoment':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'nulis':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'shortener':  
                   if (!isElite) return reply(nayzelite)		
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(naylachan)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort':  
                   if (!isElite) return reply(nayzelite)		
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(naylachan)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *UNO* : ${anu.result_1}\n`
                   anu1 += `➻ *DOS* : ${anu.result_2}\n`
                   anu1 += `➻ *TRES* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   case 'fox':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'play':
  //if (!isRegister) return reply(mess.only.daftarB)
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Me olvide de vivir`)
                    query = args.join(' ')
		 //   fakee = fs.readFileSync('./src/img.jpg')
                    get_result = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=FELIXCRACKAPI409&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `🧊Titulo : ${get_info.title}\n`
                    ini_txt += `🕵🏻‍♀️️Publicador : ${get_info.uploader}\n`
                    ini_txt += `🕐Duracion : ${get_info.duration}\n`
                    ini_txt += `👀Vistas : ${get_info.view}\n`
                    ini_txt += `👍🏻Like : ${get_info.like}\n`
                    ini_txt += `👎🏻Dislike : ${get_info.dislike}\n`
                    ini_txt += `📋Descripcion :\n ${get_info.description}\n\n`
		    ini_txt += `Si el audio no llega, puede descargar por aqui: :\n ${get_result.audio[3].link}\n\n`
		    ini_txt += `Puede descargar tambien el video aqui: :\n ${get_result.video[0].link}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    await aqul.sendMessage(from, ini_buffer, image, { quoted: qul, caption: ini_txt, contextInfo: {"forwardingScore": 9999, "isForwarded": true} })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    await aqul.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, filename: `${get_info.title}.mp3`, quoted: qul })
                    break
                   case 'dog':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'cat':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'panda':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'panda1':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'bird':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'koala':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'meme':  
                   if (!isElite) return reply(nayzelite)		
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: nay1})
                   break
                   
              
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                              
                   case 'indo1':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'indo2':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'indo3':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'indo4':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'indo5':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'indo6':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'indo7':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'indo8':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'indo9':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
				   case 'indo10':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'indo11':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'indo12':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'indo13':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'indo14':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'indo15':  
                   if (!isElite) return reply(nayzelite)						    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'indo16':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'indo17':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'indo18':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'indo19':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'indo20':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'indo21':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'indo22':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'indo23':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'indo24':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
				   case 'indo25':  
                   if (!isElite) return reply(nayzelite)						 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isElite) return reply(nayzelite)	
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
				   case 'jadian':
				   if (!isElite) return reply(nayzelite)	
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\nSELAMAT MENEMPUH KEHIDUPAN BARU!!`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break
				   case 'kapankah':  
                    if (!isElite) return reply(nayzelite)	
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
		           case 'apakah':  
                    if (!isElite) return reply(nayzelite)	
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break
				   case 'slot':  
                   if (!isElite) return reply(nayzelite)	    				    				    
				   slot = `===================\n` 
				   slot += `║ ${slot11} ║ ${slot22} ║ ${slot33}\n`
				   slot += `║ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
				   slot += `║ ${slot77} ║ ${slot88} ║ ${slot99}	\n`				   
				   slot += `===================\n`
				   nayla.sendMessage(from, slot, text, {quoted: nay})
				   break				  
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                                                                                                                                                                                                                                                                                                                                                          
                   case 'wallteknologi':  
                   case 'walteknologi':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/teknologi?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'wallpegunungan':  
                   case 'walpegunungan':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/pegunungan?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'wallmuslim':  
                   case 'walmuslim':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/muslim?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'wallcyber':  
                   case 'walcyber':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/cyberspace?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'wallhacker':  
                   case 'walhacker':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/programming?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'quotes1':  
                    if (!isElite) return reply(nayzelite)	
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/randomquote/muslim?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'quotes2':  
                   if (!isElite) return reply(nayzelite)	
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/quotes/kanye?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'wallpaper':   
                   case 'walpaper':  
                   if (!isElite) return reply(nayzelite)	
                   reply(naylachan)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/random/wallpaper?apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'imo':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(5)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/lmo?text=${F}&theme=bintang&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'scary':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=scary-njir&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'metal':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=metal-epek&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption:𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'metal1':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(8)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=metal-wolf&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'daun':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(6)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=daun-kaki&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case '3dwhite':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(9)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/neon9?text=${F}&theme=3dwhite&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'robot':  
                    if (!isElite) return reply(nayzelite)	 
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                   reply(naylachan)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/maker/special/transformer?text=${F}&apikey=alpin11`)
                   anu1 = await getBuffer(anu.result.results)
                   nayla.sendMessage(from, anu1, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'caklontong':  
                    if (!isElite) return reply(nayzelite)	
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/kuis/caklontong?apikey=alpin1`)                 
                   anu1 = `➻ *SOAL* : ${anu.result.soal}\nJAWAB CUYY WAKTU 60  Segundo`
                   anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}\n`
                   anu2 += `➻ *DESK* : ${anu.result.deskripsi}`
                   setTimeout( () => {
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   }, 1)
                   setTimeout( () => {
                   costum('50  Segundo LAGI', text, tescuk, cr)
                   }, 10000)                                                                                                                                   
                   setTimeout( () => {
                   costum('40  Segundo LAGI', text, tescuk, cr)
                   }, 20000)    
                   setTimeout( () => {
                   costum('30  Segundo LAGI', text, tescuk, cr)
                   }, 30000)    
                   setTimeout( () => {
                   costum('20  Segundo LAGI', text, tescuk, cr)
                   }, 40000)                                       
                   setTimeout( () => {
                   costum('10  Segundo LAGI', text, tescuk, cr)
                   }, 50000)                                                                                                                                                     
                   setTimeout( () => {
                   nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                   }, 60000)                                                                          
                   break               
                                                                                                                                                        
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   
                   case 'ssweb':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} https://google.com*`)                  
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break
                   case 'smoke':  
                    if (!isElite) return reply(nayzelite)	
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break 
                   case 'rainbow':  
                    if (!isElite) return reply(nayzelite)	
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
                    case 'toimg':  
                    if (!isElite) return reply(nayzelite)	 
					reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'Samurai-bot'})
				    fs.unlinkSync(ran)
					})					
			    	break 
                    case 'readmore':  
			    	case 'more':  
                    if (!isElite) return reply(nayzelite)	
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'chatlist':  
		         	case 'cekchat':  
                    if (!isElite) return reply(nayzelite)	
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `ALL CHAT BOTZ`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	                case 'addsticker':  
                    if (!isElite) return reply(nayzelite)	          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay1})
      				break
		        	case 'addvn':  
                    if (!isElite) return reply(nayzelite)	
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
		         	case 'getvn':  
                    if (!isElite) return reply(nayzelite)	
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
			        case 'getsticker':  
		        	case 'gets':  
                    if (!isElite) return reply(nayzelite)	
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':  
                    if (!isElite) return reply(nayzelite)	
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
		        	case 'listvn':  
	         		case 'vnlist':  
                    if (!isElite) return reply(nayzelite)	
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		        	case 'addimage':  
                    if (!isElite) return reply(nayzelite)	
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
		        	case 'getimage':  
                    case 'getimg':  
                    if (!isElite) return reply(nayzelite)	
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		        	case 'imagelist':  
                    if (!isElite) return reply(nayzelite)	
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
		        	case 'addvideo':  
                    if (!isElite) return reply(nayzelite)	
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
			        case 'getvideo':  
                    if (!isElite) return reply(nayzelite)	
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
		           	case 'listvideo':  
	           		case 'videolist':  
                    if (!isElite) return reply(nayzelite)	
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
                    case 'setprefix':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
					case 'setreply':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    naylachan = body.slice(10)
                    reply(`Change reply To ${naylachan} SUCCESS!`)					 
					break 
					case 'setpp':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Sukses')
			        break 
			        case 'setthum':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef1.png', delb)
		            reply('Sukses')
			        break 
					case 'setwelcome':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome1 = body.slice(12)
                    reply(`Change welcome To ${welcome1} SUCCESS!`)					 
					break
					case 'setout':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome2 = body.slice(8)
                    reply(`Change out To ${welcome2} SUCCESS!`)					 
					break  
					case 'settz':  
                    if (!isElite) return reply(nayzelite)	
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    tz = args[0]
                    reply(`Change tz To ${tz} SUCCESS!`)					 
					break 
                    case 'admin':  
         	        case 'owner':  
         	        case 'creator':  
         case 'creador':
                    if (!isElite) return reply(nayzelite)	
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Este es el número de mi dueño, no molestar con mamadas al menos q sean de verdad okno nah jaja, pero no jodas mucho o te manda a la vrg',MessageType.text, { quoted: nay} )				
					break  
					case 'other':  
         	        case 'author':  
                    if (!isElite) return reply(nayzelite)	         	       
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vnayla}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'TUHH NOMER AUTHOR KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: nay} )				
					break    
                    case 'sticker':  
				    case 'stiker':  
				    case 'stickergif':  
				    case 'stikergif':  
				    case 'sgif':  
				    case 's':  				 
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(naylachan)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                    min'(320,ih)':  
                    force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(naylachan)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                   	min'(320,ih)':  
                   	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Etiqueta una imagen o un video con ${prefix}sticker De mientras se crea el sticker ve a seguirme a YouTube`)
					}
					break
                    case 'bc':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `[ *${namebot} BROADCAST* \n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *${namebot} BROADCAST* ]\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
					case 'clearall':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`lu owner??`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break						 	 
                    case 'linkgc':  
                    if (!isElite) return reply(nayzelite)	
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
				    case 'tagall':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				    case 'delete':  
                    if (!isElite) return reply(nayzelite)	
				    case 'del':  
				    case 'd':  	
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
				    case 'kick':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
					nayla.groupRemove(from, mentioned)
					}					
					break 
					case 'hidetag':  
                    if (!isElite) return reply(nayzelite)	              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(9)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					break
			    	case 'add':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nayla.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}  
					break 
				     
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                                    
                     
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                    case 'bug':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`contoh ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
                   reply('REPORT BUG TELAH TERSAMPAIKAN. TERIMAKASIH TELAH MELAPORKAN FITUR')                     
					break   
					case 'chat':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`contoh ${prefix}chat halo min apa kabar`)
                    const cet1 = body.slice(6)
                    if (cet1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ CHAT PENGGUNA ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    // INI SILAHKAN UBAH DI SETTINGS 
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*ADA YANG CHAT NIHH*`} } } })                                    
                    reply(`PESAN ANDA SUDAH MASUK`)
                    break
                    case 'asupan':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 = `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
                    break
                    case 'asupan1':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'asupan2':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'ngakak':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
                    case 'nulis1':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(naylachan)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nih kak`, quoted: nay})
                    break
                    case 'nulis2':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break 
                    case 'nulis3':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break 
                    case 'nulis4':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break 
                    case 'nulis6':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break                     
                    case 'video1':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break
                    case 'video2':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break
                    case 'video3':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break
                    case 'video4':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break
                    case 'video5':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break
                    case 'video6':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} SamuraiBot*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `𝕊𝕒𝕞𝕦𝕣𝕒𝕚𝔹𝕠𝕥`, quoted: nay1}) 
                    break                     
                    
  /* ===================================================[ SamuraiBot ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    if (!isElite) return reply(nayzelite)	
                    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
                    case 'foto': case 'pinterest':              
				    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args[0]}`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
                    case 'ramalnomer':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'ramalcinta':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
                    case 'ramaljodoh':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'jodohbali':  
                    if (!isElite) return reply(nayzelite)	
			 	    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'ramalnikah':  
                    if (!isElite) return reply(nayzelite)	
			 	    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
                    case 'taksirmimpi':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'suit':  
                    if (!isElite) return reply(nayzelite)	
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakangka':  
                    if (!isElite) return reply(nayzelite)	
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakbendera':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60  Segundo`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50  Segundo LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break     
                    case 'kata':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1)
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*====================================================[ TEXT PRO XIXIXI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    case 'sound1':  
                    if (!isElite) return reply(nayzelite)	
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    nayla.sendMessage(from, sound2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
                    case 'sound3':  
                    if (!isElite) return reply(nayzelite)	
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    nayla.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
                    case 'sound4':  
                    if (!isElite) return reply(nayzelite)	
                    const sound4 = fs.readFileSync('sound/sound4.mp3')
                    nayla.sendMessage(from, sound4, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
                    case 'sound5':  
                    if (!isElite) return reply(nayzelite)	
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    nayla.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
                    case 'sound6':  
                    if (!isElite) return reply(nayzelite)	
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    nayla.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound7':  
                    if (!isElite) return reply(nayzelite)	
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    nayla.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound8':  
                    if (!isElite) return reply(nayzelite)	
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    nayla.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound9':  
                    if (!isElite) return reply(nayzelite)	
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    nayla.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound10':  
                    if (!isElite) return reply(nayzelite)	
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    nayla.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound11':  
                    if (!isElite) return reply(nayzelite)	
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    nayla.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'soundtes':  
                    if (!isElite) return reply(nayzelite)	
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    nayla.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound13':  
                    if (!isElite) return reply(nayzelite)	
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    nayla.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound14':  
                    if (!isElite) return reply(nayzelite)	
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    nayla.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound15':  
                    if (!isElite) return reply(nayzelite)	
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    nayla.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound16':  
                    if (!isElite) return reply(nayzelite)	
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    nayla.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound17':  
                    if (!isElite) return reply(nayzelite)	
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    nayla.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound18':  
                    if (!isElite) return reply(nayzelite)	
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    nayla.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound19':  
                    if (!isElite) return reply(nayzelite)	
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    nayla.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound20':  
                    if (!isElite) return reply(nayzelite)	
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    nayla.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound21':  
                    if (!isElite) return reply(nayzelite)	
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    nayla.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound22':  
                    if (!isElite) return reply(nayzelite)	
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    nayla.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound23':  
                    if (!isElite) return reply(nayzelite)	
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    nayla.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
                    case 'sound24':  
                    if (!isElite) return reply(nayzelite)	
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    nayla.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
                    case 'sound25':  
                    if (!isElite) return reply(nayzelite)	
                    const sound25 = fs.readFileSync('sound/sound25.mp3')
                    nayla.sendMessage(from, sound25, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
                    break                  
                     
     
                      
                    
                                                                                                                           
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                     
                      
                           
                     case 'katailham':  
                     if (!isElite) return reply(nayzelite)	
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`)
                     anu1 = `➻ *KATA ILHAM* : ${anu.result}`
                     reply(anu1)
                     break
                     case 'citacita':  
                     if (!isElite) return reply(nayzelite)	
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                     break
                     case 'blackpink':  
                     if (!isElite) return reply(nayzelite)	
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                     break
                     case 'exo':  
                     if (!isElite) return reply(nayzelite)	
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/exo?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                     break
                     case 'bts':  
                     if (!isElite) return reply(nayzelite)	
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/bts?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: nay})
                     break
                     case 'simi':  
                     if (!isElite) return reply(nayzelite)	
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} hai sayang`)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/simi?text=Halo&lang=id&apikey=LindowApi`)
                     anu1 = `${anu.response.text}`
                     reply(anu1)
                     break
                     case 'textfont':  
                     if (!isElite) return reply(nayzelite)	
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'kapital':  
                     if (!isElite) return reply(nayzelite)	
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                      
                     case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':  
                     if (!isElite) return reply(nayzelite)	
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru`)
                     F = body.slice(7)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/${command}?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'boomtext':  
                     if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} rimuru&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     
                     
                                                                                                                          
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                   	case 'welcome':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*SUDAH AKTIF* !!!')
					welkom.push(from)
					fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
					reply('[❗] SUKSES AKTIF WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SUKSES NONAKTIF WELCOME')
					} else {
					reply(`......`)
					}
					break  
                    case 'antilink':  
                    if (!isElite) return reply(nayzelite)	 
                    if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antilink.push(from)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break					 
					case 'botx':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					botx.push(from)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] ACTIVATED BOTX*')
					} else if (Number(args[0]) === 0) {
					botx.splice(from, 1)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] DEACTIVATED BOTX*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
                    
					case 'antigay':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antibocil':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DEACTIVATED ANTIBOCIL*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antiwibu':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break

					case 'antijawa':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE LOLTEAM ]==============================================================*/                    	 
        					
					case 'tebak':  
                    if (!isElite) return reply(nayzelite)	
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `➻ *SOAL* : ${anu.pertanyaan}`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50  Segundo LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break 
                    case 'udara':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`PILIH ARAH/CARA Ejemplo\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
                    case 'darat':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`PILIH ARAH/CARA Ejemplo\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
                    case 'laut':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`PILIH ARAH/CARA Ejemplo\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break
                    
                    case 'info1':  
                    if (!isElite) return reply(nayzelite)	
                    reply(info1)
                    break
                    case 'info2':  
                    if (!isElite) return reply(nayzelite)	
                    reply(info2)
                    break
                    case 'info3':  
                    if (!isElite) return reply(nayzelite)	
                    reply(info3)
                    break
                    case 'character':  
                    if (!isElite) return reply(nayzelite)	 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `Id : ${anu.id}\n`
                    anu2 += `Name : ${anu.name.full}\n`
                    anu2 += `Native : ${anu.name.native}\n`
                    anu2 += `Favorites : ${anu.favourites}\n`
                    anu2 += `Media : \n`
                    ini_media = anu.media.nodes
                    for (var x of ini_media) {
                        anu2 += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(anu.image.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break
                    case 'manga1':  
                    if (!isElite) return reply(nayzelite)	 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `➻ Id : ${anu.id}\n`
                    anu2 += `➻ Id MAL : ${anu.idMal}\n`
                    anu2 += `➻ Title : ${anu.title.romaji}\n`
                    anu2 += `➻ English : ${anu.title.english}\n`
                    anu2 += `➻ Native : ${anu.title.native}\n`
                    anu2 += `➻ Format : ${anu.format}\n`
                    anu2 += `➻ Chapters : ${anu.chapters}\n`
                    anu2 += `➻ Volume : ${anu.volumes}\n`
                    anu2 += `➻ Status : ${anu.status}\n`
                    anu2 += `➻ Source : ${anu.source}\n`
                    anu2 += `➻ Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
                    anu2 += `➻ end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
                    anu2 += `➻ Genre : ${anu.genres.join(", ")}\n`
                    anu2 += `➻ Synonyms : ${anu.synonyms.join(", ")}\n`
                    anu2 += `➻ Score : ${anu.averageScore}%\n`
                    anu2 += `➻ Characters : \n`
                    ini_character = anu.characters.nodes
                    for (var x of ini_character) {
                        anu2 += `- ${x.name.full} (${x.name.native})\n`
                    }
                    anu2 += `\nDescription : ${anu.description}`
                    thumbnail = await getBuffer(anu.coverImage.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break        
case 'attp':

				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Ejemplo ${prefix}attp nayla Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				nayla.sendMessage(from, attp2, sticker, {quoted: nay1})
				break             
                    case 'tiktoknowm':  
                    if (!isElite) return reply(nayzelite)	 
		            if (!isPrem) return reply(prem1)
                    reply(naylachan)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${l0lhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    nayla.sendMessage(from, ini_buffer, video, { quoted: nay1})
                    break
                    case 'tiktokmusic':  
                    if (!isElite) return reply(nayzelite)	 
		            if (!isPrem) return reply(prem1)
                    reply(naylachan) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: nay1})
                    break
                    case 'telesticker':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    case 'nhentai':  
                    if (!isElite) return reply(nayzelite)	
		            if (!isPrem) return reply(prem1) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                    case 'semoji':  
                    if (!isElite) return reply(nayzelite)	 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://videfikri.com/api/emojitopng/?emojicode=1F923`)
                    nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay1})
                    break                    
                    case 'phkomen':  
                    if (!isElite) return reply(nayzelite)	 
		            if (!isPrem) return reply(prem1)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${l0lhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    nayla.sendMessage(from, buffer, image, { quoted: nay1})
                    break                     
                    case 'katajago':  
                    if (!isElite) return reply(nayzelite)	
                    if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} cantik`)
                    anu = await fetchJson(`https://api-self.herokuapp.com/api/jagokata?kata=${args[0]}`)
                    anu1 = `➻ *KATA* : ${anu.result}`
                    reply(anu1)
                    break                     
                    case 'test':  
                    if (!isElite) return reply(nayzelite)	
                    reply(`oke`)
                    break
                    case 'addprem':  
                    if (!isElite) return reply(nayzelite)	
					if (!isOwner) return reply(`LU OWNER?`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
					case 'dellprem':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isOwner) return reply(`LU OWNER?`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
					case 'group':  
					case 'grupo':
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`NO ERES ADMIN JAJAJAJ`)
					if (!isBotGroupAdmins) return reply(`LU ADMIN?`)
					if (args[0] === 'abrir') {
					    reply(`*GRUPO ABIERTO CON ÉXITO ✓*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`*GRUPO CERRADO CON ÉXITO✓*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
					case 'hidetag10':  
                    if (!isElite) return reply(nayzelite)	              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
 
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ API VHTEAR ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    					
					 
					
					 
					case 'ffserti':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti2':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti3':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti4':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'ffserti5':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break			
					case 'mlserti':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti2':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti3':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti4':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'mlserti5':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(11)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti2':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti3':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan)					 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti4':  
                    if (!isElite) return reply(nayzelite)	 					
					if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
					reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'pubgserti5':  
                    if (!isElite) return reply(nayzelite)	 										 				 
				    if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
				    reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
					case 'tololserti':
					if (!isElite) return reply(nayzelite)	 										 				 
				    if (args.length < 1) return reply(`[❗] Ejemplo??\n${prefix}${command} whatsapp`)
				    F = body.slice(12)
				    reply(naylachan)
				    to = await getBuffer(`https://evilblackteam.nasiwebhost.com/serti1/img.php?nama=${F}`)
				    nayla.sendMessage(from, to, image, {caption: 'Samurai-bot', quoted:nay1})
				    break
					
					case 'ingfo':  
                    if (!isElite) return reply(nayzelite)	              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text, {quoted: nay1})					 
					break
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
					
					case 'wanted':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
                  	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan) 
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	               	} else {
	           	    reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	               	break
	               	case 'deteksiwajah':  
                    if (!isElite) return reply(nayzelite)		 
	               	var imgbb = require('imgbb-uploader')
	               	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	             	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	              	reply(naylachan)
		            owgi = await nayla.downloadAndSaveMediaMessage(ted)
		            anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	             	hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	nayla.sendMessage(from, hehe, image, {quoted:nay1})
		            } else {
		            reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	                break
	            	case 'removebg':  
                    if (!isElite) return reply(nayzelite)		 
                   	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${l0lhuman}&img=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
	                reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                	}
	                break	 
	                case 'deteksiumur':  
                    if (!isElite) return reply(nayzelite)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	                nayla.sendMessage(from, gender, text, {quoted:nay1})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                	}
	                break
                	case 'gtav':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
	                break
                 	case 'facebookpage':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
	                break
	                case 'costumwp':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
                	break
                	case 'pantaimalam':  
                    if (!isElite) return reply(nayzelite)		 
                 	var imgbb = require('imgbb-uploader')
                	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted: nay1})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
                	break
	                case 'pensil':  
                    if (!isElite) return reply(nayzelite)		 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                 	break 
	                case 'bakar':  
                    if (!isElite) return reply(nayzelite)		 
                 	var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
                 	 reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted:nay1})
                  	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                	break
                	case 'crossgun':  
                    if (!isElite) return reply(nayzelite)		 
                	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
                	break
	 
					 case 'demote':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					}					 
					break
				    case 'promote':  
                    if (!isElite) return reply(nayzelite)	
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	                     
                    case 'oxo':                    
                    if (!isElite) return reply(nayzelite)
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break
                    case 'tts': 
                    if (!isElite) return reply(nayzelite)
					nayla.updatePresence(from, Presence.recording)
					if (args.length < 1) return nayla.sendMessage(from, 'Maldita sea, y el código de lenguaje?', text, { quoted: nay })
				
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nayla.sendMessage(from, 'Nmms, y el texto??', text, { quoted: nay })
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 1900
						? reply('¿Quieres escribir la biblia o que??')
						: gtts.save(ranm, dtt, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply('Perdon, FALLE:(')
								nayla.sendMessage(from, buff, audio, { quoted: nay, ptt: true })
								fs.unlinkSync(rano)
							})
						})
					break
					case 'pesan':
                    if (!isElite) return reply(nayzelite)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] EjemploH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					reply('PESAN SUDAH TERKIRIM')
					break
					case 'tebakkimia': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${l0lhuman}`, {method: 'get'})
					kimia = `SOAL TEBAK KIMIA : *${anu.result.nama}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.lambang}`, text, {quoted: nay1}) 
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, kimia, text, {quoted: nay })
					}, 60000) 
					break 
	            	case 'tebaklirik': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${l0lhuman}`, {method: 'get'})
					lirik = `SOAL TEBAK LIRIK : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, lirik, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'tebakin1': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${l0lhuman}`, {method: 'get'})
					te1 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te1, text, {quoted: nay1 }) 
					}, 1) 
					break 
				    case 'tebakin2': 
                    if (!isElite) return reply(nayzelite)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${l0lhuman}`, {method: 'get'})
					te2 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50  Segundo LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40  Segundo LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30  Segundo LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20  Segundo LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10  Segundo LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te2, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'bugtroli':  
                    if (!isElite) return reply(nayzelite)	 
					if (!isOwner) return reply('LU OWNER??')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `❮ *MAMPUS KENA TROLI* ❯\n\n${replytroli}`})
					}
					reply('*SUCCESS TROLI* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*[ TROLI GANASSSS!!! ]*\n\n${replytroli}`)
					}
					reply('*SUCCESS TROLI* ')
					}
					break
					case 'asmaulhusna':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/asmaulhusna?APIKEY=${apixteam}`)
					anu1 = `➻ *INDEX* : ${anu.result.index}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *ARAB* : ${anu.result.arabic}\n`
					anu1 += `➻ *ID* : ${anu.result.translation_id}\n`
					anu1 += `➻ *EN* : ${anu.result.translation_en}\n`					
					reply(anu1)
					break
					case 'ayatkursi':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/ayatkursi?APIKEY=${apixteam}`)
					anu1 = `➻ *TAFSIR* : ${anu.result.data.tafsir}\n`
					anu1 += `➻ *TRANSLATION* : ${anu.result.data.translation}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.data.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.data.latin}\n`
					reply(anu1)
					break
					case 'bacaansholat':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/bacaansholat?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.terjemahan}\n`
					reply(anu1)
					break
					case 'doaharian':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/doaharian?APIKEY=${apixteam}`)
					anu1 = `➻ *TITLE* : ${anu.result.title}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TRANSLATION* : ${anu.result.translation}\n` 
					reply(anu1)
					break
					case 'kisahnabi':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/kisahnabi?APIKEY=${apixteam}`)
					anu1 = `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *KELAHIRAN* : ${anu.result.thn_kelahiran}\n`
					anu1 += `➻ *USIA* : ${anu.result.usia}\n`
					anu1 += `➻ *DESCRIPTION* : ${anu.result.description}\n`
					anu1 += `➻ *TMP* : ${anu.result.tmp}\n`
					reply(anu1)
					break
					case 'niatsholat':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/niatsholat?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.name}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n`
					anu1 += `➻ *LATIN* : ${anu.result.latin}\n`
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.terjemahan}\n`
					reply(anu1)
					break
					case 'tahlil':
					if (!isElite) return reply(nayzelite)	
					anu = await fetchJson(`https://xteam.xyz/religi/tahlil?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *NAME* : ${anu.result.title}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n` 
					anu1 += `➻ *TERJEMAHAN* : ${anu.result.translation}\n`
					reply(anu1)
					break
					case 'wirid':
					if (!isElite) return reply(nayzelite)	 
					anu = await fetchJson(`https://xteam.xyz/religi/wirid?APIKEY=${apixteam}`)
					anu1 = `➻ *ID* : ${anu.result.id}\n`
					anu1 += `➻ *TIMES* : ${anu.result.times}\n`
					anu1 += `➻ *ARABIC* : ${anu.result.arabic}\n` 
					anu1 += `➻ *TNC* : ${anu.result.tnc}\n`
					reply(anu1)
					break
					case 'randomwibu': 
					if (!isElite) return reply(nayzelite)	 
					wibuC = ['wibu1','wibu2','wibu3','wibu4','wibu5','wibu6','wibu7','wibu8','wibu8','wibu10','wibu11','wibu12']
					wibuF = wibuC[Math.floor(Math.random() * (wibuC.length))]
					wibuz = fs.readFileSync(`wibu/${wibuF}.webp`)					
                    nayla.sendMessage(from, wibuz, sticker, {quoted: nay1})
                    break
 
                    
                     
                    
                     default:            
                    if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@62812874133914")) return reply("permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 ${sender.split("@")[0]}`)
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
                    
                    
                    
                     
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    
                    
				
				    
				   
                    if (budy.includes("ท้่")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Eres admin, no te sacare por enviar binarios??🏻🤑')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Homosexual detectado ${sender.split("@")[0]}`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("Adiós Aborto")
                    }, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("Hola")
                    }, 0)
				    }
				     
				        if (budy.includes("ᡃ⃟ᡃ⃟ᡃ⃟")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Eres admin, no te sacare por enviar binarios🤙🏻🤑')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gay Detectado ${sender.split("@")[0]}`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("Adios Aborto")
                    }, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("*➰DESTRAVA PANTERA NEGRA➰*▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅     ▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂ ▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂▂▃▅▆▇▇▆▅▃▂")
					}, 0)
				    }
				    if (budy.includes("feli gei")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Homosexual detectado ${sender.split("@")[0]}`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("chan")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("Feli ge")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("jodete")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("pendejo")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }
				    if (budy.includes("puto")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Eres admin, te salvaste 🧐')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5 Segundo lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 Segundo")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 Segundo")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 Segundo")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 Segundo")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 Segundo")
					}, 0)
				    }				    
				    if (budy.includes("cekprefix")){
				    reply(`BOT PREFIX ${prefix}`)
				    }
				    if (budy.includes("Yamete")){
				    const F2 = fs.readFileSync('sound/yamete.m4a')
                    nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if (budy.includes(`${numberbot}`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				    if (budy.includes(`${ownerrf}`)){
                    const F3 = fs.readFileSync('menu/tag2.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`njir`)){
                    const F3 = fs.readFileSync('menu/tag4.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Sticker`)){
                    if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(naylachan)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                    min'(320,ih)':  
                    force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(naylachan)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                   	min'(320,ih)':  
                   	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Etiqueta una imagen o un video con ${prefix}sticker De mientras se crea el sticker ve a seguirme a YouTube`)
					}
                    }
                    if (budy.includes(`Creador`)){
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Este es el número de mi dueño, no molestar con mamadas al menos q sean de verdad okno nah jaja, pero no jodas mucho o te manda a la vrg',MessageType.text, { quoted: nay} )				  
                    }
                    if (budy.includes(`Te amo bot`)){
                    	reply ('Yo a ti uwu')
                    }
                    if (budy.includes(`Botgime`)){
                    const F3 = fs.readFileSync('sound/gime.mp3')
                    nayla.sendMessage(from, F3, audio, {quoted: nay1, ptt : true})
                    }
                    if (budy.includes(`Jack`)){
                    const F3 = fs.readFileSync('sound/jacksito.mp3')
                    nayla.sendMessage(from, F3, audio, {quoted: nay1, ptt : true})
                    }
                    if (budy.includes(`puto`)){
                    const F3 = fs.readFileSync('src/fxxxx')
                    nayla.sendMessage(from,MessageType.text, { quoted: nay} )			  
                    }
                    if (budy.includes(`Bot`)){
                    const F3 = fs.readFileSync('stickers/no.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Gracias`)){
                    	reply ('De nada ☺️')
                    }
                    if (budy.includes(`Hola`)){
                    	reply ('Hola😳🌚')
                    
                    }
               
/* ===================================================[ SamuraiBot ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    

                    if (body.startsWith(`${prefix}${command}`)) {
                    const SS1 = fs.readFileSync('sound/chann.mp3')
                    nayla.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay2})
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 