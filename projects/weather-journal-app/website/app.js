/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=8671f126531f512ed94529290f2706a6&units=imperial";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?id=";

// Create a new date instance dynamically with JS
let d = new Date();
let month = d.getMonth() + 1;
let newDate = month + "." + d.getDate() + "." + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", doAction);

/* Function called by event listener */
function doAction(e) {
    const zipCode = document.getElementById("zip").value; ///ex: 524901
    const userResponse = document.getElementById("feelings").value;

    getData(baseURL, zipCode, apiKey).then(function (data) {
        let postdata = {
            temperature: data.main.temp,
            date: newDate,
            userResponse: userResponse,
        };
        postData("/add", postdata).then(updateUI());
    });
}

/* Function to GET Web API Data*/
const getData = async (baseURL, zipCode, apikey) => {
    const res = await fetch(baseURL + zipCode + apikey);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

/* Function to POST data */
const postData = async (url = "", data) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

/* Function to GET Project Data */
const updateUI = async () => {
    const request = await fetch("/all");
    try {
        const allData = await request.json();
        document.getElementById("temp").innerHTML = allData.temperature;
        document.getElementById("date").innerHTML = allData.date;
        document.getElementById("content").innerHTML = allData.userResponse;
    } catch (error) {
        console.log("error", error);
    }
};
