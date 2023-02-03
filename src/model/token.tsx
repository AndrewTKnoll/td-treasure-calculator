import { TokenName } from "model/player";

export interface Token {
	readonly name: string;
	readonly identifier: string;
	readonly playerKey: TokenName;
}

export interface TokenGroup {
	readonly name: string;
	readonly identifier: string;
	readonly tokens: Token[];
}

export const tokenData: TokenGroup[] = [{
	name: "Miscellaneous",
	identifier: "misc",
	tokens: [{
		name: "6th Level Player",
		identifier: "sixth-level",
		playerKey: "sixthLevel"
	},{
		name: "Rare TE",
		identifier: "rare-te",
		playerKey: "rareEnhancer"
	},{
		name: "Charm of Treasure Boosting",
		identifier: "treasure-boosting",
		playerKey: "charmOfTreasureBoosting"
	}]
},{
	name: "Charm of Avarice Components",
	identifier: "avarice",
	tokens: [{
		name: "Charm of Avarice",
		identifier: "avarice",
		playerKey: "charmOfAvarice"
	},{
		name: "Charm of Good Fortune",
		identifier: "good-fortune",
		playerKey: "charmOfGoodFortune"
	},{
		name: "Ring of Riches",
		identifier: "ring",
		playerKey: "ringOfRiches"
	},{
		name: "Horn of Plenty",
		identifier: "horn",
		playerKey: "hornOfPlenty"
	},{
		name: "Amulet of Treasure Finding",
		identifier: "amulet",
		playerKey: "amuletOfTreasureFinding"
	}]
},{
	name: "Ioun Stone Nuggets",
	identifier: "nuggets",
	tokens: [{
		name: "Silver",
		identifier: "silver",
		playerKey: "silverNugget"
	},{
		name: "Gold",
		identifier: "gold",
		playerKey: "goldNugget"
	},{
		name: "Platinum",
		identifier: "platinum",
		playerKey: "platinumNugget"
	}]
},{
	name: "Beads",
	identifier: "beads",
	tokens: [{
		name: "Bounty",
		identifier: "bounty",
		playerKey: "beadOfBounty"
	}]
}];
