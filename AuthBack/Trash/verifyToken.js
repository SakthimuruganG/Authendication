import jwt from 'jsonwebtoken'


export const check = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: " header missing" });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: "Token missing" });
    }
    try {
        const result = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        //console.log("After verification :",result);
        req.body = result;
        next();
    } catch (e) {
        if (e.name === 'TokenExpiredError') {
            console.log("TokenExpiredError");
            return res.status(401).json({ error: "TokenExpiredError" });
        }

        return res.status(401).json({ error: "Invalid or expired token" });
    }


}