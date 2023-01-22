import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

//routes
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

// allows to pull env variables from env file
dotenv.config();

const app = express();
//adding middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Open AI server is up and running");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
