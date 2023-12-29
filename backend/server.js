import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import entryRoutes from './routes/entryRoutes.js';

// Get database and server configured
dotenv.config();
connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/journal', entryRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`.green.bold);
});