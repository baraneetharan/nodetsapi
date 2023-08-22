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
