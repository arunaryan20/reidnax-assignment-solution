const express=require("express");
const app=express();
const cors=require("cors");

const dotenv=require("dotenv");
dotenv.config();

const dbConnect = require("./config/db");
dbConnect();
app.use(express.json());
const auth_router=require("./routes/authRoutes");

const PORT=process.env.PORT;

app.use(cors());

app.use("/auth",auth_router)

app.listen(PORT);