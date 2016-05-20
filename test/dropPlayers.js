
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament
const recordResult = require('..').recordResult
const dropPlayers = require('..').dropPlayers

describe('dropPlayers', () => {

  let t

  beforeEach(() => {
    t = makeTournament(['a', 'b', 'c'])
  })

  it('should return a new tournament reference', function() {
    const t2 = dropPlayers(t, [0])
    expect(t2).not.to.equal(t)
  });

  it('should remove players from it\'s internal list', () => {
    t = dropPlayers(t, [0])
    expect(t.players).to.deep.equal(['b', 'c'])
  })

  it('should remove multiple palyesr from it\'s interal list', function() {
    t = dropPlayers(t, [0, 2])
    expect(t.players).to.deep.equal(['b'])
  });

  it('should remove corresponding result entries', () => {
    t = recordResult(t, 0, 1, 2, 2)
    t = dropPlayers(t, [1])
    const r = t.results
    expect(r.length).to.equal(2)
    expect(r[0]).to.deep.equal([-Infinity, 1])
    expect(r[1]).to.deep.equal([2, -Infinity])
  })

})


