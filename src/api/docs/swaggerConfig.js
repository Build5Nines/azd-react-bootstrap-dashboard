const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = (port) => {
    // Function to determine server URL dynamically
    const getServerUrl = () => {
        const host = process.env.WEBSITE_HOSTNAME || 'localhost';
    
        // Handle port for running localhost or in Azure App Service
        const portString = (host === 'localhost' ? `:${port}` : '');
    
        return `${(host === 'localhost' ? 'http' : 'https')}://${host}${portString}`;
    };
  
    const options = {
        definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node.js API with Swagger',
            version: '1.0.0',
            description: 'A simple Node.js API with Swagger OpenAPI documentation',
        },
        servers: [
            {
            url: getServerUrl(), // Dynamically set server URL
            description: 'Dynamic development/production server',
            },
        ],
        },
        apis: ['./routes/v*/*.js'], // Path to the API docs
    };

    return swaggerJSDoc(options);
}

module.exports = swaggerSpec;
