export class Controller {

    notImplemented(req, res, next){
        res.send(501,'data:{not implemented}');
        return next();
    }

    prepareAnswer(answer) {
        if(answer) {
            return {'error':answer};
        }
    }
}