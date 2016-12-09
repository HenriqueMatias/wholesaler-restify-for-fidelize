import {Controller} from './controller';
import {FileManager} from '../helper/FileManager';
import {OrderLayout} from '../layout/OrderLayout';
import config from 'config';

export class OrdersController extends Controller {
    constructor () {
        super();
    }
    create(req, res, next){
        let requisition = JSON.parse(req.body);
        let order       = new OrderLayout(requisition);
        let file        = new FileManager(order);
        file.saveFile();
        res.send(201,{status:config.aplicationName});
        next();
    }
}