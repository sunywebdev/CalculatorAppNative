import { Text, View, TouchableOpacity, Linking } from "react-native";
import { useState, useEffect } from "react";
import { Column as Col, Row } from "react-native-flexbox-grid";
import ButtonStyle from "./ButtonStyle";

export default function CalculatorHome() {
	const [numbers, setNumbers] = useState([]);
	console.log(numbers);
	const [calculation, setCalculation] = useState(0);
	const [calculated, setCalculated] = useState();
	useEffect(() => {
		setCalculation(numbers.join(""));
	}, [numbers]);

	const deleteNum = () => {
		const pop = numbers.slice(0, -1);
		setNumbers(pop);
	};
	const calculate = () => {
		if (
			numbers.slice(-1).pop() === "+" ||
			numbers.slice(-1).pop() === "-" ||
			numbers.slice(-1).pop() === "*" ||
			numbers.slice(-1).pop() === "/" ||
			numbers.slice(-1).pop() === "("
		) {
			alert("Invalid Format");
		} else {
			setCalculated(eval(numbers.join("")));
		}
	};

	const reset = () => {
		setNumbers([]);
		setCalculated();
	};
	return (
		<View style={{ backgroundColor: "#243441", flex: 1 }}>
			<View style={{ margin: 9, flex: 1, justifyContent: "center" }}>
				<View
					style={{
						padding: 21,
						height: 200,
					}}>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: 25,
							textAlign: "right",
						}}>
						{calculation}
					</Text>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: 75,
							textAlign: "right",
						}}>
						{calculated}
					</Text>
				</View>
				<View>
					<Row size={12}>
						<Col sm={6}>
							<TouchableOpacity onPress={() => reset()}>
								<View
									style={{
										backgroundColor: "#243441",
										borderRadius: 21,
										alignItems: "center",
										justifyContent: "center",
										height: 75,
										margin: 7,
										shadowColor: "#000",
										shadowOffset: {
											width: 0,
											height: 12,
										},
										shadowOpacity: 0.58,
										shadowRadius: 16.0,

										elevation: 24,
									}}>
									<Text
										style={{
											fontSize: 31,
											color: "#ED802E",
										}}>
										C
									</Text>
								</View>
							</TouchableOpacity>
						</Col>
						<Col sm={6}>
							<TouchableOpacity onPress={() => deleteNum()}>
								<View
									style={{
										backgroundColor: "#243441",
										borderRadius: 21,
										alignItems: "center",
										justifyContent: "center",
										height: 75,
										margin: 7,
										shadowColor: "#000",
										shadowOffset: {
											width: 0,
											height: 12,
										},
										shadowOpacity: 0.58,
										shadowRadius: 16.0,

										elevation: 24,
									}}>
									<Text
										style={{
											fontSize: 31,
											color: "#ED802E",
										}}>
										{"<<"}
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
								number={"*"}
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
								number={"+"}
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
								number={"."}
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
								number={"00"}
								numbers={numbers}
								setNumbers={setNumbers}
							/>
						</Col>
						<Col sm={6}>
							<TouchableOpacity onPress={() => calculate()}>
								<View
									style={{
										backgroundColor: "#243441",
										borderRadius: 21,
										alignItems: "center",
										justifyContent: "center",
										height: 75,
										margin: 7,
										shadowColor: "#000",
										shadowOffset: {
											width: 0,
											height: 12,
										},
										shadowOpacity: 0.58,
										shadowRadius: 16.0,

										elevation: 24,
									}}>
									<Text
										style={{
											fontSize: 31,
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
			<Text style={{ textAlign: "center", paddingBottom: 7, color: "white" }}>
				Developed by{" "}
				<Text
					style={{ fontWeight: "bold", textDecorationLine: "underline" }}
					onPress={() => Linking.openURL("https://sunywebdev.netlify.app/")}>
					Shoyeb Mohammed Suny
				</Text>
			</Text>
		</View>
	);
}
