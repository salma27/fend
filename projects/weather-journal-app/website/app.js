/* Global Variables */
const baseURL =
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=";
const apiKey = "8671f126531f512ed94529290f2706a6";
//const newData = ""; //document.getElementBy
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", doAction);

function doAction(e) {
    const newData = document.getElementById("generate").value;
    getData(baseURL, newData, apiKey);
}

const getData = async (baseURL, newData, apikey) => {
    const res = await fetch(baseURL + animal + apikey);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

const postData = async (url = "", data = {}) => {
    console.log(data);
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
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

postData("/add", {
    temperature: 25,
    date: 10,
    userResponse: 5,
});
