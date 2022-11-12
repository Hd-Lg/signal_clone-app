import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBYnEHjJf4V6GJNDPB-2jYyRtuFwrfzXvk",
	authDomain: "signal-clone-app-6925f.firebaseapp.com",
	projectId: "signal-clone-app-6925f",
	storageBucket: "signal-clone-app-6925f.appspot.com",
	messagingSenderId: "436032777404",
	appId: "1:436032777404:web:7dac36e77abf4f5982b4b9",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth };
export default db;
