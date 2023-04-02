import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  function login(user: SetStateAction<null>) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
