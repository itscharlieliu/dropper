var QRCode = require('qrcode')

const canvas = document.getElementById('canvas')

browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
  })

QRCode.toCanvas(canvas, window.location.href)