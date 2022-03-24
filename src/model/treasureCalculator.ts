import { GoodFortuneCoordinator } from "model/goodFortuneCoordinator";
import { Player } from "model/player";

export class TreasureCalculator {
	readonly players: Player[];

	constructor() {
		const coordinator = new GoodFortuneCoordinator();

		this.players = [
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator),
			new Player(coordinator)
		];
	}
}
