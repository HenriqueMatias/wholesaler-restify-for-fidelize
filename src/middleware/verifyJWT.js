var status = require("http-status");
var jwt    = require("jsonwebtoken");
var config = require('config');

module.exports = function (req, res, next) {

    if (!req.headers.authorization) {
        return res.status(status.UNAUTHORIZED).json({ success: false, message: "Token not found" });
    }
    let token = req.headers.authorization;
    jwt.verify(token, config.secret, function(err, user) {
        if (err) {
            return res.status(status.UNAUTHORIZED).json({ success: false, message: "Token Invalid" });
        }
    });

};