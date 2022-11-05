import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {
    const sizeClass = props.small ? '' : 'is-medium';
    return (
        <div>
            <div className="field has-addons">

                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>
                        Search
                    </button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="Restaurants" />
                </p>
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>
                        Location
                    </button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="Boiling Springs" />
                </p>
                <button className={`button ${sizeClass} ${styles['search-button']}`}>
                    <span className={`icon is-small ${styles['search-icon']}`}>
                        <i className="fas fa-search"></i>
                    </span>
                </button>
            </div>
        </div>


    );
}