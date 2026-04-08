import { useEffect, useState } from "react";
import api from "../api";

function AssignRole() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [userId, setUserId] = useState("");
  const [roleId, setRoleId] = useState("");

  useEffect(() => {
  fetchUsers();
  api.get("roles/").then(res => setRoles(res.data));
}, []);
  const assign = async () => {
    await api.patch(`users/${userId}/`, {
      role: roleId
    });

    alert("Role Assigned");
  };
  const fetchUsers = () => {
  api.get("users/").then(res => setUsers(res.data));
};

  return (
    <div>
      <h2>Assign Role</h2>

      <select onChange={e => setUserId(e.target.value)}>
        <option>Select User</option>
        {users.map(u => (
          <option key={u.id} value={u.id}>{u.username}</option>
        ))}
      </select>

      <select onChange={e => setRoleId(e.target.value)}>
        <option>Select Role</option>
        {roles.map(r => (
          <option key={r.id} value={r.id}>{r.name}</option>
        ))}
      </select>

      <button onClick={assign}>Assign</button>
    </div>
  );
}

export default AssignRole;