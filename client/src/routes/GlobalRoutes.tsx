import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login } from "../pages/Login";
import { RegisterUsers } from "../components/Users/RegisterUsers";
import { Dashboard } from "../pages/Dashboard";
import { ListUsers } from "../components/Users/ListUsers";
import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";
import { RegisterProducts } from "../components/Product/RegisterProducts";
import { ListProducts } from "../components/Product/ListProducts";
import { EditProduct } from "../components/Product/EditProduct";


import { RegisterNormalUsers } from "../pages/RegisterNormalUsers";
import { NotFound } from "../pages/404";
import { RequireAuth } from "../helpers/RequireAuth";
import { Cart } from "../pages/Cart";

import { AuthProvider } from "../contexts/auth";

import { CartProvider } from "../contexts/cart";

import { SumProvider } from "../contexts/sum";

export const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <SumProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />

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
                path="/settings"
                element={
                  <RequireAuth>
                    <Settings />
                  </RequireAuth>
                }
              />

              <Route path="/cart" element={<Cart />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </SumProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
