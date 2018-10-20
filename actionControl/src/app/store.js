import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as appReducers from 'app/ducks';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "",
  authDomain: "ade-hack.firebaseapp.com",
  databaseURL: "https://ade-hack.firebaseio.com",
  projectId: "ade-hack",
  storageBucket: "ade-hack.appspot.com",
  messagingSenderId: "924216259008"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

const createStoreWithFirebase = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase)
)(createStore)

let middleware = applyMiddleware(thunk);
const reducers = combineReducers({
  ...appReducers,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

if (__DEV__ && __CLIENT__ && typeof window.devToolsExtension === 'function') {
  middleware = compose(middleware, window.devToolsExtension());
}

export default createStoreWithFirebase(reducers, middleware);
