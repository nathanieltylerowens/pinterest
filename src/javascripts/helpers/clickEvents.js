import pins from '../components/pins/pins';
import utils from './utils';

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

const clickEvents = () => {
  $('body').on('click', '.boardsbtn', boardClick);
  $('body').on('click', '.home-btn', homeBoards);
};

export default { clickEvents };
