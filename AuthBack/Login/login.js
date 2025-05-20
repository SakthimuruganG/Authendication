import { fetchUser } from "../Database/db.js";
import { generateAcceesToken } from '../Token/AccessToken.js'
import { generateRefreshToken } from '../Token/RefreshToken.js'


const login = async (req, res) => {

    const user = await fetchUser(req.body.name);

    if (!user) res.json({ user: "user not found" });

    if (req.body.password !== user.password) return res.json({ user: "Invalid Password" });

    const token = generateAcceesToken(user);
    const refreshToken = generateRefreshToken(user);
   // console.log(token);

    // res.cookie('accessToken', token, {
    //     httpOnly: false, 
    //     secure: false,
    //     sameSite: 'lax',
    //     maxAge: 300000,
    //     path: '/',
    // });

    // res.cookie('refreshToken', refreshToken, {
    //     httpOnly: true,
    //     secure: false,
    //     sameSite: 'strict',
    //     maxAge: 300
    // });

    return res.json({ token: token, refreshToken: refreshToken });

}


export default login;