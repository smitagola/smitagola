import express from "express";
import books from "./routes/books.js";
import users from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())
//middlware
app.use("/books", books);

app.use("/users", users);

app.listen(7001, () => {
    console.log('connected to database.');
}); 