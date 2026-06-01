const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./dbconnect');
const router = require('./routes/Rootroutes');

connectDB();
app.use(express.json());
app.use('/api',router);

// Health Check Route
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

app.listen(port, () => {console.log(`App listening at http://localhost:${port}`)}); 