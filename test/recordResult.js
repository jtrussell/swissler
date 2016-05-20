
'use strict'

const expect = require('chai').expect
const makeTournament = require('..').makeTournament
const recordResult = require('..').recordResult

describe('recordResult', () => {

  let t

  beforeEach(() => {
    t = makeTournament(['a', 'b', 'c'])
  })

  it('should return a new tournament reference', function() {
    const t2 = recordResult(t, 0, 3, 1, 2)
    expect(t2).not.to.equal(t)
  });

  it('should correctly track results', () => {
    t = recordResult(t, 0, 3, 1, 2)
    const r = t.results
    expect(r[0][1]).to.equal(3)
    expect(r[1][0]).to.equal(2)
  })

  it('should allow matches to be re-recorded - i.e. updated', function() {
    t = recordResult(t, 0, 3, 1, 2)
    t = recordResult(t, 0, 3, 1, 2)
    const r = t.results
    expect(r[0][1]).to.equal(3)
    expect(r[1][0]).to.equal(2)
  });

  it('should throw when told a player played themself', function() {
    expect(() => { recordResult(t, 0, 1, 0, 1) }).to.throw(RangeError)
  });
})

