import pins from '../components/pins/pins';
import utils from './utils';
import deletePin from '../components/deletePin/deletePin';
import deleteBoard from '../deleteBoard/deleteBoard';
import pinForm from '../components/newPin/newPin';
import boardForm from '../components/newBoard/newBoard';
import boards from '../components/boards/boards';
import update from '../components/updatePin/updatePin';

const boardClick = (e) => {
  pins.displayPinsEvent(e);
  $('#pins').removeClass('hide');
  $('#boards').addClass('hide');
};

const homeBoards = () => {
  utils.clearDom('#pins');
  utils.clearDom('#new-pin');
  utils.clearDom('#new-board');
  $('#pins').addClass('hide');
  $('#boards').removeClass('hide');
};

const deletePinEvent = (e) => {
  deletePin.removePinEvent(e);
};

const deleteBoardEvent = (e) => {
  deleteBoard.removeBoard(e);
};

const pinFormEvent = (e) => {
  pinForm.showForm(e);
};

const addPinEvent = (e) => {
  pins.addPin(e);
  utils.clearDom('#new-pin');
};

const boardFormEvent = (e) => {
  boardForm.showBoardForm(e);
  $('#new-board').removeClass('hide');
};

const addBoardEvent = (e) => {
  boards.addBoard(e);
};

const updatePinFormEvent = (e) => {
  update.updatePinForm(e);
};

const movePin = (e) => {
  update.updatePin(e);
};

const clickEvents = () => {
  $('body').on('click', '.boardsbtn', boardClick);
  $('body').on('click', '.home-btn', homeBoards);
  $('body').on('click', '.delete-pin', deletePinEvent);
  $('body').on('click', '.delete-board', deleteBoardEvent);
  $('body').on('click', '#show-new-form', pinFormEvent);
  $('body').on('click', '#pinCreateBtn', addPinEvent);
  $('body').on('click', '#new-board-form', boardFormEvent);
  $('body').on('click', '#boardCreateBtn', addBoardEvent);
  $('body').on('click', '.move-pin', updatePinFormEvent);
  $('body').on('click', '.selectTheBoard', movePin);
};

export default { clickEvents };
