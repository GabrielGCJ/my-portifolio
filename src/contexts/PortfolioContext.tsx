import { ReactNode, createContext, useState } from "react";

interface CreateContextType {
  menuMobileOptions: boolean;
  setMenuMobileOptions: (boolean: boolean) => void;
}

export const PortfolioContext = createContext({} as CreateContextType);

interface PortfolioContextProviderProps {
  children: ReactNode;
}

export const PortfolioContextProvider = ({
  children,
}: PortfolioContextProviderProps) => {
  const [menuMobileOptions, setMenuMobileOptions] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        menuMobileOptions,
        setMenuMobileOptions,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
