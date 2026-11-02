import { PlayerTokenKey } from "model/player"

export interface Token {
	readonly name: string
	readonly identifier: string
	readonly playerTokenKey: PlayerTokenKey
	readonly conflicts: {
		token: PlayerTokenKey
		message: string
	}[]
}

export interface TokenGroup {
	readonly name: string
	readonly identifier: string
	readonly tokens: Token[]
}

export function mapAllTokens<ResultType>(callback: (token: Token) => ResultType): ResultType[] {
	return tokenData.map((group) => {
		return group.tokens
	})
	.flat(1)
	.map(callback)
}

export const tokenData: TokenGroup[] = [{
	name: "Miscellaneous",
	identifier: "misc",
	tokens: [{
		name: "6th Level Player",
		identifier: "sixth-level",
		playerTokenKey: "sixthLevel",
		conflicts: []
	},{
		name: "Mythic Coin of Wealth",
		identifier: "coin-of-wealth",
		playerTokenKey: "coinOfWealth",
		conflicts: []
	},{
		name: "Rare TE",
		identifier: "rare-te",
		playerTokenKey: "rareEnhancer",
		conflicts: [
			{
				token: "charmOfDivineGifts",
				message: "CoDG"
			}
		]
	},{
		name: "Charm of Divine Gifts",
		identifier: "divine-gifts",
		playerTokenKey: "charmOfDivineGifts",
		conflicts: []
	},{
		name: "Charm of Treasure Boosting",
		identifier: "treasure-boosting",
		playerTokenKey: "charmOfTreasureBoosting",
		conflicts: []
	}]
},{
	name: "Charm of Avarice Components",
	identifier: "avarice",
	tokens: [{
		name: "Charm of Avarice",
		identifier: "avarice",
		playerTokenKey: "charmOfAvarice",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			}
		]
	},{
		name: "Charm of Good Fortune",
		identifier: "good-fortune",
		playerTokenKey: "charmOfGoodFortune",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			},
			{
				token: "charmOfAvarice",
				message: "CoA"
			}
		]
	},{
		name: "Ring of Riches",
		identifier: "ring",
		playerTokenKey: "ringOfRiches",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			},
			{
				token: "charmOfAvarice",
				message: "CoA"
			}
		]
	},{
		name: "Horn of Plenty",
		identifier: "horn",
		playerTokenKey: "hornOfPlenty",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			},
			{
				token: "charmOfAvarice",
				message: "CoA"
			}
		]
	},{
		name: "Amulet of Treasure Finding",
		identifier: "amulet",
		playerTokenKey: "amuletOfTreasureFinding",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			},
			{
				token: "charmOfAvarice",
				message: "CoA"
			},
			{
				token: "hornOfPlenty",
				message: "HoP"
			}
		]
	}]
},{
	name: "Ioun Stone Nuggets",
	identifier: "nuggets",
	tokens: [{
		name: "Silver",
		identifier: "silver",
		playerTokenKey: "silverNugget",
		conflicts: []
	},{
		name: "Gold",
		identifier: "gold",
		playerTokenKey: "goldNugget",
		conflicts: []
	},{
		name: "Platinum",
		identifier: "platinum",
		playerTokenKey: "platinumNugget",
		conflicts: []
	}]
},{
	name: "Beads",
	identifier: "beads",
	tokens: [{
		name: "Bounty",
		identifier: "bounty",
		playerTokenKey: "beadOfBounty",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			}
		]
	},{
		name: "Greed",
		identifier: "greed",
		playerTokenKey: "beadOfGreed",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			}
		]
	},{
		name: "Need",
		identifier: "need",
		playerTokenKey: "beadOfNeed",
		conflicts: [
			{
				token: "coinOfWealth",
				message: "CoW"
			}
		]
	}]
}]
