import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type User = {
  name: string;
  email: string;
  password: string;
  imagename: string;
  about: string;
  imageUrl: string; // Add imageUrl property to User type
};

export interface UserContextInterface {
  user: User;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setImagename: Dispatch<SetStateAction<string>>;
  setAbout: Dispatch<SetStateAction<string>>;
  setImageUrl: Dispatch<SetStateAction<string>>; // Add setImageUrl function
}

const defaultState = {
  user: {
    name: "",
    email: "",
    password: "",
    imagename: "",
    about: "",
    imageUrl: "", // Add initial value for imageUrl
  },
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setImagename: () => {},
  setAbout: () => {},
  setImageUrl: () => {}, // Add setImageUrl setter function
} as UserContextInterface;

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    imagename: "",
    about: "",
    imageUrl: "", // Add initial value for imageUrl
  });

  const setName = (name: string) =>
    setUser((prevUser) => ({ ...prevUser, name }));
  const setEmail = (email: string) =>
    setUser((prevUser) => ({ ...prevUser, email }));
  const setPassword = (password: string) =>
    setUser((prevUser) => ({ ...prevUser, password }));
  const setImagename = (imagename: string) =>
    setUser((prevUser) => ({ ...prevUser, imagename }));
  const setAbout = (about: string) =>
    setUser((prevUser) => ({ ...prevUser, about }));
  const setImageUrl = (
    imageUrl: string // Define setImageUrl setter function
  ) => setUser((prevUser) => ({ ...prevUser, imageUrl }));

  return (
    <UserContext.Provider
      value={{
        user,
        setName,
        setEmail,
        setPassword,
        setImagename,
        setAbout,
        setImageUrl, // Provide setImageUrl in the context value
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
