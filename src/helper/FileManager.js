import fs from 'fs';
import OrderLayout from '../layout/OrderLayout';

export class FileManager {

    constructor(layout) {
        this.fs = fs;
        this.fileLines = layout.getLines();
        this.fileName = layout.fileName;
        this.path = __dirname;
        this.completePath = this.path + '/' + this.fileName;
    }
    saveFile() {
        let resolve = (err, lines) => {
            
            if (err != null) {
                if (err.code === "ENOENT") {
                    this.writeFile();
                    console.error('myfile already exists');
                    throw err;
                } else {
                    console.error('creating file \n  path:'.this.completePath);
                }
            }
        }
        fs.open(this.completePath, 'r', resolve.bind(this));
    }

    writeFile() {
        console.error('WRITEEEEEEEEEEEEEEEEEEEEEEEE');
        console.error(this.fileLines);
        let file = this.fs.createWriteStream(this.completePath);
        file.on('error', function (err) { console });
        this.fileLines.forEach(function (v) { file.write(v.join(';') + '\n'); });
        file.end();
    }
}