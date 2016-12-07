export class Controller {

    notImplemented(req, res, next){
        res.send(501,'error:{not implemented}');
        return next();
    }

    prepareAnswer(answer) {
        if(answer) {
            return {'error':answer};
        }
    }
}