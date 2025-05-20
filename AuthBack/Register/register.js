import { add } from "../Database/db.js";
export const register = async (req,res)=>{
    
    const user = await add(req.body);
    res.json(user);
}