
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament
const makePairings = require('..').makePairings

describe('makePairings', () => {

  let t

  beforeEach(() => {
    t = makeTournament(['a', 'b', 'c'])
  })

  it('should throw if the round is not complete', function() {
    t = recordResult(t, 0, 3, 1, 2)
    expect(() => makePairings(t)).to.throw(Error)
  });

})


