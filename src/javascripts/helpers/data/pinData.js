import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const buildPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const pinObjects = response.data;
      const pins = [];
      Object.keys(pinObjects).forEach((pinId) => {
        pinObjects[pinId].id = pinId;
        pins.push(pinObjects[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const pinByBoardId = (boardsId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardsId}"`)
    .then((response) => {
      const pinObj = response.data;
      const pins = [];
      if (pinObj) {
        Object.keys(pinObj).forEach((pinId) => {
          pinObj[pinId].id = pinId;
          pins.push(pinObj[pinId]);
        });
      }
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deleteBoardPin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default {
  buildPins,
  deletePin,
  pinByBoardId,
  deleteBoardPin,
};
