

import restify    from 'restify';
import superagent from 'superagent';
import {OrdersController} from "../controller/OrdersController";
import assert from 'assert';
import routes from '../routes';

var URL_ROOT = "http://localhost:8887/";
var requisition = {
        "id": 12345,
        "wholesaler": "santacruz",
        "industry": "gsk",
        "layout": "1.0",
        "order": {
            "project_code": "GSK",
            "pos_code": "88888888888888",
            "email": "buda@teste.com",
            "wholesaler_code": "99999999999999",
            "term": "007",
            "condition_code": "TX",
            "order_client": "S23333123DB",
            "markup": "6",
            "itens": [
                {
                    "ean": "7890000000001",
                    "amount": 1,
                    "monitored": false,
                    "discount": 10.5,
                    "net_price": 12.50
                },
                {
                    "ean": "7890000000002",
                    "amount": 2,
                    "monitored": false,
                    "discount": 0.5,
                    "net_price": 10
                }
            ]
        }
    };

describe("Tests API", function() {
    var server;

    before(function () {
        server = restify.createServer({
            name : 'restify-wholesaler',
            formatters : {
                'application/json' : function (req, res, body, cb) {
                    res.setHeader('Cache-Control', 'must-revalidate');

                    // Does the client *explicitly* accepts application/json?
                    var sendPlainText = (req.header('Accept').split(/, */).indexOf('application/json') === -1);

                    // Send as JSON
                    if (!sendPlainText) {
                        res.setHeader('Accept', 'application/json; charset=utf-8');
                    }
                    return cb(null, body);
                }
            }
            });
            server.use(restify.bodyParser({ mapParams: false }));
            server.use(restify.queryParser());
            server.use(restify.gzipResponse());
            server.pre(restify.pre.sanitizePath());
            routes(server);
            server.listen(8887, function() {
                console.log('%s listening at %s', server.name, server.url);
            });
    });
    after(function(){
        server.close();
    });
    describe('Test API order route -> ', function() {
        it('should return ok', function() {
            let url = URL_ROOT+'api/v1/orders';
            superagent.post(url)
                .send(requisition)
                .accept('application/json')
                //.set("Authorization", token)
                .end(function (res) {
                    assert.ifError(res.error);
                    assert.equal(res.status, 200);
                    done();
                });
        });
    });
});
