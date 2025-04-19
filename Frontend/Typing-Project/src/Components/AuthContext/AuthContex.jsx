import { createContext, useContext, useState, useEffect } from "react";
import { login as apiLogin, register as apiRegister, fetchUser } from "../../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]     = useState(null);
  const [loading, setLoading] = useState(true);

  // load current user
  const fetchUserDetails = async () => {
    try {
      const data = await fetchUser();
      setUser(data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUserDetails(); }, []);

  const login = async creds => {
    await apiLogin(creds);
    await fetchUserDetails();
  };

  const register = async info => {
    await apiRegister(info);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
