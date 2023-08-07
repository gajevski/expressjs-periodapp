const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const periodsRouter = require("./routes/periods");
app.use("/periods", periodsRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
