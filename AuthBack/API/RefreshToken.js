import { generateAcceesToken } from '../Token/AccessToken.js'
import { generateRefreshToken } from '../Token/RefreshToken.js'
const refreshtoken = (req, res) => {
    const user = { name: req.user.name, password: req.user.password }
    const token = generateAcceesToken(user);
    const refreshToken = generateRefreshToken(user);
    return res.json({ token: token, refreshToken: refreshToken });
}


export default refreshtoken;