import React, { Component, Fragment } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import NormalContent from '../BandwidthOnPaperNormal/NormalContent'
import Title from 'antd/lib/typography/Title'

const titleGridStyle = {
    width: '16.6666%',
    textAlign: 'center',
    height: 80,
    fontWeight: 'bold'
}

class BandwidthOnPaperNormal extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("http://localhost:3004/postNormal").then((res) => {
            this.setState({
                post: res.data
            })
        })
    }
    render(){
        return(
            <Fragment>
                <div className="section-title-bandwidth">
                    <Title level={1}>Bandwidth On Paper (Normal)</Title>
                </div>
                <div className="container">
                    <div className="card-content bg-grey">
                        <Card headStyle={{backgroundColor: '#e1e5eb'}} title="Bandwith On Paper: February 22, 2021, 10:37 am">
                            <div className="card-title">
                                <Card.Grid hoverable={false} style={titleGridStyle}>No.</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Customer ID</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Customer Name</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Product List</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Sum Of List</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>BOP (Mbps)</Card.Grid>
                            </div>
                            {
                                this.state.post.map(post => {
                                    return <NormalContent key={post.id} data={post}/>
                                })
                            }
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BandwidthOnPaperNormal;