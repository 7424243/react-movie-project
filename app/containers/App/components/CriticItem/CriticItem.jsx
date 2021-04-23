import React from 'react'

export default function CriticItem(props) {
    return (
        <li>
            <h2>{props.name}</h2>
            {props.img ? <img src={props.img} alt="critic"/> : null}
            <p>Number of Reviews Written: </p>
            <p>Number of Critics Picks: </p>
            <p>Bio: {props.bio}</p>
        </li>
    )
}