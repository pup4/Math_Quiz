player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;

function send(){
    numb1=document.getElementById("numb1").value;
    numb2=document.getElementById("numb2").value;
    actual_answer=parseInt(numb1)*parseInt(numb2);
    console.log(actual_answer);

    question_number="<h4>"+numb1+"X"+numb2+"</h4>";
    input_box="<br>Answer: <input type='text' id=input_check_box>";
    check_button="<button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("numb1").value="";    
    document.getElementById("numb2").value="";    
}