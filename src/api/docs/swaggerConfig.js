const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = (port) => {
    // Function to determine server URL dynamically
    const getServerUrl = () => {
        const host = process.env.WEBSITE_HOSTNAME || 'localhost';
        const protocol = process.env.PROTOCOL || (host === 'localhost' ? 'http' : 'https');
    
        // Handle default ports for HTTP and HTTPS
        const portString = (protocol === 'http' && port == 80) || (protocol === 'https' && port == 443)
        ? ''
        : `:${port}`;
    
        return `${protocol}://${host}${portString}`;
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
