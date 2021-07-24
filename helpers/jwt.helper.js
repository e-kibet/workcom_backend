require('dotenv').config();
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
            if (err) {
                res.status(401).send({ status: false, status_code: 401, status_message: err.message });
            } else {
                req.user = { login: decoded.login, id: decoded.id };
                console.log(decoded);
                res.JWTDecodedData = decoded;
                next();
            }
        });
    } else {
        var current_date = new Date();
        res.status(401).send({ status: false, status_code: 401, status_message: "Missing header authorization token" });
        console.log("INFO: " + current_date + " Some Description: Undefined header provided");
    }
}
module.exports = {
    checkAuth
}