import utils from '../../helpers/utils';

const showBoardForm = () => {
  const domString = `
      <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Board Title:</label>
        <div class="col-sm-10">
          <input class="form-control" id="newBoardTitle" placeholder="Title">
        </div>
      </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-success" id="boardCreateBtn">Create Pin</button>
          </div>
        </div>
      </form>
      `;
  utils.printToDom('#new-board', domString);
};

export default { showBoardForm };
