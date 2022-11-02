import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
    return (
        <div>
            <div className="field has-addons">

                <p className="control">
                    <button className="button is-static is-medium">
                        Search
                    </button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Restaurants" />
                </p>
                <p className="control">
                    <button className="button is-static is-medium">
                        Location
                    </button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Boiling Springs" />
                </p>
                <button className={`button is-medium ${styles['search-button']}`}>
                    <span className="icon is-small">
                        <i className="fas fa-search"></i>
                    </span>
                </button>
            </div>
        </div>


    );
}