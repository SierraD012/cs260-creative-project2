//the button calls this function onclick
function getQuestion(){
    ajaxAPICall(function(data) {
        console.log(">Ajax got: " + data);
        var triviaPrompt = "Please give the question to the following Jeopardy answer to continue login: \n" + data[0] + ":";
        
        var userInput = prompt(triviaPrompt, "Your Answer");
        
        //get random message out of repsonses[]
        var randomResponse = getRandResponse();
        var incorrectMessage = randomResponse + "\n The correct answer was: " + data[1];
        
        alert(incorrectMessage);
        
        location.reload(true);
    });
}

function getRandResponse(){
    var responses = [ "Wrong again", "Wow, you really suck at this, don't you?",
    "Do you even want to log in, bro?", "You make Internet Explorer look good.",
    "My grandma could have answered that!", "#FAIL" ];

    var min = 0;
    var max = responses.length - 1;
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    
    console.log("randIndex = " + randIndex);
    return responses[randIndex];
}


function ajaxAPICall(callback){
    var apiURL = "http://jservice.io/api/random";
    
      $.ajax({  
            url: apiURL,
            dataType: "json",
            success: function(parsed_JSON) {
                parsed_JSON = parsed_JSON[0];
                console.log(parsed_JSON);
                
                var question = parsed_JSON['question'];
                var answer = parsed_JSON['answer'];
                var trivia = [question, answer];

                callback(trivia);  //this returns trivia back to getQuestion()
            }
        });
}