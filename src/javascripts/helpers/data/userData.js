import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json`)
    .then((response) => {
      const userObjects = response.data;
      const users = [];
      Object.keys(userObjects).forEach((usersId) => {
        userObjects[usersId].id = usersId;
        users.push(userObjects[usersId]);
      });
      resolve(users);
    })
    .catch((err) => reject(err));
});

export default { getUsers };
