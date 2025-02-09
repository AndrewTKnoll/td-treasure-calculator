import React, { Component, ChangeEvent } from "react";

import { CalculatorRowComponent } from "components/calculatorRowComponent";

import { Player, PlayerTokenKey } from "model/player";

interface PlayerRowComponentProps {
	player: Player;
	onChange: () => void;
}
interface PlayerRowComponentState {}

export class PlayerRowComponent extends Component<PlayerRowComponentProps, PlayerRowComponentState> {

	private setToken(tokenName: PlayerTokenKey, event: ChangeEvent<HTMLInputElement>) {
		this.props.player[tokenName] = event.target.checked;
		this.props.onChange();
	}

	override render() {
		return <div className="player-row row">
			<CalculatorRowComponent wrapperClass="player-row__token-wrapper"
				contentForToken={(token) => {
					return <label key={token.identifier}
						className="player-row__token-label">

						<input type="checkbox"
							checked={this.props.player[token.playerTokenKey]}
							onChange={this.setToken.bind(this, token.playerTokenKey)}/>
					</label>;
				}}/>
			<div className="player-row__total col">
				{this.props.player.totalTreasure}
			</div>
		</div>;
	}
}
