//obj is for one of the players to get 4 in a row, column or diagonal.
//create 2 players 1 red 1 yellow
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
const tableRow = document.getElementsByTagName('tr') //grabs each row
const tableData = document.getElementsByClassName('placement')//grabs each spot within row
let mySpot = document.querySelectorAll('[data-cell]')
const player1 = "red"
const player2 = "yellow"
const resetButton = document.querySelector('.reset')
let redTurn = true 
let turn = document.querySelector('.turn')




//Functions/////////////////
// function handlePlacement(event) {
//     const placement = event.target
//     // const currentPlayer = yellowTurn ? player2 : player1
//     let mySpot =
    
//     console.log('clicked')
// }
function togglePlayers() {
    const player = document.getElementById('turn');
    console.log(player)
    if (player.innerHTML === "Player 1's Turn"){
        player.innerHTML = "Player 2's Turn"
        document.getElementById('turn').style.color = "yellow"
     } else {
        player.innerHTML = "Player 1's Turn"
        document.getElementById('turn').style.color = "red"
    }
}

function playColor(placement, currentPlayer) {
    let column = event.target.cellIndex;
    let row = [];
    for (let i = 5; i > -1; i--) {
        placement.classList.add(currentPlayer)
    }
}

function switchTurns() {
    redTurn = !redTurn
}

function clickedReset() {
    startGame()
}

function startGame() {
    reload = location.reload()
}

function handleClick(event) {
    //console.log the row and the column of the spot that you clicked
    console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`);
    //be able to choose and change color of the different spots
    let row = event.target.parentElement.rowIndex
    console.log(row)
    //let column = event.target.cellIndex
    //let placement = (`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`)
    let placement = event.target
    console.log(placement)
    //console.log(slot)
    //console.log(row)
    //console.log(column)
    const currentPlayer = redTurn ? player1 : player2
    playColor(placement, currentPlayer)
    togglePlayers()
    switchTurns()
};

//Event Listeners///////////////
for (let i = 0; i < tableData.length; i++){
    tableData[i].addEventListener('click', handleClick)

}




// for (let i = 0; i < tableRow.length; i++){
//     tableRow[i].addEventListener('click', (event) => {
//         console.log(`${event.target.cellIndex}`)
//     })
// }
// mySpot.forEach(placement => {
//     placement.addEventListener('click', handlePlacement, {once: true})
// })

resetButton.addEventListener('click', clickedReset)