import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css';

export function SubNav() {
    return (
        <div className={styles.container}>
            <div className={styles['sub-nav']}>
                <div>
                    <SubNavItem label='Restaurant' showRightBorder />
                </div>
                <div>
                    <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                        <span className="icon">
                            <i className="fas fa-pen"></i>
                        </span>
                        <span>Write a Review</span>
                    </button>
                    <button className={`button ${styles['subnav-button']}`}>
                        <span className="icon">
                            <i className="fas fa-hotel"></i>
                        </span>
                        <span>Businesses</span>
                    </button>
                </div>


            </div>
        </div >

    );
}