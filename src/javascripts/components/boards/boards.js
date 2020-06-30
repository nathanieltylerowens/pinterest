import boardsData from '../../helpers/data/boardsData';
// import utils from '../../helpers/utils';
// get all mushrooms
// loop and creat dom
// print

const buildBoards = () => {
  boardsData.getBoards()
    .then((response) => console.warn('worked', response.data))
    .catch((err) => console.error('broke', err));
  // const domString = '<h1>I see boards</h1>';
  // utils.printToDom('#boards', domString);
};

export default { buildBoards };
