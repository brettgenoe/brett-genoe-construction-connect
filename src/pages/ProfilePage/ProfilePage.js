import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import './ProfilePage.scss'

const ProfilePage = () => {

    return (
        <>
            <section className='profile-page__container' >
                <ProfileHeader />
                <ProfileComponent />
            </section>
        </>
    )
}

export default ProfilePage;