import {  Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { RegisterUsers } from "../components/RegisterUsers";
import { Dashboard } from "../components/Dashboard";
import { User } from "../components/User";
import { RequireAuth } from '../helpers/RequireAuth'
import { ListUsers } from '../components/ListUsers'


export const GlobalRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
            <Route path="/user/register" element={<RequireAuth><RegisterUsers /></RequireAuth>} />
            <Route path="/user/consult" element={<RequireAuth><ListUsers /></RequireAuth>} />
        </Routes>
    );

}