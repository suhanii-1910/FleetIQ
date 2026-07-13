import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import truckRoutes from "./routes/truck.routes";
import driverRoutes from "./routes/driver.routes";
import customerRoutes from "./routes/customer.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/trucks", truckRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/customers", customerRoutes);

app.get("/", (_req, res) => {
  res.send("FleetIQ API Running 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});