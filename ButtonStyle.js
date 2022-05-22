import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App({ number, numbers, setNumbers }) {
	return (
		<TouchableOpacity onPress={() => setNumbers([...numbers, number])}>
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
						color: "white",
					}}>
					{number}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
