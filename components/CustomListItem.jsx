import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem, Avatar } from "@rneui/base";

const CustomListItem = ({ id, chatName, enterChat }) => {
	return (
		<ListItem>
			<Avatar
				rounded
				source={{
					uri: "https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all",
				}}
			/>
			<ListItem.Content>
				<ListItem.Title style={{ fontWeight: "800" }}></ListItem.Title>
				<ListItem.Subtitle
					numberOfLines={1}
					ellipsizeMode="tail"></ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
};

export default CustomListItem;

const styles = StyleSheet.create({});
