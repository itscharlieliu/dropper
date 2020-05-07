const QRCode = require('qrcode')

const canvas = document.getElementById('canvas')

browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      QRCode.toCanvas(canvas, tabs[0].url)
  });