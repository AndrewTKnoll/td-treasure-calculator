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
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.sixthLevel}
					onChange={this.setToken.bind(this, "sixthLevel")}/>
				6th
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.rareEnhancer}
					onChange={this.setToken.bind(this, "rareEnhancer")}/>
				Rare
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.charmOfTreasureBoosting}
					onChange={this.setToken.bind(this, "charmOfTreasureBoosting")}/>
				Boosting
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.charmOfAvarice}
					onChange={this.setToken.bind(this, "charmOfAvarice")}/>
				Avarice
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.charmOfGoodFortune}
					onChange={this.setToken.bind(this, "charmOfGoodFortune")}/>
				CoGF
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.ringOfRiches}
					onChange={this.setToken.bind(this, "ringOfRiches")}/>
				RoR
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.hornOfPlenty}
					onChange={this.setToken.bind(this, "hornOfPlenty")}/>
				HoP
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.amuletOfTreasureFinding}
					onChange={this.setToken.bind(this, "amuletOfTreasureFinding")}/>
				AoTF
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.silverNugget}
					onChange={this.setToken.bind(this, "silverNugget")}/>
				Silver Nugget
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.goldNugget}
					onChange={this.setToken.bind(this, "goldNugget")}/>
				Gold Nugget
			</label>
			<label className="col">
				<input type="checkbox"
					checked={this.props.player.platinumNugget}
					onChange={this.setToken.bind(this, "platinumNugget")}/>
				Platinum Nugget
			</label>
			<div className="player-row__total col">
				{`Total: ${this.props.player.totalTreasure}`}
			</div>
		</div>;
	}
}
