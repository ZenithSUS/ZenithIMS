import mongoose from "mongoose";
import configEnv from "./env.js";
import colors from "../utils/log-colors.js";

const db = mongoose.createConnection(configEnv.db.host!, {
  dbName: configEnv.db.name || "zenithmis",
});

const connectDB = async () => {
  try {
    await db.asPromise();
    console.log("=".repeat(50));
    console.log(
      `${colors.green}Connected to MongoDB successfully!${colors.reset}`,
    );
    console.log("=".repeat(50) + "\n");
  } catch (error) {
    console.log("=".repeat(50));
    console.error("Error connecting to MongoDB:", error);
    console.log("=".repeat(50) + "\n");
    process.exit(1);
  }
};

export default connectDB;
