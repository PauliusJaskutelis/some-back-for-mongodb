require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.warning("Failed to Connect to mongoDB: ", err));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API Running..."));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));