const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://swaadgali:password@localhost:5432/swaadgali',
});

pool.connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/user');
const vendorRoutes = require('./routes/vendor');
app.use('/api/users', userRoutes);
app.use('/api/vendors', vendorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
