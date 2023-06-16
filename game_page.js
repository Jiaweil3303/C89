var GJ = ["Good job lol", "GG", "killing it bro", "bro smart"];
var BJ = [":(", "lolololol", "BRU", "whats 9 + 10?"];
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

	
	setTimeout(function() {
		document.getElementById("player1_name").innerHTML = player1_name + " : ";
		document.getElementById("player2_name").innerHTML = player2_name + " : ";
		document.getElementById("player1_score").innerHTML = player1_score ;
		document.getElementById("player2_score").innerHTML = player2_score ;
		document.getElementById("player1_score").innerHTML = player1_score ;
		document.getElementById("player2_score").innerHTML = player2_score ;
		document.getElementById("player_question").innerHTML = "Q Turn - " + player1_name ;
		document.getElementById("player_answer").innerHTML = "A Turn - " + player2_name ;
	  }, 200);


function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
	document.getElementById("BB").style.visibility = "hidden";
}


var question_turn = "player1";
var answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;

			question_turn = "player1";
			answer_turn = "player2";
			document.getElementById("player_question").innerHTML = "Q Turn - " + player1_name ;
			document.getElementById("player_answer").innerHTML = "A Turn - " + player2_name ;


		}
		else
		{
			player2_score = player2_score +1;
			question_turn = "player2";
			answer_turn = "player1";
			document.getElementById("player_question").innerHTML = "Q Turn - " + player2_name ;
			document.getElementById("player_answer").innerHTML = "A Turn - " + player1_name ;
		}
    	
		document.getElementById("output").innerHTML = "<h4>" + GJ[Math.floor(Math.random() * 4) + 0] + "</h4>";
	}
	else{
		document.getElementById("output").innerHTML = "<h4>" + BJ[Math.floor(Math.random() * 4) + 0] + "</h4>";
	}
	document.getElementById("player2_score").innerHTML = player2_score;
	document.getElementById("player1_score").innerHTML = player1_score;
	
	setTimeout(function() {
		document.getElementById("output").innerHTML = "";
		document.getElementById("BB").style.visibility = "visible";
	  }, 3000);
    
	
}

function HOME(){
	window.location = "index1.html";
}