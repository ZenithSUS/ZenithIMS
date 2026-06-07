class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }

  static Unprocessable(message: string) {
    return new AppError(message, 422);
  }

  static BadRequest(message: string) {
    return new AppError(message, 400);
  }

  static NotFound(message: string) {
    return new AppError(message, 404);
  }

  static Internal(message: string) {
    return new AppError(message, 500);
  }
}

export default AppError;
