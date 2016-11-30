import {ContactSchema} from './ContactSchema';

module.exports = function(){
    let contact = new ContactSchema(); 
    // carrega todos os modelos
    // const fs = require('fs');
    // console.log('PASTAAAAA:'+ __dirname);
    // fs.readdir(__dirname, function(err, files){
    //     files.forEach((file) => {
    //         let fileName = file.split('.j')[0];
    //         if(fileName!='index'){
    //             console.log( require('./'+fileName));

    //             let migration = require('./'+fileName).ContactSchema;
    //             let test = new migration();
    //         }
    //     });
    // });
}