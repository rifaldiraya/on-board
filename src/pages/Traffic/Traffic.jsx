import React, { Component, Fragment } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import TrafficContent from '../Traffic/TrafficContent'

const titleGridStyle = {
    width: '12.5%',
    textAlign: 'center',
    height: 80,
    fontWeight: 'bold'
}

class Traffic extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("http://localhost:3004/postTraffic").then(res => {
            this.setState({
                post: res.data
            })
        })
    }
    render(){
        return(
            <Fragment>
                <div className="section-title-bandwith">
                    <h2>Traffic User</h2>
                </div>
                <div className="container">
                    <div className="card-content bg-grey">
                        <Card title="Date Traffic: February 22, 2021">
                            <div className="card-title">
                                <Card.Grid hoverable={false} style={titleGridStyle}>No.</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Customer</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Date</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Traffic In</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Traffic Out</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Traffic</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Created At</Card.Grid>
                                <Card.Grid hoverable={false} style={titleGridStyle}>Updated At</Card.Grid>
                            </div>
                            {
                                this.state.post.map(post => {
                                    return <TrafficContent key={post.id} data={post}/>
                                })
                            }
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Traffic;