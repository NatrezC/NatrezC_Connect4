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
const tableColumn = document.getElementsByTagName('td')//grabs each spot within row
let mySpot = document.querySelectorAll('tr')
const player1 = "red"
const player2 = "yellow"
let noPlay = "white"
const resetButton = document.querySelector('.reset')
let redTurn = true 
let turn = document.querySelector('.turn')
const rows = ["F", "E", "D", "C", "B", "A"]
//let Connect4 = {}

let Connect4 =[
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
]
const numberToWin = 4;


//Functions/////////////////
// function handlePlacement(event) {
//     const placement = event.target
//     // const currentPlayer = yellowTurn ? player2 : player1
//     let mySpot =
    
//     console.log('clicked')
// }
function togglePlayers() {
    const player = document.getElementById('turn');
    //console.log(player)
    if (player.innerHTML === "Player 1's Turn"){
        player.innerHTML = "Player 2's Turn"
        document.getElementById('turn').style.color = "yellow"
     } else {
        player.innerHTML = "Player 1's Turn"
        document.getElementById('turn').style.color = "red"
    }
}
function playColor(placement, currentPlayer, slot, row) {
    // console.log(tableColumn,'????')
    // // let column = event.target.cellIndex;
    // // let row = [];
    // for (let i = 5; i > -1; i--) {
    //     if (tableColumn[i] === 5) {
    //         slot.classList.add(red)
    //     }
    //     placement.classList.add(currentPlayer)
    // }
    // console.log(row, "//////")
    // for (i = 5; i > -1; i--){
    //     if (tableRow[5] === noPlay) {
    //         placement.classList.add(currentPlayer)
    //     }
        //console.log(rows[i])

    //}
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
    //console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`);
    //be able to choose and change color of the different spots
    let row = event.target.parentElement.rowIndex
    //console.log(row)
    //let column = event.target.cellIndex
    let slot = (`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`)
    console.log(slot)
    let placement = event.target
    //console.log(placement)
    //console.log(slot)
    //console.log(row, "........")
    //console.log(column)
    const currentPlayer = redTurn ? player1 : player2
    playColor(placement, currentPlayer, slot, row)
    togglePlayers()
    switchTurns()
};

//Event Listeners///////////////
for (let i = 0; i < tableColumn.length; i++){
    tableColumn[i].addEventListener('click', handleClick)

}

//vars we have:
//e.target -> clicked slot
//slot -> string: row, col

// loop through the slots in the column of the clicked slot, starting at row 0
// ex:
// if clicked slot is B3 (row=2, col=3),
// check 6, 3
// check 5, 3
// check 4, 3, etc.
// when checking, IF the slot you're currently checking is full (has class of red or yellow), then check the next available slot, OTHERWISE add class of red or yellow
// <==>
// a loop through the cells from column of selected slot, from bottom to top {
//     if(curr.classList.contains('red')||curr.clasList.contains('yellow')) {
//         move on
//     } else {
//         add the appropriate class
//         break out of the loop (so that it doesn't keep adding classes to available cells)
//     }
// }






// for (let i = 0; i < tableRow.length; i++){
//     tableRow[i].addEventListener('click', (event) => {
//         console.log(`${event.target.cellIndex}`)
//     })
// }
// mySpot.forEach(placement => {
//     placement.addEventListener('click', handlePlacement, {once: true})
// })

resetButton.addEventListener('click', clickedReset)