import React from 'react'
import movieImg from '../../../../images/movie-camera.png'
import NavBar from '../NavBar/NavBar'


export default function Header() {
    return (
        <header>
            <div>
                <img src={movieImg} alt="old movie camera" className="logo"/>
                <NavBar />
            </div>
        </header>
    )
}