import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routes/Route.js';
import checkToken from './Token/checkToken.js';
import refreshtoken from './API/RefreshToken.js'
const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(router);



app.get("/", (req, res) => {
    res.send("Routing da dude..")
})


app.get("/words", checkToken(process.env.ACCESS_SECRET_KEY), (req, res) => {
    return res.json({ name: "Apple" });
})


app.post("/refreshtoken", checkToken(process.env.REFRESH_SECRET_KEY), refreshtoken);

app.listen(port, () => {
    console.log(`Run at port ${port}`);

})