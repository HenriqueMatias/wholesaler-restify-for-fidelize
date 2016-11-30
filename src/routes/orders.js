import {OrdersController} from "../controller/OrdersController";
let order = new OrdersController();

module.exports = function (server) {

  //defining order routes
  server.get('api/v1/orders', order.notImplemented);
  server.post('api/v1/orders', order.create);
};