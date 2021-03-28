//response
const responseModel = require('../utils/response');
//jwt
const jwt = require('jsonwebtoken');

const tokenSecretKey = 'my-secret-key';

const jwtVerify = (req, res, next) => {

    const tokenHeader = req.headers.authorization;

    if (tokenHeader) {
        const token = tokenHeader.split(' ')[1];

        jwt.verify(token, tokenSecretKey, (error, user) => {
            if (error) {
                return res.status(401).json(responseModel.error(error));
            }

            req.user = user;
            next();
        });
    } else {
        return res.status(401).json(responseModel.error('Lüften giriş yapınız'));
    }


}
module.exports = jwtVerify;
