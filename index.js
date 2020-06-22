const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("./dbset/env");
const guest = require("./lib/guest/guest.route");

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "false");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range",
  );
  if (req.method === "OPTIONS") {
    return res.send(200);
  } else {
    return next();
  }
});
// Middleware
app.use(cors());
app.use(bodyParser.json());
guest.guestRoutes(app);

app.options("*", cors());
app.listen(env.port, function () {
  console.log("App listening at port %s", 3000);
});
