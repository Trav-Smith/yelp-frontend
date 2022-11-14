import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult() {
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='business' className={styles['business-image']} />
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating />
                <p><span class="tag">
                    Burgers
                </span> <span class="tag">
                        Fast Food
                    </span></p>
            </div>
            <div className={styles['contact-info']}>
                <p>18645999999</p>
                <p>Example Street 4</p>
                <p>29316 Boiling Springs</p>
            </div>
        </div>
    );
}