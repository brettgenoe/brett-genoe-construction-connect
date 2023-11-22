import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import axios from "axios";
import './App.scss';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const logIn = async () => {
    try {
      console.log("kenny loggins");
      const response = await axios.get('/api/users/current');
      if (response.data) {
        const userData = response.data;
        setLoggedIn(true);
        setCurrentUser(userData);
      } else {
        console.error("log in error: No user data in the response");
      }
    } catch (error) {
      console.error("log in error", error);
    }
  };

  const logOut = () => {
    console.log("loggins out");
    sessionStorage.removeItem("token");
    setLoggedIn(false);
  };

  const AuthValue = {
    loggedIn,
    logIn,
    logOut
  };
  return (
    <>
      <AuthContext.Provider value={AuthValue}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/post" element={<AddPostPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
