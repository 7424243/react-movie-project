import React from 'react'
import movieImg from '../../../../images/movie-camera.png'
import NavBar from '../NavBar/NavBar'


export default function Header() {
    return (
        <header>
            <img src={movieImg} alt="old movie camera"/>
            <NavBar />
        </header>
    )
}