
# Swissler

> Swiss pairing tournament stuff

(WIP)


## Usage

Swissler provides the following exports:

### `makeTournament(players)`

Returns a new tournament object using the array of players.

### `dropPlayers(tourney, players)`

Returns a new tournament object identical to `tourney` without the given
`players`. The players are not present in the returned tournament's list of
players and are represented its results graph.

### `makePairings(tourney)`

Returns a matching of players for the next round of play.

Note `makePairings` will throw if the current round is not complete.

### `recordResult(tourney, ixP1, gamesP1, ixP2, gamesP2)`

Returns a new tournament object where the player at position `ixP1` won
`gamesP1` against the player at position `ixP2`, similarly the `ixP2` player
wont `gamesP2` against the player at `ixP1`, Note that `recordResult` allows you
to fix a previously recorded result as well as record a new result.

Note `recordResult` will throw a `RangeError` if `ixP1 === ixP2`.

## License

MIT
