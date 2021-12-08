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
const listening = () => {
    console.log(`Server running on localhost: ${port}`);
};
const server = app.listen(port, listening);
////////////////////// na2s at2kd en newEntry btdaf s7 fl projectData
/* Function to GET Project Data */
app.get("/getdata", function (req, res) {
    res.send(projectData);
});
/* POST Function to Save Project Data */
const data = [];
app.post("/add", function (req, res) {
    let newData = req.body;
    let newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        userResponse: newData.userResponse,
    };
    data.push(newEntry);
    //res.send(projectData);
    //console.log(projectData);
});
