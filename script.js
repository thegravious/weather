const getData = async () =>{

    let y = document.getElementById("inp1")


    let data = await fetch(`https://wttr.in/${y.value}?format=j1` , {
        method : "GET"
    } ) 
    try{

        let x = await data.json();
        document.getElementById("city").innerText = y.value
        console.log(y.value)
        document.getElementById("tempC").innerText =  x.weather[0].avgtempC    
        document.getElementById("tempF").innerText =  x.weather[0].avgtempF
        document.getElementById("weather").innerText =  x.current_condition[0].weatherDesc[0].value
        document.getElementById("sunRise").innerText =  x.weather[0].astronomy[0].sunrise
        document.getElementById("sunSet").innerText  = x.weather[0].astronomy[0].sunset
        document.getElementById("windSpeed").innerText  = x.current_condition[0].windspeedKmph   

    }catch(error){
    }


}
document.getElementById("btn1").addEventListener("click" , getData)