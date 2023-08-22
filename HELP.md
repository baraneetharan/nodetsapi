https://livecodestream.dev/post/your-guide-to-building-a-nodejs-typescript-rest-api-with-mysql/

npm init -y

npm install typescript ts-node @types/node --save-dev
npm install mysql2
npm install cors express

npx tsc --init

npx ts-node generate-swagger.ts
npx ts-node src/server.ts

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "dev": "node ./build/server.js",
    "start": "npx ts-node generate-swagger.ts && tsc && npm run dev"
  }
```

```
import express, { Application } from "express";
import Server from "./src/index";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger_output.json"; // Path to the generated Swagger JSON
import tutorialRoutes from "./src/routes/tutorial.routes";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

// Serve Swagger UI at "/api-docs" route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/tutorials", tutorialRoutes);

// ... Add your other route handlers and logic here ...

app.listen(PORT, "localhost", function () {
  console.log(`Server is running on port ${PORT}.`);
})
.on("error", (err: any) => {
  if (err.code === "EADDRINUSE") {
    console.log("Error: address already in use");
  } else {
    console.log(err);
  }
});

```