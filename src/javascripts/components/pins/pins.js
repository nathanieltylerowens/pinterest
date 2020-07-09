import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
// import newPinForm from '../newPin/newPin';

const addPin = (e) => {
  e.preventDefault();

  const newPin = {
    title: $('#newPinTitle').val(),
    photo: $('#newPinImage').val(),
    article: $('#newPinText').val(),
    board: $('#newPinBoard').val(),
  };
  console.error(newPin);
};
const buildPins = (e) => {
  const boardType = e.target.id;
  let domString = '';
  pinData.buildPins(e)
    .then((pins) => {
      pins.forEach((pin) => {
        if (pin.board === boardType) {
          domString += `
          <div class="card" id="${pin.id}" style="width: 18rem;">
            <img class="card-img-top" src="${pin.photo}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${pin.title}</h5>
                <p class="card-text">${pin.article}</p>
                <button id="${pin.board}" class="btn btn-outline-warning delete-pin"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
          `;
        }
      });
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('pins broke', err));
};

export default { buildPins, addPin };
