
export class Ships {
    constructor(name, type, length, points){
        this.name = name;
        this.type = type;
        this.length = length;
        this.points = points;
        this.coords = [];
    }

    hits(){
        this.points ++;
        return "Your ship took a hit"
    }

    isSunk(){
        if (this.length === this.points){
            return `${this.name} has been sunk`
        }
    }
}


//mock to start the game play
export class Game {
    constructor(){
        this.board = this.makeBoard()
        this.queue = []
        this.missed = []
    }

    makeBoard(){
        let boardPrint = ""
        let size = 10;
        let ezis = 10;
        let arr = []
        let linebreak = "\n"
        for(let i = 0; i < size; i++){  //rows
            arr[i] = [] //this creates all of my rows
            for (let j = 0; j < ezis; j++){ //columns

                //My NEW CODE IS HERE
                let testDiv = document.createElement("div")
                testDiv.innerText = " #";
                //console.log(testDiv)

                //arr[i][j] =  " #"; // back to square 1
                //this code gives me a div LOOK!!!!
                //arr[i][j] = testDiv.outerHTML
                arr[i][j] = testDiv.innerHTML
            }
        }
        return arr
    }

    //does not work in progress
    placeShip(x, y, ship, direction){
        //what i searched -- place a vertical object on a 2D array javascript
        let array = this.board
        //console.log(array)
        let length = array.length
        //console.log(length)

        if(x < 0 || x >= array.length || y < 0 || y >= array.length){
            return "Out of bounds"
        }

        let len = ship.length

        
        x = x-1
        y = y-1
        let queue = []
        if(direction === "horizontal"){
            for(let i = 0; i < len; i++){
                array[y][x+i] = "S";
                this.queue.push(`${y}-${x+i}`)
                ship.coords.push(`${y}-${x+i}`)
            }
        }else if (direction === "vertical"){
            for(let i = 0; i < len; i++){
                array[y+i][x] = "S";
                //pushes to the main queue
                this.queue.push(`${y+i}-${x}`)
                //pushes to each ships tracks coords property
                ship.coords.push(`${y+i}-${x}`)
            }
        }
        return array
    }

    receiveHit(x, y){
        let hit = `${x}-${y}`;
        //console.log(hit, "item I am calling")
        let queue = this.queue
        let answer = ""
        let isMissed = false

        for(let i = 0; i < shipHolder.length; i++){//5 times
            shipHolder[i].coords.forEach(function(item,index){
                if (item === hit){
                    shipHolder[i].hits()
                    isMissed = true
                    shipHolder[i].isSunk()
                } 
                
            })
        } //the end of the for loop is HERE!!!
        if(isMissed === false){
            play.missed.push(hit)
            //console.log(play.missed)
        }
        return isMissed
    }
}

//mock to start player class
export class Player extends Game {
    constructor(player1,player2){
        super()
        this.player1 = player1;
        this.player2 = player2;
    }
}

//iniates the Game 
let play = new Game()

let shipHolder = []
let carrier = new Ships("carrier", "ship", 5, 0)
let battleship = new Ships("battleship", "ship", 4, 0)
let cruiser = new Ships("cruiser", "ship", 3, 0)
let submarine = new Ships("submarine", "ship", 2, 0)
let destroyer = new Ships("destroyer", "ship", 1, 0)
shipHolder.push(carrier, battleship,cruiser,submarine, destroyer)
//console.log(shipHolder)

//logs the graph with the location of ship mentioned as "S"
play.placeShip(5,5,carrier,"vertical")
play.placeShip(2,2,destroyer,"vertical")
play.placeShip(7,5,submarine,"horizontal")
play.placeShip(6,2,battleship,"horizontal")
console.log(play.placeShip(3,6,cruiser,"vertical"))

//console.log(carrier.coords)
play.receiveHit(1,1)


