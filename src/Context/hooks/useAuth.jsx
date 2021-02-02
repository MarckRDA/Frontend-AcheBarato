import { useState } from "react";
import { useEffectOnce } from "react-use";
import { api } from "../../services/api";

const TOKEN_USER = "token";
const USER = "user";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffectOnce(() => {
    async function loadStorageData() {
      const userLocalStorage = localStorage.getItem(USER);
      const tokenlocalStorage = localStorage.getItem(TOKEN_USER);

      if (userLocalStorage && tokenlocalStorage) {
        setUser(JSON.parse(userLocalStorage));
        api.defaults.headers.Authorization = `Bearer ${tokenlocalStorage}`;
        api.defaults.headers.UserId = `${JSON.parse(userLocalStorage).userId}`;
        setIsAuthenticated(true);
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function login({ email, password }) {
    const response = await api.post("/users/login", { email, password });
    localStorage.setItem(TOKEN_USER, response.data.token);
    localStorage.setItem(USER, JSON.stringify(response.data.user));
    setIsAuthenticated(true);
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);
    setIsAuthenticated(false);
  }
  
  return { isAuthenticated, login, user, signOut, loading };
}
