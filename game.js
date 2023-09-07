let diff, currentLevel, solution = 1, operator = []
function ondone(){
    if(solution === parseInt(document.getElementById("awn-box").value)){
        document.getElementById("awn-box").value = ""
        let numbers = generateRandomNumber(diff,currentLevel)
        currentLevel++
        document.getElementById("problem").innerHTML = "What is " + numbers[0] + " + " +numbers[1]+"?"
        solution = numbers[0]+numbers[1]
    }


}
function init(){
    let url = new URL(window.location.href);
    let param = url.searchParams;
    operator = param.get("equations")
     if(operator.indexOf("sub")){
         document.getElementById("equation-types").innerHTML = "Subtraction!"
     }else if(operator.indexOf("add")) {
         document.getElementById("equation-types").innerHTML = "Addition!"
     }

    diff = param.get("diff")
    currentLevel = 1
    document.getElementById("awn-box").value = "1"
    ondone()
    document.getElementById("awn-box").value = ""

}

function generateRandomNumber(diff){
    if(diff === "easy"){
        return [Math.round(Math.random() * 10 + 1), Math.trunc(Math.random() * 10 + 1)];
    }else if(diff === "medium"){
        return [Math.round(Math.random() * 100 + 1), Math.trunc(Math.random() * 100 + 1)];
    }
}