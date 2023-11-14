import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import ProfileHead from '../../components/ProfileHead/ProfileHead';
import './ProfilePage.scss'

const ProfilePage = () => {

    return (
        <>
            <section className='profile-page__container' >
                <ProfileHead />
                <ProfileComponent />
            </section>
        </>
    )
}

export default ProfilePage;