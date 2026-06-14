require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");


const authRoutes = require("./routes/authRoutes");
const alertRoutes = require("./routes/alertRoutes");
const donorRoutes = require("./routes/donorRoutes");
const requestRoutes = require("./routes/requestRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");

const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use("/api/auth", authRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/volunteers", volunteerRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
