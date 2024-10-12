import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "hello world" });
});

app.post("/", (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({
    success: true,
    message: "hello world",
    data: { username, password },
  });
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
