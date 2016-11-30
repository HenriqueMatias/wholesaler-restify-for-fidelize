import {Model} from './model';

export class Address extends Model {
    constructor () {
        super();
    }

    findOne(){
        let answer = {
            'id':this.id ,
            'street':this.street , 
            'number':this.localNumber ,
            'line_2':this.line_2 ,
       'postal_code':this.postal_code ,
           'country':this.country , 
        };
        return answer;
    }

    findAll(){
        let address1 = {
            'id':1 ,
            'street':'Macarena' , 
            'number':2 ,
            'line_2':this.line_2 ,
       'postal_code':'23423421234' ,
           'country':'Mexico' , 
        };
        let address2 = {
            'id':2 ,
            'street':'Joaquina' , 
            'number':23 ,
            'line_2':this.line_2 ,
       'postal_code':'2434536565' ,
           'country':'Brazil' , 
        };
        let address3 = {
            'id':3 ,
            'street':'11' , 
            'number': 32 ,
            'line_2':this.line_2 ,
       'postal_code':'3242354534' ,
           'country': 'USA' , 
        };
        return [address1,address2,address3];
    }
}