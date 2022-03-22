import { Player } from "model/player";

export class GoodFortuneCoordinator {
	private players: Player[] = [];

	register(player: Player) {
		this.players.push(player);
	}

	get goodFortuneValue(): number {
		const goodFortuneCount = this.players.reduce((count, player) => {
			if (player.charmOfAvarice || player.charmOfGoodFortune) {
				return count + 1;
			}
			return count;
		}, 0);

		if (goodFortuneCount >= 10) {
			return 4;
		}
		if (goodFortuneCount >= 6) {
			return 3;
		}
		return 2;
	}
}
