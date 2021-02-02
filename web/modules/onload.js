import renderAddressBarLocation from './renderAddressBarLocation.js';

export default function setOnLoad(lastDir) {
	window.addEventListener('load', async () => {
		renderAddressBarLocation(lastDir);
	});
}
