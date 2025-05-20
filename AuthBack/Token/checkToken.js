import jwt from 'jsonwebtoken'

const checkToken = (secretKey) => {
    return (req, res, next) => {

        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            return res.status(401).json({ error: " header missing" });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Token missing" });
        }

        try {
           // console.log("Check Token  : ", token, secretKey);
            const result = jwt.verify(token, secretKey);
          //  console.log("After verification :", result);
            req.user = result;
            next();
        } catch (e) {
            return res.status(401).json({ error: "Invalid or expired token" });
        }
    }
}

export default checkToken;