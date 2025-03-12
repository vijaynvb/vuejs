import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import swaggerSpecs from './swagger.js'; // Now using ES module syntax
import todosRouter from './todosRouter.js';
import authRouter from "./authRouter.js";
import userRouter from './userRouter.js';
import corsOptions from './corsOptions.js';

const app = express();
const PORT = 8000;

// Enable CORS
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Swagger UI setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/todos", todosRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});