export const InputList = ({ list, openCustomizeModal }) => (
  <div className="col-md-6">
    {list.length !== 0 && (
      <>
        <h3 className="text-center">Form inputs </h3>
        <hr className="my-4" />

        <p className="mb-2">Step 2 - Customize field (if needed)</p>

        {list.map((el) => (
          <div key={el.id} className="card border-info mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              {el.formItem.options.label}
              <button type="button" className="btn btn-outline-info" onClick={openCustomizeModal.bind(null, el.id)}>Customize</button>
            </div>
          </div>
        ))}
      </>
    )}
  </div>
);

InputList.displayName = 'InputList';
