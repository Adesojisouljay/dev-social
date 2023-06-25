const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API Running on"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.group(`backend running on ${PORT}`)
})