//obj is for one of the players to get 4 in a row, column or diagonal.
//create 2 players 1 fed 1 yellow
//player has to choose a column to play
//alternate turns
/*cant choose the same placement that has already been used,
but instead places his/her piece on top of the previous piece.*/
//allow the reset button to be active

/*add another row at the top and hide it to blend 
in with background only change when you pick where
want to place your piece*/

/*or when you hover over a div it changes into the color 
of whoever turn it is until it's selected.*/

//get lucky enough to have time to create a cpu


//Variables/////////////////
let mySpot = document.querySelectorAll('[data-cell]')
const player1 = "red"
const player2 = "yellow"
const reset = document.querySelector('.reset')
let yellowTurn




//Functions/////////////////
function handlePlacement(event) {
    const placement = event.target
    const currentClass = yellowTurn ? player2 : player1
    console.log('clicked')
}

function clickedReset(event) {
    startGame()
}

function startGame() {
    reload = location.reload()
}

//Event Listeners///////////////
mySpot.forEach(placement => {
    placement.addEventListener('click', handlePlacement, {once: true})
})

reset.addEventListener('clicked', clickedReset)