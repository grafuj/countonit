import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Departments from "./components/Departments";
import Items from "./components/Items";
import Folders from "./components/Folders";
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
      </nav>
      <main>
      <Routes>
        <Route path="/folders" element={<Folders folders={state.folders} />}/>
        <Route path="/departments" element={<Departments departments={state.departments} />}/>
        <Route path="/items" element={<Items items={state.items}/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  )
}