"use strict";
const AWS = require("aws-sdk");
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
AWS.config.update({ region: " ap-northeast-2" });

const getList = bucketParams =>
  new Promise((resolve, reject) => {
    s3.listObjects(bucketParams, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

module.exports.handler = async (event, context) => {
  const bucketParams = {
    Bucket: process.env.VIDEO_BUCKET_NAME,
    Prefix: "videos",
  };

  const result = await getList(bucketParams);
  const videos = result.Contents.map(val => val.Key.replace(/^videos\//g, ""));
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify({ videos }),
  };
};
