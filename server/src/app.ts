// Dependencies
import express from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";

// Middlewares
import errorMiddleware from "./middlewares/error.middleware.js";
import notFoundMiddleware from "./middlewares/not-found.middleware.js";
import requestLogger from "./middlewares/request-logger.js";

// Routes V1
import itemRouterV1 from "./routes/v1/item.route.js";
import transactionV1 from "./routes/v1/transaction.route.js";

const app = express();

// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: "*",
  }),
);
app.use(hpp());
app.use(requestLogger);

// Health check
app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "ZenithMIS Server is healthy",
  });
});

// Routes Version 1
app.use("/api/v1/items", itemRouterV1);
app.use("/api/v1/transactions", transactionV1);

// Error and not found middlewares
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
