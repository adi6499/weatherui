
        let set, contain, i, description, visibility, humidity, speed, name, temperature;
        set = document.getElementById("set")
        description = document.querySelector(".description")
        visibility = document.querySelector(".visibility")
        humidity = document.querySelector(".humidity")
        speed = document.querySelector(".speed")
        contain = document.querySelector(".contain")
        temperature = document.querySelector(".temperature")
        block = document.querySelectorAll(".block")
        let loc = document.getElementById("location")
        name = document.querySelector(".name")
        country = document.querySelector(".country")






        set.addEventListener("click", locationData)

        async function locationData() {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=b4c40c9560455f7c1458b63bbfeb2560`;
            let resp = await fetch(url)
            let data = await resp.json()
            console.log(data)
            description.innerHTML = data.weather[0].description
            visibility.innerHTML = data.visibility
            humidity.innerHTML = data.main.humidity + "%"
            speed.innerHTML = data.wind.speed + " km"
            temperature.innerHTML = `${Math.floor(data.main.temp - 274.14)}<sup>o</sup> <i class="fa fa-cloud"style="font-size:60px"></i>`
            name.innerHTML=data.name
            country.innerHTML =data.sys.country  
            animationDelay()
            hello(Math.floor(data.main.temp - 274.14),data.name,data.weather[0].description)


            

        window.addEventListener("load",()=>{
           
            
            if (Notification.permission !== "granted"){
                Notification.requestPermission()
              
            }else{
                hello()
            }
        })
        }


        function animationDelay() {
            block.forEach((b) => {
                b.classList.add("animation")
                setTimeout(()=>{  b.classList.remove("animation")},4000)
            })
            document.querySelector(".blocks").style.opacity = `10`
            for (let i = 0; i < block.length; i++) {
                block[i].style.animationDelay = `${i * 0.25}s`
            }
        }

















        i = 0;
        let deg = 0
        setInterval(() => {
            if (i >= 26) {
                i = 0;
            }
            contain.style.backgroundImage = `linear-gradient(${deg}deg,rgba(0, 0, 0, 0.854),rgba(0, 0, 0, 0.26)),url(./images/cloud${i}.jpg)`
            i++

        }, 60000);

        setInterval(() => {
            contain.style.backgroundImage = `linear-gradient(${deg}deg,rgba(0, 0, 0, 0.854),rgba(0, 0, 0, 0.26)),url(./images/cloud${i}.jpg)`
            deg++

        }, 100);



        function hello(degree,locationName,conditionName){
            console.log(conditionName)
            setInterval(()=>{
                new Notification(`${locationName} Temperature:${degree}degree \n Condition:${conditionName}`)
            },30000)
           
        }
