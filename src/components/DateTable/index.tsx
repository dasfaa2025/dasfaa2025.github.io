const DateTable = ({
  values,
}: {
  values: { label: string; date: string }[];
}) => {
  return (
    <table>
      <tbody>
        {values.map((e) => (
          <tr key={e.label}>
            <td>{e.label}</td>
            <td>{e.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DateTable;
