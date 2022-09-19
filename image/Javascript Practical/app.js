api="https://cdnjs.cloudflare.com/ajax/libs/satellite.js/4.0.0/satellite"

async function iss()
{
    var response=await fetch(api)
    var data=await response.json()

    const{latitude,longitude}=data;//console.log(data)

    console.log(latitude)
    console.log(longitude)

    document.getElementById("latitude").innerHTML=latitude
    document.getElementById("longitude").innerHTML=longitude
}
iss()//function call