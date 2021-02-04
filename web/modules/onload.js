import renderAddressBarLocation from './renderAddressBarLocation.js';
import renderDir from './renderDir.js';

export default function setOnLoad(lastDir) {
	window.addEventListener('load', async () => {
		renderAddressBarLocation(lastDir);
		renderDir(lastDir);
	});
}
