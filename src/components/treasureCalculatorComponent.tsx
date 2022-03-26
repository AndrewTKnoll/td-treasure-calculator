import React, { Component, ReactNode } from "react";

import { PlayerGroupComponent } from "components/playerGroupComponent";

import { TreasureCalculator } from "model/treasureCalculator";

interface TreasureCalculatorComponentProps {
	calculator: TreasureCalculator;
}
interface TreasureCalculatorComponentState {}

interface TokenData {
	readonly cssKey: string;
	readonly label: string;
}

export class TreasureCalculatorComponent extends Component<TreasureCalculatorComponentProps, TreasureCalculatorComponentState> {

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
						{ cssKey: "sixth-level", label: "6th Level Player" },
						{ cssKey: "rare-te", label: "Rare TE" },
						{ cssKey: "treasure-boosting", label: "Charm of Treasure Boosting" }
					])}
					{this.renderTitleBox("Charm of Avarice Components", "avarice", [
						{ cssKey: "avarice", label: "Charm of Avarice" },
						{ cssKey: "good-fortune", label: "Charm of Good Fortune" },
						{ cssKey: "ring", label: "Ring of Riches" },
						{ cssKey: "horn", label: "Horn of Plenty" },
						{ cssKey: "amulet", label: "Amulet of Treasure Finding" }
					])}
					{this.renderTitleBox("Ioun Stone Nuggets", "nuggets", [
						{ cssKey: "silver", label: "Silver" },
						{ cssKey: "gold", label: "Gold" },
						{ cssKey: "platinum", label: "Platinum" }
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
