import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import enrollmentRoute from "./app/routes/enrollmentRoute.js";
import { seedDatabase } from "./app/models/seed.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Simple Enrollment Search." });
});

// Routes
enrollmentRoute(app);

// Sync database
db.sequelize.sync({ force: true }).then(async () => {
    console.log("Synced db.");
    await seedDatabase(db);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});