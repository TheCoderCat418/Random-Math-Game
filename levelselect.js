let diffMode, operators = []
function colorDarken(levelColor, id){
    document.getElementById(id).style.backgroundColor = levelColor;
}
function goToLevel(diff){
    diffMode = diff
    document.getElementById("diff").hidden = true
    document.getElementById("opp").hidden = false
}
function setOp(id){
    if(operators.find((x) => x === id)){
        operators.splice(operators.findIndex((x) => x === id), 1)
    }else {
        operators.push(id)
    }
    console.log(operators)
}
function gotogame(){
    let url = new URL("game.html", window.location.href);
    url.searchParams.set("diff", diffMode);
    url.searchParams.set("equations", JSON.stringify(operators))
    window.location.href = url.href;
}
