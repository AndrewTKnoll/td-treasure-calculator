import React, { ReactNode } from "react";

import { Token, tokenData } from "model/token";

type CalculatorRowComponentProps = {
	wrapperClass?: string | undefined;
	contentForToken?: ((token: Token) => ReactNode) | undefined;
};

export function CalculatorRowComponent({ wrapperClass, contentForToken }: CalculatorRowComponentProps): ReactNode {
	return <div className={`calculator-row-component row${wrapperClass ? ` ${wrapperClass}` : ""}`}>
		{tokenData.map((group) => {
			return <div key={group.identifier}
				className={`calculator-row-component__token-group calculator-row-component__token-group--${group.identifier}`}>

				{group.tokens.map((tokenData) => {
					return <div key={tokenData.identifier}
						className={`calculator-row-component__token calculator-row-component__token--${tokenData.identifier} col`}>

						{contentForToken?.(tokenData)}
					</div>;
				})}
			</div>;
		})}
	</div>;
}
