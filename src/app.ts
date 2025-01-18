import express, { Express } from "express";
import path from "path";
import apiRoutes from "./routes/api";
import pageRoutes from "./routes/pages";

const app: Express = express();
const PORT: number = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", apiRoutes);
app.use("/", pageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
