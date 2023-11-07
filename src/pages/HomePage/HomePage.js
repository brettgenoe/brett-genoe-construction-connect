import './HomePage.scss'
import search from "../../assets/icons/search.svg"


const HomePage = () => {

    return (
        <>
            <main className='home' >
                <h1 className='home__title' >Let's Connect!</h1>
                <h2 className='home__title-search'>Login to Search!</h2>
                <form className='search'>
                    <label className='search__label'>
                    </label>
                    <input
                        className='search__input'
                        placeholder='Search your neighbourhood'>
                    </input>
                    <button className='search__button'></button>
                </form>
                <article className='home__map'>

                </article>
                <div className='red-dot red-dot--1'></div>
                <div className='red-dot red-dot--2'></div>
                <div className='red-dot red-dot--3'></div>
                <section>
                    <h2>Your Search Results</h2>

                    <div>
                        <h3> Example 1 (Company's name)</h3>
                        <p>companyemail@email.com</p>
                        <p>company phone#</p>
                        <h4>Location</h4>
                        <span> 123 Example St.
                        </span>
                        <h4>Duration</h4>
                        <span>2 years</span>
                        <h4>Description</h4>
                        <p>Description of job goes here: we are building an apartment complex near downtown...</p>

                        <h4>Workers Needed:</h4>
                        <p><b>Carpenters:</b> 3</p>
                        <p><b>Electricians:</b> 2</p>
                        <p><b>Plumbers:</b> 1</p>
                        <p><b>Operators:</b> 1</p>
                        <p><b>Labours:</b> 7</p>

                    </div>

                </section>
            </main>
        </>
    )
}

export default HomePage;