let firstpage = document.getElementById("firstpage");
let start = document.getElementById("start");
let secondpage = document.getElementById("secondpage");
let score = document.getElementById("score");
let time = document.getElementById("time");
let question = document.getElementById("question");
let answerA = document.getElementById("A");
let answerB = document.getElementById("B");
let answerC = document.getElementById("C");
let thirdpage = document.getElementById("thirdpage");
let congrats = document.getElementById("congrats");
let totalscore = document.getElementById("totalscore");
let highscore = document.getElementById("highscore");
let replay = document.getElementById("replay");
let answerclicked = false;

let questions = [];

let geographyQuestions = [
    {
        question : "1. In which country is Transylvania?",
       
        choiceA : "Romania",
        choiceB : "Bulgaria",
        choiceC : "Serbia",
        correct : "A"
    },{
        question : "2. Which is New Zeeland's largest city?",
       
        choiceA : "Queenstown",
        choiceB : "Wellington",
        choiceC : "Auckland",
        correct : "C"
    },{
        question : "3. How many time zones are there in total in the world?",
       
        choiceA : "16",
        choiceB : "24",
        choiceC : "32",
        correct : "B"
    },{
        question : "4. What language is the most spoken worldwide?",
       
        choiceA : "Chinese",
        choiceB : "Spanish",
        choiceC : "English",
        correct : "A"
    },{
        question : "5. Which ocean is the largest?",
       
        choiceA : "Pacific",
        choiceB : "Atlantic",
        choiceC : "Arctic",
        correct : "A"
    },{
        question : "6. What is the most populos city in Canada?",
       
        choiceA : "Toronto",
        choiceB : "Quebec",
        choiceC : "Vancouver",
        correct : "A"
    },{
        question : "7. What country is Prague in?",
       
        choiceA : "Hungary",
        choiceB : "Austria",
        choiceC : "Czech Republic",
        correct : "C"
    },{
        question : "8. What is the Earth’s lowest land point with an elevation of 396 m below sea level? ",
       
        choiceA : "The Devis sea",
        choiceB : "The Dead sea",
        choiceC : "The black sea",
        correct : "B"
    },{
        question : "9. Which country has the most unique animals?",
       
        choiceA : "Brazil",
        choiceB : "Colombia",
        choiceC : "Madagaskar",
        correct : "B"
    },{
        question : "10. Which U.S. state has the most countries?",
       
        choiceA : "Texas",
        choiceB : "California",
        choiceC : "Alabama",
        correct : "A"
    },{
        question : "11. Which city in Los Angeles county is the farthest north?",
       
        choiceA : "Long Beach",
        choiceB : "Palmdale",
        choiceC : "Lancaster",
        correct : "C"
    },{
        question : "12. Which country has the most rivers?",
       
        choiceA : "Bangladesh",
        choiceB : "Brazil",
        choiceC : "India",
        correct : "A"
    },{
        question : "13. Lisbon stands at the mouth of which river?",
       
        choiceA : "Seine",
        choiceB : "Rio Grande",
        choiceC : "Tagus",
        correct : "C"
    },{
        question : "14. What is the longest river in France?",
       
        choiceA : "Loire",
        choiceB : "Rhone",
        choiceC : "Danube",
        correct : "A"
    },{
        question : "15. In which ocean is Madagascar?",
       
        choiceA : "Atlantic",
        choiceB : "Pacific",
        choiceC : "Indian",
        correct : "C"
    },{
        question : "16. Death Valley is located in:",
       
        choiceA : "California US",
        choiceB : "Saudi Arabia",
        choiceC : "Israel",
        correct : "A"
    },{
        question : "17. Colombo is the capital of:",
       
        choiceA : "Sri Lanka",
        choiceB : "Thailand",
        choiceC : "China",
        correct : "A"
    },{
        question : "18. The largest island in the world is:",
       
        choiceA : "Australia",
        choiceB : "Greenland",
        choiceC : "New Guinea",
        correct : "B"
    },{
        question : "19. Mount Everest is located in:",
       
        choiceA : "India",
        choiceB : "Nepal",
        choiceC : "Bhutan",
        correct : "B"
    },{
        question : "20. How many capitals the Danube River cross?",
       
        choiceA : "3",
        choiceB : "4",
        choiceC : "5",
        correct : "C"
    },{question}
];

let sportQuestions = [
    {
        question : "1. In US, football is called soccer. What is american football called in Europe?",
       
        choiceA : "Rugby",
        choiceB : "Basball",
        choiceC : "American football",
        correct : "C"
    },{
        question : "2. Which football club does Jordan Henderson play for?",
       
        choiceA : "Manchester City",
        choiceB : "Manchester United",
        choiceC : "Liverpool",
        correct : "C"
    },{
        question : "3. Which country held the 2016 Summer Olympics?",
       
        choiceA : "China",
        choiceB : "Italy",
        choiceC : "Brazil",
        correct : "C"
    },{
        question : "4. Which olympic sport is Micheal Phelps known for?",
       
        choiceA : "Snowboarding",
        choiceB : "Running",
        choiceC : "Swimming",
        correct : "C"
    },{
        question : "5. How many rings are there in the Olympic symbol?",
       
        choiceA : "5",
        choiceB : "4",
        choiceC : "6",
        correct : "A"
    },{
        question : "6. Which water sport is the official sport for the state of Hawaii?",
       
        choiceA : "swiming",
        choiceB : "water skiing",
        choiceC : "surfing",
        correct : "C"
    },{
        question : "7. What is the oldest sport?",
       
        choiceA : "Wrestling",
        choiceB : "Bullfight",
        choiceC : "Cockfight",
        correct : "A"
    },{
        question : "8. After How many years FIFA WORLD CUP is held?",
       
        choiceA : "3 years",
        choiceB : "4 years",
        choiceC : "5 years",
        correct : "B"
    },{
        question : "9. When was the first FIFA WORLD CUP held?",
       
        choiceA : "1930",
        choiceB : "1935",
        choiceC : "1938",
        correct : "A"
    },{
        question : "10. Who won the FIFA WORLD CUP in 2018?",
       
        choiceA : "France",
        choiceB : "Germany",
        choiceC : "Brazil",
        correct : "A"
    },{
        question : "11. What is the National Game of the USA?",
       
        choiceA : "Baseball",
        choiceB : "Basketball",
        choiceC : "Rugby",
        correct : "A"
    },{
        question : "12. Which sport is Valentino Rossi known for?",
       
        choiceA : "swiming",
        choiceB : "motorcyle racing",
        choiceC : "cycling",
        correct : "B"
    },{
        question : "13. When did Micheal Jordan retire?",
       
        choiceA : "2004",
        choiceB : "2003",
        choiceC : "2002",
        correct : "B"
    },{
        question : "14. What is the standard size of a football pitch?",
       
        choiceA : "105 x 45 m",
        choiceB : "105 x 68 m",
        choiceC : "150 x 68 m",
        correct : "B"
    },{
        question : "15. After how many years Olympic Games are held?",
       
        choiceA : "3 years",
        choiceB : "4 years",
        choiceC : "5 years",
        correct : "B"
    },{
        question : "16. What is the national sport of Canada?",
       
        choiceA : "Cricket",
        choiceB : "Football",
        choiceC : "Ice Hockey",
        correct : "C"
    },{
        question : "17. Where did the first Olympics take place?",
       
        choiceA : "Berlin",
        choiceB : "Paris",
        choiceC : "Athens",
        correct : "C"
    },{
        question : "18. What does blue color ring represent in the Olympic Rings?",
       
        choiceA : "Asia",
        choiceB : "Africa",
        choiceC : "Europe",
        correct : "C"
    },{
        question : "19. Which sport has the term Butterfly Stroke?",
       
        choiceA : "Swimming",
        choiceB : "Boating",
        choiceC : "MotoGP",
        correct : "A"
    },{
        question : "20. Free throw is associated with:",
       
        choiceA : "Basketball",
        choiceB : "Volleyball",
        choiceC : "Football",
        correct : "A"
    },{question}
];
let technologyQuestions = [
    {
        question : "1. Which social media platform came out in 2003?",
       
        choiceA : "Myspace",
        choiceB : "hi5",
        choiceC : "Tumblr",
        correct : "A"
    },{
        question : "2. Which country follows the US and China in total numbers of internet users?",
       
        choiceA : "Germany",
        choiceB : "UK",
        choiceC : "Japan",
        correct : "C"
    },{
        question : "3. Who founded Microsoft?",
       
        choiceA : "Steve Jobs",
        choiceB : "Bill Gates",
        choiceC : "Bill Hader",
        correct : "B"
    },{
        question : "4. LCD stands for:",
       
        choiceA : "liquid crystal display",
        choiceB : "liquid crystalline display",
        choiceC : "liquid crystal device",
        correct : "A"
    },{
        question : "5. Which of the following is true for HTML?",
       
        choiceA : "Browser displays only body part",
        choiceB : "Browser displays only header part",
        choiceC : "Brower display both body and header part",
        correct : "A"
    },{
        question : "6. URL includes:",
       
        choiceA : "Protocol type",
        choiceB : "Domain name and Port Number",
        choiceC : "All of the above",
        correct : "C"
    },{
        question : "7. All XML documents must contain exactly one...",
       
        choiceA : "root element",
        choiceB : "chil element",
        choiceC : "function",
        correct : "A"
    },{
        question : "8. HTML is a ... language",
       
        choiceA : "markup",
        choiceB : "object orientated",
        choiceC : "object based",
        correct : "A"
    },{
        question : "9. HTTP is:",
       
        choiceA : "Request-Response Protocol",
        choiceB : "Stateful",
        choiceC : "Secured",
        correct : "A"
    },{
        question : "10. The process of converting insignificant whitespace characters into a single white space character or entirely removing it is called:",
       
        choiceA : "interchanging",
        choiceB : "preservation",
        choiceC : "normalisation",
        correct : "C"
    },{
        question : "11. Hotspot refers to:",
       
        choiceA : "region where there is no network",
        choiceB : "region with internet access using Wi-Fi",
        choiceC : "a heat sink",
        correct : "B"
    },{
        question : "12. Which of the following techniques is employed for improving transmission efficiency of digital documents?",
       
        choiceA : "Encryption",
        choiceB : "Steganography",
        choiceC : "Compression",
        correct : "C"
    },{
        question : "13. A captcha is used for verifying if a web user:",
       
        choiceA : "is a machine or human being",
        choiceB : "is frequent or infrequent visitor",
        choiceC : "has logged out",
        correct : "A"
    },{
        question : "14. WiFi is a short name for:",
       
        choiceA : "wired fidelity",
        choiceB : "wireless fidelity",
        choiceC : "wireless frequency",
        correct : "B"
    },{
        question : "15. Each computer connected to the internet must:",
       
        choiceA : "be internet compatible",
        choiceB : "have a unique IP adress",
        choiceC : "be a IBM PC",
        correct : "B"
    },{
        question : "16. IP adress is currently",
       
        choiceA : "4 bytes long",
        choiceB : "6 bytes long",
        choiceC : "available in plenty",
        correct : "A"
    },{
        question : "17. IP adresses are converted to",
       
        choiceA : "a binary string",
        choiceB : "alphanumeric string",
        choiceC : "a hierarchy of domain names",
        correct : "C"
    },{
        question : "18. What are meta tags?",
       
        choiceA : "The content of the site",
        choiceB : "Embedded information",
        choiceC : "Links to other sites",
        correct : "B"
    },{
        question : "19. To transfer an e-mail to a private network,we need to have a:",
       
        choiceA : "mail router",
        choiceB : "mail gateway",
        choiceC : "mail agent",
        correct : "B"
    },{
        question : "20. How many parts is a URL normally made of?",
       
        choiceA : "2",
        choiceB : "3",
        choiceC : "4",
        correct : "C"
    },{question}
];
let historyQuestions = [
    {
        question : "1. In 1768, Captain James Cook set out to exploe which ocean?",
       
        choiceA : "Pacific Ocean",
        choiceB : "Atlantic Ocean",
        choiceC : "Arctic Ocean",
        correct : "A"
    },{
        question : "2. Which did Viking people use as money?",
       
        choiceA : "Rune stones",
        choiceB : "Jewellery",
        choiceC : "Gold",
        correct : "B"
    },{
        question : "3. Which country gifted the Statue of Liberty to the U.S.?",
       
        choiceA : "Germany",
        choiceB : "England",
        choiceC : "France",
        correct : "C"
    },{
        question : "4. Who painted the Mona Lisa?",
       
        choiceA : "Van Gogh",
        choiceB : "da Vinci",
        choiceC : "Picasso",
        correct : "C"
    },{
        question : "5. In which city were Anne Frank and her family in hiding?",
       
        choiceA : "Paris",
        choiceB : "Amsterdam",
        choiceC : "Brussels",
        correct : "B"
    },{
        question : "6. In what year did women get the right to vote?",
       
        choiceA : "1905",
        choiceB : "1920",
        choiceC : "1930",
        correct : "B"
    },{
        question : "7. What was the first capital of the United States?",
       
        choiceA : "Washington, D.C.",
        choiceB : "Richmond",
        choiceC : "Philadelphia",
        correct : "C"
    },{
        question : "8. The library at Alexandria was the most famous of antiquity. Who destroyed it?",
       
        choiceA : "Muslims",
        choiceB : "Romans",
        choiceC : "Christians",
        correct : "A"
    },{
        question : "9. Who was the prime minister of the UK at the time of Queen Elizabeth II coronation?",
       
        choiceA : "Neville Chamberlain",
        choiceB : "Winston Churchill",
        choiceC : "Harold McMillan",
        correct : "B"
    },{
        question : "10. Which british monarch succeded Queen Victoria?",
       
        choiceA : "Elizabeth II",
        choiceB : "Edward VI",
        choiceC : "Edward VII",
        correct : "C"
    },{
        question : "11. Which of these nations was neutral in WW1?",
       
        choiceA : "Germany",
        choiceB : "Norway",
        choiceC : "England",
        correct : "B"
    },{
        question : "12. World war 1 ended in :",
       
        choiceA : "1925",
        choiceB : "1920",
        choiceC : "1918",
        correct : "C"
    },{
        question : "13. Of what country was Simon Bolivar president?",
       
        choiceA : "Bolivia",
        choiceB : "Peru",
        choiceC : "Chile",
        correct : "B"
    },{
        question : "14. Where were the Aegean Bronze Age civilisations located?",
       
        choiceA : "Algeria",
        choiceB : "India",
        choiceC : "Greece",
        correct : "C"
    },{
        question : "15. Which of these battles did not involve roman soldiers?",
       
        choiceA : "Battle of Arretium",
        choiceB : "Battle of Chalons",
        choiceC : "Battle of Thermopylae",
        correct : "C"
    },{
        question : "16. How many kings did England have been named Henry?",
       
        choiceA : "8",
        choiceB : "9",
        choiceC : "10",
        correct : "A"
    },{
        question : "17. What were the pyramids of Egypt?",
       
        choiceA : "Command posts",
        choiceB : "Tombs",
        choiceC : "Shrines",
        correct : "B"
    },{
        question : "18. Which of these was not an Egyptian pharaoh?",
       
        choiceA : "Ramses",
        choiceB : "Shak Jahan",
        choiceC : "Amenhotep",
        correct : "B"
    },{
        question : "19. Which roman emperor conquered DACIA?",
       
        choiceA : "Traian",
        choiceB : "Julius Caesar",
        choiceC : "Nero",
        correct : "A"
    },{
        question : "20. How many biological children did Julius Caesar had?",
       
        choiceA : "one",
        choiceB : "two",
        choiceC : "none",
        correct : "B"
    },{question}
];



let activeCategory = 0;
let points = 0;
let tictac;
let counting = 0;
let questionTime = 10;
let activeQuestion = 0;
let lastQuestion = questions.length;
let bigestScore = -20;


function selectCateg(id){
    categorypage.style.display = "none";
    firstpage.style.display = "block";
    activeCategory = id;
    switch(activeCategory){
        case "1" :
            questions = questions.concat(geographyQuestions);
            break;
        case "2" :
            questions = questions.concat(sportQuestions);
            break;
        case "3" :
            questions = questions.concat(technologyQuestions);
            break;
        case "4" :
            questions = questions.concat(historyQuestions);
            break;
    }
    lastQuestion = questions.length - 1;
}


start.addEventListener("click",letsGo);
function letsGo(){
    firstpage.style.display = "none";
    secondpage.style.display = "block";
    startQuestion();
    startTime();
    tictac = setInterval(startTime,1000);
}

function correctAnswer(){
    points++;
}
function wrongAnswer(){
    points--;
}
function startQuestion(){

    let x = questions[activeQuestion];
    question.innerHTML = "<p>"+ x.question +"</p>";
    answerA.innerHTML = x.choiceA;
    answerB.innerHTML = x.choiceB;
    answerC.innerHTML = x.choiceC;
    score.innerHTML = points;  
}
nextQuestion.addEventListener("click",nextQ);

function checkAnswer(answer){
    if (answerclicked == false){
    showAnswer();
 if(answer == questions[activeQuestion].correct){
     correctAnswer();
 }else{
     wrongAnswer();
     
 }
 nextQuestion.innerHTML = "Next >>"
 answerclicked = true;
 activeQuestion++
 counting = 0;
 clearInterval(tictac);}
}

function nextQ (){
    if(answerclicked == true){
    answerA.style.backgroundColor = "darkkhaki";
    answerB.style.backgroundColor = "darkkhaki";
    answerC.style.backgroundColor = "darkkhaki";
    startTime();
    startQuestion();
    answerclicked = false;
    nextQuestion.innerHTML = "Next >>"
    tictac = setInterval(startTime,1000);
    console.log(activeQuestion);
    console.log(questions.length);
    if(activeQuestion === lastQuestion){
        endGame();
    }
}else{
    nextQuestion.innerHTML = "Select"
}
}

function startTime(){
    if(counting <= questionTime){
        time.innerHTML = counting;
        counting++
    }else{
        showAnswer();
        wrongAnswer();
        clearInterval(tictac);
        counting = 0;
        activeQuestion++;
        answerclicked = true;
        nextQuestion.innerHTML = "Next >>"
    }
}





function showAnswer(){
    switch(questions[activeQuestion].correct){
        case "A" :
        answerA.style.backgroundColor = "#0aa15b";
        answerB.style.backgroundColor = "#E54C38";
        answerC.style.backgroundColor = "#E54C38";
        break;
        case "B" :
        answerA.style.backgroundColor = "#E54C38";
        answerB.style.backgroundColor = "#0aa15b";
        answerC.style.backgroundColor = "#E54C38";
        break;
        case "C" :
        answerA.style.backgroundColor = "#E54C38";
        answerB.style.backgroundColor = "#E54C38";
        answerC.style.backgroundColor = "#0aa15b";
        break; 
}
} 



function endGame(){
    secondpage.style.display = "none";
    thirdpage.style.display = "block";
    totalscore.innerHTML = `your score is ` + points;
    clearInterval(tictac);
    counting = 0;
    
    if (points > bigestScore){
        bigestScore = points;
    }
    highscore.innerHTML = `Highscore: ` + bigestScore;
}


replay.addEventListener("click",restartgame);


function restartgame(){
    thirdpage.style.display = "none";
    categorypage.style.display = "block";
    points = 0;
    activeQuestion = 0;
    activeCategory = 0;
    questions = [];
    clearInterval(tictac);
    counting = 0;
}
