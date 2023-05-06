const os = require("os");
const express = require("express");
const app = express();
require("dotenv").config()
const port = process.env.APP_PORT;

const cors = require("cors");
const corsOptions = {
  origin: `http://${process.env.CORS_HOST}:${process.env.CORS_PORT}`,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/memory/utilize", (req, res) => {
  const cpuUsage = os.loadavg()[0].toFixed(3);
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const usedMemPercentage = ((usedMem / totalMem) * 100).toFixed(3);
  // console.log(`CPU usage: ${cpuUsage.toFixed(2)}%`);
  // console.log(`Memory usage: ${usedMemPercentage.toFixed(2)}%`);
    const memory = {
      cpu: cpuUsage,
      memory: usedMemPercentage,
    };
    res.json(memory);
});

app.listen(port, () => {
  console.log(`Got CORS host as ${process.env.CORS_HOST} and port as ${process.env.CORS_PORT}`)
  console.log(
    `Monitoring app listening at http://${process.env.APP_HOST}:${port}`
  );
});
