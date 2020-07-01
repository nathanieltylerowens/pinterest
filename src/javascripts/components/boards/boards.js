import boardsData from '../../helpers/data/boardsData';
import utils from '../../helpers/utils';

const buildBoards = () => {
  boardsData.getBoards()
    .then((boards) => {
      let domString = `
      <h1 class="text-center">Boards</h1>
      <div class="d-flex justify-content-center" id="boardsContainer">
      `;
      boards.forEach((board) => {
        domString += `<button class="btn btn-danger boardsbtn" id="${board.id}">${board.title}</button>`;
      });

      domString += '</div>';

      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('boards broke', err));
};

export default { buildBoards };
