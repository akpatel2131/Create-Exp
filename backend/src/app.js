const express = require("express");
const cors = require("cors");
const router = require("./routes");
const { errorMessage } = require("./utils/message");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use((req, res, next) => {
    res.status(404).json(errorMessage("Not Found"));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json(errorMessage(err.message));
});

module.exports = app;