const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.listen(process.env.PORT, () => {
  console.log(`App listen on ${process.env.PORT}`);
});
