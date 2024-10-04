import React from 'react';
import './styles/UserCard.css';

export const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <div className='user-card__name-wrapper'>
                <h2>{user.nombre}</h2>
            </div>
            <div className='user-card__age-wrapper'>
                <p>{user.edad} Años</p>
            </div>
            <div className='user-card__skills-wrapper'>
                {user.habilidades.map((habilidad, index) => (
                    <p key={index}>{habilidad}</p> // Mapea cada habilidad a un párrafo
                ))}
            </div>
            <div className='user-card__price-wrapper'>
                <p>${user.precio_por_hora}</p>
            </div>
        </div>
    );
};

