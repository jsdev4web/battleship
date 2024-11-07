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
    //let htmlTest = ""
    //htmlTest += "I am some text for the noard div"

    let board1Hold = document.createElement("div")
    board1Hold.setAttribute("id", "board1Hold")
    boardHold.appendChild(board1Hold)
    let board1Html = ""
    board1Html += player1.makeBoard()
    board1Hold.innerText = board1Html


    let board2Hold = document.createElement("div")
    board2Hold.setAttribute("id", "board2Hold")
    boardHold.appendChild(board2Hold)
    let board2Html = ""
    board2Html += player2.makeBoard()
    board2Hold.innerText = board2Html




    return "Hello World"
}


console.log(gamePlay())