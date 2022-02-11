import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAJbgGFyPp79tOkhA4HkKvilAj0EvUb0EM',
	authDomain: 'my-website-95c4c.firebaseapp.com',
	projectId: 'my-website-95c4c',
	storageBucket: 'my-website-95c4c.appspot.com',
	messagingSenderId: '265210325969',
	appId: '1:265210325969:web:1ec9406b92dcf0ac4c0ef0',
	measurementId: 'G-2KWP8MM34Y',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app);
