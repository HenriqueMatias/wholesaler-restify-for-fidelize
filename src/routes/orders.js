import {OrdersController} from "../controller/OrdersController";
import {AuthController} from "../controller/AuthController";
let order = new OrdersController();
let auth  = new AuthController();

module.exports = function (server) {

  server.post('api/v1/auth',auth.authenticate)

  //defining order routes
  server.get('api/v1/orders', order.notImplemented);
  server.post('api/v1/orders', order.create);
};