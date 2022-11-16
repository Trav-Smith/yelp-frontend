import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {

    let navigate = useNavigate();

    function search(term, location) {

        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        navigate(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);

        /* this is a test
        function App() {
            return (
              <Routes>
                <Route path='/search' element={<Search />} />
                <Route path='/' element={<LandingPage />} />
              </Routes>
              
          
            );
    }

    export default App;
    */

    }

    return (
        <div className={styles.landing}>

            <div className={styles['search-area']}>
                <TopNav />
                <img src={logo} className={styles.logo} alt='logo' />

                <SearchBar search={search} />
                <SearchSuggestions />
            </div>


        </div>
    );
}