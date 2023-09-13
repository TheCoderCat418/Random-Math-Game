let diff, currentLevel, solution = 1, operator = [], currentBadges = [], badgeAward = false,over = false,failed = false

function ondone() {
    document.getElementById("awn-box").readOnly = false
    document.getElementById("correction").hidden = true
    let response = parseInt(document.getElementById("awn-box").value)

    if(badgeAward) {
        response = ""
        solution = ""
badgeAward = false

    }
    if(over){
        if (failed) {
            let url = new URL("levelselect.html", window.location.href);
            window.location.href = url.href;
        }else{
            document.getElementById("awn-box").value = ""
            document.getElementById("awn-box").readOnly = true
            document.getElementById("problem").innerHTML = "Wait! You managed to get all of them correct! Take this tree for doing so good!"
            toggleBadge(true, "treeend")
            over = true
            failed = true
        }
        return
    }
    if (solution === response) {
        document.getElementById("awn-box").value = ""
        let numbers = generateRandomNumber(diff, currentLevel)
        currentLevel++

        let sOperator = operator.at(Math.trunc(Math.random() * operator.length))
        console.log(sOperator)
        if (sOperator === "add") {
            solution = numbers[0] + numbers[1]
            document.getElementById("problem").innerHTML = "What is " + numbers[0] + " + " + numbers[1] + "?"
        } else if(sOperator === "sub") {
            if (numbers[0] > numbers[1]) {
                solution = numbers[0] - numbers[1]
                document.getElementById("problem").innerHTML = "What is " + numbers[0] + " - " + numbers[1] + "?"
            } else {
                solution = numbers[1] - numbers[0]
                document.getElementById("problem").innerHTML = "What is " + numbers[1] + " - " + numbers[0] + "?"
            }
        }else if(sOperator === "multi"){
            numbers[0] = Math.trunc(numbers[0] / 3)
            numbers[1] = Math.trunc(numbers[1] / 3)
            document.getElementById("problem").innerHTML = "What is " + numbers[0] + " x " + numbers[1] + "?"
            solution = numbers[0] * numbers[1]
        }
    }else {
    document.getElementById("correction").hidden = false
        document.getElementById("correction").innerHTML = "Oh no! The answer was " + solution + ". Try a different one! Click submit to continue."
        document.getElementById("awn-box").value = ""
        document.getElementById("awn-box").readOnly = true
        badgeAward = true
        currentLevel--
        failed = true
    }
    if (currentLevel === 4*operator.length) {
        badgeAward = true
        document.getElementById("awn-box").readOnly = true
        document.getElementById("problem").innerHTML = "Congratulations on completing "+currentLevel+" levels! You are the master of math! Keep going! Click submit to continue."
        toggleBadge(true, "5")
    }else if(currentLevel === 8*operator.length){
        badgeAward = true
        document.getElementById("awn-box").readOnly = true
        document.getElementById("problem").innerHTML = "Congratulations on completing "+currentLevel+" levels! Here is a happy bird! Click submit to continue."
        toggleBadge(true, "10bird")
    }else if(currentLevel >= 12*operator.length){
        badgeAward = true
        if(!over) {
            document.getElementById("awn-box").readOnly = true
            document.getElementById("problem").innerHTML = "Congratulations on completing " + currentLevel + " levels! Math Cat! Click submit to go back to the select screen."
            toggleBadge(true, "15cat")
            over = true
        }
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
