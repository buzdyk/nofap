var assert = require('assert')

import {getSlackRankByDuration} from './../helpers/utils'

describe('Ranks', () => {
    const assertRank = (durations, correctRank) => {
        for (let i=0; i<durations.length; i++)
            assert.equal(correctRank, getSlackRankByDuration(durations[i]))
    }

    it('0 returns sweat drops', () => {
        assertRank([0], ':sweat_drops:')
    })

    it('(0; 1) returns korzinka', () => {
        assertRank([.1, .5, .99], ':kolobok-korzinka:')
    })

    it('[1; 8) returns perekat', () => {
        assertRank([1, 2, 7.99], ':kolobok-perekat:')
        let emoji = ':kolobok-perekat:'
    })

    it('[8; 30) returns nya', () => {
        assertRank([8, 25, 29.99], ':kolobok-nya:')
    })

    it('[30; infinity) returns sir', () => {
        assertRank([30, 31, 5001], ':kolobok-sir:')
    })
})