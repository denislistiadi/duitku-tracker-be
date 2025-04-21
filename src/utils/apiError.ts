class ApiError extends Error {
  public isOperational: boolean;
  public stack?: string;
  public statusCode: number;

  constructor(statusCode: number, message: string, isOperational = true, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = process.env.NODE_ENV === "development" ? stack : undefined;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
