import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }}>
                <Container>
                    <Row>
                    <Col>
                            <br /><br /><br /><br /><br /><br />
                            <h1 style={{ color:'#0077EF',fontWeight : 'bold'}}>Brands to Tvchannel Connect</h1>
                            <p> A one stop solution to connect freelancers to tvchannel projects. Brandss can now choose and work for the projects listed by tvchannels</p>
                            <p><Button variant="primary" href='/login'>Signin</Button></p>
                    </Col>
                    <Col> 
                    <img src="https://webstockreview.net/images/marketing-clipart-tv-advertising-16.png" 
                     style={{ height:'500px' }}/>
                    </Col>
                    
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
