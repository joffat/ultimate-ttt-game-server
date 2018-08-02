import IMatchOptions from "../../tournament/match/MatchOptions";
import Player from "../../tournament/model/Player";
import { ITournamentStats } from "../../tournament/stats/TournamentStats";
import DoubleEliminationMatch from "./DoubleEliminationMatch";
import IMatchmaker from "./Matchmaker";
import TournamentEvents from "../../tournament/TournamentEvents";
export default class DoubleEliminationMatchmaker implements IMatchmaker {
    private players;
    private options;
    private events;
    private finished;
    private tournamentStats;
    private processedMatches;
    private playerStats;
    private zeroLossOddPlayer;
    private oneLossOddPlayer;
    private waitingForFinal;
    private unlinkedMatches;
    constructor(players: Player[], options: IMatchOptions, events: TournamentEvents);
    isFinished(): boolean;
    getRemainingMatches(tournamentStats: ITournamentStats): DoubleEliminationMatch[];
    getRanking(): string[];
    private matchPlayers;
    private createMatch;
    private playerIsWaitingForMatch;
    private anyPlayersWaiting;
    private setParentMatches;
}
