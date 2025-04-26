import express from 'express';
import dotenv from 'dotenv'; 
import { connectDb } from './config/db.js';
import productRoute from './routes/product.route.js'; // Import the product route
import cors from 'cors'; // Import CORS middleware
import path from 'path';
const __dirname = path.resolve();

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Set the port to the value in .env or default to 5000

// CORS configuration
const corsOptions = {
  origin: 'https://basicstore-01.onrender.com', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/dist'))); // if using Vite
  // OR
  // app.use(express.static(path.join(__dirname, 'frontend/build'))); // if using Create React App

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html')); // or 'build/index.html'
  });
}


app.use(express.json()); // Middleware to parse/understand JSON request bodies data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.use('/api/products', productRoute); // Mount the product route at /api/products
// This means that any request to /api/products will be handled by the productRoute

// MongoDB connection and server start
const startServer = async () => {
  try {
    await connectDb(); // wait until MongoDB is connected
    app.listen(PORT, () => {
      console.log(` Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" MongoDB connection failed", error);
    process.exit(1); // 1 indicates an error occurred, 0 indicates success
  }
};

startServer();
