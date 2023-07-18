// main.js
import App from './components/App.svelte';
import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  // Your Firebase configuration here
};

firebase.initializeApp(firebaseConfig);

const app = new App({
  target: document.body,
});

export default app;