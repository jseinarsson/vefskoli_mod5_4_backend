import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Importing routes
import entryRoutes from './routes/entries.js';

// Initialize app
const app = express();

// Connecting to env file
dotenv.config();

// Setting up express to properly send requests using json
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//Using routes -- accessible at whatever/entries...
app.use('/entries', entryRoutes);

//Set greeting for API
app.get('/', (req, res) => {
    res.send('Space Traveller API');
})

// Connecting to MongoDB with mongoose
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Returns a promise
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // If connection is sucessful: call the app and when succesfully listening, console log success msg with port#
    .catch((error) => console.log(error.message)); // If connection is not successful: log the error msg

mongoose.set('useFindAndModify', false);