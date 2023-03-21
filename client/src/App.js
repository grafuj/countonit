import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Departments from "./components/Departments";
import Items from "./components/Items";
import Folders from "./components/Folders";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function App() {
  const [state, setState] = useState({folders: [], departments: [], items: []});
  useEffect(() => {
    Promise.all([
      axios.get("/api/folders"),
      axios.get("/api/departments"),
      axios.get("/api/items"),
    ]).then((all) => {
      const folders = all[0].data;
      const departments = all[1].data;
      const items = all[2].data;
      console.log("promise return:", departments)
      setState((prev) => ({ ...prev, folders, departments, items }));
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  console.log("state.department:", state.departments)

  return (
    <BrowserRouter>
      <nav>
        <Link to="/items">Items</Link>
        <Link to="/folders">Folders</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <main>
      <Routes>
        <Route path="/folders" element={<Folders folders={state.folders} />}/>
        <Route path="/departments" element={<Departments departments={state.departments} />}/>
        <Route path="/items" element={<Items items={state.items}/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
      </main>
    </BrowserRouter>
  )
}