import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
// Affichage des data du profil avec la fonction stringify qui affiche sous format
// JSON le contenu du profil connecter
    const { user, isAuthenticated } = useAuth0();
    return (
        // Si le user est connecter alors on afficher le div
        isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.nickname}</h2>
            <p>{user.email}</p>
            <JSONPretty data={user} />
            {/*JSON.stringify(user, null, 2)*/}
        </div>
        )
    )
}

export default Profile
