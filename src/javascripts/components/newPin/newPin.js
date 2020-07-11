import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
      <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Title:</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="newPinTitle" placeholder="Title">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Image:</label>
        <div class="col-sm-10">
          <input type="html" class="form-control" id="newPinImage" placeholder="Image Address">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Article:</label>
        <div class="col-sm-10">
          <input type="html" class="form-control" id="newPinText" placeholder="Have you ever heard the tragedy of Darth Plegueis the wise?">
        </div>
      </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-success" id="pinCreateBtn">Create Pin</button>
          </div>
        </div>
      </form>
      `;
  utils.printToDom('#new-pin', domString);
};

export default { showForm };
