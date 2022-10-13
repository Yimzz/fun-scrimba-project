let homeStartingPoint = 0
let guestStartingPoint = 0
function homeOnePoint(){
    newPoint = homeStartingPoint += 1
    document.getElementById("home-score-board").innerHTML = newPoint
}

function awayOnePoint(){
    newPoint = guestStartingPoint += 1
    document.getElementById("guest-score-board").innerHTML = newPoint
}

function homeTwoPoints(){
    newPoint = homeStartingPoint += 2
    document.getElementById("home-score-board").innerHTML = newPoint
}

function awayTwoPoints(){
    newPoint = guestStartingPoint += 2
    document.getElementById("guest-score-board").innerHTML = newPoint
}

function homeThreePoints(){
    newPoint = homeStartingPoint += 3
    document.getElementById("home-score-board").innerHTML = newPoint
}

function awayThreePoints(){
    newPoint = guestStartingPoint += 3
    document.getElementById("guest-score-board").innerHTML = newPoint
}

function reset(){
    homeStartingPoint = 0
    guestStartingPoint = 0
    document.getElementById("home-score-board").innerHTML = 0
    document.getElementById("guest-score-board").innerHTML = 0
}
