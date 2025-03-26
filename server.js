const express = require('express');
const cors = require('cors');
const scraperRoutes = require('./backend/routes/scraperItemRoutes');
const listRoutes = require('express-list-routes');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/api', scraperRoutes);

listRoutes(app);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

