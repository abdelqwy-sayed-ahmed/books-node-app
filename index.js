const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my app route!!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
