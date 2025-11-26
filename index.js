import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let dataPoints = [];

app.post("/data", (req, res) => {
  const { lat, lng, value } = req.body;
  dataPoints.push({ lat, lng, value, time: Date.now() });
  res.json({ status: "ok" });
});

app.get("/heatmap", (req, res) => {
  res.json(dataPoints);
});

app.listen(3000, () => console.log("Server running"));
