import 'firebase/auth';
import firebase from 'firebase/app';

import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardsData';
import pinData from '../../helpers/data/pinData';
import buildPins from '../pins/pins';

const updatePinForm = (e) => {
  const currentUser = firebase.auth().currentUser.uid;
  const pinId = e.target.closest('.card').id;
  let domString = `
    <div class="move">
    <div class="closeSelect">
    <i class="fas fa-window-close closeDropdown mb-1"></i>
    </div>
    <h6>Move To:</h6>
    <select id="selectBoard" class="custom-select">`;
  boardData.getBoards()
    .then((boards) => {
      boards.forEach((board) => {
        if (currentUser === board.uid) {
          domString += `<option value="${board.title}" data-board="${board.id}">${board.title}</option>`;
        }
      });
      domString += `
        </select>
        <button class="btn btn-info mt-2 selectTheBoard">Move</button>
      `;
      utils.printToDom(`#${pinId}dropDown`, domString);
    })
    .catch((err) => err);
};

const updatePin = (e) => {
  const selectedBoard = $('.new-pin').data('board');
  const pinId = e.target.closest('.card').id;
  pinData.buildPins()
    .then((pins) => {
      const pinById = pins.find((singlePin) => singlePin.id === pinId);
      const editedPin = {
        title: pinById.title,
        photo: pinById.photo,
        article: pinById.article,
        board: $('#selectBoard').find(':selected').data('board'),
      };
      pinData.updatePin(pinId, editedPin)
        .then(() => buildPins.buildPins(selectedBoard));
    })
    .catch((err) => (err));
};

export default { updatePin, updatePinForm };
