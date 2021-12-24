import React from 'react'
import InstagramLogo from '../../assets/images/instagram_logo_alt.png'
import Icon from '../Icon/Icon'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={InstagramLogo} alt="Instagram" />
                </div>
                <div className={styles.search}>

                </div>
                <div className={styles.navigation}>
                    <div className={styles.navigationButton}>
                        <Icon icon="home" />
                    </div>
                    <div className={styles.navigationButton}>
                        <Icon icon="directsAlt" />
                    </div>
                    <div className={styles.navigationButton}>
                        <Icon icon="newPost" />
                    </div>
                    <div className={styles.navigationButton}>
                        <Icon icon="explore" />
                    </div>
                    <div className={styles.navigationButton}>
                        <Icon icon="likeAlt" />
                    </div>
                    <div className={styles.navigationButton}>
                        <div className={styles.userProfile}>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
