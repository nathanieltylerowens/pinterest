import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authdata from './helpers/data/authdata';
import clicks from './helpers/clickEvents';
import navbar from './components/myNavbar/myNavbar';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authdata.checkLoginStatus();
  auth.loginButton();
  clicks.clickEvents();
  navbar.logoutEvent();
};

init();
