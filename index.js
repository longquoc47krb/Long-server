const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
var cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/feedback", async (req, res) => {
  const feedback = req.body;
  try {
    const feedbackCollection = (await db).collection("feedback");
    await feedbackCollection.insertOne(feedback);
    res
      .status(201)
      .send({ message: "Feedback received successfully!", status: "success" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(5000, () => console.log("API listening on port 5000"));
