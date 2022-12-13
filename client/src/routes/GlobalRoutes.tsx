import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/Login";
import { RegisterUsers } from "../components/RegisterUsers";
import { Dashboard } from "../components/Dashboard";
import { User } from "../components/User";


export const GlobalRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/register" element={<RegisterUsers />} />
        </Routes>
    );

}