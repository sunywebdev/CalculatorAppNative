import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import react, { useState, useEffect } from "react";
import { Column as Col, Row } from "react-native-flexbox-grid";
import ButtonStyle from "./ButtonStyle";

export default function App() {
	const [numbers, setNumbers] = useState([]);
	console.log(numbers);
	const [calculation, setCalculation] = useState(0);
	const [calculated, setCalculated] = useState();
	const calc = numbers.join(" ");
	useEffect(() => {
		setCalculation(calc);
	}, [numbers]);

	const calculate = () => {
		setCalculated(eval(calc));
	};
	return (
		<View style={{ backgroundColor: "#243441", minHeight: "100vh" }}>
			<View style={{ margin: "9px", flex: 1, justifyContent: "center" }}>
				<View
					style={{
						padding: "21px",
						height: "200px",
					}}>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "25px",
							textAlign: "right",
						}}>
						{calculation}
					</Text>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "75px",
							textAlign: "right",
						}}>
						{calculated}
					</Text>
				</View>
				<View>
					<Row size={12}>
						<Col sm={3}>
							<TouchableOpacity onPress={() => setNumbers([])}>
								<View
									style={{
										backgroundColor: "#243441",
										borderRadius: "21px",
										alignItems: "center",
										justifyContent: "center",
										height: "75px",
										margin: "7px",
										boxShadow:
											"rgb(0 0 0 / 7%) 0px 1px 2px, rgb(0 0 0 / 7%) 0px 2px 4px, rgb(0 0 0 / 7%) 0px 4px 8px, rgb(0 0 0 / 7%) 0px 8px 16px, rgb(0 0 0 / 7%) 0px 16px 32px, rgb(0 0 0 / 7%) 0px 32px 64px",
									}}>
									<Text
										style={{
											fontSize: "31px",
											color: "#ED802E",
										}}>
										C
									</Text>
								</View>
							</TouchableOpacity>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={"("}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={")"}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>

						<Col sm={3}>
							<ButtonStyle
								number={"/"}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>

						<Col sm={3}>
							<ButtonStyle
								number={7}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={8}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={9}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={"*"}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>

						<Col sm={3}>
							<ButtonStyle
								number={4}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={5}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={6}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={"-"}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={1}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={2}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={3}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={"+"}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={0}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={3}>
							<ButtonStyle
								number={"."}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={6}>
							<TouchableOpacity onPress={() => calculate()}>
								<View
									style={{
										backgroundColor: "#243441",
										borderRadius: "21px",
										alignItems: "center",
										justifyContent: "center",
										height: "75px",
										margin: "7px",
										boxShadow:
											"rgb(0 0 0 / 7%) 0px 1px 2px, rgb(0 0 0 / 7%) 0px 2px 4px, rgb(0 0 0 / 7%) 0px 4px 8px, rgb(0 0 0 / 7%) 0px 8px 16px, rgb(0 0 0 / 7%) 0px 16px 32px, rgb(0 0 0 / 7%) 0px 32px 64px",
									}}>
									<Text
										style={{
											fontSize: "31px",
											color: "#ED802E",
										}}>
										=
									</Text>
								</View>
							</TouchableOpacity>
						</Col>
					</Row>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
