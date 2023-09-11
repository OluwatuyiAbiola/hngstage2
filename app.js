
const express = require("express");
require("dotenv").config();
const { json } = require("express");

const routes = require("./routes/personRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use("/", routes);
app.use(express.urlencoded({extended: true}))


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});