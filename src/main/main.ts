import {BrowserWindow, app, ipcMain} from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null = null;

function createMainWindow()
{
    if (mainWindow)
        return;

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        minWidth: 450,
        minHeight: 350,
        height: 800,
        width: 1600
    });

    mainWindow.loadFile(path.resolve(__dirname, `../renderer/index/index.html`));
    mainWindow.on('close', () => mainWindow = null);

    mainWindow.webContents.openDevTools();
}

app.on('ready', () =>
{
    createMainWindow();
});

app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});

app.on('activate', () =>
{
    createMainWindow();
});
