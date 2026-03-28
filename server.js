const express = require("express");

const app = express();

app.get("/", (req, res) =>
{
    res.send("Server is working ");
})



app.use(express.json());


app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = user.find(
        u => u.username === username && u.password === password
    );
    if (user)
        res.sendStatus("Login Successful");
    else(user)
    res.send("Invalid Credentials");
});


const users = [
  { username: "admin", password: "1234" },
  { username: "nithin", password: "pass123" }
];


app.listen(3000, () => 
{
    console.log("Server is runnig at 3000 port");
})