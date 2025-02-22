import { create } from "zustand";
import { setAuth, getAuth, removeAuth } from "../localStorage/localstorage";

const useAuthStore = create((set) => ({
  token: null,
  userData: null,

  // Load auth data from AsyncStorage
  loadAuthData: async () => {
    const authData = await getAuth();
    if (authData) {
      set({ token: authData.token, userData: authData.user });
    }
  },

  // Set auth data (and persist it)
  setAuthData: async (token, userData) => {
    await setAuth(token, userData);
    set({ token, userData });
  },

  // Logout (clear auth data from AsyncStorage and store)
  logout: async () => {
    await removeAuth();
    set({ token: null, userData: null });
  },
}));

export default useAuthStore;
