const router = require("express").Router();
const { negotiate, getResult } = require("../controllers/negotiationController");

router.post("/negotiate", negotiate);
router.get("/result", getResult);

module.exports = router;
