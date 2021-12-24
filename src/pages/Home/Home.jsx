import React from 'react'
import Feed from '../../components/Feed/Feed'
import Stories from '../../components/Stories/Stories'

import styles from './Home.module.css'

const Home = () => {
    return (
        <div className="container">
            <div className={styles.home}>
                <div className={styles.homeBox}>
                    <div className={styles.feedContainer}>
                        <div className={styles.storiesContainer}>
                            <Stories />
                        </div>
                        <Feed />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home