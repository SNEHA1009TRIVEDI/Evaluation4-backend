//create a basic backend server which take port from .env file
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const authRouter = require("./src/routers/auth.router");
const contentRouter = require("./src/routers/content.router");
const fieldRouter = require("./src/routers/field.router");
const collectionRouter = require("./src/routers/collection.router");
const entityRouter = require("./src/routers/entities.router");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use("/content", contentRouter);
app.use("/field", fieldRouter);
app.use("/entity", entityRouter);
app.use("/collection", collectionRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
