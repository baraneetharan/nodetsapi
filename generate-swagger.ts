import swaggerAutogen from "swagger-autogen";

// Define the output file and endpoint files
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/index.ts"]; // Path to your endpoint/controller file

// Define the Swagger documentation options
const doc = {
  info: {
    title: "Node.js TypeScript MySQL REST API",
    description: "REST API documentation for the Node.js TypeScript MySQL example",
    version: "1.0.0",
  },
  host: "localhost:8080", // Update this with your server's hostname and port
  basePath: "/",          // Base path of your API
};

// Generate Swagger JSON
swaggerAutogen()(outputFile, endpointsFiles, doc);
