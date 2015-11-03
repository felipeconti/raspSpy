var fs = require('fs');
var logFile = "/home/pi/node/log.log";

var callBack = function(err) {
	if(err) {
		return console.log(err);
	}
	//console.log("The file was saved!");
}

console.log("Starting...");

fs.appendFile(logFile, "\n\n Starting... \n\n", callBack);

setInterval(function(){
	var text = "["+process.pid+"] " + new Date() + "\n";
	fs.appendFile(logFile, text, callBack);
}, 1000);
