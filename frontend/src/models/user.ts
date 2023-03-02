import { useState, useCallback } from 'react'

export default function useAuthModel() {
  const [user, setUser] = useState<API.IUser>()

  const signin = useCallback((name: string, password: string) => {
    setUser({
      id: 1,
      name,
      password
    });
  }, []);

  const signout = useCallback(() => {
    setUser({} as API.IUser);
  }, []);

  return {
    user,
    signin,
    signout
  }
}