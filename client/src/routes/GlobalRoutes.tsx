import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/Login";
import { User } from "../components/User";
import { Dashboard } from "../components/Dashboard";


export const GlobalRoutes = () => {
    return (       
            <Routes>
                <Route path="/"  element={<Dashboard />}/>
                <Route path="/login"  element={<Login />}/>
                <Route path="/user"  element={<User />}/>
            </Routes>        
    );

}