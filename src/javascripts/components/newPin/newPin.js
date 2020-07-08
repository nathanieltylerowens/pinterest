import utils from '../../helpers/utils';
import boardsData from '../../helpers/data/boardsData';

const showForm = () => {
  boardsData.getBoards()
    .then((boards) => {
      let domString = `
      <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="newPinTitle" placeholder="Title">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Image</label>
        <div class="col-sm-10">
          <input type="html" class="form-control" id="newPinimage" placeholder="Image Addess">
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Boards</legend>
          <div class="col-sm-10">
          `;
      boards.forEach((board) => {
        domString += `
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="${board.id}">
              <label class="form-check-label">
              ${board.title}
              </label>
            </div>`;
      });
      domString += `
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-success" id="pinCreateBtn">Create Pin</button>
          </div>
        </div>
      </form>
      `;

      utils.printToDom('#new-pin', domString);
    })
    .catch((err) => console.error('new pin form broke', err));
};

export default { showForm };
