import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const cars = [];

app.post("/cars", (req, res) => {
  const { model, brand, year, color, plate } = request.body;

  cars.push({
    model,
    brand,
    year,
    color,
    plate,
    id: uuidv4(),
  });

  return response.status(201).json(cars);
});

app.get("/cars", (req, res) => {
  response.send(cars);
});

app.listen(3000);
