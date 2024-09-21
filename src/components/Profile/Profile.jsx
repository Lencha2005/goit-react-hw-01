import React from 'react';
import styles from './Profile.module.css';
console.log(styles)

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img}
        src={image}
        alt="User avatar" />
        <p className={styles.title}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
      <span>Followers</span>
      <span className={styles.span}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span className={styles.span}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span className={styles.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;