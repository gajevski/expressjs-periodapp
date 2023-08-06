const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let periods = [
  { id: 0, description: "Period one" },
  { id: 1, description: "Period two" },
  { id: 2, description: "Period three" },
];

app.get("/all-periods", (request, response) => {
  response.json({ periods });
});

app.post("/add-period", (request, response) => {
  const periodData = request.body;
  periods.push(periodData);
  response.json({ periods });
});

app.put("/edit-period", (request, response) => {
  const periodId = request.body.id;
  const periodIndex = periods.findIndex((period) => period.id === periodId);

  if (periodIndex === -1) {
    return response.status(404).json({ message: "User not found" });
  }

  periods[periodIndex] = request.body;
  response.json({ periods });
});

app.delete("/delete-period", (request, response) => {
  const periodId = request.body.id;
  const periodIndex = periods.findIndex((period) => period.id === periodId);

  if (periodIndex === -1) {
    return response.status(404).json({ message: "User not found" });
  }

  periods.splice(periodIndex, 1);
  response.json({ periods });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
