import { Button, Input } from "@rneui/base";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import db from "../firebase";

const AddChat = ({ navigation }) => {
	const [input, setInput] = useState("");

	const createChat = async () => {
		await db
			.collection("chats")
			.add({
				chatName: input,
			})
			.then(() => {
				navigation.goBack();
			})
			.catch((error) => alert(error));
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Add a new chat",
			headerBackTitle: "Chats",
		});
	}, []);

	return (
		<View style={styles.container}>
			<Input
				placeholder="Enter a chat name"
				value={input}
				onChangeText={(text) => setInput(text)}
				onSubmitEditing={createChat}
				leftIcon={<AntDesign name="wechat" size={24} color="black" />}
			/>
			<Button onPress={createChat} title={"Create new chat"} />
		</View>
	);
};

export default AddChat;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 30,
		height: "100%",
	},
});
