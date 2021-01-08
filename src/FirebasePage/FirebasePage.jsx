// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication

// Configure Firebase.
//Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdF3PC7HsbGUYevJDaZ3gug3RBuuysyJU",
  authDomain: "tdtruong-website.firebaseapp.com",
  projectId: "tdtruong-website",
  storageBucket: "tdtruong-website.appspot.com",
  messagingSenderId: "282977398057",
  appId: "1:282977398057:web:e829e650d40cd5eacc9b38",
  measurementId: "G-PG6G8XXTB6"
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function FirebasePage() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  else
  {
    return (
    <div>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <a href="/#" onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
  }
}

export default FirebasePage;