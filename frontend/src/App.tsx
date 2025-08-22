// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseCatalog from "./components/modules/CourseCatalog";
import CourseDetailPage from "./pages/CourseDetailPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseCatalog />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
