const {
  getAllEventsModel,
  getEventsByIdModel,
  createEventModel,
  deleteEventsByIdModel,
  updateEventsByIdModel,
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
  const events = await req.body;
  console.log(events);
  createEventModel(events);

  res.status(201).json({
    success: true,
    events,
  });
};

const getSingleEvent = async (req, res, next) => {};

const updateEvent = async (req, res, next) => {
  try {
    const eventId = await req.params.id;
    const data = await req.body;
    console.log(data);
    // const existingEvent = await getEventsByIdModel(eventId);
    // if (!existingEvent) {
    //   return res.status(404).json({ message: "Event not found" });
    // }
    console.log("heello");

    await updateEventsByIdModel(eventId, data.data);

    res
      .status(200)
      .json({ message: "Event updated successfully", event: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating event" }); // Consider more specific error handling
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    await deleteEventsByIdModel(eventId);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
