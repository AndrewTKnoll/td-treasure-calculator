import { GoodFortuneCoordinator } from "model/goodFortuneCoordinator";
import { Player } from "model/player";
import { PlayerGroup } from "model/playerGroup";

export class TreasureCalculator {
	readonly players: Player[];

	groups: PlayerGroup[] = [];

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

		this.recalculateGroups();
	}

	recalculateGroups() {
		let groupedPlayerCount = 0;

		this.groups = this.groups.filter((group) => {
			group.firstPlayer = groupedPlayerCount;

			if (groupedPlayerCount >= this.players.length) {
				return false;
			}

			groupedPlayerCount += group.playerCount;

			if (groupedPlayerCount > this.players.length) {
				group.playerCount -= (groupedPlayerCount - this.players.length);
			}

			return true;
		});

		while (groupedPlayerCount < this.players.length) {
			const newGroup = new PlayerGroup(this);
			newGroup.firstPlayer = groupedPlayerCount;
			this.groups.push(newGroup);

			groupedPlayerCount += newGroup.playerCount;
		}
	}
}
