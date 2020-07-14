import './pins.scss';
import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const addPin = (e) => {
  e.preventDefault();
  const pinBoardId = $('#show-new-form').data('boardid');

  const newPin = {
    title: $('#newPinTitle').val(),
    photo: $('#newPinImage').val(),
    article: $('#newPinText').val(),
    board: pinBoardId,
  };
  pinData.addNewPin(newPin)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildPins(pinBoardId))
    .catch((err) => console.error('new pin broke', err));
};

const buildPins = (boardType) => {
  let domString = '';
  pinData.buildPins(boardType)
    .then((pins) => {
      domString += `<button class="btn btn-primary" id="show-new-form" data-boardId="${boardType}"><i class="fas fa-plus"></i>  <i class="fas fa-thumbtack"></i></button>`;
      pins.forEach((pin) => {
        if (pin.board === boardType) {
          domString += `
          <div class="card" id="${pin.id}" style="width: 18rem;">
            <img class="card-img-top" src="${pin.photo}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${pin.title}</h5>
              <p class="card-text">${pin.article}</p>
              <button id="${pin.board}" class="btn btn-outline-info delete-pin"><i class="fas fa-trash-alt"></i></button>
              <button class="btn btn-outline-info move-pin"><i class="fas fa-people-carry" data-board="${pin.boardId}"></i></button>
              <div id="${pin.id}dropDown"></div>
            </div>
          </div>
          `;
        }
      });
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('pins broke', err));
};

const displayPinsEvent = (e) => {
  const selectedBoard = e.target.id;
  buildPins(selectedBoard);
};

export default { buildPins, addPin, displayPinsEvent };
