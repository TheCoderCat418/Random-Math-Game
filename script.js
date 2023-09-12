function enlarge(enlarge){
    if(enlarge) {
        document.getElementById("start-btn").style.fontSize = "150px";
        document.getElementById("start-btn").style.marginTop = "25px";
        document.getElementById("start-btn").style.backgroundColor = "darkgreen";
    }else {
        document.getElementById("start-btn").style.fontSize = "100px";
        document.getElementById("start-btn").style.marginTop = "75px";
        document.getElementById("start-btn").style.backgroundColor = "green";
    }
}
function start(){
    window.location.href = "levelselect.html";

}

