import renderDir from './renderDir.js';

export default function setClickListenerForFoundResults(lastDir) {
	foundResults.onclick = (e) => {
		let item = e.target;

		if (item.tagName == 'LI' || item.parentElement.tagName == 'LI') {
			item = item.tagName == 'LI' ? item : item.parentElement;

			if (item.dataset.type == 'folder') {
				// folder
				let { name } = item.dataset;
				if (!name.startsWith('/')) name = `/${name}`;
				lastDir += name;
				renderDir(lastDir);
			}
		}
	};
}
