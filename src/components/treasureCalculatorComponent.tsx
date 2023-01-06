import React, { Component, ReactNode } from "react";

import { PlayerGroupComponent } from "components/playerGroupComponent";

import { TokenName } from "model/player";
import { TreasureCalculator } from "model/treasureCalculator";

interface TreasureCalculatorComponentProps {
	calculator: TreasureCalculator;
}
interface TreasureCalculatorComponentState {}

interface TokenData {
	readonly name: TokenName;
	readonly cssKey: string;
	readonly label: string;
}

export class TreasureCalculatorComponent extends Component<TreasureCalculatorComponentProps, TreasureCalculatorComponentState> {

	private allPlayersHaveToken(name: TokenName): boolean {
		const tokenCount = this.props.calculator.players.reduce((count, player) => {
			if (player[name]) {
				return count + 1;
			}
			return count;
		}, 0);

		return tokenCount === this.props.calculator.players.length;
	}

	private setAllButtonClicked(token: TokenName) {
		const clear = this.allPlayersHaveToken(token);

		this.props.calculator.players.forEach((player) => {
			player[token] = !clear;
		});
		this.forceUpdate();
	}

	private renderTitleBox(boxTitle: string, cssKey: string, tokens: TokenData[]): ReactNode {
		return <div className={`treasure-calculator__title-box treasure-calculator__title-box--${cssKey} col`}>
			<div className="treasure-calculator__title-box-label">
				{boxTitle}
			</div>
			<div className="treasure-calculator__title-group-row row">
				{tokens.map((token) => {
					return <span className={`treasure-calculator__title treasure-calculator__title--${token.cssKey} col`}>
						{token.label}
					</span>;
				})}
			</div>
			<div className="treasure-calculator__fill-row row">
				{tokens.map((token) => {
					return <div className={`treasure-calculator__fill-button-col treasure-calculator__fill-button-col--${token.cssKey} col`}>
						<button type="button"
							onClick={this.setAllButtonClicked.bind(this, token.name)}>

							{this.allPlayersHaveToken(token.name) ? "Clear" : "Set All"}
						</button>
					</div>;
				})}
			</div>
		</div>;
	}

	override render() {
		return <>
			<div className="treasure-calculator__title-row row">
				<span className="treasure-calculator__count-title col">
					Tickets in Group
				</span>
				<div className="treasure-calculator__token-titles col row">
					{this.renderTitleBox("Miscellaneous", "misc", [
						{ name: "sixthLevel", cssKey: "sixth-level", label: "6th Level Player" },
						{ name: "rareEnhancer", cssKey: "rare-te", label: "Rare TE" },
						{ name: "charmOfTreasureBoosting", cssKey: "treasure-boosting", label: "Charm of Treasure Boosting" }
					])}
					{this.renderTitleBox("Charm of Avarice Components", "avarice", [
						{ name: "charmOfAvarice", cssKey: "avarice", label: "Charm of Avarice" },
						{ name: "charmOfGoodFortune", cssKey: "good-fortune", label: "Charm of Good Fortune" },
						{ name: "ringOfRiches", cssKey: "ring", label: "Ring of Riches" },
						{ name: "hornOfPlenty", cssKey: "horn", label: "Horn of Plenty" },
						{ name: "amuletOfTreasureFinding", cssKey: "amulet", label: "Amulet of Treasure Finding" }
					])}
					{this.renderTitleBox("Ioun Stone Nuggets", "nuggets", [
						{ name: "silverNugget", cssKey: "silver", label: "Silver" },
						{ name: "goldNugget", cssKey: "gold", label: "Gold" },
						{ name: "platinumNugget", cssKey: "platinum", label: "Platinum" }
					])}
					{this.renderTitleBox("Beads", "beads", [
						{ name: "beadOfBounty", cssKey: "bounty", label: "Bounty" }
					])}
				</div>
				<span className="treasure-calculator__count-title col">
					Player Total
				</span>
				<span className="treasure-calculator__count-title col">
					Group Total
				</span>
			</div>
			{this.props.calculator.groups.map((group, index) => {
				return <PlayerGroupComponent key={index}
					calculator={this.props.calculator}
					group={group}
					onChange={this.forceUpdate.bind(this)}/>;
			})}
		</>;
	}
}
