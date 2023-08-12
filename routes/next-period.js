const express = require("express");
const router = express.Router();
const moment = require("moment");

let lastPeriod = { id: 0, startDate: "2023-06-10", description: "Period one" };

router.get("/", (request, response) => {
    const lastStartDate = moment(lastPeriod.startDate);
    const nextStartDate = lastStartDate.clone().add(26, "days").format("YYYY-MM-DD");

    const nextPeriod = {
        id: 1,
        startDate: nextStartDate,
        description: "Test",
    };

    response.json({ nextPeriod, lastPeriod }, );
});

module.exports = router;
