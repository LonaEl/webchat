/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyAQ_7E6YFnoN2DJmtF8k_ce0_fvMsMahVE",
  authDomain: "friendlychat-92524.firebaseapp.com",
  projectId: "friendlychat-92524",
  storageBucket: "friendlychat-92524.appspot.com",
  messagingSenderId: "125440852704",
  appId: "1:125440852704:web:a79c92ea39f29fc12a4685"

};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}