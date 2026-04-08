import "./App.css";
import CreatePermission from "./components/CreatePermission";
import CreateRole from "./components/CreateRole";
import AssignRole from "./components/AssignRole";
import CheckPermission from "./components/CheckPermission";
import PermissionList from "./components/PermissionList";

function App() {
  return (
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>RBAC Panel</h2>
        <ul>
          <li>Create Permission</li>
          <li>Create Role</li>
          <li>Assign Role</li>
          <li>Check Permission</li>
        </ul>
      </div>

      {/* Main */}
      <div className="main">
        <h1 className="title">RBAC Dashboard 🚀</h1>

        <div className="grid">

          <div className="card">
            <CreatePermission />
          </div>

          <div className="card">
            <CreateRole />
          </div>

          <div className="card">
            <AssignRole />
          </div>

          <div className="card">
            <CheckPermission />
          </div>

          <div className="card">
            <PermissionList />
          </div>
          

        </div>
      </div>

    </div>
  );
}

export default App;