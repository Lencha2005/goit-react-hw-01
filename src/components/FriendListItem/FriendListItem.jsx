import React from 'react'
import styles from './FriendListItem.module.css'
import clsx from 'clsx';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={styles.item}>
    <img className={styles.img} src={avatar} alt="Avatar" width="48" />
    <p className={styles.name}>{name}</p>
    <p className={clsx(isOnline ? [styles.online] : [styles.offline]) }>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default FriendListItem