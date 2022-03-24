import React, { Component } from "react";

import { PlayerRowComponent } from "components/playerRowComponent";

import { TreasureCalculator } from "model/treasureCalculator";

interface TreasureCalculatorComponentProps {
	calculator: TreasureCalculator;
}
interface TreasureCalculatorComponentState {}

export class TreasureCalculatorComponent extends Component<TreasureCalculatorComponentProps, TreasureCalculatorComponentState> {

	override render() {
		return this.props.calculator.players.map((player, index) => {
			return <PlayerRowComponent key={index}
				player={player}
				onChange={this.forceUpdate.bind(this)}/>;
		});
	}
}
