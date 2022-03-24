/**** style import ****/
import "./main.scss";

/**** js imports ****/
import React from "react";
import ReactDOM from "react-dom";

import { TreasureCalculatorComponent } from "components/treasureCalculatorComponent";

import { TreasureCalculator } from "model/treasureCalculator";

/**** initialize calculator ****/

const calculator = new TreasureCalculator();

const wrapper = document.querySelector(".treasure-calculator");
ReactDOM.render(<TreasureCalculatorComponent calculator={calculator}/>, wrapper);
