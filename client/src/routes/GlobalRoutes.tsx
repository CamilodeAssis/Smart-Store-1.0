import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { User } from "../components/User";



export const GlobalRoutes = () => {
    return (       
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/login"  element={<Login />}/>
                <Route path="/user"  element={<User />}/>
            </Routes>        
    );

}