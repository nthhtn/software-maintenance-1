const fs = require('fs');
const filename = __dirname + '/output.txt';

module.exports.printFibo = (start, length = 10) => {
	let content = "";
	if (length < 1) {
		content = "INVALID_INPUT";
	} else {
		let fibo = [1, 1];
		let result = [];
		if (start < 1) {
			result = length == 1 ? [1] : [1, 1];
		}
		let i = fibo.length - 1;
		while (result.length < length) {
			if (fibo[i] > start) {
				result.push(fibo[i]);
			}
			fibo.push(fibo[i] + fibo[i - 1]);
			i = fibo.length - 1;
		}
		content = result.join(' ');
	}
	fs.writeFileSync(filename, content);
	return content;
};
