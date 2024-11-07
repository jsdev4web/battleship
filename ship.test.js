import { before, beforeEach, describe } from 'node:test'
import { Ships, Game } from './script.js'
let ship = require('./script.js')
let game = require('./script.js')

describe("is ship a object that works", () => {
    game = new Game()
    game.makeBoard()
    ship = new Ships('boat', '2 seater', 2, 0 )
    //ship.receiveHit(2,0)

    test("Can I make a ship", () => {
        expect(ship.name).toBe("boat")
    })

    test('length of boat', () => {
        expect(ship.length).toBe(2)
    })

})


