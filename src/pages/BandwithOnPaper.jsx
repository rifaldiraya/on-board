import React, { Component, Fragment, Container } from 'react'
import Navbar from '../component/Navbar'
import 'antd/dist/antd.css';

import { Card } from 'antd';

const gridStyle = {
  width: '16.666%',
  textAlign: 'center',
};

class BandwithOnPaper extends Component {
    render(){
        return(
            <Fragment>
                <div className="section-title-bandwith">
                    <h2>Bandwith On Paper (Set On Active)</h2>
                </div>
                <div className="container">
                    <div className="card-content bg-grey">
                        <Card title="Bandwith On Paper: February 22, 2021, 10:37 am">
                            <Card.Grid hoverable={false} style={gridStyle}>No.</Card.Grid>
                            <Card.Grid hoverable={false} style={gridStyle}>
                            Customer ID
                            </Card.Grid>
                            <Card.Grid hoverable={false} style={gridStyle}>Customer Name</Card.Grid>
                            <Card.Grid hoverable={false} style={gridStyle}>Product List</Card.Grid>
                            <Card.Grid hoverable={false} style={gridStyle}>Sum Of List</Card.Grid>
                            <Card.Grid hoverable={false} style={gridStyle}>BOP (Mbps)</Card.Grid>
                        </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BandwithOnPaper;