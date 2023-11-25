import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null)
    const token = sessionStorage.getItem('token')


    const fetchUserData = async () => {
        try {
            if (!token) {
                throw new Error('No authentication token found');
            }
            console.log('sending request with token', token)

            const response = await axios.get('http://localhost:8080/api/users/current', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const userData = response.data;
            console.log(response.data)
            setCurrentUser(userData);
            setLoggedIn(true);

        } catch (error) {
            console.log(token)
            console.error('Error fetching user data on authContext:', error);
            setCurrentUser(null);
            setLoggedIn(false);
        }
    };

    const logIn = async () => {
        try {
            sessionStorage.setItem('authToken', 'exampleAuthToken');

            const userData = await fetchUserData();

            setCurrentUser(userData);
            setLoggedIn(true);
        } catch (error) {

            console.error('Error logging in:', error);
        }
    };

    const logOut = () => {

        sessionStorage.removeItem('authToken');

        setCurrentUser(null);
        setLoggedIn(false);
    };

    useEffect(() => {
        fetchUserData();
    }, []);


    const value = {
        currentUser,
        loggedIn,
        logIn,
        logOut,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;