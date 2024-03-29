import {createStore, applyMiddleware, compose} from 'redux';
import {reduxFirestore, getFirestore} from "redux-firestore";
import {reactReduxFirebase, getFirebase} from "react-redux-firebase";
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import firebase from '../config';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
    reduxFirestore(firebase)
));

export default store;