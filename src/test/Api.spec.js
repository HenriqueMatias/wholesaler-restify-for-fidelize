

import {restify}    from 'restify';
import superagent from 'superagent';
import {OrdersController} from "../controller/OrdersController";
import assert from 'assert';

var URL_ROOT = "http://localhost:8887";
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
    describe('Test API order route -> ', function() {
        it('should return ok', function() {
            superagent.get(url)
                //.set("Authorization", token)
                .end(function (error, res) {
                    assert.ifError(error);
                    assert.equal(res.status, status.OK);

                    var results;
                    assert.doesNotThrow(function (){
                        results = JSON.parse(res.text).areas;
                    });

                    assert.equal(results.length, 2);
                    done();
                });
        });
    });
});
