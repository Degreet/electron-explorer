module.exports = function setupElectron() {
	const { app, BrowserWindow } = require('electron');

	function createWindow() {
		const win = new BrowserWindow({
			width: 1000,
			height: 600,
			webPreferences: {
				nodeIntegration: true,
			},
		});

		// win.webContents.openDevTools(); // For debug
		win.setResizable(false);
		win.removeMenu();
		win.loadFile('web/index.html');
	}

	app.whenReady().then(createWindow);

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit();
		}
	});

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
};
