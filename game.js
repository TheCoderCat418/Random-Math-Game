let diff, currentLevel, solution = 1, operator = [], currentBadges = []
function ondone(){
    if(solution === parseInt(document.getElementById("awn-box").value)){
        document.getElementById("awn-box").value = ""
        let numbers = generateRandomNumber(diff,currentLevel)
        currentLevel++

        let sOperator = operator.at(Math.trunc(Math.random() * operator.length))
        console.log(sOperator)
        if(sOperator === "add"){
            solution = numbers[0]+numbers[1]
            document.getElementById("problem").innerHTML = "What is " + numbers[0] + " + " +numbers[1]+"?"
        }else {
            if (numbers[0] > numbers[1]) {
                solution = numbers[0] - numbers[1]
                document.getElementById("problem").innerHTML = "What is " + numbers[0] + " - " + numbers[1] + "?"
            } else {
                solution = numbers[1] - numbers[0]
                document.getElementById("problem").innerHTML = "What is " + numbers[1] + " - " + numbers[0] + "?"
            }
        }
    }
    if(currentLevel === 5){
        toggleGameScreen(false)
        toggleBadge(true, "add5")
    }


}
function hideAllBadges(){
    currentBadges.forEach(function (name){
        document.getElementById(name).hidden = true
    })
}
function toggleBadge(visi, badgeName){
    hideAllBadges()
    document.getElementById("badges").hidden = !visi
    document.getElementById(badgeName).hidden = !visi
}
function toggleGameScreen(visi){
    document.getElementById("game").hidden = !visi
}
function keepgoing(){
    toggleGameScreen(true)
    document.getElementById("badges").hidden = true
    hideAllBadges()
}
function goback(){
    let url = new URL("levelselect.html", window.location.href);
    window.location.href = url.href;
}
function init(){
    let url = new URL(window.location.href);
    let param = url.searchParams;
    document.getElementById("equation-types").innerHTML = ""
    operator = JSON.parse(param.get("equations"))
    operator.forEach(function (value){
        document.getElementById("equation-types").innerHTML = document.getElementById("equation-types").innerHTML + value + ", "
    })


    diff = param.get("diff")
    currentLevel = -1
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