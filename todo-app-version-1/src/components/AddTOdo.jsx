function AddTOdo() {
  return (
    <div class="row">
      <div class="col-4">
        <input type="text" placeholder="Enter Todo Here" />
      </div>
      <div class="col-4">
        <input type="date"></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTOdo;
