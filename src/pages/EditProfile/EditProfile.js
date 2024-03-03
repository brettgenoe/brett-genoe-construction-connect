import { useAuth } from "../../components/AuthContext/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent"

const AddPostPage = () => {
    const { loggedIn, logOut } = useAuth();
    const authToken = sessionStorage.getItem('token');
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/users/current', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching current user info:', error);
            }
        };

        if (loggedIn) {
            fetchUserData();
        }
    }, [loggedIn, authToken]);


    return (
        <>
            <h1>Edit your profile {userData.first_name}</h1>
            <ProfileComponent
            userData= {userData} />
        </>
    )
}

export default AddPostPage