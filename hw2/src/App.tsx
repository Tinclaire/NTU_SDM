import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailPage } from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="details/:id/:semester" element={<DetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  )
}

export default App;
