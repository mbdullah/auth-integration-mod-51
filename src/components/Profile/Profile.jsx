import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div>
            <h2>{user.email}</h2>
        </div>
    );
};

export default Profile;