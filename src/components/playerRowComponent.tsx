import React, { Component, ChangeEvent } from "react";

import { Player } from "model/player";

type Token = "sixthLevel" | "rareEnhancer" | "charmOfTreasureBoosting" | "charmOfAvarice" | "charmOfGoodFortune" | "ringOfRiches" | "hornOfPlenty" | "amuletOfTreasureFinding" | "silverNugget" | "goldNugget" | "platinumNugget";

interface PlayerRowComponentProps {
	player: Player;
	onChange: () => void;
}
interface PlayerRowComponentState {}

export class PlayerRowComponent extends Component<PlayerRowComponentProps, PlayerRowComponentState> {

	private setToken(tokenName: Token, event: ChangeEvent<HTMLInputElement>) {
		this.props.player[tokenName] = event.target.checked;
		this.props.onChange();
	}

	override render() {
		return <div className="player-row row">
			<div className="player-row__token-wrapper col row">
				<label className="player-row__token-label player-row__token-label--sixth-level col">
					<input type="checkbox"
						checked={this.props.player.sixthLevel}
						onChange={this.setToken.bind(this, "sixthLevel")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--rare-te col">
					<input type="checkbox"
						checked={this.props.player.rareEnhancer}
						onChange={this.setToken.bind(this, "rareEnhancer")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--treasure-boosting col">
					<input type="checkbox"
						checked={this.props.player.charmOfTreasureBoosting}
						onChange={this.setToken.bind(this, "charmOfTreasureBoosting")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--avarice col">
					<input type="checkbox"
						checked={this.props.player.charmOfAvarice}
						onChange={this.setToken.bind(this, "charmOfAvarice")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--good-fortune col">
					<input type="checkbox"
						checked={this.props.player.charmOfGoodFortune}
						onChange={this.setToken.bind(this, "charmOfGoodFortune")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--ring col">
					<input type="checkbox"
						checked={this.props.player.ringOfRiches}
						onChange={this.setToken.bind(this, "ringOfRiches")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--horn col">
					<input type="checkbox"
						checked={this.props.player.hornOfPlenty}
						onChange={this.setToken.bind(this, "hornOfPlenty")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--amulet col">
					<input type="checkbox"
						checked={this.props.player.amuletOfTreasureFinding}
						onChange={this.setToken.bind(this, "amuletOfTreasureFinding")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--silver col">
					<input type="checkbox"
						checked={this.props.player.silverNugget}
						onChange={this.setToken.bind(this, "silverNugget")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--gold col">
					<input type="checkbox"
						checked={this.props.player.goldNugget}
						onChange={this.setToken.bind(this, "goldNugget")}/>
				</label>
				<label className="player-row__token-label player-row__token-label--platinum col">
					<input type="checkbox"
						checked={this.props.player.platinumNugget}
						onChange={this.setToken.bind(this, "platinumNugget")}/>
				</label>
			</div>
			<div className="player-row__total col">
				{this.props.player.totalTreasure}
			</div>
		</div>;
	}
}
