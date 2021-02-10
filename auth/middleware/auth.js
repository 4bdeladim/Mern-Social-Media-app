const jwt = require('jsonwebtoken');
const getCookie = require('./cookies')



const auth = (req, res, next) => {
    
    const token = getCookie(req.headers.cookie)
    if(!token) return res.status(401).json({ msg: 'No token, auth denided'});
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded 
        next();
    } catch (error) {
        res.status(400).json({ msg: 'Token is not valid'})
    }


}


module.exports = auth
