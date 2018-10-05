var tryCounter = 0; //use this and a mod function to pick what "wrong answer" response we give them
function getQuestion(){
    //get question via jquery/ajax
    var apiURL = "http://jservice.io/api/random";
    var triviaQ = ''; 

    var response = prompt("Trivia question here:", "Your Answer");
    //incorrect no matter what
    alert("Wrong answer, please try again"); //rotate between answers
    //go back to login and clear all fields they typed in
}

function clearFields(){
}

// $(document).ready(function() {
    
//   $( "#loginBtn" ).click(function() {
//       alert("Hey!");
//       console.log("hey");
//   });
   
   
    
// });

