import jwt from 'jsonwebtoken'



export const generateRefreshToken =(user)=>{
    
    const refreshToken =  jwt.sign(user,process.env.REFRESH_SECRET_KEY,{expiresIn :"59min"});
    return refreshToken;
}