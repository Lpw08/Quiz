var intro = document.querySelector(".intro")
var question = document.querySelector(".question")
var initials = document.querySelector(".initials")
var highscores = document.querySelector(".highscores")
var startquiz = document.querySelector("#start-quiz")
var questionarray = [{
    title:"Commonly used data types DO NOT include", 
    choices:["Strings", "Booleans", "Alerts","Numbers"],
    answer:"Alerts"
},{
    title:"Commonly used data types DO NOT include", 
    choices:["Strings", "Booleans", "Alerts","Numbers"],
    answer:"Alerts"  
},{
    title:"Commonly used data types DO NOT include", 
    choices:["Strings", "Booleans", "Alerts","Numbers"],
    answer:"Alerts"
},{
    title:"Commonly used data types DO NOT include", 
    choices:["Strings", "Booleans", "Alerts","Numbers"],
    answer:"Alerts"
},{
    title:"Commonly used data types DO NOT include", 
    choices:["Strings", "Booleans", "Alerts","Numbers"],
    answer:"Alerts"
}]

startquiz.addEventListener("click" ,function(){
    intro.classList.add("hide")
    question.classList.remove("hide")
    displayQuestion()
})
function displayQuestion(){
    question.innerHTML=`
    <h3>${questionarray[0].title}</h3>
        <ol>
            <li><button class="choices">${questionarray[0].choices[0]}</button></li>
            <li><button class="choices">${querySelector[0].choices[1]}</button></li>
            <li><button class="choices">${querySelector[0].choices[0]}</button></li>
            <li><button class="choices">Numbers</button></li>
        </ol>`
}