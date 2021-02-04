const fs = require('fs'),
	fsp = fs.promises;

module.exports = async function readDir(path) {
	const dir = await fsp.readdir(path);
	const folders = [];
	const files = [];

	dir.forEach((item) => {
		try {
			const stat = fs.statSync(`${path}/${item}`);
			const result = { name: item };

			if (stat.isDirectory()) {
				// folder
				result.type = 'folder';
				folders.push(result);
			} else {
				// file
				result.type = 'file';
				files.push(result);
			}
		} catch {}
	});

	return [...folders, ...files];
};
