import React from "react";

const TablePreview = ({ value }) => {
  // Make sure value and value.table are both defined before trying to destructure value.table.rows
  if (!value || !value.table) {
    return <p>Table: Add Values</p>;
  }

  const [head, ...rows] = value.table.rows;
  // console.log(head);

  return (
    <table>
      {head.cells.filter(Boolean).length > 0 && (
        <thead>
          <tr>
            {head.cells.map(cell => (
              <th style={{ textAlign: "left" }} key={cell}>
                {cell}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.cells.map((cell, index) => {
              return <td key={cell}>{cell}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePreview;
