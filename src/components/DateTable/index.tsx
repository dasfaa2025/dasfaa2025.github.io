const DateTable = ({
  values,
}: {
  values: { label: string; date: string; oldDate?: string }[];
}) => {
  return (
    <table>
      <tbody>
        {values.map((e) => (
          <tr key={e.label}>
            <td>{e.label}</td>
            <td>
              {e.date}
              {e.oldDate && (
                <>
                  {" "}
                  ⇐{" "}
                  <span className="line-through decoration-black/80 text-black/80">
                    {e.oldDate}
                  </span>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DateTable;
