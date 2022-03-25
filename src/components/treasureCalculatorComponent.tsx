import React, { Component } from "react";

import { PlayerGroupComponent } from "components/playerGroupComponent";

import { TreasureCalculator } from "model/treasureCalculator";

interface TreasureCalculatorComponentProps {
	calculator: TreasureCalculator;
}
interface TreasureCalculatorComponentState {}

export class TreasureCalculatorComponent extends Component<TreasureCalculatorComponentProps, TreasureCalculatorComponentState> {

	override render() {
		return this.props.calculator.groups.map((group, index) => {
			return <PlayerGroupComponent key={index}
				calculator={this.props.calculator}
				group={group}
				onChange={this.forceUpdate.bind(this)}/>;
		});
	}
}
