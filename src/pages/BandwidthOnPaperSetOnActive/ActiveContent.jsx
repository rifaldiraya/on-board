import React from 'react'
import {Card} from 'antd'

const gridStyle = {
    width: '16.666%',
    textAlign: 'left',
    height: 100
}

const ActiveContent = (props) => {
    return(
        <div>
            <div className="card-content">
                <Card.Grid hoverable={false} style={gridStyle}>{props.data.no}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>{props.data.customerID}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>{props.data.customerName}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>{props.data.productList}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>{props.data.sumOfList}</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>{props.data.bop}</Card.Grid>
            </div>
        </div>
    )
}

export default ActiveContent;