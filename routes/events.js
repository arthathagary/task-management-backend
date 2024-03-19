const express = require("express");
const {
  getAllEvents,
  createEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/productController");
const router = express.Router();

router.route("/events").get(getAllEvents).post(createEvent);
router
  .route("/event/:id")
  .get(getSingleEvent)
  .put(updateEvent)
  .delete(deleteEvent);

module.exports = router;
