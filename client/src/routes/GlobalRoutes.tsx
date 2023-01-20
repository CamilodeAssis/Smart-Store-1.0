import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login } from "../pages/Login";
import { RegisterUsers } from "../components/RegisterUsers";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";
import { ListUsers } from "../components/ListUsers";
import { Product } from "../pages/Product";
import { RegisterProducts } from "../components/Product/RegisterProducts";
import { ListProducts } from "../components/Product/ListProducts";
import { EditProduct } from "../components/Product/EditProduct";
import { Sales } from "../pages/Sales";
import { AddSaleOrder } from "../components/Sales/AddSaleOrder";
import { RegisterNormalUsers } from "../pages/RegisterNormalUsers";

import { RequireAuth } from "../helpers/RequireAuth";

import { AuthProvider, AuthContext } from "../contexts/auth";
import { AddQt } from "../components/Product/AddQt";
import { Home } from "../pages/Home";

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
                <Home />
              </RequireAuth>
            }
          />

<Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route path="/register" element={<RegisterNormalUsers />} />

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
                <RegisterProducts />
              </RequireAuth>
            }
          />
          <Route
            path="/product/consult"
            element={
              <RequireAuth>
                <ListProducts />
              </RequireAuth>
            }
          />
          <Route
            path="/product/edit"
            element={
              <RequireAuth>
                <EditProduct />
              </RequireAuth>
            }
          />

          <Route
            path="/sales"
            element={
              <RequireAuth>
                <Sales />
              </RequireAuth>
            }
          />

          <Route
            path="sales/saleOrder"
            element={
              <RequireAuth>
                <AddSaleOrder />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
