import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boards/boards';

const authDiv = $('#auth');
const boardDiv = $('#boards');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      boardList.buildBoards();
    } else {
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
