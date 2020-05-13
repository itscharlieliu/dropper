const QRCode = require('qrcode')

const canvas = document.getElementById('canvas')

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      QRCode.toCanvas(canvas, tabs[0].url)
});