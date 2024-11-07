import { before, beforeEach, describe } from 'node:test'
import { Player } from './script.js'

let player = require('./script.js')

describe('game', () => {
    it('test player class', () => {
         player = new Player()
        expect(player.makeBoard().length).toBe(10)
    })
})

describe('player recieveHit to be false', () => {
    player = new Player()
    expect(player.receiveHit(7,6)).toBe(false)
})