import fs from 'fs';
import OrderLayout from '../layout/OrderLayout';

export class FileManager {
    
    constructor (layout) {
        this.fs = fs;
        this.fileLines = layout.getLines();
        this.fileName  = layout.fileName;
        this.path= __dirname ;
    }
    saveFile(){
        let file = fs.createWriteStream(this.name);
        file.on('error', function(err) { console });
        this.fileLines.forEach(function(v) { file.write(v.join(';') + '\n'); });
        file.end();
    }
}