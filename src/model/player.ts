import { GoodFortuneCoordinator } from "model/goodFortuneCoordinator";

import { KeyOfType } from "utilities/typeUtils";

export type PlayerTokenKey = KeyOfType<Player, boolean>;

export class Player {
	private readonly goodFortuneCoordinator: GoodFortuneCoordinator;

	charmOfAvarice = false;

	charmOfGoodFortune = false;
	ringOfRiches = false;
	hornOfPlenty = false;
	amuletOfTreasureFinding = false;

	silverNugget = false;
	goldNugget = false;
	platinumNugget = false;

	beadOfBounty = false;
	beadOfGreed = false;

	rareEnhancer = false;
	charmOfDivineGifts = false;
	charmOfTreasureBoosting = false;
	sixthLevel = false;

	constructor(coordinator: GoodFortuneCoordinator) {
		this.goodFortuneCoordinator = coordinator;
		coordinator.register(this);
	}

	get totalTreasure(): number {
		let treasureTotal = 3;
		let enhancerCount = 0;

		// avarice components

		if (this.charmOfAvarice || this.charmOfGoodFortune) {
			treasureTotal += this.goodFortuneCoordinator.goodFortuneValue;
			enhancerCount += 1;
		}

		if (this.charmOfAvarice || this.ringOfRiches) {
			treasureTotal += 3;
			enhancerCount += 1;
		}

		if (this.charmOfAvarice || this.hornOfPlenty) {
			treasureTotal += 6;
			enhancerCount += 1;
		}
		else if (this.amuletOfTreasureFinding) {
			treasureTotal += 4;
			enhancerCount += 1;
		}

		// nuggets

		if (this.silverNugget) {
			treasureTotal += 2;
			enhancerCount += 1;
		}

		if (this.goldNugget) {
			treasureTotal += 2;
			enhancerCount += 1;
		}

		if (this.platinumNugget) {
			treasureTotal += 2;
			enhancerCount += 1;
		}

		// beads

		if (this.beadOfBounty) {
			treasureTotal += 2;
			enhancerCount += 1;
		}

		if (this.beadOfGreed) {
			treasureTotal += 2;
			enhancerCount += 1;
		}

		// misc

		if (this.rareEnhancer && enhancerCount === 0 && !this.charmOfDivineGifts) {
			treasureTotal += 1;
			enhancerCount += 1;
		}

		if (this.charmOfDivineGifts && enhancerCount === 0) {
			treasureTotal += 2;
			enhancerCount += 1;
		}

		if (this.charmOfTreasureBoosting && enhancerCount === 1) {
			treasureTotal += 1;
		}

		if (this.sixthLevel) {
			treasureTotal += 1;
		}

		return treasureTotal;
	}
}
