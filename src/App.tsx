import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { PortfolioContextProvider } from "./contexts/PortfolioContext";
import { LoadingScreen } from "./components/LoadingScreen";

export const App = () => {
  const [isLoading, setIsLoading] = useState(() => document.readyState !== "complete");

  useEffect(() => {
    document.getElementById("initial-loader")?.remove();

    if (!isLoading) return;

    const finishLoading = () => setIsLoading(false);
    window.addEventListener("load", finishLoading, { once: true });
    return () => window.removeEventListener("load", finishLoading);
  }, [isLoading]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {isLoading && <LoadingScreen />}
      <BrowserRouter>
        <PortfolioContextProvider>
          <Router />
        </PortfolioContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
