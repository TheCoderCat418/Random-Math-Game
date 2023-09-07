let diff, currentLevel, solution = 1
function ondone(){
    if(solution === parseInt(document.getElementById("awn-box").value)){
        let numbers = generateRandomNumber(diff,currentLevel)
        currentLevel++
        document.getElementById("problem").innerHTML = "What is " + numbers[0] + " + " +numbers[1]+"?"
        solution = numbers[0]+numbers[1]
    }


}
function init(){
    let url = new URL(window.location.href);
    let param = url.searchParams;
    document.getElementById("equation-types").innerHTML = param.get("equations");
    diff = param.get("diff")
    currentLevel = 1


}

function generateRandomNumber(diff, level){
    //if(diff === "easy"){
    return {0: Math.trunc(Math.random() * level * 3), 1: Math.trunc(Math.random() * level * 3)};
    //}
}