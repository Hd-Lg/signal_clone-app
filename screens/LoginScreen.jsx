import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "@rneui/base";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Signal_Logo from "../assets/signal_logo.webp";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		});

		return unsubscribe;
	}, []);

	const signIn = () => {};
	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Image source={Signal_Logo} style={{ width: 200, height: 200 }} />
			<View style={styles.inputContainer}>
				<Input
					placeholder="Email"
					autoFocus
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			<Button
				title={"Login"}
				onPress={signIn}
				containerStyle={styles.button}
			/>
			<Button
				title={"Register"}
				onPress={() => navigation.navigate("Register")}
				type="outline"
				containerStyle={styles.button}
			/>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 10,
	},
});
