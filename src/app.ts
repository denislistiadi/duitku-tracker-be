import compression from "compression";
import express from "express";
import helmet from "helmet";

const app = express();

// security HTTP headers
app.use(helmet());

// parse json
app.use(express.json());

// parse urlencoded body
app.use(express.urlencoded({ extended: true }));

// compress responses
app.use(compression());

export default app;
