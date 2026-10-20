import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { PortfolioContextProvider } from "./contexts/PortfolioContext";
import { LoadingScreen } from "./components/LoadingScreen";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingStartedAt = useRef(performance.now());

  useEffect(() => {
    document.getElementById("initial-loader")?.remove();

    let hideTimer: number | undefined;
    const finishLoading = () => {
      const elapsed = performance.now() - loadingStartedAt.current;
      const remaining = Math.max(0, 1000 - elapsed);
      hideTimer = window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (hideTimer !== undefined) window.clearTimeout(hideTimer);
    };
  }, []);

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
