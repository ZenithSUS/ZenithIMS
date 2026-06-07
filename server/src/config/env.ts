import dotenv from "dotenv";

dotenv.config({ quiet: true });

interface ConfigEnv {
  server: {
    port: number | string;
  };
  db: {
    host: string | undefined;
    name: string | undefined;
  };
}

const isProduction = process.env.NODE_ENV === "production";

const configEnv: ConfigEnv = {
  server: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: isProduction ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV,
    name: process.env.DB_NAME,
  },
};

const requiredEnvVars = ["PORT", "DB_HOST_DEV", "DB_HOST_PROD", "DB_NAME"];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing environment variable: ${envVar}`);
  }
});

export default configEnv;
