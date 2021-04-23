import React, {useEffect} from 'react'
import CriticItem from '../CriticItem/CriticItem'


export default function CriticsList() {
    return (
        <div>
            <h1>Critics</h1>
            <ul>
                <CriticItem />
                <CriticItem />
                <CriticItem />
            </ul>
        </div>
    )
}

