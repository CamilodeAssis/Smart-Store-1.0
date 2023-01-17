import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth'

type Props = {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {

    const { authenticated, loading } = useContext(AuthContext);
    

    if(loading) {
        return <div>Loading...</div>;
    }

    if (authenticated) {
        return children;
    } else {
        return <Navigate to="/login" />
    }
}
