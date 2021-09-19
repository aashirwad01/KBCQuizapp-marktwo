const readlineSync=require("readline-sync");
const chalk =require('chalk');
const boldre=chalk.bold.red;
const boldye=chalk.bold.yellow;
const inv=chalk.inverse;
var score =0;

var questions=[{
  question:"Q. Only President of India to have served as Lok Sabha speaker ?"+chalk.keyword('khaki')("\n A)Neelam Sanjeev Reddy \n B)Rajendra Prasad \n C)K.R. Narayana \n D)S. Radhakrishnan \n" ),
  answer: "A"
},
{
  question:"Q. Which religious faith is associated with Lotus Temple in New Delhi?"  + chalk.keyword('khaki') ( " \n A)Bahai \n B)Krishna \n C)Hindu \n D)Parsi \n "),
  answer:"A"
},
{
  question:"Q. Who among the following was contemporary of Alexander the Great? " + chalk.keyword("khaki")("\n A)Chandragupta Maurya \n B)Ashoka\n C)Vikramaditya \n D)Bhima \n"),
  answer :"A"
},
{
  question : "Q. Largest mountain range of India?" +  chalk.keyword("khaki")("\n A)Himalaya \n B)Ajanta\n C)Parasnath \n D)Aravali \n "),
  answer:"D"
}
,
{
  question : "Q. The first batsman to score centuries against all 8 Test-playing Nations of the World? " +  chalk.keyword("khaki")(" \n A)Rahul Dravid \n B)Sachin Tendulkar\n C)Ricky Ponting \n D)Steve Waugh \n "),
  answer:"D"
}
,
{
  question : "Q. British Government awarded Kaiser-e-Hind award in 1915 to whom?" +  chalk.keyword("khaki") (" \n A)Lord Hardinge \n B)Mohandas Karamchand Gandhi\n C)Mohammad Ali Jinnah \n D)Rabindranath Tagore \n "),
  answer:"B"
}
,
{
  question : "Q. First European to go to China?" + chalk.keyword("khaki")(" \n A)Lord Hardinge \n B)Vasco Colombia\n C)Marco Polo \n D)Marshi Defoe \n "),
  answer:"C"
}
];
console.log(chalk.keyword('orange')("-------------------------------------------------------"))
console.log(("-------------------------------------------------------"))
console.log(chalk.green("-------------------------------------------------------"))

console.log(inv("Namaskar Deviyo aur Sajjano Swagat hai aap sabka KBC me !"))
console.log(boldre("-------------------------------------------------------"))
console.log(boldre("-------------------------------------------------------"))

var userName=readlineSync.question(boldye("Aapka Shubh Naam likhe , What is your name? "));
console.log(boldre("-------------------------------------------------------"))
console.log(boldre("-------------------------------------------------------"))
console.log(chalk.keyword('orange')("Welcome Welcome Welcome ")+inv(userName.toUpperCase()+" ji")+boldre(" aapka \n \nKaun banega Crorepati ? "));
console.log(chalk.yellow("-------------------------"))

function quiz(question, answer){
  var inputAnswer=readlineSync.question(chalk.blue(question));
  if(inputAnswer.toLowerCase()===answer.toLowerCase()){
    console.log(boldye("Sahi Jawab "));
    console.log(chalk.red("-------------------------"))
    score++;
  }
  else{
    console.log(boldre("Oops Galat Jawab ")+ boldye("Correct Answer is "),
    chalk.green(answer));
    console.log(chalk.red("-------------------------"))
  }

}

for(var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer)
}
console.log(boldre("-------------------------"))
console.log(chalk.green("Aap jeetate hai "),boldye(score)+boldye(" crore"));
console.log(chalk.cyan("-------------------------"))

console.log(chalk.whiteBright("Shubh Ratri Shubh Ratri Shubh Ratri"));

