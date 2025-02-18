import React, { Component, ChangeEvent } from "react";

import { PlayerRowComponent } from "components/playerRowComponent";
import { CalculatorRowComponent } from "components/calculatorRowComponent";

import { PlayerGroup } from "model/playerGroup";
import { TreasureCalculator } from "model/treasureCalculator";

interface PlayerGroupComponentProps {
	calculator: TreasureCalculator;
	group: PlayerGroup;
	onChange: () => void;
}
interface PlayerGroupComponentState {}

export class PlayerGroupComponent extends Component<PlayerGroupComponentProps, PlayerGroupComponentState> {

	private playerCountUpdated(event: ChangeEvent<HTMLSelectElement>) {
		const newCount = Number.parseInt(event.target.value);

		this.props.group.playerCount = newCount;
		this.props.calculator.recalculateGroups();

		this.props.onChange();
	}

	override render() {
		return <>
			<CalculatorRowComponent wrapperClass="player-group-spacer"/>
			<div className="player-group row">
				<div className="player-group__count-col col">
					<select value={this.props.group.playerCount}
						onChange={this.playerCountUpdated.bind(this)}>

						{Array(10 - this.props.group.firstPlayer).fill(0).map((value, index) => {
							return <option key={index}
								value={index + 1}>

								{index + 1}
							</option>;
						})}
					</select>
				</div>
				<div className="player-group__player-col col">
					{this.props.group.players.map((player, index) => {
						return <PlayerRowComponent key={index}
							player={player}
							onChange={this.props.onChange}/>;
					})}
				</div>
				<div className="player-group__group-total-col col">
					{this.props.group.totalTreasure}
				</div>
			</div>
		</>;
	}
}
