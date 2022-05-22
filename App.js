import { View, StatusBar } from "react-native";
import React from "react";
import CalculatorHome from "./CalculatorHome";

export default function Main() {
	return (
		<>
			<StatusBar backgroundColor='#243441' />
			<CalculatorHome />
		</>
	);
}
