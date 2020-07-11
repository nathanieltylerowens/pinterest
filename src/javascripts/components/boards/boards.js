import firebase from 'firebase/app';
import 'firebase/auth';
import boardsData from '../../helpers/data/boardsData';
import utils from '../../helpers/utils';

const addBoard = (e) => {
  e.preventDefault();

  const newBoard = {
    title: $('#newBoardTitle').val(),
    uid: firebase.auth().currentUser.uid,
  };
  boardsData.addNewBoard(newBoard)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildBoards())
    .catch((err) => console.error('new board broke', err));
};

const buildBoards = () => {
  boardsData.getBoards()
    .then((boards) => {
      let domString = `
      <h3 class="text-center">Boards</h3>
      <div id="new-board" class="hide"></div>
      <div class="d-flex justify-content-center" id="boardsContainer">
      <button class="btn btn-success" id="new-board-form"><i class="fas fa-plus"></i>  <i class="fas fa-clipboard"></i></button>
      `;
      boards.forEach((board) => {
        domString += `<button class="btn btn-danger boardsbtn" id="${board.id}">${board.title}</button>`;
        domString += `<button class="btn btn-danger delete-board" id="${board.id}">Delete ${board.title}</button>`;
      });

      domString += '</div>';

      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('boards broke', err));
};

export default { buildBoards, addBoard };
