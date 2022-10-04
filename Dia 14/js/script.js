let answers = {}

let question_1 = document.getElementById('question-1')
let question_2 = document.getElementById('question-2')
let question_3 = document.getElementById('question-3')
let question_4 = document.getElementById('question-4')
let question_5 = document.getElementById('question-5')
let question_6 = document.getElementById('question-6')

let score = document.getElementById('printtotalscore')
let scoreinfo = document.getElementById('printscoreinfo')

function storeAnswers(question_number, event) {
  if (event.target.type === 'radio') {
    console.log(event.target.value)
    answers['question' + question_number] = parseInt(event.target.value)
  }
}

question_1.addEventListener('click', function (event) {
  storeAnswers(1, event)
})
question_2.addEventListener('click', function (event) {
  storeAnswers(2, event)
})
question_3.addEventListener('click', function (event) {
  storeAnswers(3, event)
})
question_4.addEventListener('click', function (event) {
  storeAnswers(4, event)
})
question_5.addEventListener('click', function (event) {
  storeAnswers(5, event)
})
question_6.addEventListener('click', function (event) {
  storeAnswers(6, event)
})

function totalScore() {
  let total_score =
    answers.question1 +
    answers.question2 +
    answers.question3 +
    answers.question4 +
    answers.question5

  return total_score
}

function getInfoBasedOnScore() {
  return totalScore() < 7
    ? 'Voçê percisa tomar mais cuidado com a segurança.'
    : 'Parabéns! voçê esta cuidando bem da sua segurança! '
}

let buttonsSubmit = document.querySelectorAll('#submit')
let buttonSubmit = document.getElementById('submit')

function nextQuestion(question_number) {
  let current_question_number = `${question_number - 1}`

  let elemet = document.getElementById(`question-${question_number}`)
  let elemet2 = document.getElementById(`question-${current_question_number}`)

  elemet.style.display = 'block'
  elemet2.style.display = 'none'
}

let count = 1
function next(list) {
  list.forEach(e => {
    e.addEventListener('click', function (e) {
      e.preventDefault()
      count++
      nextQuestion(count)

      if (count === 6) {
        score.innerHTML = totalScore()
        scoreinfo.innerHTML = getInfoBasedOnScore()
      } else {
        growprogressBar()
      }
    })
  })
}

let porcentage = 20
function growprogressBar() {
  porcentage += 20
  let bar = document.getElementById('progress_bar')
  bar.style.width = `${porcentage}%`
}

buttonSubmit.addEventListener('click', next(buttonsSubmit))
