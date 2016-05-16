
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament

describe('makeTournament', () => {

  it('should allow players with the same name', () => {
    const t = makeTournament(['a', 'a'])
    expect(t.players.length).to.equal(2)
    expect(t.results.length).to.equal(2)
    expect(t.results[0].length).to.equal(2)
    expect(t.results[1].length).to.equal(2)
  })

  it('should allow a tournament with no players', () => {
    const t = makeTournament([])
    expect(t.players.length).to.equal(0)
    expect(t.results.length).to.equal(0)
  })

})
