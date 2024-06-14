import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// Initialize express app and configure dotenv
//configure env
dotenv.config();
//database config
connectDB();
//rest object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
// app.use("/api", authRoutes);
// Set the port from environment variables or default to 8000
const port = process.env.PORT || 8000;

// Define a simple route
// app.get("/", (req, res) => {
//   res.send("Welcome to the ecommerce app");
// });

// Start the server and log the running status
app.listen(port, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} on mode port ${port}`.bgCyan
      .white
  );
});
