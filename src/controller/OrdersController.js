import {Controller} from './controller';

export class OrdersController extends Controller {
    constructor () {
        super();
    }
    create(req, res, next){
        console.log('requisiçãooooooooooooo');
        console.log(req);
        let requisition =  {
            'first_name':  'eu'
            };
        res.send(201,requisition);
        // contact.add(requisition).then(function(error){
            
        //     if(contact.error.lenght > 0){
        //         res.send(500,contact.error);
        //     }else{
        //         res.send(200,{data:'OK'});
        //     }
        //     return next();
        // });
    }
    postErrorHandler(error){
        if(error != null){
            res.send(500,contact.error);
        }else{
            res.send(201,{data:'OK'});
        }
        return next();
    }
}