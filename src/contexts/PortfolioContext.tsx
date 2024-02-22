import { ReactNode, createContext, useEffect, useState } from "react";

interface CreateContextType {
  menuMobileOptions: boolean;
  activateMobileOptions: () => void
  disableMobileOptions: () => void
  widthScream: number
}

export const PortfolioContext = createContext({} as CreateContextType);

interface PortfolioContextProviderProps {
  children: ReactNode;
}

export const PortfolioContextProvider = ({
  children,
}: PortfolioContextProviderProps) => {
  const [menuMobileOptions, setMenuMobileOptions] = useState(false);
  const [widthScream, setWidthScream] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScream(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthScream]);

const activateMobileOptions = () => {
  setMenuMobileOptions(true)
}

const disableMobileOptions = () => {
  setMenuMobileOptions(false)
}


  return (
    <PortfolioContext.Provider
      value={{
        menuMobileOptions,
        activateMobileOptions,
        disableMobileOptions,
        widthScream
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
