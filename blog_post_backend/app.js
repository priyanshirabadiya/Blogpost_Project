const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongooes = require('mongoose');
const userRoutes = require('./Routes/user.routes');
const port = process.env.PORT;

mongooes.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connection established success..."))
    .catch((err) => console.log(err));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true // if you are dealing with cookies or sessions
// }));


app.get("/", (req, res) => {
    res.send("<h1>Welcome to server</h1>");
})

app.use("/user",userRoutes);

app.listen(port, () => {
    console.log(`server starts at http://localhost:${port}`)
});
