const express = require("express");
const oidcd = require("../oidcd");
const { defaultInteractionPolicy } = require("../core/type/interaction/policy");

var app = express();

app.set("port", 5375);

const oidcdRouter = oidcd.use(
  { interactions: { policy: defaultInteractionPolicy(), enabled: true } },
  express.Router
);

app.use("/", oidcdRouter);

app.listen(5379, function () {
  console.info(
    "oidcd-express-example, %s, %s",
    app.get("port"),
    app.get("env")
  );
});

process.on("uncaughtException", (err) => {
  console.error("UncaughtException, %j", err);
});
