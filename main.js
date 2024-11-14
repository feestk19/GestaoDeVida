const { app, BrowserWindow, autoUpdater } = require('electron'); // Importação consolidada
const path = require('path');
const logger = require('./logger');
const { create } = require('domain');

// URL do servidor onde as atualizações serão hospedadas
const server = 'https://yourserver.com';
const feedURL = `${server}/updates/latest`;

function createWindow() {

    try{
        let mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        });

        mainWindow.loadURL('http://localhost:5000'); // URL da aplicação Blazor
        mainWindow.on('closed', () => {
        mainWindow = null;
        logger.info('A janela principal foi fechada.');
        });

        logger.info('Janela principal criada com sucesso.');
    } catch (error) {
        logger.error('Erro ao criar a janela: ${error.message}');
    }
}

autoUpdater.setFeedURL(feedURL);

app.on('ready', () => {
    autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on('update-downloaded', (info) => {
    autoUpdater.quitAndInstall();
});

app.whenReady().then(() => {
    createWindow();
    logger.info('Aplicação iniciada.');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
        logger.info('Aplicação encerrada.');
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
        logger.info('Janela recriada após ativação.');
    }
});
