import { before, beforeEach, describe } from 'node:test'
import { Ships } from './script.js'
let ship = require('./script.js')

describe("is ship a object that works", () => {
    ship = new Ships('boat', '2 seater', 2, 0 )

    test("Can I make a ship", () => {
        expect(ship.name).toBe("boat")
    })

    test('length of boat', () => {
        expect(ship.length).toBe(2)
    })

})