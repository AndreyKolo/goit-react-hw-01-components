import React from "react";
import user from './profile/user.json';
import { Profile } from './profile/Profile';
import statisticalData from './statistics/statistical-data.json';
import { Statistics } from './statistics/Statistics';
import friends from './friends/friends.json';
import { FriendList } from './friends/FriendList';
import transactions from './transaction/transaction.json';
import { TransactionHistory } from './transaction/TransactionHistory';

function App() {
    return ( 
        <div>
            <Profile {...user} />
            <Statistics title="Upload stats" stats={statisticalData}/>
            <FriendList friends={friends}/>
            <TransactionHistory items={transactions}/>
        </div>
    );
}

export default App;