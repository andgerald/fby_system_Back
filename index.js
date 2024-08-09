import express from "express";
import "dotenv/config";
import indexRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());

app.use(indexRoutes);
app.use(express.static("public"));


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:3000`);
});

app.get("*", (req, res) => {
  res.send("La ruta no existe");
});
