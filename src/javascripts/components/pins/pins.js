import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const buildPins = (e) => {
  const boardType = e.target.id;
  let domString = '';
  pinData.buildPins(e)
    .then((pins) => {
      pins.forEach((pin) => {
        if (pin.board === boardType) {
          domString += `
          <div class="card" id="${pin.board}" style="width: 18rem;">
            <img class="card-img-top" src="${pin.photo}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${pin.title}</h5>
                <p class="card-text">${pin.article}</p>
                <button id="${pin.id}" class="btn btn-outline-warning delete-pin"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
          `;
        }
      });
      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('pins broke', err));
};

export default { buildPins };
