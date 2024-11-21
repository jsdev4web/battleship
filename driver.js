import { Game, Ships, Player } from './script.js'

function gamePlay(){

    let player1 = new Player()
    let player2 = new Player()

    let cpu = new Player()
    let cpuPlayer = new Player()
    
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


    //creates my ships to be placed or ship = CPU
    let chaser = new Ships("chaser", "ship", 5, 0)
    let seeker = new Ships("seeker", "ship", 4, 0)
    let longride = new Ships("longride", "ship", 3, 0)
    let underwater = new Ships("underwater", "ship", 2, 0)
    let toofast = new Ships("toofast", "ship", 1, 0)

    //creates my ships to be placed or ship = CPU
    let nightwatch = new Ships("nightwatch", "ship", 5, 0)
    let allday = new Ships("allday", "ship", 4, 0)
    let sleepy = new Ships("sleepy", "ship", 3, 0)
    let Mary = new Ships("Mary", "ship", 2, 0)
    let armor = new Ships("armor", "ship", 1, 0)

    //Create the board
    player1.makeBoard()
    player2.makeBoard()

    cpu.makeBoard()
    cpuPlayer.makeBoard()

    //View the boards
    //console.log(player1.board)
    //console.log(player2.board)
    //console.log(cpu.board, "belongs to cpu")
    //console.log(cpuPlayer)

    
    //BETTER SOLUTION !!!!!!!!!!! Random generator 0-9
    let [aX, aY, bX, bY, cX, cY, dX, dY, eX, eY] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
    let [fX, fY, gX, gY, hX, hY, iX, iY, jX, jY] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))

    //Give me a random vertical or horizontal mapping
    let randomDir = ()=> {
        let num = Math.floor(Math.random() * 2)
        //console.log(num)
        if(num === 0){
            return "vertical"
        } else if( num === 1){
            return "horizontal"
        }
    }
    
    player1.placeShip(aX,aY, hallmark, randomDir())
    player1.placeShip(bX,bY, terminator, randomDir())
    player1.placeShip(cX,cY, bruiser, randomDir())
    player1.placeShip(dX,dY, subship, randomDir())
    player1.placeShip(eX,eY, oneway, randomDir())

    //Leaving the OLD WAY to test if needed 
    //player1.placeShip(5,5, hallmark, "vertical")
    //player1.placeShip(3,2, terminator, "vertical")
    //player1.placeShip(7,2, bruiser, "horizontal")
    //player1.placeShip(8,1, subship, "horizontal")
    //player1.placeShip(1,8, oneway, "horizontal")
    let play1ships = player1.playerShips
    //console.log(play1ships)

    player2.placeShip(fX,fY, carrier, randomDir())
    player2.placeShip(gX,gY, destroyer, randomDir())
    player2.placeShip(hX,hY, submarine, randomDir())
    player2.placeShip(iX,iY, battleship, randomDir())
    player2.placeShip(jX,jY, cruiser, randomDir())

    //Leave the old way to place for now 
    //player2.placeShip(6,5,carrier,"vertical")
    //player2.placeShip(7,2,destroyer,"vertical")
    //player2.placeShip(1,5,submarine,"horizontal")
    //player2.placeShip(7,3,battleship,"horizontal")
    //player2.placeShip(9,6,cruiser,"vertical")
    let play2ships = player2.playerShips
    //console.log(player2.playerShips)

    let [kX, kY, lX, lY, mX, mY, nX, nY, oX, oY] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
    let [pX, pY, qX, qY, rX, rY, sX, sY, tX, tY] = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))

    cpu.placeShip(kX,kY,chaser,randomDir())
    cpu.placeShip(lX,lY,seeker,randomDir())
    cpu.placeShip(mX,mY,longride,randomDir())
    cpu.placeShip(nX,nY,underwater,randomDir())
    cpu.placeShip(oX,oY,toofast,randomDir())

    //cpu.placeShip(7,6,chaser,"vertical")
    //cpu.placeShip(6,3,seeker,"vertical")
    //cpu.placeShip(2,6,longride,"horizontal")
    //cpu.placeShip(9,3,underwater,"horizontal")
    //cpu.placeShip(9,9,toofast,"vertical")
    let cpuships = cpu.playerShips
    //console.log(cpu.playerShips)  

    cpuPlayer.placeShip(pX,pY,nightwatch,randomDir())
    cpuPlayer.placeShip(qX,qY,allday,randomDir())
    cpuPlayer.placeShip(rX,rY,sleepy,randomDir())
    cpuPlayer.placeShip(sX,sY,Mary,randomDir())
    cpuPlayer.placeShip(tX,tY,armor,randomDir())

    //cpuPlayer.placeShip(7,6,nightwatch,"vertical")
    //cpuPlayer.placeShip(6,3,allday,"vertical")
    //cpuPlayer.placeShip(2,6,sleepy,"horizontal")
    //cpuPlayer.placeShip(9,3,Mary,"horizontal")
    //cpuPlayer.placeShip(9,9,armor,"vertical")
    let cpuPlayerships = cpuPlayer.playerShips
    //console.log(cpuPlayerships)

    //Tracking the coords of both ships Current
    //console.log(player1.queue, "Ship One Coords")
    //console.log(player2.queue, "Ship Two Coords")
    //console.log(cpu.queue, "cpu ships coords")
    //console.log(cpuPlayer.queue, "cpuPlayer ships Coords")


    //creates main board holder
    let boardHold = document.createElement("div");
    boardHold.setAttribute("id", "boardHold")
    document.body.appendChild(boardHold)

    
    //Here I create the Divs to hold values
    let board1Hold = document.createElement("div")
    board1Hold.setAttribute("class", "board1Hold")

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

    //CPU BOARD******************************************
    
    let cpuHold = document.createElement("div")
    cpuHold.setAttribute("class", "cpuHold")

    let cpu1 = cpu.board
    let cpuArray = [];

    for (let i = 0; i < cpu1.length; i++){
        for (let j = 0; j < cpu1.length; j++){
            let html = ""
            html += `<div class="cells3">${cpu1[i][j]}</div>`
            cpuArray.push(html)
        }
    }
    cpuHold.innerHTML = cpuArray.join("") //removes the commas

    //CPUPlayer BOARD******************************************
    
    let cpuPlayerHold = document.createElement("div")
    cpuPlayerHold.setAttribute("class", "cpuPlayerHold")

    let cpuPlayer1 = cpuPlayer.board
    let cpuPlayerArray = [];

    for (let i = 0; i < cpuPlayer1.length; i++){
        for (let j = 0; j < cpuPlayer1.length; j++){
            let html = ""
            html += `<div class="cells4">${cpuPlayer1[i][j]}</div>`
            cpuPlayerArray.push(html)
        }
    }
    cpuPlayerHold.innerHTML = cpuPlayerArray.join("") //removes the commas

    ////CPUPlayer BOARD ENDS*****************************

    //CODE THAT FLIPS THE BOARDS*********WORKS!!**********
    let whoIsPlaying = prompt("Are you playing Cpu TYPE 'yes or no' otherwise player vs player, \n game is not meant for mobile")
    if(whoIsPlaying === 'yes'){
        cpuPlayer.makeBoard()
        cpu.makeBoard()

        //Player vs player require both boards random generate
        boardHold.appendChild(cpuPlayerHold)
        boardHold.appendChild(cpuHold)

    } else if(whoIsPlaying === 'no'){
        player1.makeBoard()
        player2.makeBoard()

        //Player vs Player get swapped boards
        boardHold.appendChild(board2Hold)
        boardHold.appendChild(board1Hold)
        
    } 

    
    //**********************************************************/
    //flips a 1D array to 2Dx                                                                                                                                                                                                                                       

    function flipTo2D(index, column){
        let row = Math.floor(index / column);
        column = index % column;
        return [row, column]
    }
    //console.log(flipTo2D(5,10))


    //flips a 2D array to 1d
    function flipTo1D(row, column, numCols){
        return row * numCols + column;
    }
    //console.log(flipTo1D(1,6,10))

    //**********************************************************/

//CPUPLAYER board begins here NEEDS WORK************************/

let matches;

// cpuPlayer One clicks ******
let cpuPlayercellListener = document.querySelectorAll(".cells4")
//let oneDIndex;  // Dont TOUCH !!!!!!
cpuPlayercellListener.forEach(function(item, index){
    item.addEventListener("click", function(e){
        
        
        //console.log(e.target) //logs the target to console
        //console.log(`${index}`)
        oneDIndex = index;

        //1D format of the index is here
        let changeDom = e.target
        let changeDomHit = e.target

        //flip to 2D test is here
        let flip2D = flipTo2D(oneDIndex, 10)
        //ROW / COLUMN
        //console.log(flip2D)

        let x = flip2D[0]
        let y = flip2D[1]
        //console.log(x,y) //flips to a x y format

        let matchCoords = `${x}-${y}`
        //console.log(matchCoords)

        //Here I push miss attempts to all queue
        cpuPlayer.allAttempts.push(matchCoords)
        //cpuPlayer.allAttempts = [...new Set(cpuPlayer.allAttempts)];
        //console.log(cpuPlayer.allAttempts)
        let cpuPlayerLength = cpuPlayer.allAttempts.length

        /* THIS WORKS by removing one of the nodes from array
        for(let i = 0; i < cpuPlayer.queue.length; i++){
            console.log(i)
            console.log(cpuPlayer.queue[i])
            if(cpuPlayer.queue[i] === matchCoords){
                cpuPlayer.queue = cpuPlayer.queue.filter(function(item){
                    return item !== matchCoords
                })
            }
        }*/

        //console.log(cpuPlayer.queue)


        //Dont Move In case I want to hide letters and use colors!!!!
        //To See Board
        cpuPlayer.queue.forEach(function(coord){ //off
            if (coord !== matchCoords){ //off
                matches = false
            //    console.log(coord)
            //    console.log(matchCoords)
        //if(changeDom.innerHTML === " #"){ //on
            //changeDom.innerHTML = "M"
            changeDom.style.backgroundColor = "red" //off
        } else if(coord === matchCoords){ //off
            matches = true
            //console.log(index)
            //} else if(changeDom.innerHTML === "S"){ //on
                let whoTurn = cpuPlayer
                if(whoTurn === cpuPlayer){
                    cpuPlayer.queue.forEach(function(item,index){
                        if(item === matchCoords){
                            let foundItem = item
                            //console.log(cpuPlayer.playerShips)
                        cpuPlayerships.forEach(function(item, index){
                            //console.log(item.coords)
                            item.coords.forEach(function(element){
                                if(element === foundItem){
                                    //console.log("found", item)
                                    item.hits()
                                    item.isSunk()
                                    cpuPlayerships.forEach(function(item){
                                        //console.log(item)
                                        //console.log(item.sunkStatus)
                                        cpuPlayer.isAllSunk()

                                    })
                                }
                            })
                            
                        })                        
                    }
                }) 
            } 
            //changeDom.innerHTML = "H" //add here first
            if (matches === true){
                changeDom.innerText = "H"
            } 


            for(let i = 0; i < cpuPlayer.queue.length; i++){
                if(cpuPlayer.queue[i] === matchCoords){
                    cpuPlayer.queue = cpuPlayer.queue.filter(function(item){
                        return item !== matchCoords
                    })
                }
            }   //console.log(cpuPlayer.queue)
        
        
        }
    })
}) }) //off the last one


//CPU Player board ends here********************************/

//Clicking anywhere on the cpu board causes the AI to play
let cpucellListener = document.querySelectorAll(".cells3")
//console.log(cpucellListener) // what i need for html

let cpuHolder = document.querySelector(".cpuHold")
//console.log(cpuHolder)

//cpuHolder.addEventListener("click", function(e){
cpucellListener.forEach(function(item){
    item.addEventListener("click", function(e){

    //console.log(e.target)
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    let cpuCoords = `${x}-${y}`
    //console.log(cpuCoords)
    cpu.allAttempts.push(cpuCoords)

    let cpu1DCoords = flipTo1D(x,y,10)
    //console.log(cpu1DCoords, " cpu 1Dcoords")

    let cpu2DCoords = flipTo2D(cpu1DCoords,10)
    //console.log(cpu2DCoords, "cpu 2D coords")

    //console.log(cpucellListener[cpu1DCoords].innerHTML)
    let cpuDomMatcher = cpucellListener[cpu1DCoords].innerHTML
    //console.log(cpuDomMatcher)

    //Dont Move If I want to hide the Letters M S H 
    cpu.queue.forEach(function(coord){
        if (coord !== cpuCoords){
         //   console.log(coord)
          //  console.log(cpuCoords)
    //if (cpuDomMatcher === " #"){
        //cpucellListener[cpu1DCoords].innerHTML = "M"
        cpucellListener[cpu1DCoords].style.backgroundColor = "red"
        } else if(coord === cpuCoords){
       // } else if(cpuDomMatcher === "S"){
            cpucellListener[cpu1DCoords].innerHTML = "H"
            cpu.queue.forEach(function(item,index){
                //console.log(item)
               // console.log(cpuCoords)
                if (item === cpuCoords){
                    //console.log("Found item after cpu Hit")
                    let cpuFoundItem = item

                    //console.log(cpu.playerShips) // I log cpu ship items
                    cpuships.forEach(function(item, index){
                        //console.log(item.coords) //logs the coords each object
                        item.coords.forEach(function(element){
                            if (element === cpuFoundItem){
                                //console.log("Getting close to a end")
                                item.hits()
                                //console.log(item)
                                item.isSunk()
                                //console.log(item.sunkStatus)
                                cpuships.forEach(function(item){
                                    //console.log(item)
                                    //console.log(item.sunkStatus)
                                    cpu.isAllSunk()
                                })
                            }
                        })
                    })
                }
            })
        
        }
    }) 

}) }) 

//**************************ENDS CPU event listener attempt */

// Player One clicks ******
let cellListener = document.querySelectorAll(".cells")
let oneDIndex;  // Dont TOUCH !!!!!!
cellListener.forEach(function(item, index){
    item.addEventListener("click", function(e){
        oneDIndex = index;

        //1D format of the index is here
        let changeDom = e.target
        let changeDomHit = e.target

        //flip to 2D test is here
        let flip2D = flipTo2D(oneDIndex, 10)
        //ROW / COLUMN

        let x = flip2D[0]
        let y = flip2D[1]

        let matchCoords = `${x}-${y}`
        
        //Here I push miss attempts to all queue
        player1.allAttempts.push(matchCoords)
        //player1.allAttempts = [...new Set(player1.allAttempts)];
        let play1Length = player1.allAttempts.length

        /* THIS WORKS by removing one of the nodes fro array
        for(let i = 0; i < player1.queue.length; i++){
            console.log(i)
            console.log(player1.queue[i])
            if(player1.queue[i] === matchCoords){
                player1.queue = player1.queue.filter(function(item){
                    return item !== matchCoords
                })
            }
        }*/

        //console.log(player1.queue)


        //Dont Move !!!!
        player1.queue.forEach(function(coord){
            if (coord !== matchCoords){
                matches = false
            //    console.log(coord)
            //    console.log(matchCoords)
        //if(changeDom.innerHTML === " #"){
            //changeDom.innerHTML = "M"
            changeDom.style.backgroundColor = "red"
        } else if(coord === matchCoords){
            matches = true
            //console.log(index)
            //} else if(changeDom.innerHTML === "S"){
                let whoTurn = player1
                if(whoTurn === player1){
                    player1.queue.forEach(function(item,index){
                        if(item === matchCoords){
                        let foundItem = item
                        play1ships.forEach(function(item, index){
                            item.coords.forEach(function(element){
                                if(element === foundItem){
                                    item.hits()
                                    item.isSunk()
                                    play1ships.forEach(function(item){
                                        player1.isAllSunk()
                                    })
                                }
                            })    
                        })                        
                    }
                }) 
            } 
            //changeDom.innerHTML = "H" //add here first

            if (matches === true){
                changeDom.innerText = "H"
            } 


            for(let i = 0; i < player1.queue.length; i++){
                if(player1.queue[i] === matchCoords){
                    player1.queue = player1.queue.filter(function(item){
                        return item !== matchCoords
                    })
                }
            }   //console.log(player1.queue)
        }
    })
}) })

let cellListener2 = document.querySelectorAll(".cells2")
cellListener2.forEach(function(item, index){
    item.addEventListener("click", function(e){
        oneDIndex = index;

        //1D format of the index is here
        let changeDom = e.target

        //flip to 2D test is here
        let flip2D = flipTo2D(oneDIndex, 10)
        //ROW / COLUMN

        let x = flip2D[0]
        let y = flip2D[1]

        let matchCoords = `${x}-${y}`
        player2.allAttempts.push(matchCoords)

        

        //Dont Move Change the M H S to Letters
        player2.queue.forEach(function(coord){
            if (coord !== matchCoords){
                changeDom.style.backgroundColor = "red"
                //console.log(coord)
                //console.log(matchCoords)
                matches = false
                
                
        //if(changeDom.innerHTML === " #"){
                //changeDom.innerHTML = "M"
            //changeDom.style.backgroundColor = "blue"
            
        } else if(coord === matchCoords){
            matches = true
        //} else if(changeDom.innerHTML === "S"){
            //Determine the coords, the ship and the player
            let whoTurn = player2
            if(whoTurn === player2){
                player2.queue.forEach(function(item,index){
                    if(item === matchCoords){
                        let foundItem = item
                        play2ships.forEach(function(item, index){
                            item.coords.forEach(function(element){
                                if(element === foundItem){
                                    item.hits()  //works
                                    item.isSunk() //works
                                    play2ships.forEach(function(item){
                                        //console.log(item)
                                        player2.isAllSunk()
                                    })
                                }
                            }) 
                        })                        
                    }
                }) 
            }
            
            if (matches === true){
                changeDom.innerText = "H"
            } 


            for(let i = 0; i < player2.queue.length; i++){
                if(player2.queue[i] === matchCoords){
                    player2.queue = player2.queue.filter(function(item){
                        return item !== matchCoords
                    })
                }
            }   //console.log(player2.queue)


        }
    })
})    
})


    return "Welcome to battleship"
}

console.log(gamePlay())
