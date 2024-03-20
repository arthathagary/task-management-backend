const { query } = require("../db/connect");

function extractDate(datetimeStr) {
  const datePart = datetimeStr.split("T")[0];
  return datePart;
}

async function getAllEventsModel() {
  const result = await query({
    query: "SELECT * FROM events",
    values: [],
  });
  return result;
}

async function createEventModel(eventData) {
  const result = await query({
    query: `
    INSERT INTO events (id,title, startDate, endDate) 
  VALUES (?,?, ?,?)
  `,
    values: [eventData.id, eventData.title, eventData.start, eventData.end],
  });
}

async function getEventsByIdModel(eventId) {
  const result = await query({
    query: `
    SELECT * FROM events WHERE id = ?
  `,
    values: [eventId],
  });
}

async function deleteEventsByIdModel(eventId) {
  const result = await query({
    query: `
    DELETE FROM events WHERE id = ?
  `,
    values: [eventId],
  });
}

async function updateEventsByIdModel(eventId, newTitle) {
  const result = await query({
    query: `
      UPDATE events 
      SET title = ?
      WHERE id = ?
    `,
    values: [newTitle, eventId],
  });
}

module.exports = {
  getAllEventsModel,
  getEventsByIdModel,
  createEventModel,
  deleteEventsByIdModel,
  updateEventsByIdModel,
};
