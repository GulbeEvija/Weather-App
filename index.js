const api = {
    endpoint: "http://api.openweathermap.org/data/2.5/",
    key: "b4fe6e23c8079d2b95998cddee971669"
}

const input = document.querySelector("#input");
input.addEventListener("keypress",enter);

function enter(e){
    if(e.keyCode===13){
        getInfo(input.value);
    } 
}


async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}


function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;



    //date
    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;


    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>°</span>`;


    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;


    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate() {

    //1 today's date
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    //2 day
    let day = days[myDate.getDay()];

    //3 date

    let todayDate = myDate.getDate();

    //4 month
    let todayMonth = months[myDate.getMonth()];

    //5 year

    let year = myDate.getFullYear()

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${todayMonth}` + " " + `${year}`;


}