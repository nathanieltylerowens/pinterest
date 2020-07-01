import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boards/boards';
import userList from '../../components/users/users';

const authDiv = $('#auth');
const boardDiv = $('#boards');
const logoutButton = $('#navbar-logout-button');
const userDiv = $('#users');
const pinDiv = $('#pins');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      userDiv.removeClass('hide');
      pinDiv.removeClass('hide');

      boardList.buildBoards();
      userList.buildUsers();
    } else {
      authDiv.removeClass('hide');
      boardDiv.addClass('hide');
      logoutButton.addClass('hide');
      userDiv.addClass('hide');
      pinDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
