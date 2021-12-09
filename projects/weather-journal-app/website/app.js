/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/forecast?id=";
const apiKey = "&appid=8671f126531f512ed94529290f2706a6";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", doAction);

function doAction(e) {
    const zipCode = document.getElementById("zip").value; ///ex: 524901
    const userResponse = document.getElementById("feelings").value;

    //getData(baseURL, zipCode, apiKey);
    getData("/getdata")
        .then(function (data) {
            console.log(data);
            postData("/add", {
                temperature: data.temperature,
                date: newDate,
                userResponse: userResponse,
            });
        })
        .then(updateUI());
}

const getData = async (baseURL, zipCode, apikey) => {
    const res = await fetch(baseURL + zipCode + apikey);
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

const updateUI = async () => {
    const request = await fetch("/alldata");
    try {
        const allData = await request.json();
        document.getElementById("date").innerHTML = allData[0].date;
        document.getElementById("temp").innerHTML = allData[0].temperature;
        document.getElementById("content").innerHTML = allData[0].userResponse;
    } catch (error) {
        console.log("error", error);
    }
};

/*postData("/add", {
    temperature: 25,
    date: newDate,
    userResponse: 5,
});
*/
