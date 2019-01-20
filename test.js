const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const fs = require('fs');
const app = require('./index');
chai.use(chaiAsPromised);
const expect = chai.expect;
const filename = __dirname + '/output.txt';

describe('Test suite', () => {

	// Test input
	it('(0,0) = INVALID_INPUT', () => {
		const result = app.printFibo(0, 0);
		expect(result).to.equal('INVALID_INPUT');
	});
	it('(4) = 5 8 13 21 34 55 89 144 233 377', () => {
		const result = app.printFibo(4);
		expect(result).to.equal('5 8 13 21 34 55 89 144 233 377');
	});
	// Test output
	it('(0,1) = 1', () => {
		const result = app.printFibo(0, 1);
		expect(result).to.equal('1');
	});
	it('(0,2) = 1 1', () => {
		const result = app.printFibo(0, 2);
		expect(result).to.equal('1 1');
	});
	it('(2,4) = 3 5 8 13', () => {
		const result = app.printFibo(2, 4);
		expect(result).to.equal('3 5 8 13');
	});
	// Test file writing
	it('Should write into a file', () => {
		const result = app.printFibo(2, 4);
		expect(result).to.equal('3 5 8 13');
		expect(fs.existsSync(filename)).to.equal(true);
		expect(fs.readFileSync(filename, 'utf8')).to.equal(result);
	});
	afterEach(() => {
		if (fs.existsSync(filename)) {
			return fs.unlinkSync(filename);
		}
	});

});
