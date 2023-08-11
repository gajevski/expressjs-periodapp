const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const periodsRouter = require("./routes/periods");
const nextPeriodRouter = require("./routes/next-period");
app.use("/periods", periodsRouter);
app.use("/next-period", nextPeriodRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
