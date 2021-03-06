
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament
const makePairings = require('..').makePairings
const recordResult = require('..').recordResult
const dropPlayers = require('..').dropPlayers

describe('makePairings', () => {

  let t

  beforeEach(() => {
    t = makeTournament(['a', 'b', 'c', 'd'])
  })

  it('should pair against *bye* when we have an odd number of players', function() {
    t = makeTournament(['a', 'b', 'c'])
    // ...
  });

  it('should throw if the round is not complete', function() {
    t = recordResult(t, 0, 3, 1, 2)
    expect(() => makePairings(t)).to.throw(Error)
  });

  it('should not throw when dropped players have not finished a round', function() {
    t = recordResult(t, 0, 3, 1, 2)
    t = dropPlayers(t, [2, 3])
    expect(() => makePairings(t)).not.to.throw(Error)
  });

})


