const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

router.post("/insert", controllers.userController.insert);
router.get("/findRecord",controllers.userController.findRecord);
router.post("/insertComment",controllers.userController.insertComment);

module.exports = router;