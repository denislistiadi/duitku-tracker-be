import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import routes from "./routes/index.js";

const app = express();

// security HTTP headers
app.use(helmet());

// parse json
app.use(express.json());

// parse urlencoded body
app.use(express.urlencoded({ extended: true }));

// compress responses
app.use(compression());

// cors
app.use(cors());

// routes
app.use("/api", routes);

export default app;
