import { before, beforeEach, describe } from 'node:test'
import { Game } from './script.js'
let game = require('./script.js')

describe("Game test", () => {
     game = new Game();

    describe("is this a function", () => {
        test('should be a function', () => {
            expect(typeof game.makeBoard()).toBe("object");
        })
    })

    describe('get the length to be 10', () => {
        expect(game.makeBoard().length).toEqual(10)
    })

})

describe("does the placeShip function exist", () => {
    expect(typeof game.placeShip()).toBe("string")
})
