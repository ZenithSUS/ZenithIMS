import configEnv from "./config/env.js";
import app from "./app.js";
import connectDB from "./config/db.js";
import colors from "./utils/log-colors.js";

connectDB();

app.listen(configEnv.server.port, () => {
  console.log("=".repeat(50));
  console.log(
    `${colors.green}ZenithMIS server is running on port ${configEnv.server.port}${colors.reset}`,
  );
  console.log("=".repeat(50) + "\n");
});
