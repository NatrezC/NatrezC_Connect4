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
let mySpot = document.querySelectorAll('.placement')
const player1 = "red"
const player2 = "yellow"
let reset = document.querySelector('.reset')



//Functions/////////////////
function handlePlacement(event) {
    let placement = event.target
}



//Event Listeners/////////////////

document.addEventListener('DOMContentLoaded', () => {
    handlePlacement()
})