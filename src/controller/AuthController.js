import {Controller} from './controller';
import {FileManager} from '../helper/FileManager';
import config from 'config';


export class AuthController extends Controller {
    constructor () {
        super();
    }
    authenticate(req, res, next){
        let requisition =JSON.parse(req.body);
        let user = {
            id:1,
            name:'EU MESMO',
        };
        let token = jwt.sign(user, config.get('secret'), {
          expiresInMinutes: 1440 // expires in 24 hours
        });
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
        res.send(201,{status:'OK'});
        next();
    }
}