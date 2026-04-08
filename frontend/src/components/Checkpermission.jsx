import { useState } from "react";
import api from "../api";

function CheckPermission() {
  const [userId, setUserId] = useState("");
  const [perm, setPerm] = useState("");
  const [result, setResult] = useState(null);

  const check = async () => {
    const res = await api.post("check-permission/", {
      user_id: userId,
      permission_code: perm
    });

    setResult(res.data.has_permission);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      
      <h2 style={{ marginBottom: "10px", color: "#333" }}>
        Check Permission
      </h2>

      <input
        placeholder="Enter User ID"
        onChange={(e) => setUserId(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      <input
        placeholder="Enter Permission Code"
        onChange={(e) => setPerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      <button
        onClick={check}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Check
      </button>

      {result !== null && (
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            color: result ? "green" : "red"
          }}
        >
          {result ? "Allowed" : "Denied"}
        </p>
      )}
    </div>
  );
}

export default CheckPermission;