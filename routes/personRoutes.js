const express = require("express");
const router = express.Router();
const personControllers = require("../controllers/personControllers");


router.get("/api", personControllers.person);
router.get("/api/:identifier", personControllers.personByIdentifier);
router.post("/api", personControllers.addPerson);
// router.put("/api/:identifier", personControllers.updateByIdentifier);
router.patch("/api/:identifier", personControllers.updateInfo);
router.delete("/api/:identifier", personControllers.deleteByIdentifier);



module.exports = router;