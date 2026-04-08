import { useEffect, useState } from "react";
import api from "../api";

function PermissionList() {
  const [permissions, setPermissions] = useState([]);

  const fetchPermissions = async () => {
    const res = await api.get("permissions/");
    setPermissions(res.data);
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    await api.delete(`permissions/${id}/`);
    fetchPermissions();
  };

  const handleUpdate = async (p) => {
    const newName = prompt("Enter new name", p.name);
    const newCode = prompt("Enter new code", p.code);

    if (newName && newCode) {
      await api.put(`permissions/${p.id}/`, {
        name: newName,
        code: newCode
      });
      fetchPermissions();
    }
  };

 return (
  <div>
    <h2>Permission List</h2>

    {permissions.map((p) => (
      <div
        key={p.id}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 0",
          borderBottom: "1px solid #eee"
        }}
      >
        
        <div>
          <b>{p.name}</b> ({p.code})
        </div>

        <div>
          <button
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              cursor: "pointer"
            }}
            onClick={() => handleUpdate(p)}
          >
            Edit
          </button>

          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => handleDelete(p.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);
}

export default PermissionList;