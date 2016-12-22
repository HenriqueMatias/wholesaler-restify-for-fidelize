/*jslint node: true, indent: 2 */
'use strict';
process.env['VARIABLE'] = "./config/aertt";
import restify from 'restify';
import bunyan from 'bunyan';
import routes from './routes';
import path from 'path';

var log = bunyan.createLogger({
  name        : 'nodejs-restify-mongo',
  level       : process.env.LOG_LEVEL || 'info',
  stream      : process.stdout,
  serializers : bunyan.stdSerializers
});

var server = restify.createServer({
  name : 'nodejs-restify-wholesaler',
  log  : log,
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

/*jslint unparam:true*/
// Default error handler. Personalize according to your needs.
// server.on('uncaughtException', function (req, res, route, err) {
//   console.log('******* Begin Error *******');
//   console.error(err);
//   console.log('******* End Error *******');
//   if (!res.headersSent) {
//     return res.send(500, { ok : false });
//   }
//   res.end();
// });
/*jslint unparam:false*/

server.on('after', restify.auditLogger({ log: log }));

routes(server);
server.listen(8887, function () {
  log.info('%s listening at %s', server.name, server.url);
});