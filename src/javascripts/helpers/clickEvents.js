import pins from '../components/pins/pins';
import utils from './utils';
import deletePin from '../components/deletePin/deletePin';
import deleteBoard from '../deleteBoard/deleteBoard';
import newPin from '../components/newPin/newPin';

const boardClick = (e) => {
  pins.buildPins(e);
  $('#pins').removeClass('hide');
  $('#boards').addClass('hide');
};

const homeBoards = () => {
  utils.clearDom('#pins');
  $('#pins').addClass('hide');
  $('#boards').removeClass('hide');
};

const deletePinEvent = (e) => {
  deletePin.removePinEvent(e);
};

const deleteBoardEvent = (e) => {
  deleteBoard.removeBoard(e);
};
const newPinFormEvent = (e) => {
  newPin.showForm(e);
};

const clickEvents = () => {
  $('body').on('click', '.boardsbtn', boardClick);
  $('body').on('click', '.home-btn', homeBoards);
  $('body').on('click', '.delete-pin', deletePinEvent);
  $('body').on('click', '.delete-board', deleteBoardEvent);
  $('body').on('click', '#show-new', newPinFormEvent);
};

export default { clickEvents };
