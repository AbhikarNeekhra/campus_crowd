import { useState, useEffect } from 'react';
import { User } from '../Services/authServices';
import authService from '../Services/authServices';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserDataAsync = async (email: string, password: string) => {
      try {
        const userData = await authService.fetchUserFromAPI(email, password);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDataAsync('email@example.com', 'password123');
  }, []);

  return { user, isLoading };
};

export default useAuth;