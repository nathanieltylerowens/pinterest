import usersData from '../../helpers/data/userData';
import utils from '../../helpers/utils';

const buildUsers = () => {
  usersData.getUsers()
    .then((users) => {
      let domString = '';
      users.forEach((user) => {
        domString += `<h5>Hello ${user.name}!</h5>`;
      });

      utils.printToDom('#users', domString);
    })
    .catch((err) => console.error('users broke', err));
};

export default { buildUsers };
