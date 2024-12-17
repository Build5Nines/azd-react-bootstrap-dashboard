const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swaggerConfig');
const statusRoutes = require('./routes/v1/statusRoutes');

const app = express();
const port = 4242;

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  // 'https://your-specific-domain.com', // add your domain here
  ];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

// Swagger API Docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec(port)));

// Routes
app.use('/v1/status', statusRoutes);

// Server Start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger Docs available at http://localhost:${port}/docs`);
});
