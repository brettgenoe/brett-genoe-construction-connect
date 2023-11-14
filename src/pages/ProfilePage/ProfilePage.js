import React from 'react';
import AddProfile from '../../components/AddProfile/AddProfile';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import ProfileHead from '../../components/ProfileHead/ProfileHead';
import './ProfilePage.scss'

const ProfilePage = () => {

    return (
        <>
            <main className='profile-page__container' >
                <ProfileHead />
                <ProfileComponent />
                <AddProfile />
            </main>
        </>
    )
}

export default ProfilePage;