const express = require("express");
const router = express.Router();

let periods = [
  { id: 0, startDate: "2023-06-10", description: "Period one" },
  { id: 1, startDate: "2023-07-15", description: "Period two" },
  { id: 2, startDate: "2023-08-21", description: "Period three" },
];

function generateRandomId() {
  return Math.floor(Math.random() * 1000);
}

router.get("/all-periods", (request, response) => {
  response.json({ periods });
});

router.post("/add-period", (request, response) => {
  const periodData = request.body;
  periodData.id = generateRandomId();
  periods.push(periodData);
  response.json({ periods });
});

router.put("/edit-period", (request, response) => {
  const periodId = request.body.id;
  const periodIndex = periods.findIndex((period) => period.id === periodId);

  if (periodIndex === -1) {
    return response.status(404).json({ message: "User not found" });
  }

  periods[periodIndex] = request.body;
  response.json({ periods });
});

router.delete("/delete-period", (request, response) => {
  const periodId = request.body.id;
  const periodIndex = periods.findIndex((period) => period.id === periodId);

  if (periodIndex === -1) {
    return response.status(404).json({ message: "User not found" });
  }

  periods.splice(periodIndex, 1);
  response.json({ periods });
});

module.exports = router;
