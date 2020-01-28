import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyAp2H42jEPKL3yk26ZHHyXbRjNwuoi0Hfo',
	authDomain: 'mobilecutz-411a8.firebaseapp.com',
	databaseURL: 'https://mobilecutz-411a8.firebaseio.com',
	projectId: 'mobilecutz-411a8',
	storageBucket: 'mobilecutz-411a8.appspot.com',
	messagingSenderId: '150712665141',
	appId: '1:150712665141:web:a0274a9d9c1737e0669d7c',
	measurementId: 'G-T2DLFT75K5'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
