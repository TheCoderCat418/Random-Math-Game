let diff, currentLevel, solution = 1, operator = [], currentBadges = []

function ondone() {
    if (solution === parseInt(document.getElementById("awn-box").value)) {
        document.getElementById("awn-box").value = ""
        let numbers = generateRandomNumber(diff, currentLevel)
        currentLevel++

        let sOperator = operator.at(Math.trunc(Math.random() * operator.length))
        console.log(sOperator)
        if (sOperator === "add") {
            solution = numbers[0] + numbers[1]
            document.getElementById("problem").innerHTML = "What is " + numbers[0] + " + " + numbers[1] + "?"
        } else {
            if (numbers[0] > numbers[1]) {
                solution = numbers[0] - numbers[1]
                document.getElementById("problem").innerHTML = "What is " + numbers[0] + " - " + numbers[1] + "?"
            } else {
                solution = numbers[1] - numbers[0]
                document.getElementById("problem").innerHTML = "What is " + numbers[1] + " - " + numbers[0] + "?"
            }
        }
    }
    if (currentLevel === 5) {
        solution = 0
        document.getElementById("problem").innerHTML = "Congratulations on completing 5 levels!"
        toggleBadge(true, "5")
    }else if(currentLevel === 15){
        document.getElementById("problem").innerHTML = "Congratulations on completing 15 levels!"
        toggleBadge(true, "15cat")
    }


}

function hideAllBadges() {
    currentBadges.forEach(function (name) {
        document.getElementById(name).hidden = true
    })
}

function toggleBadge(visi, badgeName) {
    document.getElementById(badgeName).hidden = !visi

}

function init() {
    let url = new URL(window.location.href);
    let param = url.searchParams;
    document.getElementById("equation-types").innerHTML = ""
    operator = JSON.parse(param.get("equations"))
    hideAllBadges()
    operator.forEach(function (value) {
        document.getElementById("equation-types").innerHTML = document.getElementById("equation-types").innerHTML + value + ", "

    })


    diff = param.get("diff")
    currentLevel = -1
    document.getElementById("awn-box").value = "1"
    ondone()
    document.getElementById("awn-box").value = ""

}

function generateRandomNumber(diff) {

    if (diff === "easy") {
        let num1 = Math.round(Math.random() * 10 * currentLevel/4 + 1)
        if (num1 < 0) {
            num1 = 1
        }
        let num2 = Math.round(Math.random() * 10 * currentLevel/4 + 1)
        if (num2 < 0) {
            num2 = 1
        }
        return [num1, num2];
    } else if (diff === "medium") {
        return [Math.round(Math.random() * 100 + 1), Math.trunc(Math.random() * 100 + 1)];
    }
}