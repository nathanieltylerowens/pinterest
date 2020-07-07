import boardData from '../helpers/data/boardsData';
import boards from '../components/boards/boards';

const removeBoard = (e) => {
  const boardId = (e.target.closest('.btn').id);
  boardData.deleteBoard(boardId)
    .then(() => {
      boards.buildBoards(e);
    })
    .catch((err) => console.error('no delete board', err));
};

export default { removeBoard };
