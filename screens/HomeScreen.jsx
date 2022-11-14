import { Avatar } from "@rneui/base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../firebase";

const HomeScreen = ({ navigation }) => {
	const [chats, setChats] = useState([]);

	const signOutUser = () => {
		auth.signOut().then(() => {
			navigation.replace("Login");
		});
	};

	useEffect(() => {
		const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
			setChats(
				snapshot.docs.map((doc) => {
					id: doc.id;
					data: doc.data();
				})
			)
		);

		return unsubscribe;
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Signal",
			headerStyle: { backgroundColor: "#FFF" },
			headerTitleStyle: { color: "black" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ marginLeft: 20 }}>
					<TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
						<Avatar
							rounded
							source={{ uri: auth?.currentUser?.photoURL }}
						/>
					</TouchableOpacity>
				</View>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: 80,
						marginRight: 20,
					}}>
					<TouchableOpacity activeOpacity={0.5}>
						<AntDesign name="camerao" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() => navigation.navigate("AddChat")}>
						<MaterialCommunityIcons
							name="pencil-outline"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	return (
		<SafeAreaView>
			<ScrollView>
				{chats.map(({ id, data: { chatName } }) => (
					<CustomListItem id={id} chatName={chatName} key={id} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
