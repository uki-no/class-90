score=0
function Update_score()
{
    score=score+1
    document.getElementById("score").innerHTML="score="+score
}

function Save_score(){
    localStorage.setItem("score",score)
}

function Next_pg(){
    window.location= "activity_2.html"
}