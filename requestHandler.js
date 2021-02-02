module.exports = (req, resp) => {
	const { url } = req;

	if (url == '/api') {
		resp.end('hello');
	}
};
