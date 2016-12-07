import {Controller} from './controller';
import {FileManager} from '../helper/FileManager';

export class OrdersController extends Controller {
    constructor () {
        super();
    }
    create(req, res, next){
        let requisition =JSON.parse(req.body);
        file = new FileManager();
        res.send(201,requisition);
        next();
    }
    postErrorHandler(error){
        console.log(error);
    }
}