import React from "react";
import { Routes, Route } from "react-router-dom";
import GenreResult from "../Main/GenreResult";
export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/singlePreview">
          <h1>SinglePreview</h1>
        </Route>
        <Route path="/termsAndServices">
          <h1>Terms & Services</h1>
        </Route>
        <Route path="/genres/:name" element={<GenreResult/>}/>
      </Routes>
    </div>
  );
}
