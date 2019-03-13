const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/video", function(req, res) {
  const { filename } = req.query;
  if (!filename) {
    return res.status(400).send("There is no file");
  }
  const range = req.headers.range;
  const filePath = path.join(__dirname, "..", "..", "video", filename);
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const offset = 10000000;
  const parts = range.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const partend = start + offset < fileSize ? start + offset : fileSize - 1;

  const end = partend;
  const chunksize = end - start + 1;

  const head = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": chunksize,
    "Content-Type": "video/mp4"
  };
  // 데이터 전송 확인 로그
  // console.log("Content-Range : ", `bytes ${start}-${end}/${fileSize}`);
  const file = fs.createReadStream(filePath, { start, end });
  res.writeHead(206, head);
  file.pipe(res);
});

module.exports = router;
