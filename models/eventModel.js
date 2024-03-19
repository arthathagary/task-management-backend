const { query } = require("../db/connect");

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
    values: [1, eventData, "2020-09-09", "2020-09-09"],
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

module.exports = {
  getAllEventsModel,
  getEventsByIdModel,
  createEventModel,
};
