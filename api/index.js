const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');


// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false  }));

app.get('/api/test', (req, res) =>
    res.json('test ok')
);

//const {name, description, datetime} = req.body;

app.post('/api/transaction', (req, res) =>

//moongoose.connect('mongodb+srv://jengerred:Veronica03@profit-loss-cluster.9w1gyd4.mongodb.net/?retryWrites=true&w=majority'),
    res.json(req.body)
);


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));

