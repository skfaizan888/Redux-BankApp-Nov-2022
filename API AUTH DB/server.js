const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {
    json
} = require("express");
const userModel = require("./Model/userModel");
const jsonwebtoken = require("jsonwebtoken");

const app = express();
const PORT = 2888;
app.use(cors());
app.use(json());

mongoose
    .connect("mongodb://127.0.0.1:27017/AuthDB")
    .then(() => console.log("DB is connected!!!"));

app.get("/", (req, res) => {
    res.send("Your Autentiction UP");
});

app.post("/adduser", (req, res) => {
    const {
        username,
        name,
        email,
        password,
        phone
    } = req.body;
    const payload = {
        name,
        username,
        email,
        password,
        phone,
    };
    const newUser = new userModel(payload);
    newUser.save();
    res.send("Your Registeration successfully !");
});
app.post("/login", async (req, res) => {
    const payload = req.body;
    const {
        email
    } = req.body;

    const result = await userModel.find(payload);
    if (result.length > 0) {
        const token = jsonwebtoken.sign({
                email,
            },
            "logintoken"
        );
        const msg = "ok";
        res.json({
            token,
            msg,
        });
    } else {
        res.json({
            msg: "please check user and password",
        });
    }
});
app.get("/getOTP", (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    res.json({
        otp,
    });
});
const Server = app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
});