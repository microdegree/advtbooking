import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <div  style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <Card style={{ width: '25rem',padding:'10px',height:'400px'}}>
               
                <Card.Body>
                    <Card.Title>{props.projectData.channelName}</Card.Title>
                    <Card.Img variant="top" src={props.projectData.imageName} style={{ padding: 10 }}  />
                    <Card.Subtitle className="mb-2" style={{color: '#37D000' }}>Pricing Starts @ ₹ {props.projectData.bannerAdvtPrice}</Card.Subtitle>
                    <br /><br />
                   
                </Card.Body>
                <br /><br /><br />
                
                <Card.Footer style={{backgroundColor: '#919191' }}>
          
                <small className="" style={{color: '#fff' }}>Channel TRP : {props.projectData.channelTRP}</small>&nbsp;&nbsp;
                    <Link to={{
                        pathname: '/brandsDashboard/moreDetails',
                        projectData: props.projectData
                    }}>
                <Button variant="primary">More Details</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProjectCard
