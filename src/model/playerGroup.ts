import { Player } from "model/player";
import { TreasureCalculator } from "model/treasureCalculator";

export class PlayerGroup {
	private calculator: TreasureCalculator;

	firstPlayer = 0;
	playerCount = 1;

	constructor(calculator: TreasureCalculator) {
		this.calculator = calculator;
	}

	get players(): Player[] {
		return this.calculator.players.slice(this.firstPlayer, this.firstPlayer + this.playerCount);
	}

	get totalTreasure(): number {
		return this.players.reduce((total, player) => {
			return total + player.totalTreasure;
		}, 0);
	}
}
