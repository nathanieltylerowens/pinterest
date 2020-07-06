import boardData from '../helpers/data/boardsData';
import pinData from '../helpers/data/pinData';

const removeBoard = (e) => new Promise((resolve, reject) => {
  const boardId = e.target.closest('.btn').id;
  boardData.deleteBoard(boardId)
    .then(() => {
      pinData.pinByBoardId(boardId).then((boardpins) => {
        boardpins.forEach((pin) => {
          pinData.deleteBoardPin(pin.board);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

export default { removeBoard };
