import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./Components/Layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
