import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';


const App = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(collection(db, "users"));
            data.forEach((doc) => console.log(doc.data()))
        };

        getUsers()
    });

    return (
        <div>
            <div>Home</div>
            {console.log(user)}
      </div>
    );
}

export default App;