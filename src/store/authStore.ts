import { parseJwtPayload } from '@/apis/utils';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  payload: any;
  authLogin: (accessToken: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  payload: null,
  authLogin: (accessToken: string) => {
    const payload = parseJwtPayload(accessToken);
    set({
      token: accessToken,
      payload: payload,
    });
    sessionStorage.setItem('session', accessToken);
  },
}));

export default useAuthStore;
