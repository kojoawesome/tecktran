import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mailerRoutes from './mailer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(__dirname + '/dist'));

// API routes
app.use('/api', mailerRoutes);

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});