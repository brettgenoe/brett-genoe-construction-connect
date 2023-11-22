import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import axios from "axios";
import './App.scss';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  // const logIn = async () => {
  //   console.log("atttempting to kenny loggins");
  //   try {

  //     const response = await axios.get('/api/users/current');
  //     console.log(response)
  //     if (response.data) {
  //       const userData = response.data;
  //       setLoggedIn(true);
  //       setCurrentUser(userData);
  //       console.log("kenny loggins");
  //     } else {
  //       console.error("log in error: No user data in the response");
  //     }
  //   } catch (error) {
  //     console.error("log in error", error.message);
  //   }
  // };

  // const logOut = () => {
  //   console.log("loggins out");
  //   sessionStorage.removeItem("token");
  //   setLoggedIn(false);
  // };

  // const AuthValue = {
  //   loggedIn,
  //   logIn,
  //   logOut
  // };
  // console.log('App - AuthValue:', AuthValue);

  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
