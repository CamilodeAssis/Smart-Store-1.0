import React, {
  Children,
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { api } from "../data/api";
import Cookies from "js-cookie";

type Props = {
  children: React.ReactNode;
};

interface AuthContextProps {
  doLogin: (email: string, password: string) => void;
  doLogout: (state: boolean) => void;
  authenticated: boolean;
  user: any;
  loading: boolean;
  error: any;

}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: Props) => {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();




  useEffect(() => {
    const recoveredUser = Cookies.get("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const doLogin = async (email: string, password: string) => {
    let date = new Date();
    date.setTime(date.getTime() + 600 * 1000); //86400

    const user = await api.login({ email, password });
    Cookies.set("user", JSON.stringify(user), { expires: date });
    
    if (user.error) {
      setError(user.error);
    } else {
      setUser(user);
      navigate("/");
    }
  };

  const doLogout = (state: boolean) => {
    if (state) {
      Cookies.remove("user");
      setUser("");
      navigate("/login");
    }
  };

  const contextValue: AuthContextProps = {
    authenticated: !!user,
    user,
    loading,
    error,
    doLogin,
    doLogout,

  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
