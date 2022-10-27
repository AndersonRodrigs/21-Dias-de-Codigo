const keyEmoji = "adce2d0dbed8c965ac976ae4fe43817660137607"
showEmoji("face")

async function getemojis(emoji) {
  const areaLoading = $(".loading")
  const emogiURL = `https://emoji-api.com/emojis?search=${emoji}&access_key=${keyEmoji}`

  $(".emoji-not-found").addClass("hide")

  $(areaLoading).removeClass("hide")

  const getData = await fetch(emogiURL)
  const dataEmoji = await getData.json()

  $(areaLoading).addClass("hide")

  return dataEmoji
}

async function showEmoji(emoji) {
  let dataEmoji = await getemojis(emoji)

  if (dataEmoji === null) {
    $(".emoji-not-found").removeClass("hide")
    return
  }

  dataEmoji.forEach(element => {
    let li = $("<li>")

    $(li).attr("class", "emoji")
    $(li).html(element.character)
    $(".emojis").append(li)
  })
  getemojiLi()
}

function getemojiLi() {
  let emojiSelect = ""
  const liEmoji = document.querySelectorAll("li")

  liEmoji.forEach(e => {
    e.addEventListener("click", () => {
      emojiSelect = e.innerHTML
      copyEmoji(emojiSelect)
    })
  })
}

function removeLiEmoji() {
  const li = $(".emoji")
  $(li).remove()
}

function searchEmoji() {
  removeLiEmoji()
  const emoji = $("#input").val()
  showEmoji(emoji)
}

function showAlert() {
  $(".alert").fadeIn(500)
  $(".alert").fadeOut(1800)
}

function copyEmoji(emoji) {
  navigator.clipboard.writeText(emoji)
  $("#copied-emoji").html(`Emoji ${emoji} copiado com sucesso!`)
  showAlert()
}

$("#button").on("click", e => {
  searchEmoji(e)
})

$(".form").on("submit", e => {
  e.preventDefault()
})
