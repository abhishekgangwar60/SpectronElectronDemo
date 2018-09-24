import { BrowserWindow, app } from 'electron';

// making this variable global to protect window from closing automatically at the time of garbage collection.
let mainWindow: Electron.BrowserWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`,
        frame: false,
        title: 'Electron Spectrum Demo'
    });


    mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

    // Event when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// Create window on electron intialization
app.on('ready', () => {
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // macOS specific close process
    if (mainWindow === null) {
        createWindow();
    }
});
