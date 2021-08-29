
export const PropsTable = ({ table }) => (
  <div className="table-responsive mt-4">
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Key</th>
          <th scope="col">Type</th>
          <th scope="col">Default</th>
          <th scope="col">Required</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {table.map((e) => (
          <tr key={e.key}>
            <td>{e.key}</td>
            <td>{e.type}</td>
            <td>{e.default}</td>
            <td>{e.required}</td>
            <td>{e.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
