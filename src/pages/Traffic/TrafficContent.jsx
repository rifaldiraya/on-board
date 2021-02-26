import React from 'react';
import { Card } from 'antd';

const gridStyle = {
  width: '12.5%',
  textAlign: 'left',
  height: 100,
};

const TrafficContent = (props) => {
  return (
    <div>
      <div className="card-content">
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.no}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.customerName}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.date}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.trafficIn}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.trafficOut}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.traffic}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.createdAt}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {props.data.updatedAt}
        </Card.Grid>
      </div>
    </div>
  );
};

export default TrafficContent;
