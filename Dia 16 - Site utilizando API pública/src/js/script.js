const apiKey = "11408db8a347ad620f8e7f19e0f4e424"
const countryApi = "https://countryflagsapi.com/png/"

const cityInput = $("#city-input")
const weatherContainer = $("#wether-data")

const getWeatherData = async city => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  const res = await fetch(apiWeatherURL)
  const data = await res.json()
  return data
}

const showWeatherData = async city => {
  const data = await getWeatherData(city)
  if (data.cod === "404") {
    alert("No foi possivel encontrar o clima de uma cidade com esse nome.")
    weatherContainer.addClass("hide")
    cityInput.val("")
    return
  }

  $("#city").html(data.name)
  $("#temperature span").html(parseInt(data.main.temp))
  $("#description").html(data.weather[0].description)
  $("#wheater-icon").attr(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  )
  $("#country").attr("src", countryApi + data.sys.country)
  $("#humydity span").html(`${data.main.humidity}%`)
  $("#wind span").html(`${data.wind.speed}km/h`)

  weatherContainer.removeClass("hide")
  cityInput.val("")
}

function searchCity(e) {
  e.preventDefault()
  const city = cityInput.val()
  if (e.key === "Enter") {
    showWeatherData(city)
  } else if (e.type === "click") {
    showWeatherData(city)
  }
}


$("#search").on("click", e => {
  searchCity(e)
})

$("#city-input").on("keydow", e => {
  searchCity(e)
})
