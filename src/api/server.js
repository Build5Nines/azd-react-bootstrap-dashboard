const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swaggerConfig');
const statusRoutes = require('./routes/v1/statusRoutes');

const app = express();
const port = 8080;

// CORS configuration to allow all origins
app.use(cors({
  origin: '*'
}));

app.use(express.json());

// Routes
app.use('/v1/status', statusRoutes);

// Swagger API Docs
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec(port)));

// Server Start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger Docs available at http://localhost:${port}/docs`);
});
