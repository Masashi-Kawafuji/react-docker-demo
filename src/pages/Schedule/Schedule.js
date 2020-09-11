import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { List } from 'antd';

export class Schedule extends React.Component {
  state = {
    schedules: []
  }

  componentDidMount() {
    this.getSchedules();
  }

  getSchedules() {
    axios.get('http://localhost:3000/schedules.json')
      .then(response => {
        this.setState({ schedules: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <List
        key={this.state.schedules.id}
        itemLayout="vertical"
        size="large"
        bordered
        footer={<div>footer</div>}
        dataSource={this.state.schedules}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/schedule/${item.id}`}>{item.title}</Link>}
              description={<p>{item.venue}</p>}
            />
            <p>{item.description}</p>
          </List.Item>
        )}
      >
      </List>
    );
  }
}