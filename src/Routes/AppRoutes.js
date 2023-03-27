import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "../Components/UserList";
import User from "../Components/User";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="users/:user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
