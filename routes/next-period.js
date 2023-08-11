const express = require("express");
const router = express.Router();

let nextPeriod = [
    { id: 0, startDate: "2023-06-10", description: "Period one" },
];

router.get("/", (request, response) => {
    response.json({ nextPeriod });
});

module.exports = router;
