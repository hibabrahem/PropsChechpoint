import React from 'react';
import Player from './Player';
import playersData from './Players';
import "./Players.css"
const PlayersList = () => {
    return (
        <div className='cartee'> 
            {playersData.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;