import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import EditProfile from "./pages/EditProfile/EditProfile"
import './App.scss';


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div 
          className="app-container"
          >
            <NavBar />
            <div className="content-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/post" element={<AddPostPage />} />
                <Route path="/editprofile" element={<EditProfile />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
