const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const periodsRouter = require("./routes/periods");
const nextPeriodRouter = require("./routes/next-period");
const LoginRouter = require("./routes/login");

app.use("/periods", periodsRouter);
app.use("/next-period", nextPeriodRouter);
app.use("/login", LoginRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
