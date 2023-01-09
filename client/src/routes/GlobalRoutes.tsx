import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login } from "../pages/Login";
import { RegisterUsers } from "../components/RegisterUsers";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";
import { ListUsers } from "../components/ListUsers";
import { Product } from "../pages/Product";
import {RegisterProducts} from '../components/RegisterProducts'

import { RequireAuth } from "../helpers/RequireAuth";

import { AuthProvider, AuthContext } from "../contexts/auth";

export const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/user"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
          <Route
            path="/user/register"
            element={
              <RequireAuth>
                <RegisterUsers />
              </RequireAuth>
            }
          />
          <Route
            path="/user/consult"
            element={
              <RequireAuth>
                <ListUsers />
              </RequireAuth>
            }
          />
          <Route
            path="/user/edit"
            element={
              <RequireAuth>
                <ListUsers />
              </RequireAuth>
            }
          />


          <Route
            path="/product"
            element={
              <RequireAuth>
                <Product />
              </RequireAuth>
            }
          />
          <Route
            path="/product/register"
            element={
              <RequireAuth>
                <RegisterProducts/>
              </RequireAuth>
            }
          />
          <Route
            path="/product/consult"
            element={
              <RequireAuth>
                <Product />
              </RequireAuth>
            }
          />
          <Route
            path="/product/edit"
            element={
              <RequireAuth>
                <Product />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
