const keyAPI = "33qDaFSGerOrubVv5XkabRcr2xgkCUhUVrJVRrCmqFI"
const imagesArea = document.querySelector("#images")

async function getImagesData() {
  let apiURL = `https://api.unsplash.com/photos/random/?&count=10&X-Ratelimit-Limit: 1000&client_id=${keyAPI}`
  const res = await fetch(apiURL)
  const data = await res.json()
  return data
}

async function mostrarImagens() {
  let data = await getImagesData()
  data.forEach(element => {
    const li = document.createElement("li")
    const image = document.createElement("img")
    image.setAttribute("src", element.urls.small)
    li.appendChild(image)
    imagesArea.appendChild(li)
  })
}
