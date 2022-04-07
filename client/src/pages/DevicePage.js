import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={650} height={650} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 400, height: 650, fontSize: 32, border: '2px solid lightgray'}}
                    >
                        <h3 >{device.name} </h3>
                        <h3>{device.price} $</h3>
                        <Button variant="btn btn-success">ADD TO CART</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h4 fontsize="24" color="green">SPECIFICATIONS</h4>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: 'transparent', padding: 10}}>
                        {info.title} {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
