import pins from '../pins/pins';
import pinData from '../../helpers/data/pinData';

const removePinEvent = (e) => {
  const pinCardId = (e.target.closest('.card').id);

  pinData.deletePin(pinCardId)
    .then(() => {
      pins.buildPins(e);
    })
    .catch((err) => console.error('no delete pin', err));
};

export default { removePinEvent };
