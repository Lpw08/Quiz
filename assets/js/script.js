var intro = document.querySelector(".intro")
var question = document.querySelector(".question")
var initials = document.querySelector(".initials")
var highscores = document.querySelector(".highscores")
var startquiz = document.querySelector("#start-quiz")

startquiz.addEventListener("click" ,function(){
    intro.classList.add("hide")
    question.classList.remove("hide")
})
