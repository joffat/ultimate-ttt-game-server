import MatchOptions from './MatchOptions';
import Game from './game/Game';
import Player from '../model/Player';
import State from '../model/State';

/**
 * A set of games between two players
 */
export default class Match {
    public games: Game[];
    public stats: State;

    constructor(public players: Player[], private options: MatchOptions, private sendStats: Function) {
        this.games = [];
        this.stats = new State();

        for(let i = 0; i < options.maxGames; i++) {
            this.games[i] = new Game(
                this.players,
                {
                    timeout: options.timeout,
                    gameId: i,
                },
                {
                    onGameStart: () => {}
                },
                console.log
            )
        }
    }

    /**
     * Play all the games in this match
     */
    public async playGames() {
        this.stats.state = 'playing';
        for (let game of this.games) {
            await game.playGame();
            this.stats.times.push(game.gameTime);
            this.stats.games++;
            if (game.winnerIndex === -1) {
                this.stats.ties++;
            } else {
                this.stats.wins[game.winnerIndex]++;
            }
            this.sendStats();
        }
        this.stats.state = 'finished';
    }
}