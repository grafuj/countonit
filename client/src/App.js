import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTrash,
  faImage,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import Departments from "./Components/Departments";
import Items from "./Components/Items/Items";
import Folders from "./Components/Folders/Folders";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard.jsx";
import Department from "./Components/Department";
import Nav from "./Components/Nav";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';

library.add(fab, faTrash, faImage, faCirclePlus);

export default function App() {
  const [state, setState] = useState({
    folders: [],
    departments: [],
    items: [],
  });
  useEffect(() => {
    Promise.all([
      axios.get("/api/folders"),
      axios.get("/api/departments"),
      axios.get("/api/items"),
    ])
      .then((all) => {
        const folders = all[0].data;
        const departments = all[1].data;
        const items = all[2].data;
        // console.log("promise return:", departments);
        setState((prev) => ({ ...prev, folders, departments, items }));
        console.log(state);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log("state.department:", state.departments);

  return (
    <BrowserRouter>
      <Nav />
      <main className="main-window-space">
        <Routes>
          <Route path="*" element={<h1>404: SERIOUSLY? WRONG PAGE!!!</h1>} />
          <Route
            path="/"
            element={
              <Dashboard
                items={state.items}
                folders={state.folders}
                departments={state.departments}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                items={state.items}
                folders={state.folders}
                departments={state.departments}
              />
            }
          />
          <Route
            path="/departments"
            element={<Department departments={state.departments} />}
          />
          <Route
            path="/departments/:id"
            element={
              <Department departments={state.departments} items={state.items} />
            }
          />
          <Route
            path="/folders"
            element={
              <Folders
                folders={state.folders}
                departments={state.departments}
                items={state.items}
              />
            }
          />
          <Route
            path="/departments"
            element={<Departments departments={state.departments} />}
          />
          <Route
            path="/items/new"
            element={
              <Items
                items={state.items}
                departments={state.departments}
                folders={state.folders}
              />
            }
          />
          <Route
            path="/items/:id"
            element={
              <Items
                items={state.items}
                departments={state.departments}
                folders={state.folders}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
