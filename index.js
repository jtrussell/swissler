
/**
 * Creates a vanilla tournament object from the given list of players
 *
 * Tournament objects have the following form:
 *
 * ```
 * {
 *   players: Array<String>,
 *   results: Array<Array<Number>>
 * }
 * ```
 *
 * Where `results` is a weighted adjacency matrix with indexes corresponding to
 * entries in `players`. I.e. 
 *
 * - `results[i][j]` is the number of games player `i` won against player `j`
 *   when they played.
 * - `results[i][j] === -Infinity` means player `i` has not played player `j`
 *
 * Note that the number of rounds played so far can be determined by the
 * non-`-Infinity` in a given row.
 *
 * @param {Array<String>} players A list of player names
 * @return {Object} The tournament object
 */
const makeTournament = (players) => {
  const n = players.length
  return {
    players: players,
    results: Array(n).fill(Array(n).fill(-Infinity))
  }
}

/**
 * Create a matching for the next round
 *
 * Matchings will be of the form
 *
 * ```
 * [
 *   [ix1, ix2],
 *   [ix3, ix4],
 *   ...
 * ]
 * ```
 *
 * @param {Object} tourney A tournament object
 * @return {Array<Array<Number>>} The matching
 */
const makePairings = (tourney) => {
  /*code*/
}

/**
 * Get a ranked list of players
 *
 * Standings include (in order):
 *
 * 1. Player index
 * 2. Total points
 * 3. Match-win percentage
 * 4. Game-win percentage
 * 5. Opponents' match-win percentage
 * 6. Opponents' game-win percentage
 *
 * @param {Object} tourney A tournament object
 * @return {Array<Array<Number>>} The standings
 */
const getStandings = (tourney) => {
  /*code*/
}

/**
 * Update the tournament with a new result
 *
 * Note that `tourney` is not modified, a new tournament object is returned
 * which reflects the provided result.
 *
 * @param {int} ixP1 Player 1's index in `tourney.players`
 * @param {int} gamesP1 Number of games won by player 1
 * @param {int} ixP2 Player 2's index in `tourney.players`
 * @param {int} gamesP2 Number of games won by player 2
 * @param {Object} tourney The tournament object
 * @return {Object} A new tournament object
 */
const recordResult = (tourney, ixP1, gamesP1, ixP2, gamesP2) => {
  /*code*/
}

/**
 * Drop players from the tournament
 *
 * Returns a new tourney object with a given players removed
 *
 * @param {Object} tourney A tournament object
 * @param {Array<int>} ixPlayers Indexes of the player to drop
 * @return {Object} A new tournament object without the specified players
 */
const dropPlayer = (tourney, ixPlayers) => {
  /*code*/
}