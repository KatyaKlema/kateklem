const express = require("express");
const router = express.Router();
const config = require("config");

let BASE_ID, API_KEY;
if (config.get("ENV") === "dev") {
    BASE_ID = config.get("BASE_ID_TEST");
    API_KEY = config.get("API_KEY_TEST");
} else {
    BASE_ID = config.get("BASE_ID_PROD");
    API_KEY = config.get("API_KEY_PROD");
}

const Airtable = require("airtable");
Airtable.configure({
    apiKey: API_KEY,
});
const base = Airtable.base(BASE_ID);

const getMergedResponses = (res, baseName, gridName) => {
    const initData = [];
    base(baseName)
        .select({
            view: gridName,
        })
        .eachPage((records, fetchNextPage) => {
            initData.push(records);
            fetchNextPage();
        })
        .then(() => {
            res.json(initData);
        })
        .catch((err) => {
            console.log(err);
        });
};

router.get("/roles", (req, res, next) => {
    getMergedResponses(res, "Role", "roles_all");
});

router.get("/units", (req, res, next) => {
    getMergedResponses(res, "Unit", "unit_all");
});

router.get("/functions", (req, res, next) => {
    getMergedResponses(res, "Functions", "Grid view");
});

router.get("/roleunit", (req, res, next) => {
    getMergedResponses(res, "Role_Unit", "roles_all");
});

router.get("/reviews", (req, res, next) => {
    getMergedResponses(res, "Reviews", "Grid view");
});

router.get("/okrs", (req, res, next) => {
    getMergedResponses(res, "OKR", "Grid view");
});

router.get("/tasks", (req, res, next) => {
    getMergedResponses(res, "Tasks", "Grid view");
});

router.post("/addrow/:table", (req, res, next) => {
    const tableName = req.params.table;
    base(tableName)
        .create(req.body)
        .then((data) => {
            res.json(data);
        });
});

router.post("/deleterow/:table/:id", (req, res, next) => {
    const tableName = req.params.table;
    const id = req.params.id;
    base(tableName)
        .destroy(id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.put("/updateRows/:table", (req, res, next) => {
    const tableName = req.params.table;
    base(tableName)
        .update(req.body.data)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
