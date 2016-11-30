import {MongoAdapter} from '../adapter/MongoAdapter.js';

export class Model {
    
    constructor (entityName) {
        this.entityName         = entityName;
        this.persistenceAdapter = this.getPersistenceAdapter(this.entityName);
        this.persistence        = this.persistenceAdapter.persistence;
    }
    getPersistenceAdapter(entityName){
        return new MongoAdapter(entityName);
    }
    getPersistence(documentName,attributes){
        return this.persistence;
    }
    add(attributes ){
        let persistenceAdapter = this.persistenceAdapter;
        let callback = function(error){
            this.error = this.formatError(error);
        }
        return persistenceAdapter.add(attributes, callback.bind(this));
    }
    findOne(){
        
    }
    findAll(){
        
    }
    formatError(errors){
        
        let errorObjectList = errors != null?errors.errors:[];    
        let errorList = {};
        for(let key in errorObjectList ){
            
            let object = errorObjectList[key];
            let error = {
                type : object.kind,
                message : object.message,
                value : object.value,
            };
            errorList[object.path] = error;
        }
        return errorList;
    }
    getValidations(){}
    validate(){}
    getAtributes(){}
    setAtributes(){}    
}