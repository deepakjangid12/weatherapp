// const cityName = document.getElementById('cityName');
// const city_name = document.getElementById('city_name');
// const temp_status = document.getElementById('temp_status');
// const temp_real_val = document.getElementById('temp_real_val');
// const datahide = document.querySelector('.middle_layer');
// import 

// const submitBtn = document.getElementById('submitBtn');
// const getInfo = async (event) => {
//     event.preventDefault();
//     let cityVal = cityName.value;
//     if (cityVal === "") {
//         city_name.innerText = 'Please write the name before search '
//         datahide.classList.add('data_hide')
//     }
//     else {
//         try {
//             // let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4e94641bea7cc072ecbf95f3820091f3`
//             // const response = await fetch(url);
//             // // console.log(response);
//             // const data = await response.json();
//             // console.log(data);
//             // const arrData = [data];
//             const response = await fetch('Weather.json');
//             const data = await response.json();
//             city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
//             temp_real_val.innerText = arrData[0].main.temp;
//             // code for cloudy ,rainy.....temp_status.innerText=arrData[0].weather[0].main;

//             const tempMood = arrData[0].weather[0].main;
//             //condition to chexk sunny or cloudy
//             if (tempMood === "Clear") {
//                 temp_status.innerHTML =
//                     "<i class='fas fa-sun' style='color: #eccc68;'></i>";

//             } else if (tempMood === "Clouds") {

//                 temp_status.innerHTML =

//                     "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
//             }
//             else if (tempMood === "Rain") {
//                 temp_status.innerHTML =
//                     "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";

//             }
//             else if(tempMood === "Snow"){
//                  temp_status.innerHTML=
//                  "<i class='fa-regular fa-snowflake ' style='color: white;'></i>";
//             }
//              else {
//                 temp_status.innerHTML =

//                     "<i class='fas fa-sun' style='color: #eccc68;'></i>";
//             }
//             datahide.classList.remove('data_hide')

//         } catch {
//             city_name.innerText = 'Please enter  the city name properly '
//             datahide.classList.add('data_hide')

//         }
//     }
// }
// submitBtn.addEventListener('click', getInfo);



// const cityName = document.getElementById('cityName');
// const city_name = document.getElementById('city_name');
// const temp_status = document.getElementById('temp_status');
// const temp_real_val = document.getElementById('temp_real_val');
// const datahide = document.querySelector('.middle_layer');

// const submitBtn = document.getElementById('submitBtn');

// const getInfo = async (event) => {
//     event.preventDefault();
//     let cityVal = cityName.value;
//     if (cityVal === "") {
//         city_name.innerText = 'Please write the name before search '
//         datahide.classList.add('data_hide')
//     } else {
//         try {
//             const response = await fetch('Weather.json');
//             const data = await response.json();
//             city_name.innerText = `${data.name}, ${data.sys.country}`;
//             temp_real_val.innerText = data.main.temp;

//             const tempMood = data.weather[0].main;

//             if (tempMood === "Clear") {
//                 temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
//             } else if (tempMood === "Clouds") {
//                 temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
//             } else if (tempMood === "Rain") {
//                 temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
//             } else if (tempMood === "Snow") {
//                  temp_status.innerHTML = "<i class='fa-regular fa-snowflake ' style='color: white;'></i>";
//             } else {
//                 temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
//             }

//             datahide.classList.remove('data_hide');

//         } catch {
//             city_name.innerText = 'Please enter the city name properly '
//             datahide.classList.add('data_hide');
//         }
//     }
// }

// submitBtn.addEventListener('click', getInfo);

// const cityName = document.getElementById('cityName');
// const city_name = document.getElementById('city_name');
// const temp_status = document.getElementById('temp_status');
// const temp_real_val = document.getElementById('temp_real_val');
// const datahide = document.querySelector('.middle_layer');
// const submitBtn = document.getElementById('submitBtn');

// const getInfo = async (event) => {
//     event.preventDefault();
//     let cityVal = cityName.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison

//     if (cityVal === "") {
//         city_name.innerText = 'Please write the name before search '
//         datahide.classList.add('data_hide');
//     } else {
//         try {
//             const response = await fetch('Weather.json');
//             const data = await response.json();

//             if (data.cities[cityVal]) {
//                 const cityData = data.cities[cityVal];
//                 city_name.innerText = `${cityData.name}, ${cityData.country}`;
//                 temp_real_val.innerText = cityData.main.temp;

//                 const tempMood = cityData.weather.main;

//                 // Code to display weather icon based on tempMood
//                 if (tempMood === "Clear") {
//                     temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
//                 } else if (tempMood === "Clouds") {
//                     temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
//                 } else {
//                     temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
//                 }

//                 datahide.classList.remove('data_hide');
//             } else {
//                 city_name.innerText = 'City not found';
//                 datahide.classList.add('data_hide');
//             }
//         } catch {
//             city_name.innerText = 'Error fetching data';
//             datahide.classList.add('data_hide');
//         }
//     }
// }

// submitBtn.addEventListener('click', getInfo);


const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');
const submitBtn = document.getElementById('submitBtn');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison

    if (cityVal === "") {
        city_name.innerText = 'Please write the name before search '
        datahide.classList.add('data_hide');
    } else {
        try {
            const response = await fetch('Weather.json');
            const data = await response.json();
            for (let i = 0; i < data.length; i++) 
            {
            if (data[i].name.toLowerCase() === cityVal) {
                // console.log(i);
                city_name.innerText = `${data[i].name}, ${data[i].sys.country}`;
                temp_real_val.innerText = data[i].main.temp;

                const tempMood = data[i].weather[0].main;
            
                // Code to display weather icon based on tempMood
                if (tempMood === "Clear") {
                    temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
                } else if (tempMood === "Clouds") {
                    temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

                }
                else if (tempMood === "snow"){
                    temp_status.innerHTML="<i class='fa-solid fa-snowflake' style='color: #2a67cf;'></i>"
                }
                else if (tempMood === "Rain"){
                    temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color: #5581ce;'></i>"
                }
                else if (tempMood === "Haze"){
                temp_status.innerHTML="<i class='fa-solid fa-smog' style='color: #2c60ba;'></i>"}
                else {
                    temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
                }

            datahide.classList.remove('data_hide');
            break;
            }
            else {
                city_name.innerText = 'City not found';
                datahide.classList.add('data_hide');
            }
        }
    }
         catch {
            city_name.innerText = 'Error fetching data';
            // datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);

