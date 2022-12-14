import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary(props) {
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>{props.term}</strong> {props.location}</h1>
                <p>Showing 1-20 out of 543 results</p>
            </div>
            <div className={styles.filters}>
                <button className="button">
                    <span className="icon">
                        <i className="fas fa-sliders-h"></i>
                    </span>
                    <span>All Filters</span>
                </button>
                <button className="button">
                    <span className="icon">
                        <i className="fas fa-clock"></i>
                    </span>
                    <span>Open Now</span>
                </button>

            </div>
        </div>

    );
}