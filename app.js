import express from 'express';
import cors from 'cors'; // Import the CORS middleware

const app = express();
const port = 3000; // Default to 3000
const corsOptions = {
    origin: '*',
    credentials: true, // Allow credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
};

app.use(cors(corsOptions));
const server = app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    try {
        res.send('Hello World');
    } catch (err) {
        console.error("Error handling request:", err);
        res.status(500).send('Something went wrong');
    }
});

// Export the server for tests
export default server;