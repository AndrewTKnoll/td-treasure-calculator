import React, { ReactNode } from "react";
import { renderToString } from "react-dom/server";

export function renderPage(title: string, bodyContent: ReactNode): string {
	return `<!DOCTYPE html>${renderToString(
		<html>
			<head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>{title}</title>
				<link rel="icon" href="data:,"/>
			</head>
			<body>{bodyContent}</body>
		</html>
	)}`;
}
