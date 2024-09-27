// eslint-disable-next-line no-undef
const config = require('../config');

test('Response status code should 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/your/endpoint`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
