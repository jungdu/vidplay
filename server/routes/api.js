const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const videoDir = path.join(__dirname, "..", "..", "video");
const fileRgx = new RegExp(".mp4$");

router.get("/videos", (req, res) => {
  fs.readdir(videoDir, (err, items) => {
    if (err) {
      res.status(400).send("Error : " + err);
    } else {
      console.log(items);
      items = items.filter(filename => fileRgx.exec(filename));
      res.send(JSON.stringify({ files: items }));
    }
  });
});

module.exports = router;
