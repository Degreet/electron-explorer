const readData = require('./modules/readData.js');
const readDir = require('./modules/readDir.js');

module.exports = async (req, resp) => {
	const { url } = req;

	if (url.startsWith('/api/')) {
		const apiName = url.replace('/api/', '');

		if (apiName == 'read-dir') {
			const data = await readData(req);
			const dir = await readDir(data.dir);

			resp.end(
				JSON.stringify({
					success: true,
					dir,
				})
			);
		} else {
			resp.end(
				JSON.stringify({
					success: false,
					msg: 'not found',
				})
			);
		}
	} else {
		resp.end(
			JSON.stringify({
				success: false,
				msg: 'not found',
			})
		);
	}
};
