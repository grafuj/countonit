import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Departments from "./Components/Departments";
import Items from "./Components/Items";
import Folders from "./Components/Folders";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function App() {
  const [state, setState] = useState({ folders: [], departments: [], items: [] });
  useEffect(() => {
    Promise.all([
      axios.get("/api/folders"),
      axios.get("/api/departments"),
      axios.get("/api/items"),
    ]).then((all) => {
      const folders = all[0].data;
      const departments = all[1].data;
      const items = all[2].data;
      console.log("promise return:", departments);
      setState((prev) => ({ ...prev, folders, departments, items }));
    })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log("state.department:", state.departments);

  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/folders" element={<Folders folders={state.folders} />} />
          <Route path="/departments" element={<Departments departments={state.departments} />} />
          <Route path="/items" element={<Items items={state.items} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}