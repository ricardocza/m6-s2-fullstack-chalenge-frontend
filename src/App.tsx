import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UpdateUser } from "./pages/UpdateUser";
import { Clients } from "./pages/Clients";
import { Client } from "./pages/Client";
import { UpdateContact } from "./pages/UpdateContact";
import { UpdateClient } from "./pages/UpdateClient";

function App() {
  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients/:id" element={<Client />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/user/update" element={<UpdateUser/>} />
        <Route path="/client/update/:id" element={<UpdateClient/>} />
        <Route path="/contact/update/:id" element={<UpdateContact/>} />
      </Routes>
    </div>
  );
}

export default App;
