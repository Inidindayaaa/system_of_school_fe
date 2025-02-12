import React from "react";

export default function TableComponents({
  thead,
  tbody,
  handleDelete,
  handleEdit,
  handleDetail,
  buttonName,
  openAddModal, // Tambahkan fungsi untuk membuka modal
}) {
  return (
    <div className="container mt-4">
      <button className="btn btn-primary mb-3" onClick={openAddModal}>
        {buttonName}
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            {thead.map((head, index) => (
              <th key={index}>{head.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((item) => (
            <tr key={item.id}>
              {thead.map((head) => (
                // Gunakan [head.name.toLowerCase().replace(' ', '_')] untuk mengakses properti dinamis
                <td key={head.name} onClick={() => handleDetail(item)}>
                  {item[head.name.toLowerCase().replace(" ", "_")]}
                </td>
              ))}
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
