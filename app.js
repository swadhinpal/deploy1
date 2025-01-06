import express from 'express';
import cors from 'cors'; // Import the CORS middleware

const app = express(); // Create the app instance
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// CORS configuration
const corsOptions = {
    origin: '*',
    credentials: true, // Allow credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
};

// Apply middleware
app.use(cors(corsOptions));

// Define routes
app.get('/', (req, res) => {
    try {
        res.send('Hello World xyz'); // Respond with "Hello World"
    } catch (err) {
        console.error("Error handling request:", err);
        res.status(500).send('Something went wrong');
    }
});

// Export the app for external usage (e.g., testing or deployment)
export default app;

// Start the server if not in test mode (use import.meta.url for ES modules)
if (import.meta.url === `file://${process.argv[1]}`) {
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`);
    });
}
