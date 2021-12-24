import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome,
    faPaperPlane,
    faHeart,
    faEllipsisH,
    faComment,
    faBookmark,
    } from '@fortawesome/free-solid-svg-icons'
import { 
    faPaperPlane as faPaperPlaneAlt,
    faPlusSquare,
    faCompass,
    faHeart as faHeartAlt,
    faComment as faCommentAlt,
    faBookmark as faBookmarAlt,
    faSmile
    } from '@fortawesome/free-regular-svg-icons'

import styles from './Icon.module.css'

const Icon = ({icon, size = "md"}) => {

    const icons = {
        home: faHome,
        directs: faPaperPlane,
        directsAlt: faPaperPlaneAlt,
        newPost: faPlusSquare,
        explore: faCompass,
        like: faHeart,
        likeAlt: faHeartAlt,
        actions: faEllipsisH,
        comment: faComment,
        commentAlt: faCommentAlt,
        mark: faBookmark,
        markAlt: faBookmarAlt,
        emoji: faSmile
    };

    return (
        <div className={styles.icon}>
            <FontAwesomeIcon icon={icons[icon]} />
        </div>
    )
}

export default Icon
