import './HomePage.scss'

const HomePage = () => {

    return (
        <>
            <main className='home' >
                <h1 className='home__title' >Let's Connect!</h1>
                <h2 className='home__title-search'>Where are you searching?</h2>
                <article className='home__map'>

                    <span>insert map api here</span>

                </article>
            </main>
        </>
    )
}

export default HomePage;