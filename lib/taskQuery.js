const connectDB = require("../db/connect");

function getAllEvents(callback) {
  connectDB.query("SELECT * FROM events", callback);
}

function createEvent(eventData, callback) {
  connection.query("INSERT INTO events SET ?", eventData, callback);
}

function getEventsById(eventId, callback) {
  connectDB.query("SELECT * FROM events WHERE id = ?", [eventId], callback);
}

module.exports = {
  getAllEvents,
  getEventsById,
  createEvent,
};
