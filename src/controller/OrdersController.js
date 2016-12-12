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
        file.saveFile().then((status)=>{
            console.log(status);
            res.send(201,{status:config.aplicationName});
        }, (err)=>{
            console.error(err);
        }).catch(console.log);
        next();
    }
}