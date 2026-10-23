import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/Home";
import { WhatDoIDo } from "./components/WhatDoIDo";
import { ErrorPage } from "./pages/ErrorPage";
import { ChessPage } from "./pages/ChessPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="test" element={<WhatDoIDo />} />
      </Route>
        <Route path="/xadrez" element={<ChessPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
