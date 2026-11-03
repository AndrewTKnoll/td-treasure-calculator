import { GoodFortuneCoordinator } from "model/goodFortuneCoordinator"

import { KeyOfType } from "utilities/typeUtils"

export type PlayerTokenKey = KeyOfType<Player, boolean>

export class Player {
	private readonly goodFortuneCoordinator: GoodFortuneCoordinator

	coinOfWealth = false
	charmOfAvarice = false

	charmOfGoodFortune = false
	ringOfRiches = false
	hornOfPlenty = false
	amuletOfTreasureFinding = false

	silverNugget = false
	goldNugget = false
	platinumNugget = false

	beadOfBounty = false
	beadOfGreed = false
	beadOfNeed = false

	rareEnhancer = false
	charmOfDivineGifts = false
	charmOfTreasureBoosting = false
	sixthLevel = false

	constructor(coordinator: GoodFortuneCoordinator) {
		this.goodFortuneCoordinator = coordinator
		coordinator.register(this)
	}

	get tokenCount(): number {
		let count = 0

		// avarice components

		if (this.coinOfWealth || this.charmOfAvarice || this.charmOfGoodFortune) {
			count += 1
		}
		if (this.coinOfWealth || this.charmOfAvarice || this.ringOfRiches) {
			count += 1
		}
		if (this.coinOfWealth || this.charmOfAvarice || this.hornOfPlenty || this.amuletOfTreasureFinding) {
			count += 1
		}

		// nuggets

		if (this.silverNugget) {
			count += 1
		}
		if (this.goldNugget) {
			count += 1
		}
		if (this.platinumNugget) {
			count += 1
		}

		// beads

		if (this.coinOfWealth || this.beadOfBounty) {
			count += 1
		}
		if (this.coinOfWealth || this.beadOfGreed) {
			count += 1
		}
		if (this.coinOfWealth || this.beadOfNeed) {
			count += 1
		}

		// misc

		if (count === 0 && (this.rareEnhancer || this.charmOfDivineGifts)) {
			count += 1
		}

		return count
	}

	get totalTreasure(): number {
		let treasureTotal = 3
		let hasStackingEnhancer = false

		// avarice components

		if (this.coinOfWealth || this.charmOfAvarice || this.charmOfGoodFortune) {
			treasureTotal += (this.coinOfWealth ? 5 : this.goodFortuneCoordinator.goodFortuneValue) // CoW === max CoGF + 1 extra
			hasStackingEnhancer = true
		}
		if (this.coinOfWealth || this.charmOfAvarice || this.ringOfRiches) {
			treasureTotal += 3
			hasStackingEnhancer = true
		}
		if (this.coinOfWealth || this.charmOfAvarice || this.hornOfPlenty) {
			treasureTotal += 6
			hasStackingEnhancer = true
		}
		else if (this.amuletOfTreasureFinding) {
			treasureTotal += 4
			hasStackingEnhancer = true
		}

		// nuggets

		if (this.silverNugget) {
			treasureTotal += 2
			hasStackingEnhancer = true
		}
		if (this.goldNugget) {
			treasureTotal += 2
			hasStackingEnhancer = true
		}
		if (this.platinumNugget) {
			treasureTotal += 2
			hasStackingEnhancer = true
		}

		// beads

		if (this.coinOfWealth || this.beadOfBounty) {
			treasureTotal += 2
			hasStackingEnhancer = true
		}
		if (this.coinOfWealth || this.beadOfGreed) {
			treasureTotal += 2
			hasStackingEnhancer = true
		}
		if (this.coinOfWealth || this.beadOfNeed) {
			treasureTotal += 2
			hasStackingEnhancer = true
		}

		// misc

		if (this.rareEnhancer && !this.charmOfDivineGifts && !hasStackingEnhancer) {
			treasureTotal += 1
		}
		if (this.charmOfDivineGifts && !hasStackingEnhancer) {
			treasureTotal += 2
		}
		if (this.charmOfTreasureBoosting && this.tokenCount === 1) {
			treasureTotal += 1
		}
		if (this.sixthLevel) {
			treasureTotal += 1
		}

		return treasureTotal
	}
}
