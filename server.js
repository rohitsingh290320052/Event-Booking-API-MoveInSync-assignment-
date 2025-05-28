const express = require("express");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
