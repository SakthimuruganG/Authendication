import jwt from 'jsonwebtoken'



export const generateAcceesToken =(user)=>{
    
    const token =  jwt.sign(user,process.env.ACCESS_SECRET_KEY,{expiresIn :"10s"});
    return token;
}