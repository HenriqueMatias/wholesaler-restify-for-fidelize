import fs from 'fs';
import OrderLayout from '../layout/OrderLayout';
import config from 'config';

export class FileManager {

    constructor(layout) {
        this.fs = fs;
        this.fileLines = layout.getLines();
        this.fileName = layout.getFileName();
        this.path = __dirname;
        this.completePath = config.aplicationPath + this.fileName;
    }
    saveFile() {
        let openCallBack = (err, lines) => {
            if (err != null) {
                if (err.code === "ENOENT") {
                    this.writeFile();
                    return;
                }
                else {
                    throw err;
                }
            }
            throw { message: 'Erro sem sentido', code: 69 };
        }
        openCallBack.bind(this);
        return new Promise((resolve, reject) => {
            try {
                fs.open(this.completePath, 'r', openCallBack);
                console.log(this.completePath);
                resolve('sucessada');
            } catch(error) {
                console.log('deu erro');
                reject(error.message)
            }
        });
    }

    writeFile() {
        let file = this.fs.createWriteStream(this.completePath);
        file.on('error', function (err) { console });
        this.fileLines.forEach(function (v) { file.write(v.join(';') + '\n'); });
        file.end();
    }
}