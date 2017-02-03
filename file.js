var fs = require('fs');
var sw = require('stopword');
console.log('*******************Read File************************');
fs.readFile('testfile.txt', 'utf8', function (err, fileString) {
	var strIndicesObj = {};
	// console.log(fileString);
	let fileStringArr = fileString.split(' ');
	// console.log(fileStringArr);
	fileStringArr.forEach(function (word) {
		// console.log(word);
		// strIndicesArr.push(fileString.indexOf(word));
		strIndicesObj[word] = fileString.indexOf(word);
	});
	var newFileStrArr = sw.removeStopwords(fileStringArr);
	// console.log(newFileStrArr);
	newFileStrArr.forEach(function (newItem) {
	// console.log(newItem);
		fileStringArr.forEach(function (oldStrItem) {
			console.log(oldStrItem);
		});
	});
});