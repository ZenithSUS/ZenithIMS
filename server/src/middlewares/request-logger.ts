import type { Request, Response, NextFunction } from "express";
import colors from "../utils/log-colors.js";

const sensitiveFields = ["password"];

const sanitize = (obj: Record<string, unknown>): Record<string, unknown> => {
  const clone = { ...obj };
  sensitiveFields.forEach((field) => {
    if (clone[field]) clone[field] = "*****";
  });
  return clone;
};

function getStatusColor(statusCode: number): string {
  if (statusCode >= 200 && statusCode < 300) return colors.green;
  if (statusCode >= 300 && statusCode < 400) return colors.cyan;
  if (statusCode >= 400 && statusCode < 500) return colors.yellow;
  if (statusCode >= 500) return colors.red;
  return colors.white;
}

const getMethodColor = (method: string) => {
  switch (method) {
    case "GET":
      return colors.blue;
    case "POST":
      return colors.green;
    case "PUT":
      return colors.yellow;
    case "PATCH":
      return colors.magenta;
    case "DELETE":
      return colors.red;
    default:
      return colors.white;
  }
};

const requestLogger = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const startTime = Date.now();

  const methodColor = getMethodColor(req.method);

  console.log("=".repeat(50));
  console.log(
    `${methodColor}${colors.bright}${req.method}${colors.reset} ` +
      `${req.protocol}://${req.hostname}${colors.cyan}${req.url}${colors.reset}`,
  );

  if (req.body && Object.keys(req.body).length > 0) {
    console.log(
      `${colors.dim}Body:${colors.reset} ${JSON.stringify(sanitize(req.body), null, 2)}`,
    );
  }

  if (Object.keys(req.params).length > 0) {
    console.log(
      `${colors.dim}Params:${colors.reset} ${JSON.stringify(sanitize(req.params), null, 2)}`,
    );
  }

  if (Object.keys(req.query).length > 0) {
    console.log(
      `${colors.dim}Query:${colors.reset} ${JSON.stringify(sanitize(req.query), null, 2)}`,
    );
  }

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const statusColor = getStatusColor(res.statusCode);

    console.log(
      `${statusColor}${colors.bright}${res.statusCode}${colors.reset} (${duration}ms)`,
    );

    console.log("=".repeat(50) + "\n");
  });
  next();
};

export default requestLogger;
