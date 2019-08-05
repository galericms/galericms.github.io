import React, { useState, useEffect } from "react";

import { getUser } from "../../UserService";

const Profile = ({ match }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        getUser(match.params.id).then(
            resp => {
                setCurrentUser(resp);
            },
            err => console.error(err.message)
        );
    }, []);

    return (
        <div>
            <h1>Profile: {match.params.id} </h1>
            <div>
                <p>
                    {currentUser.first} {currentUser.last}
                </p>
                <p>{currentUser.email}</p>
                <p>{currentUser.userName}</p>
            </div>
        </div>
    );
};

export default Profile;
