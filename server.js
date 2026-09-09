const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
// ===============================
// MIDDLEWARE
// ===============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ===============================
// FRONTEND
// ===============================
app.use(express.static(path.join(__dirname)));
// ===============================
// API HEALTH CHECK
// ===============================
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "TikTok Streamers backend is running.",
        database: "Not connected yet",
        users: 0,
        streamers: 0,
        liveStreams: 0
    });
});
// ===============================
// EMPTY DATA ENDPOINTS
// ===============================
// Streamers
app.get("/api/streamers", (req, res) => {
    res.json({
        success: true,
        count: 0,
        streamers: []
    });
});
// Live streams
app.get("/api/live", (req, res) => {
    res.json({
        success: true,
        count: 0,
        liveStreams: []
    });
});
// Leaderboard
app.get("/api/leaderboard", (req, res) => {
    res.json({
        success: true,
        count: 0,
        rankings: []
    });
});
// ===============================
// 404 API HANDLER
// ===============================
app.use("/api", (req, res) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found."
    });
});
// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
    console.log("=================================");
    console.log("   TIKTOK STREAMERS BACKEND");
    console.log("=================================");
    console.log(`Server running on port ${PORT}`);
    console.log("Database: Not connected yet");
    console.log("Users: 0");
    console.log("Streamers: 0");
    console.log("Live streams: 0");
    console.log("=================================");
});