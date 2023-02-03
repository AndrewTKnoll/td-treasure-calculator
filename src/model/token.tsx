import { PlayerTokenKey } from "model/player";

export interface Token {
	readonly name: string;
	readonly identifier: string;
	readonly playerTokenKey: PlayerTokenKey;
}

export interface TokenGroup {
	readonly name: string;
	readonly identifier: string;
	readonly tokens: Token[];
}

export function mapAllTokens<ResultType>(callback: (token: Token) => ResultType): ResultType[] {
	return tokenData.map((group) => {
		return group.tokens;
	})
	.flat(1)
	.map(callback);
}

export const tokenData: TokenGroup[] = [{
	name: "Miscellaneous",
	identifier: "misc",
	tokens: [{
		name: "6th Level Player",
		identifier: "sixth-level",
		playerTokenKey: "sixthLevel"
	},{
		name: "Rare TE",
		identifier: "rare-te",
		playerTokenKey: "rareEnhancer"
	},{
		name: "Charm of Treasure Boosting",
		identifier: "treasure-boosting",
		playerTokenKey: "charmOfTreasureBoosting"
	}]
},{
	name: "Charm of Avarice Components",
	identifier: "avarice",
	tokens: [{
		name: "Charm of Avarice",
		identifier: "avarice",
		playerTokenKey: "charmOfAvarice"
	},{
		name: "Charm of Good Fortune",
		identifier: "good-fortune",
		playerTokenKey: "charmOfGoodFortune"
	},{
		name: "Ring of Riches",
		identifier: "ring",
		playerTokenKey: "ringOfRiches"
	},{
		name: "Horn of Plenty",
		identifier: "horn",
		playerTokenKey: "hornOfPlenty"
	},{
		name: "Amulet of Treasure Finding",
		identifier: "amulet",
		playerTokenKey: "amuletOfTreasureFinding"
	}]
},{
	name: "Ioun Stone Nuggets",
	identifier: "nuggets",
	tokens: [{
		name: "Silver",
		identifier: "silver",
		playerTokenKey: "silverNugget"
	},{
		name: "Gold",
		identifier: "gold",
		playerTokenKey: "goldNugget"
	},{
		name: "Platinum",
		identifier: "platinum",
		playerTokenKey: "platinumNugget"
	}]
},{
	name: "Beads",
	identifier: "beads",
	tokens: [{
		name: "Bounty",
		identifier: "bounty",
		playerTokenKey: "beadOfBounty"
	}]
}];
