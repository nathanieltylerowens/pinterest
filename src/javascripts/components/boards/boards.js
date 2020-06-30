import boardsData from '../../helpers/data/boardsData';
import utils from '../../helpers/utils';
// get all mushrooms
// loop and creat dom
// print

const buildBoards = () => {
  boardsData.getBoards()
    .then((boards) => {
      console.warn('worked', boards);
      let domString = `
      <h1 class="text-center">Boards</h1>
      <div class="d-flex flex-wrap">
      `;
      boards.forEach((board) => {
        domString += `<button class="btn btn-danger">${board.title}</button>`;
      });

      domString += '</div>';

      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('broke', err));
};

export default { buildBoards };
