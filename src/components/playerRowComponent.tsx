import React, { Component, ChangeEvent } from "react";

import { Player, TokenName } from "model/player";
import { mapAllTokens } from "model/token";

interface PlayerRowComponentProps {
	player: Player;
	onChange: () => void;
}
interface PlayerRowComponentState {}

export class PlayerRowComponent extends Component<PlayerRowComponentProps, PlayerRowComponentState> {

	private setToken(tokenName: TokenName, event: ChangeEvent<HTMLInputElement>) {
		this.props.player[tokenName] = event.target.checked;
		this.props.onChange();
	}

	override render() {
		return <div className="player-row row">
			<div className="player-row__token-wrapper col row">
				{mapAllTokens((token) => {
					return <label key={token.identifier}
						className={`player-row__token-label player-row__token-label--${token.identifier} col`}>

						<input type="checkbox"
							checked={this.props.player[token.playerKey]}
							onChange={this.setToken.bind(this, token.playerKey)}/>
					</label>
				})}
			</div>
			<div className="player-row__total col">
				{this.props.player.totalTreasure}
			</div>
		</div>;
	}
}
