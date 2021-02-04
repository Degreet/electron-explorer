import renderAddressBarLocation from './renderAddressBarLocation.js';
import setClickListenerForFoundResults from './setClickListenerForFoundResults.js';
import renderDir from './renderDir.js';

export default function setOnLoad(lastDir) {
	window.addEventListener('load', async () => {
		renderAddressBarLocation(lastDir);
		renderDir(lastDir);
		setClickListenerForFoundResults(lastDir);
	});
}
