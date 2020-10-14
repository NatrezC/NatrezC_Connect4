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
const allSlots = document.querySelectorAll('.placement')
const tableRow = document.getElementsByTagName('tr') //grabs each row
const tableColumn = document.getElementsByTagName('td')//grabs each spot within row
let mySpot = document.querySelectorAll('tr')

let playConnect4 = true;
const player1 = "red"
const player2 = "yellow"
let noPlay = "white"
const resetButton = document.querySelector('.reset')
let redTurn = true 
let turn = document.querySelector('.turn')

// columns ///////////grabs all placement in each column starting from the bottom hopefully to go bottom up
const column0 = [allSlots[35], allSlots[28], allSlots[21], allSlots[14], allSlots[7], allSlots[0]];
const column1 = [allSlots[36], allSlots[29], allSlots[22], allSlots[15], allSlots[8], allSlots[1]];
const column2 = [allSlots[37], allSlots[30], allSlots[23], allSlots[16], allSlots[9], allSlots[2]];
const column3 = [allSlots[38], allSlots[31], allSlots[24], allSlots[17], allSlots[10], allSlots[3]];
const column4 = [allSlots[39], allSlots[32], allSlots[25], allSlots[18], allSlots[11], allSlots[4]];
const column5 = [allSlots[40], allSlots[33], allSlots[26], allSlots[19], allSlots[12], allSlots[5]];
const column6 = [allSlots[41], allSlots[34], allSlots[27], allSlots[20], allSlots[13], allSlots[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];
//console.log(column0)

// rows ////////grabs all placement in each row
const row0 = [allSlots[0], allSlots[1], allSlots[2], allSlots[3], allSlots[4], allSlots[5], allSlots[6]];
const row1 = [allSlots[7], allSlots[8], allSlots[9], allSlots[10], allSlots[11], allSlots[12], allSlots[13]];
const row2 = [allSlots[14], allSlots[15], allSlots[16], allSlots[17], allSlots[18], allSlots[19], allSlots[20]];
const row3 = [allSlots[21], allSlots[22], allSlots[23], allSlots[24], allSlots[25], allSlots[26], allSlots[27]];
const row4 = [allSlots[28], allSlots[29], allSlots[30], allSlots[31], allSlots[32], allSlots[33], allSlots[34]];
const row5 = [allSlots[35], allSlots[36], allSlots[37], allSlots[38], allSlots[39], allSlots[40], allSlots[41]];
const rows = [row0, row1, row2, row3, row4, row5];
//console.log(row0)


//Functions
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


function changeClasstoArray(placement) {
    //tells you which class you are using
    const classList = placement.classList;
    return [...classList]
    //console.log(classList)
    console.log("placement:", [...classList])
}
function findPlacementLocation(placement) {
    const classList = changeClasstoArray(placement);
    const rowClass = classList.find(className => className.includes('row'))
    const colClass = classList.find(className => className.includes('col'))
    //get just the numbers 
    const rowIndex = rowClass[4]
    const colIndex = colClass[4]
    //change to numbers(integers) instead of string
    // const rowNumber = parseInt(rowIndex, 6)
    // const colNumber = parseInt(colIndex, 7)
    return [parseInt(rowIndex, 6), parseInt(colIndex, 7)];
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
function nextSlot(colIndex) {
    //goes through the columns array and gets the colIndex
    const column = columns[colIndex]; 
    for (const placement of column) {
        const classList = changeClasstoArray(placement)
        //check to see if classlist has red or yellow class
        //if it does place next color on top of it
        if (!classList.includes('red') && !classList.includes('yellow')) {
            return placement
        }
    }
    //alert if filled that their is no more slots available
    return alert('No more slots')
}
/////////////////////////////////////////////////////////////////////////////////////////
function colorOfWinner(placement) {
    const classList = changeClasstoArray(placement)
    //if yellow turn, return yellow
    if (classList.includes('yellow')) return 'yellow';
    //if red turn, return red
    if (classList.includes('red')) return 'red';
    // if neither return nothing
    return null;
}

function checkWhoWon(placement) {
    //console.log('winner')
    const color = colorOfWinner(placement)
    const [rowIndex, colIndex]=findPlacementLocation(placement);
    console.log(color)

    //horizontal winner
    let winningPlace = [placement];
    //
    let rowCheck = rowIndex;
    let colCheck = colIndex-1;
    console.log(colIndex)
    console.log(rowCheck,'rowCheck')
    console.log(colCheck, "colCheck")
    //checks the farthest left column
    while(colCheck >= 0) {
        //placement associated with the row and column
        const placeCheck = rows[rowCheck][colCheck];
        console.log(placeCheck,'555')
        //check if color matches players turn
        if (colorOfWinner(placeCheck)===color){
            winningPlace.push(placeCheck);
            colCheck--;
        }else {
            //break while loop if color changes or empty slot
            break;
        }
    }
    //check right side of column
    colCheck = colIndex + 1;
  while (colCheck <= 6) {
    const placeCheck = rows[rowCheck][colCheck];
    if (colorOfWinner(placeCheck) === color) {
      winningPlace.push(placeCheck);
      colCheck++;
    } else {
        break;
    }
  }
  let isWinningCombo = winnerWinner(winningPlace);
  if (isWinningCombo) return;

  //vertical win
  winningPlace =[placement]
  rowCheck = rowIndex - 1
  colCheck = colIndex
  console.log(rowCheck,'vert')
  while (rowCheck >= 0){
      const placeCheck = rows[rowCheck][colCheck]
      if(colorOfWinner(placeCheck) === color){
          winningPlace.push(placeCheck)
          rowCheck--;
      } else{
          break;
      }
  }
  rowCheck = rowIndex + 1;
  while (rowCheck <= 5) {
    const cellCheck = rows[rowCheck][colCheck];
    if (colorOfWinner(placeCheck) === color) {
      winningCells.push(placeCheck);
      rowCheck++;
    } else {
        break;
    }
  }
  isWinningCombo = winnerWinner(winningPlace);
  if (isWinningCombo) return; 
}

function winnerWinner(placements) {
    //let winnerPlacement = [placement]
    //if winner get connect 4
    if (placements.length < 4) return;
    playConnect4 = false;
    for(const placement of placements) {
        console.log('You won')
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
function handleClick(event) {
    if(!playConnect4) return;
    let placement = event.target
    const [rowIndex, colIndex] = findPlacementLocation(placement)
    const openSlot = nextSlot(colIndex)
    //return nothing if no open slot
    if (!openSlot) return;
    //check who's turn and place your color
    openSlot.classList.add(redTurn ? "red": 'yellow')
    togglePlayers()
    switchTurns()
    checkWhoWon(openSlot)
    console.log(openSlot,'ddd')
};

//Event Listeners///////////////
// for (let i = 0; i < tableColumn.length; i++){
    //     tableColumn[i].addEventListener('click', handleClick)
    // }
    
    for (const row of rows) {
        for (const placement of row) {
            placement.addEventListener('click', handleClick)
        }
    }
    
    resetButton.addEventListener('click', clickedReset)
    
    
    
    
    
    
    
    
    /////////////TRASH//////////////////////////////
    //Functions/////////////////
    // function handlePlacement(event) {
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
                                //     const placement = event.target
                                //     // const currentPlayer = yellowTurn ? player2 : player1
                                //     let mySpot =
                                
                                //     console.log('clicked')
                                // }
                                //let Connect4 = {}
                                
                                // let Connect4 =[
                                    //         [0, 0, 0, 0, 0, 0, 0],
                                    //         [0, 0, 0, 0, 0, 0, 0],
                                    //         [0, 0, 0, 0, 0, 0, 0],
                                    //         [0, 0, 0, 0, 0, 0, 0],
                                    //         [0, 0, 0, 0, 0, 0, 0],
                                    //         [0, 0, 0, 0, 0, 0, 0]
                                    // ]
                                    // const numberToWin = 4;
                                    
                                    //console.log the row and the column of the spot that you clicked
                                    //console.log(`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`);
                                    //be able to choose and change color of the different spots
                                    //let row = event.target.parentElement.rowIndex
                                    //console.log(row)
                                    //let column = event.target.cellIndex
                                    // let slot = (`${event.target.parentElement.rowIndex}, ${event.target.cellIndex}`)
                                    // console.log(slot)
                                    //console.log(placement)
                                    //console.log(slot)
                                    //console.log(row, "........")
                                    //console.log(column)
                                    //const currentPlayer = redTurn ? player1 : player2
                                    //playColor(placement, currentPlayer, slot, row)
                                    // function playColor(placement, currentPlayer, slot, row) {
                                        //     // console.log(tableColumn,'????')
                                        //     // // let column = event.target.cellIndex;
                                        //     // // let row = [];
                                        //     // for (let i = 5; i > -1; i--) {
                                            //         //     if (tableColumn[i] === 5) {
                                                //             //         slot.classList.add(red)
                                                //             //     }
                                                //             //     placement.classList.add(currentPlayer)
                                                //             // }
                                                //             // console.log(row, "//////")
                                                //             // for (i = 5; i > -1; i--){
                                                    //                 //     if (tableRow[5] === noPlay) {
                                                        //                     //         placement.classList.add(currentPlayer)
                                                        //                     //     }
                                                        //                     //console.log(rows[i])
                                                        
                                                        //                     //}
                                                        
                                                        
                                                        //placement.addEventListener('mouseover', handleHoverMethod)
                                                        // function handleHoverMethod(event) {
                                                            //     const placement = event.target
                                                            //     const output=findPlacementLocation(placement)
                                                            //     console.log(output)
                                                            // }
                                                            //const rows = ["F", "E", "D", "C", "A"]