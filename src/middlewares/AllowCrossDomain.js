const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, FRONTEND_URL);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};

export default allowCrossDomain;