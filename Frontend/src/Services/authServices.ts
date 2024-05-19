export interface User {
    name: string;
    about: string;
    email: string;
    password: string;
    roles: string[];
  }

  const fetchUserFromAPI = async (email: string, password: string): Promise<User | null> => {
    try {
      const response = await fetch(`http://localhost:6969/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const user = await response.json();
        return user;
      } else {
        console.error('Failed to fetch user data');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  
  const authService = {
    fetchUserFromAPI,
  };
  
  export default authService;