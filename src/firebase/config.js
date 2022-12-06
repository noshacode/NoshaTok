//Reference https://www.youtube.com/watch?v=PP4Tr0l08NE&ab_channel=TraversyMedia

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC-18eSnVYzjWMPkFcv4RFUyqaCPdpFF8M",
	authDomain: "noshatik-3254b.firebaseapp.com",
	projectId: "noshatik-3254b",
	storageBucket: "noshatik-3254b.appspot.com",
	messagingSenderId: "81136118375",
	appId: "1:81136118375:web:cfb20458b359807efb42c2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, timeStamp };
