const os = require("os");
const express = require("express");
const app = express();
const port = 3000;

app.get("/memory/utilize", (req, res) => {
  const cpuUsage = os.loadavg()[0];
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const usedMemPercentage = (usedMem / totalMem) * 100;
  // console.log(`CPU usage: ${cpuUsage.toFixed(2)}%`);
  // console.log(`Memory usage: ${usedMemPercentage.toFixed(2)}%`);
    const memory = {
      cpu: cpuUsage,
      memory: usedMemPercentage,
    };
    res.json(memory);
});

app.listen(port, () => {
  console.log(`Monitoring app listening at http://localhost:${port}`);
});
