import mongoose from 'mongoose';

export class MongoAdapter {
    constructor (documentName, attributes) {
        this.documentName    = documentName;
        this.persistence     = mongoose.model(this.documentName);
    }

    add(attributes, callback){
        let document = mongoose.model(this.documentName);
        let newDocument = new document(attributes);
        return newDocument.save(callback);
    }

}