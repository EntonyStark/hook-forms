
export const PropsTable = ({ table, className }) => (
  <table className={className}>
    <thead>
      <tr>
        <th>Key</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
        <th>Description</th>
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
);
