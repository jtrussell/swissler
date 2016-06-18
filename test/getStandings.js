
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament
const getStandings = require('..').getStandings
const dropPlayers = require('..').dropPlayers
const recordResult = require('..').recordResult

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

  it('should award three points for a win', () => {
    t = recordResult(t, 0, 2, 1, 1)
    const standings = getStandings(t).map(s => s[1])
    expect(standings).to.deep.equal([3, 0, 0])
  })

  it('should award one point for a tie', () => {
    t = recordResult(t, 0, 1, 1, 1)
    const standings = getStandings(t).map(s => s[1])
    expect(standings).to.deep.equal([1, 1, 0])
  })
})

