import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/Home";
// import { TestPage } from "./pages/TestPage";
import { WhatDoIDo } from "./components/WhatDoIDo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<WhatDoIDo />} />
      </Route>
    </Routes>
  );
}
