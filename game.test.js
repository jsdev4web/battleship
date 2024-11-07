import { before, beforeEach, describe } from 'node:test'
import { Game, Ships } from './script.js'
let game = require('./script.js')


describe("Game test", () => {
     game = new Game();
     game.makeBoard()
     game.receiveHit(2,0)

     
    describe("is this a function", () => {
        test('should be a function', () => {
            expect(typeof game.makeBoard()).toBe("object");
        })
    })

    describe('get the length to be 10', () => {
        expect(game.makeBoard().length).toEqual(10)
    })

    
})

