import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard';
import CardDeck from 'react-bootstrap/CardDeck'

const BrandsDashUI = (props) => {

    const [tvchannel, setTvchannel] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <div  style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <CardDeck>
                {tvchannel.map(projectData =>
                    <ProjectCard key={projectData._id} projectData={projectData} />
                )}
            </CardDeck>
        </div >

    )

    function fetchProjectsFromServer() {
        console.log('In fetchProjectsFromServer ')
        fetch('/api/consumer/getAllProjects')
            .then(response => response.json())
            .then(data => {
                setTvchannel(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default BrandsDashUI
