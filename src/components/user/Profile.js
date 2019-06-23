import React, { useState, useEffect } from "react";

import { getSampleUser } from "../../UserService";

const Profile = ({ match }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        getSampleUser(match.params.id).then(
            response => {
                setCurrentUser(response);
            },
            err => console.error(err.message)
        );
    });

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
