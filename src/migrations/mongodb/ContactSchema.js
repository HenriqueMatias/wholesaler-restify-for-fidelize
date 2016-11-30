
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

export class ContactSchema{

    constructor() {
        this.createSchema();
    }

    getSchemaName() {
        return 'Contact';
    }
    getSchemaAttributes(){
        let attributes={
            'first_name':{
                type:'string',
                required:true,
                maxlength:20
            },
            'last_name': {
                type:'string',
                required:true,
            },
            'age': {
                type:'number',
                required:true,
            }
        };
        return attributes;
    }
    createSchema(){
        let Schema  = mongoose.Schema;
        let schema  = new Schema(this.getSchemaAttributes());
        autoIncrement.initialize(mongoose.connection);
        schema.plugin(autoIncrement.plugin,{model: this.getSchemaName(), field: 'sequence', startAt: 1});
        mongoose.model(this.getSchemaName(), schema);
    }
}