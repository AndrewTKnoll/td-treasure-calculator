import React, { Component, ReactNode } from "react";

import { PlayerGroupComponent } from "components/playerGroupComponent";

import { TokenName } from "model/player";
import { tokenData, TokenGroup } from "model/token";
import { TreasureCalculator } from "model/treasureCalculator";

interface TreasureCalculatorComponentProps {
	calculator: TreasureCalculator;
}
interface TreasureCalculatorComponentState {}

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

	private renderTitleBox(group: TokenGroup): ReactNode {
		return <div key={group.identifier}
			className={`treasure-calculator__title-box treasure-calculator__title-box--${group.identifier} col`}>

			<div className="treasure-calculator__title-box-label">
				{group.name}
			</div>
			<div className="treasure-calculator__title-group-row row">
				{group.tokens.map((token) => {
					return <span key={token.identifier}
						className={`treasure-calculator__title treasure-calculator__title--${token.identifier} col`}>

						{token.name}
					</span>;
				})}
			</div>
			<div className="treasure-calculator__fill-row row">
				{group.tokens.map((token) => {
					return <div key={token.identifier}
						className={`treasure-calculator__fill-button-col treasure-calculator__fill-button-col--${token.identifier} col`}>

						<button type="button"
							onClick={this.setAllButtonClicked.bind(this, token.playerKey)}>

							{this.allPlayersHaveToken(token.playerKey) ? "Clear" : "Set All"}
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
					{tokenData.map((group) => {
						return this.renderTitleBox(group);
					})}
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
