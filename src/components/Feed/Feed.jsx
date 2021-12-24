import React from 'react'
import FeedPost from '../FeedPost/FeedPost'

import styles from './Feed.module.css'

const Feed = () => {
    return (
        <div className={styles.feed}>
            <FeedPost />
            <FeedPost />
        </div>
    )
}

export default Feed
