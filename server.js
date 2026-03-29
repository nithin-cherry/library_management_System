const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log("Login attempt:", email, password);

    if(email === "admin@gmail.com" && password === "1234"){
        res.json({success:true, message:"Login successful"});
    }
    else if(email === "nithin@gmail.com" && password === "cherry"){
        res.json({success:true, message:"Login successful"});
    }
    else{
        res.json({success:false, message:"Invalid credentials"});
    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});