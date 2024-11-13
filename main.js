const { app, BrowserWindow } = require('electron');
const path = require('path');
const { app, autoUpdater } = require('electron');
// URL do servidor onde as atualizações serão hospedadas
const server = 'https://yourserver.com';
const feedURL = `${server}/updates/latest`;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL('http://localhost:5000'); //URL da aplicação Blazor
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

autoUpdater.setFeedURL(feedURL);

app.on('ready', () => {
    autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on('update-downloaded', (info) => {
    autoUpdater.quitAndInstall();
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});