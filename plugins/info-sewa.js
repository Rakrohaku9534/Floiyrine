let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`https://telegra.ph/file/0c804919c75d56256769e.jpg`).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'hasil.jpg', `*Jika telah melakukan pembayaran silahkan kirimkan bukti pembayaran ke WhatsApp Owner.`, m)
}

handler.help = handler.command = ['donasi','donate','sewa','sewabot','belibot']
handler.tags = ['main']
module.exports = handler
