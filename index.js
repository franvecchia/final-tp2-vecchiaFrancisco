import express from "express";
import routes from "./routes/routes.js";

const app = express();
const port = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})