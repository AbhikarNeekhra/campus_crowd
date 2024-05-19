import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface PageCountContextInterface {
  pageCount: number;
  setPageCount: Dispatch<SetStateAction<number>>;
}

const defaultState = {
  pageCount: 0,
  setPageCount: () => {},
} as PageCountContextInterface;

export const PageCountContext = createContext(defaultState);

type PageCountProviderProps = {
  children: ReactNode;
};

export default function PageCountProvider({
  children,
}: PageCountProviderProps) {
  const [pageCount, setPageCount] = useState<number>(1);

  return (
    <PageCountContext.Provider value={{ pageCount, setPageCount }}>
      {children}
    </PageCountContext.Provider>
  );
}
