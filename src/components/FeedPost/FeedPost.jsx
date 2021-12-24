import React from 'react'
import Icon from '../Icon/Icon'

import styles from './FeedPost.module.css'

const FeedPost = () => {
    return (
        <div className={styles.feedPost}>
            <div className={styles.postHeader}>
                <div className={styles.user}>
                    <div className={styles.userPhoto}>

                    </div>
                    <div className={styles.userName}>
                        <span>fulaninhoxqdl</span>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Icon icon="actions" />
                </div>
            </div>
            <div className={styles.postPhoto}>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/211420/ss_c34cdf130b9ac71c99196007d1e78c05305652b9.1920x1080.jpg?t=1580310551" alt="Teste" />
            </div>
            <div className={styles.postActions}>
                <div className={styles.leftActions}>
                    <div className={styles.action}>
                        <Icon icon="likeAlt" />
                    </div>
                    <div className={styles.action}>
                        <Icon icon="commentAlt" />
                    </div>
                    <div className={styles.action}>
                        <Icon icon="directsAlt" />
                    </div>
                </div>
                <div className={styles.rightActions}>
                    <div className={styles.action}>
                        <Icon icon="markAlt" />
                    </div>
                </div>
            </div>
            <div className={styles.commentsSection}>
                <div className={styles.comments}>
                    <div className={styles.comment}>
                        <span className={styles.user}>fulaninhoxqdl</span>
                        <span className={styles.commentText}>Testeeee</span>
                    </div>
                </div>
                <div className={styles.time}>
                    Há 55 minutos
                </div>
                <div className={styles.postComment}>
                    <div className={styles.reaction}>
                        <Icon icon="emoji" />
                    </div>
                    <div className={styles.commentInpu}>

                    </div>
                    <div className={styles.publishComment}>
                        Publicar
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedPost
