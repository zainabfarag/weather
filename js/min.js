// async function getWeather(city) {
// let api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b2c61da277ab477aa65171100240801&q=${city}&days=3
// `)
// data= api.json()
// console.log(data)
// }
// getWeather("cairo")


async function search(city) {
    let api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b2c61da277ab477aa65171100240801&q=${city}&days=3`);
    if (api==200 && api== 400 != api.status) {
        let city = await api.json();
        displayCurrent(city.location,city.current),
        displayAnother(city.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("keyup", city=>{
    search(city.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayCurrent(city,api) {
    if (null != api) {
        var newApi = new Date(api.last_updated.replace(" ", "api"));
        let style = ` <div class="col-md-4">
        <div class="card ">
            <div class="d-flex justify-content-between card-titel">
                <span class="p-1 px-2">${days[newApi.getDay()]}<</span> <span class="p-1 px-2"></span>
            </div>
            <div class="card-body" id="current">
                <div class="location"></div>
                <div class="degree">
                    <div class="num"><span class=""></span></div>

                    <div class="disblay-icon">
                        <img src="https://cdn.weatherapi.com/weather/64x64/night/143.png" alt="" width="90">
                    </div>

                </div>
                <div class="custom"></div>
                <span><img src="images/icon-umberella.png" alt=""></span>
                <span><img src="images/icon-wind.png" alt=""></span>
                <span><img src="images/icon-compass.png" alt=""></span>
            </div>
        </div>
    </div>`;
        document.getElementById("disblay").innerHTML = style
    }
}
function displayAnother(city) {
    let api= "";
    for (let newApi = 1; newApi < city.length; newApi++)
        api += `  <div class="col-md-4">
        <div class="card2 ">
            <div class="card-titel2 text-center">
                <span class="">
                </span>
            </div>
            <div class="content-card">
                <div class="disblay-icon">
                    <img src="imgs/113.png" alt="" width="48">
                </div>
                <div class="degree"><span></span></div>
                <small><span class=""></span></small>
                <div class="custom"></div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card3 ">
            <div class=" card-titel3 text-center">
                <span class="">
                </span>
            </div>
            <div class="content-card">
                <div class="disblay-icon">
                    <img src="imgs/113.png" alt="" width="48">
                </div>
                <div class="degree"><span></span></div>
                <span><span></span></span>
                <div class="custom"></div>
            </div>
        </div>
    </div>`;
    document.getElementById("disblay").innerHTML += api
}
// search();