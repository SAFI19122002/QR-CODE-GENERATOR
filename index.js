var readlineSync = require('readline-sync'); 
var fs=require('fs');
var qr = require('qr-image');

var url = readlineSync.question('Enter the url:');
var qr_svg = qr.image(url);
qr_svg.pipe(require('fs').createWriteStream("img.png"));