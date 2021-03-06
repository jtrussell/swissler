
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament
const getStandings = require('..').getStandings
const dropPlayers = require('..').dropPlayers

describe('dropPlayers', () => {

  let t

  beforeEach(() => {
    t = makeTournament(['a', 'b', 'c'])
  })

  it('should return a new tournament reference', () => {
    const t2 = dropPlayers(t, [0])
    expect(t2).not.to.equal(t)
  })

})


