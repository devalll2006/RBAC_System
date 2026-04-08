import { useEffect, useState } from "react";
import api from "../api";

function CreateRole() {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    api.get("permissions/").then(res => setPermissions(res.data));
  }, []);

  const handleCheckbox = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("Selected Permissions:", selected); 

      await api.post("roles/", {
        name,
        permissions: selected
      });

      alert("Role Created");
    } catch (err) {
      console.error(err.response?.data);
    }
  };

  return (
    <div>
      <h2>Create Role</h2>

      <input
        placeholder="Role Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <h4>Select Permissions:</h4>
      {permissions.map(p => (
      <div key={p.id} className="permission-item">
        
        {/* Left side name */}
        <span>{p.name}</span>

        {/* Right side checkbox */}
        <input
          type="checkbox"
          checked={selected.includes(p.id)}
          onChange={() => handleCheckbox(p.id)}
        />
      </div>
    ))}
      <button onClick={handleSubmit} style={{marginTop:'10px'}}>Create Role</button>
    </div>
  );
}

export default CreateRole;