import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domstring = '<button id="google-auth" class="d-inline btn btn-outline-info"><i class="fab fa-google"></i>Login</button>';

  utils.printToDom('#auth', domstring);

  $('#google-auth').click(signMeIn);
};

export default { loginButton };
