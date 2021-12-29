// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8080;

// Callback to debug
const listening = () => {
    console.log(`Server running on localhost: ${port}`);
};

// Spin up the server
const server = app.listen(port, listening);

const data = [];

/* Function to GET Project Data */
app.get("/all", getAllData);

// Callback function to complete GET '/all'
function getAllData(req, res) {
    res.send(projectData);
}
// Post Route
app.post("/add", addData);

/* POST Function to Save Project Data */
function addData(req, res) {
    let newData = req.body;
    let newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        userResponse: newData.userResponse,
    };
    projectData = newEntry;
    res.send(projectData);
    //data.unshift(newEntry);
    //res.send(data);
}
