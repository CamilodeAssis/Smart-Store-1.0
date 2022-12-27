import { Navigate } from "react-router-dom";
import {isLogged } from './AuthHeandler'
type Props = {
    children: JSX.Element;
}

export const RequireAuth = ({children}: Props) => {

    const isAuth = isLogged();
    
    
    if(isAuth){
        return children;
    }else {
        return <Navigate to='/login'/>
    }

}