import React from 'react';
import styles from './Friendlist.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends = [] }) => (
  <div className={styles.friendWrapper}>
<ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
  </div>
  
);