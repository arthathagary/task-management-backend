const {
  getAllEventsModel,
  getEventsByIdModel,
  createEventModel,
} = require("../models/eventModel");

const getAllEvents = async (req, res, next) => {
  try {
    const results = await getAllEventsModel();
    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching events",
    });
  }
};

const createEvent = async (req, res, next) => {
  const body = await req.body;
  console.log(body.title);
  createEventModel(body.title);

  res.status(201).json({
    success: true,
    body,
  });
};

const getSingleEvent = async (req, res, next) => {};

const updateEvent = async (req, res, next) => {};

const deleteEvent = async (req, res, next) => {};

module.exports = {
  getAllEvents,
  createEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
