const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // res.send("CI/CD Pipeline Running Successfully with Express.js!");
    res.send("Version 3");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});