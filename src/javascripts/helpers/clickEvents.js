import pins from '../components/pins/pins';
import utils from './utils';
import deletePin from '../components/deletePin/deletePin';

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

const clickEvents = () => {
  $('body').on('click', '.boardsbtn', boardClick);
  $('body').on('click', '.home-btn', homeBoards);
  $('body').on('click', '.delete-pin', deletePinEvent);
};

export default { clickEvents };
