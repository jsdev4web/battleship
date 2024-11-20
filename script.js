
export class Ships {
    constructor(name, type, length, points){
        this.name = name;
        this.type = type;
        this.length = length;
        this.points = points;
        this.coords = [];
        this.sunkStatus = false
    }

    hits(){
        this.points ++;
        return "Your ship took a hit"
    }

    isSunk(){
        if (this.length === this.points){
            this.sunkStatus = true
            return `${this.name} has been sunk`
        }
    }
}

//mock to start the game play
export class Game {
    constructor(){
        this.board = this.makeBoard()
        //this.queue = []
        this.missed = []
        this.allAttempts = []
    }

    clicked(){
        return "This has been clicked"
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

                let testDiv = document.createElement("div")
                testDiv.innerText = " #";
                arr[i][j] = testDiv.innerHTML
            }
        }
        return arr
    }



    placeShip(x, y, ship, direction){
        //what i searched -- place a vertical object on a 2D array javascript
        let array = this.board
        //console.log(array)
        let length = array.length
        //console.log(length)

        if(x < 0 || x >= length || y < 0 || y >= length){
            return "Out of bounds"
        }

        let len = ship.length

        //Here i push a obj list of ships each player
        this.playerShips.push(ship)
        
        x = x-1
        y = y-1

        //add a if statement to stop off the board
        if(direction === "horizontal"){
            for(let i = 0; i < len; i++){
                let offBoard = x + i
                if(offBoard >= 10){
                    array[y][x-i] = "S"
                } else {
                array[y][x+i] = "S";
                this.queue.push(`${y}-${x+i}`)
                ship.coords.push(`${y}-${x+i}`)
                }
            }
        }else if (direction === "vertical"){
            for(let i = 0; i < len; i++){
                let offBoard = y+1
                if(offBoard >= 10){
                    array[y-i][x] = "S"
                } else {
                array[y+i][x] = "S";
                this.queue.push(`${y+i}-${x}`)
                ship.coords.push(`${y+i}-${x}`)
                }
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
        let shipHolder = []

        for(let i = 0; i < shipHolder.length; i++){//5 times
            shipHolder[i].coords.forEach(function(item,index){
                if (item === hit){
                    shipHolder[i].hits()
                    isMissed = true
                    shipHolder[i].isSunk()
                    console.log(shipHolder)
                    
                }
            })
        } //the end of the for loop is HERE!!!
        if(isMissed === false){
            this.missed.push(hit)
            //console.log(play.missed)
        }
        return isMissed
    }
}

export class Player extends Game {
    constructor(){
        super()
        this.queue = [] // Only tracks coords not object
        this.playerShips = []
        this.allAttempts = []
    }

    isAllSunk(){
        let checker = this.playerShips
        let counter = 0;
        let stat = 0
        checker.forEach(function(item){
            
            console.log(item.sunkStatus)
            if(item.sunkStatus === false){
                stat ++
            }
        })
        console.log(stat)
        if(stat === 0){
            console.log("game over")
            window.location.reload()
        }
        return counter
    }
}

