import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./app-data-source";
import userRoutes from "./routes/user";
import errorHandler from "./middleware/error-handler";

dotenv.config();

const app = express();

//hello

// var corsOptions = {
//   origin: "http://localhost:8081"
// }; ///

// app.use(cors(corsOptions));

app.use(cors())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to subgenAI api." });
});

app.use(userRoutes);

app.use(errorHandler);

// set port, listen for requests
const PORT = process.env.PORT
const start = async () => {
  try {

    AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
      throw Error("Error during Data Source initialization:" + err)
    })

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
    
  } catch (error) {
    console.error(error);
  }
};

start();