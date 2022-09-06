function Back(){
    window.location="activity_1.html"
}

function Get_score(){
var score= localStorage.getItem("score")
document.getElementById("update").innerHTML="<h1>score:"+ score+"</h1>"
}