import React from 'react'
import {useSelector} from 'react-redux'
import CriticItem from '../CriticItem/CriticItem'


export default function CriticsList() {

    const critics = useSelector(state => state.resources.critics.critics)

    const sortFunction = (a, b) => {
        if(a.display_name.toLowerCase() < b.display_name.toLowerCase()) 
            {return -1}
        if(a.display_name.toLowerCase() > b.display_name.toLowerCase())
            {return 1}
        return 0
    }

    const sortedCritics = critics.sort(sortFunction)

    const criticItems = sortedCritics.map(critic => (
        <CriticItem
            key={critic.display_name}
            name={critic.display_name}
            img={critic.multimedia !== null ? critic.multimedia.resource.src : null}
            bio={critic.bio}
        />
    ))

    return (
        <div>
            <h1>Critics</h1>
            <ul>
                {criticItems}
            </ul>
        </div>
    )
}

