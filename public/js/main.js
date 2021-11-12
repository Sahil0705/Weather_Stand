//alert("Sahil here 🙌");

const currDate1 = document.getElementById('date1');
const currDate2 = document.getElementById('date2');
const currDate3 = document.getElementById('date3');
let weathercon = document.getElementById("weathercon");
   
const getCurrentDay = () =>
{
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentTime = new Date();
    console.log(weekday[currentTime.getDay()]);
    return(weekday[currentTime.getDay()].toUpperCase());
};
        

const getCurrentDate = () =>
{
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();
            
    let hours = now.getHours();
    let min = now.getMinutes();
            
    console.log(hours+":"+min);
    let period = "AM";
    if(hours>11)
    {
        period = "PM";
        if(hours>12)
            hours = hours - 12;
    }
    if(hours<10)
    {
        hours = "0"+hours;
    }
    if(min<10)
    {
        min = "0"+min;
    }
    console.log(month+"/"+day);
    let temp = month.toUpperCase()+" "+day;
    return(temp);
};



const getCurrentTime = () =>
{
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();
            
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
            
    console.log(hours+":"+min);
    let period = "AM";
    if(hours>11)
    {
        period = "PM";
        if(hours>12)
            hours = hours - 12;
    }
    if(hours<10)
    {
        hours = "0"+hours;
    }
    if(min<10)
    {
        min = "0"+min;
    }
    if(sec<10)
    {
        sec = "0"+sec;
    }
    console.log(month+"/"+day);
    let temp = hours+" : "+min+" : "+sec+" "+period;
    return(temp);
};
        
currDate1.innerHTML = getCurrentDay();
currDate2.innerHTML = getCurrentDate();
currDate3.innerHTML = getCurrentTime();

setInterval(myTimer, 1000);

function myTimer() {
  currDate3.innerHTML = getCurrentTime();
}

const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById('submit_button');

const city_name = document.getElementById('city_name');

const temp_val = document.getElementById('temp_val');

const temp = document.getElementById('temp');

const temp_status = document.getElementById('temp_status');

const maxtemp = document.getElementById('maxtemp');

const mintemp = document.getElementById('mintemp');

const hum = document.getElementById('hum');

const press = document.getElementById('press');

const vis = document.getElementById('vis');

const moredetails = document.getElementById('more_details');

const xtra = document.getElementById('xtra');
xtra.style.display = "none";

function toggle() 
{
    if(xtra.style.display == "none") 
    {
        xtra.style.display = "block";
        moredetails.innerHTML = "Close &nbsp; More &nbsp; Details";
    } 
    else 
    {
        xtra.style.display = "none";
        moredetails.innerHTML = "View &nbsp; More &nbsp; Details";
    }
}

moredetails.addEventListener('click',toggle);

const getInfo = async(event) =>
{
    event.preventDefault();  
    let cityVal = cityName.value;
    
    if(cityVal=="")
    {
        city_name.innerHTML = "Please write the city name before Search";
        temp.style.visibility = "hidden";

        maxtemp.innerHTML = ``;

        mintemp.innerHTML = ``;

        hum.innerHTML = ``;
            
        press.innerHTML = ``;

        winsp.innerHTML = ``;

        vis.innerHTML = ``;
    }
    else
    {
        try
        {
            //alert(cityVal);
            // console.log("B4 Hello");
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ede44d7b6f9e388706d65d398c99e893`;
            const response = await fetch(url);
            //console.log(response);
            const data = await response.json();
            //console.log(data);
            //alert(data.main.temp);
            temp_val.innerHTML = (data.main.temp-273.15).toFixed(2);
            temp_status.innerHTML = (data.weather[0].main);
            city_name.innerHTML = `${data.name} , ${data.sys.country}`;
            temp.style.visibility = "visible";

            maxtemp.innerHTML = `${(data.main.temp_max-273.15).toFixed(2)} °C`;

            mintemp.innerHTML = `${(data.main.temp_min-273.15).toFixed(2)} °C`;

            hum.innerHTML = `${data.main.humidity} %`;
            
            press.innerHTML = `${data.main.pressure} hPa`;

            winsp.innerHTML = `${data.wind.speed} m/s`;

            vis.innerHTML = `${data.visibility}`;

            if(temp_status.innerHTML=="Sunny")
            {
                var now = new Date();
                let hours = now.getHours();
                if(hours>18)
                {
                    temp_status.innerHTML = "<i class='fas fa-moon'></i>";
                }
                else
                {
                    temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
                }
            }
            else if(temp_status.innerHTML=="Clouds")
            {
                var now = new Date();
                let hours = now.getHours();
                if(hours>18)
                {
                    temp_status.innerHTML = "<i class='fas fa-cloud-moon'></i>";
                }
                else
                {
                    temp_status.innerHTML = "<i class='fas fa-cloud-sun'></i>";
                }
            }
            else if(temp_status.innerHTML=="Rain")
            {
                var now = new Date();
                let hours = now.getHours();
                if(hours>18)
                {
                    temp_status.innerHTML = "<i class='fas fa-cloud-moon-rain'></i>";
                }
                else
                {
                    temp_status.innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>";
                }
            }
            else if(temp_status.innerHTML=="Haze")
            {
                temp_status.innerHTML = "<img src='../images/haze.png' height='100px' width='100px'>";
            }
            else if(temp_status.innerHTML=="Smoke")
            {
                temp_status.innerHTML = "<img src='../images/smoke.png' height='100px' width='100px'>";
            }
            else if(temp_status.innerHTML=="Smog")
            {
                temp_status.innerHTML = "<i class='fas fa-smog'></i>";
            }
            else
            {
                var now = new Date();
                let hours = now.getHours();
                if(hours>18)
                {
                    temp_status.innerHTML = "<i class='fas fa-moon' fa-2x></i>";
                }
                else
                {
                    temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
                }
            }
            
        }
        catch{
            city_name.innerText =  `Please write the city name properly`;
            temp.style.visibility = "hidden";
        }
    }
}
submitBtn.addEventListener('click',getInfo);

