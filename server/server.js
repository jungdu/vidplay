const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const streamRouter = require("./routes/stream");
const apiRouter = require("./routes/api");

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));

app.use("/stream", streamRouter);
app.use("/api", apiRouter);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
