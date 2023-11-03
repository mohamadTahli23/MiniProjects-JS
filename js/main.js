
// Make a request for Currency API

let currency = new XMLHttpRequest();

currency.open("GET" ,"https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c95982a8f5bb4b9c8f720451c385f504")
currency.send()


currency.onreadystatechange = () => {

if(currency.status === 200 && currency.readyState === 4) {
    let currencyData = JSON.parse(currency.response)

    let usd = document.querySelector(".usd span").innerHTML
    let sar = document.querySelector(".sar span")
    let egp = document.querySelector(".egp span")
    console.log(usd)
    sar.innerHTML = Math.round(usd * currencyData.rates["SAR"])
    egp.innerHTML = Math.round(usd * currencyData.rates["EGP"])
    console.log(currencyData.rates["SAR"])
}
}

// Make a request for Joke API

let joke = new XMLHttpRequest()

joke.open("GET" , "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&type=single")

joke.send()

let jokeBox = document.querySelector(".joke-box");
let btnjoke = document.querySelector(".wrapper .btn");


function changJoke() {
    joke.onreadystatechange = () => {
        if(joke.status === 200 && joke.readyState === 4 ) {
    
            let jokeData = JSON.parse(joke.responseText)
    
            jokeBox.innerHTML = jokeData["joke"]
        }
    }
}


changJoke()


btnjoke.addEventListener("click" , function() {
    joke.open("GET" , "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&type=single")
    joke.send()
    changJoke
}  )



