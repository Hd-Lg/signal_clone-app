import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text } from "@rneui/base";

import { auth } from "../firebase.js";

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	// Before the screen paint, do this:
	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: "Back to Login",
			headerTitle: "Login",
		});
	}, [navigation]);

	const register = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				authUser.user.update({
					displayName: name,
					photoURL:
						imageUrl ||
						"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Text h3 style={{ marginBottom: 50 }}>
				Create a Signal Account
			</Text>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Full Name"
					autoFocus
					type="text"
					value={name}
					onChangeText={(text) => setName(text)}
				/>
				<Input
					placeholder="Email"
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					type="password"
					secureTextEntry
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Input
					placeholder="Profile Picture URL (optional)"
					type="text"
					value={imageUrl}
					onSubmitEditing={register}
					onChangeText={(text) => setImageUrl(text)}
				/>
			</View>
			<Button
				title={"Register"}
				onPress={register}
				raised
				containerStyle={styles.button}
			/>
		</KeyboardAvoidingView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",
	},
	button: {
		width: 200,
		marginTop: 10,
	},
	inputContainer: {
		width: 300,
	},
});
