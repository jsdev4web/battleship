import { Game, Ships, Player } from './script.js'



//Doms creation of the board visual
function gamePlay(){

    let player1 = new Player()
    let player2 = new Player()
    
    //console.log(player1)
    //console.log(player2)

    //creates my ships to be placed or ship = PLAYER1
    let hallmark = new Ships("hallmark", "ship", 5, 0)
    let terminator = new Ships("terminator", "ship", 4, 0)
    let bruiser = new Ships("bruiser", "ship", 3, 0)
    let subship = new Ships("subship", "ship", 2, 0)
    let oneway = new Ships("oneway", "ship", 1, 0)


    //creates my ships to be placed or ship = PLAYER2
    let carrier = new Ships("carrier", "ship", 5, 0)
    let battleship = new Ships("battleship", "ship", 4, 0)
    let cruiser = new Ships("cruiser", "ship", 3, 0)
    let submarine = new Ships("submarine", "ship", 2, 0)
    let destroyer = new Ships("destroyer", "ship", 1, 0)


    //Create the board
    player1.makeBoard()
    player2.makeBoard()

    //View the boards
    console.log(player1.board)
    console.log(player2.board)

    player1.placeShip(5,5, hallmark, "vertical")
    player1.placeShip(3,2, terminator, "vertical")
    player1.placeShip(7,2, bruiser, "horizontal")
    player1.placeShip(8,1, subship, "horizontal")
    player1.placeShip(1,8, oneway, "horizontal")
    let play1ships = player1.playerShips

    //console.log(play1ships)
    //console.log(player1.playerShips)

    player2.placeShip(6,5,carrier,"vertical")
    player2.placeShip(7,2,destroyer,"vertical")
    player2.placeShip(1,5,submarine,"horizontal")
    player2.placeShip(7,3,battleship,"horizontal")
    player2.placeShip(9,6,cruiser,"vertical")
    let play2ships = player2.playerShips

    //Ships that only belong to the 2nd player
    //console.log(player2.playerShips)

    //Tracking the coords of both ships Current
    console.log(player1.queue, "Ship One Coords")
    console.log(player2.queue, "Ship Two Coords")


    //creates main board holder
    let boardHold = document.createElement("div");
    boardHold.setAttribute("id", "boardHold")
    document.body.appendChild(boardHold)
    
    //Here I create the Divs to hold values
    let board1Hold = document.createElement("div")
    board1Hold.setAttribute("class", "board1Hold")
    boardHold.appendChild(board1Hold)

    let board1 = player1.board
    let board1Array = [];

    for (let i = 0; i < board1.length; i++){
        for (let j = 0; j < board1.length; j++){
            let html = ""
            html += `<div class="cells">${board1[i][j]}</div>`
            board1Array.push(html)
        }
    }
    board1Hold.innerHTML = board1Array.join("") //removes the commas


    let board2Hold = document.createElement("div")
    board2Hold.setAttribute("class", "board2Hold")
    boardHold.appendChild(board2Hold)

    let board2 = player2.board
    let board2Array = [];
    
for (let i = 0; i < board2.length; i++){
    for (let j = 0; j < board2.length; j++){
        let html = ""
        html += `<div class="cells2">${board2[i][j]}</div>`
        board2Array.push(html)
        }
    }
    board2Hold.innerHTML = board2Array.join("")

    
    //flips a 1D array to 2Dx                                                                                                                                                                                                                                       
    function flipTo2D(index, column){
        let row = Math.floor(index / column);
        column = index % column;
        return [row, column]
    }
    console.log(flipTo2D(5,10))


    //flips a 2D array to 1d
    function flipTo1D(row, column, numCols){
        return row * numCols + column;
    }
    console.log(flipTo1D(1,6,10))


//This code is here to click on the DOMS 
// I AM GOING TO CODE MY RECEIVE HITS HERE ******
let cellListener = document.querySelectorAll(".cells")
let oneDIndex;
cellListener.forEach(function(item, index){
    item.addEventListener("click", function(e){
        console.log(e.target) //logs the target to console
        console.log(`${index}`)
        oneDIndex = index;

        //1D format of the index is here
        let changeDom = e.target

        //flip to 2D test is here
        let flip2D = flipTo2D(oneDIndex, 10)
        //ROW / COLUMN
        console.log(flip2D)

        let x = flip2D[0]
        let y = flip2D[1]
        console.log(x,y) //flips to a x y format

        let matchCoords = `${x}-${y}`
        console.log(matchCoords)





        //Here I can control whose turn it is on the board
        let whoTurn = prompt("Whos turn is it")
        if(whoTurn === "1"){
            console.log(whoTurn)
            whoTurn = player1
        } else if (whoTurn === "2"){
            whoTurn = player2
        } else {
            return "Not a choice"
        }

        if(changeDom.innerHTML === " #"){
            changeDom.innerHTML = "M"
        } else if(changeDom.innerHTML === "S"){
            //Determine the coords, the ship and the player
            if(whoTurn === player1){
                player1.queue.forEach(function(item,index){
                    if(item === matchCoords){
                        console.log(item, "it is 8-4")
                        console.log("i got here")
                        let foundItem = item
                        
                        console.log(player1.playerShips)
                        play1ships.forEach(function(item, index){
                            console.log(item.coords)
                            item.coords.forEach(function(element){
                                console.log(element)// Its found
                                console.log(foundItem)
                                if(element === foundItem){
                                    console.log("found", item)
                                    item.hits()
                                    console.log(item)
                                    item.isSunk()
                                    console.log(item.sunkStatus)
                                    play1ships.forEach(function(item){
                                        console.log(item)
                                        console.log(item.sunkStatus)
                                        console.log(player1.isAllSunk())
                                    })
                                }
                            })
                            
                        })                        
                    }
                }) //ABOUT TO BREAK SHIT!!!!!
            } 
             
            changeDom.innerHTML = "H"
            player1.receiveHit(x, y)
            
        }
        //DONT DELETE, I can change a dom here
        //changeDom.innerHTML = "S"
            
        //this codes is flipping row to columnsnn 
        let values = flipTo2D(index, 10)


    })
})

let cellListener2 = document.querySelectorAll(".cells2")
cellListener2.forEach(function(item, index){
    item.addEventListener("click", function(e){
        console.log(e.target) //logs the target to console
        console.log(`${index}`)
        oneDIndex = index;

        //1D format of the index is here
        let changeDom = e.target

        //flip to 2D test is here
        let flip2D = flipTo2D(oneDIndex, 10)
        //ROW / COLUMN
        console.log(flip2D)

        let x = flip2D[0]
        let y = flip2D[1]
        //console.log(x,y) //flips to a x y format

        let matchCoords = `${x}-${y}`
        console.log(matchCoords, "clicked cords formatted")


        //Here I can control whose turn it is on the board
        let whoTurn = prompt("Whos turn is it")
        if(whoTurn === "1"){
            console.log(whoTurn)
            whoTurn = player1
        } else if (whoTurn === "2"){
            whoTurn = player2
        } else {
            return "Not a choice"
        }


        if(changeDom.innerHTML === " #"){
            changeDom.innerHTML = "M"
        } else if(changeDom.innerHTML === "S"){
            //Determine the coords, the ship and the player
            if(whoTurn === player2){
                player2.queue.forEach(function(item,index){
                    if(item === matchCoords){
                        console.log(item, "it is 1-6")
                        console.log("i got here")
                        let foundItem = item
                        
                        console.log(player2.playerShips)
                        play2ships.forEach(function(item, index){
                            //console.log(item.coords)
                            item.coords.forEach(function(element){
                                //console.log(element)// Its found
                                //console.log(foundItem)
                                if(element === foundItem){
                                    //console.log("found", item)
                                    item.hits()  //works
                                    console.log(item)
                                    item.isSunk() //works
                                    console.log(item.sunkStatus)
                                    play2ships.forEach(function(item){
                                        console.log(item)
                                        //console.log(item.sunkStatus)
                                        console.log(player2.isAllSunk())
                                    })
                                }
                            }) 
                        })                        
                    }
                }) //ABOUT TO BREAK SHIT!!!!!
            }
            changeDom.innerHTML = "H"
            player2.receiveHit(x, y)
        }
    })
})    
        
    //This makes Save Point when I made 2nd cell Listener!!!
    return "Welcome to battleship"
}

console.log(gamePlay())
