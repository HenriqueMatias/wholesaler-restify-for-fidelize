

let restify    = require('restify');
let superagent = require('superagent');
import {OrdersController} from "../controller/OrdersController";

var URL_ROOT = "http://localhost:8887";
describe("Tests API", function() {
    var server;

    before(function () {
        server = restify.createServer({
            name : 'nodejs-restify-mongo',
            formatters : {
                'application/json' : function (req, res, body, cb) {
                res.setHeader('Cache-Control', 'must-revalidate');

                // Does the client *explicitly* accepts application/json?
                var sendPlainText = (req.header('Accept').split(/, */).indexOf('application/json') === -1);

                // Send as JSON
                if (!sendPlainText) {
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                }
                return cb(null, JSON.stringify(body));
                }
            }
            });

            server.use(restify.bodyParser({ mapParams: false }));
            server.use(restify.queryParser());
            server.use(restify.gzipResponse());
            server.pre(restify.pre.sanitizePath());
    });

    after(function(){
        server.close();
    });
    
    var assert = require('assert');
    describe('teste of test', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
        let chai = require('chai');
        assert.equal(-1, [1,2,3].indexOf(4));
        });
    });

    describe('OrdersController.prepareAnswer', function() {
        it('should return house when the param value is house', function() {
            let OrdersController = require('../controller/OrdersController').OrdersController;
            let order = new OrdersController;
            assert.equal(order.prepareAnswer('casa').error ,'casa' );
        });
    });
});
});