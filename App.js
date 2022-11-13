import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import { HomeScreen, LoginScreen, RegisterScreen } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
	headerStyle: { backgroundColor: "#2C6BED" },
	headerTitleStyle: { color: "white" },
	headerTintColor: "white",
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={globalScreenOptions}>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
