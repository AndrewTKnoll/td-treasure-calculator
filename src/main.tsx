/**** style import ****/
import "./main.scss";

/**** js imports ****/
import React from "react";
import { createRoot } from "react-dom/client";

import { TreasureCalculatorComponent } from "components/treasureCalculatorComponent";

import { TreasureCalculator } from "model/treasureCalculator";

/**** initialize calculator ****/

const calculator = new TreasureCalculator();

const root = createRoot(document.querySelector(".treasure-calculator")!);
root.render(<TreasureCalculatorComponent calculator={calculator}/>);
