import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";

connectDB();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// listen for connection and
// returns an http.server by default

// http.createServer(app).listen(80);

// https.createServer({ ... }, app).listen(443);

app.listen(process.env.PORT, () => {
  console.log(
    `The server is working and is running on port : ${process.env.PORT}`
  );
});
