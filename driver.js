import { Game, Ships, Player } from './script.js'

let game = new Game()
let ship = new Ships()

let player1 = new Player()
let player2 = new Player()

console.log(player1.makeBoard())
console.log(player2.makeBoard())

function gamePlay(){
    let boardHold = document.createElement("div");
    boardHold.setAttribute("id", "boardHold")
    document.body.appendChild(boardHold)
    
    //Here I create the Divs to hold values
    let board1Hold = document.createElement("div")

    //Here I give it a class attribute
    board1Hold.setAttribute("class", "board1Hold")

    //Here I add it to the double board holder
    boardHold.appendChild(board1Hold)


    let tesTer = player1.makeBoard()
    console.log("THIS IS MY CUT POINT")
    console.log(board1Hold)
    let testBoard = [];
    for (let i = 0; i < tesTer.length; i++){
        //console.log(tesTer[i])
        for (let j = 0; j < tesTer.length; j++){

            //console.log(tesTer[i][j]) // logs the # sign
            //let mydiv = document.createElement("div")
            //mydiv.setAttribute("class", "tesTer")
            let html = ""
            html += `<div class="cells">${tesTer[i][j]}</div>`
            //html += `${tesTer[i][j]}`
            testBoard.push(html)
            console.log(html)
        }
    }
    
board1Hold.innerHTML = testBoard


    //!@#$ HERE it becomes a string BADDDD!!!
    //let board1Html = ``  //#1

   // let boardPlay1 = player1.makeBoard()

    //board1Html += player1.makeBoard()
    //board1Html += `#${boardPlay1}` //#2 Again
    //board1Hold.innerText = board1Html //#3 Again


    let board2Hold = document.createElement("div")
    board2Hold.setAttribute("class", "board2Hold")
    boardHold.appendChild(board2Hold)

    let tesTer2 = player2.makeBoard()
    let testBoard2 = [];
    

for (let i = 0; i < tesTer2.length; i++){
    for (let j = 0; j < tesTer2.length; j++){
        let html = ""
        html += `<div class="cells">${tesTer2[i][j]}</div>`
        //html += `${tesTer[i][j]}`
        testBoard2.push(html)
        console.log(html)
        }
    }
    board2Hold.innerHTML = testBoard2



let cellListener = document.querySelectorAll(".cells")
console.log(cellListener)
cellListener.forEach(function(item){
    item.addEventListener("click", function(e){
        console.log(e.target)
        /*This works
        if(e.target){
            e.target.innerHTML = "I"
        }*/
        
    })
})

    
    //board2Html += player2.makeBoard()
    //board2Hold.innerText = board2Html    

    //I need to make each cell a div so it can be clicked

    //return board1Hold
    return "Hello World"
}

console.log(gamePlay())