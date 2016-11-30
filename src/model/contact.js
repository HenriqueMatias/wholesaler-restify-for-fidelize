import {Model} from './model';
import {Address} from './address';
import mongoose from 'mongoose';

export class Contact extends Model {
    constructor () {
        let Schema = mongoose.Schema;
        super('Contact');
    }

    getPersistenceAttributes(){
        return this.attributes;
    }

    getAddressList(){
        return this.persistence.address;
    }

}