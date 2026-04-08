import { useState } from "react";
import api from "../api";

function CreatePermission() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async () => {
    await api.post("permissions/", { name, code });
    alert("Permission Created");
    setName("");
    setCode("");
  };

  return (
    <div>
      <h2>Create Permission</h2>

      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Code" value={code} onChange={e => setCode(e.target.value)} />

      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default CreatePermission;