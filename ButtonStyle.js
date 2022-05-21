import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App({ number, numbers, setNumbers }) {
	return (
		<TouchableOpacity onPress={() => setNumbers([...numbers, number])}>
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
						color: "white",
					}}>
					{number}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
