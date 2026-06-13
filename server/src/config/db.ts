import mongoose from "mongoose";
import configEnv from "./env.js";
import colors from "../utils/log-colors.js";

const connectDB = async () => {
  try {
    await mongoose.connect(configEnv.db.host!, {
      dbName: configEnv.db.name || "zenithmis",
    });

    console.log("=".repeat(50));
    console.log(`${colors.green}Connected to MongoDB${colors.reset}`);
    console.log("=".repeat(50) + "\n");
  } catch (error) {
    console.log("=".repeat(50));
    console.error(`${colors.red}Failed to connect to MongoDB${colors.reset}`);
    console.log("=".repeat(50) + "\n");
    process.exit(1);
  }
};

export default connectDB;
