import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import './App.scss';
import AddPostPage from "./pages/AddPostPage/AddPostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<ProfilePage />} />
          <Route path="/post" element={<AddPostPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
