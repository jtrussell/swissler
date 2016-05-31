
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament
const getStandings = require('..').getStandings
const dropPlayers = require('..').dropPlayers

describe('getStandings', () => {

  let t

  beforeEach(() => {
    t = makeTournament(['a', 'b', 'c'])
  })

  it('should ignore dropped players', () => {
    const t2 = dropPlayers(t, [0])
    const standings = getStandings(t2).map(s => s[0])
    expect(standings).to.deep.equal(['b', 'c'])
  })

})



