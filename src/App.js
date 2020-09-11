import React, { useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import News from './pages/News';
import Schedule from './pages/Schedule';
import ScheduleItem from './pages/ScheduleItem';
import './App.css';
import { Layout, Menu, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

const App = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = e => {
    setCurrent(e.key)
  }

  return (
    <Layout>
      <Header style={{ background: '#fff' }}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/" >
              Home
              </Link>
          </Menu.Item>
          <Menu.Item key="news">
            <Link to="/news" >
              News
              </Link>
          </Menu.Item>
          <Menu.Item key="schedule">
            <Link to="/schedule" >
              Schedule
              </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Row justify="center">
          <Col
            xs={24}
            md={20}
          >
            <div style={{ background: '#fff', margin: '32px 48px' }}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/news">
                  <News />
                </Route>
                <Route path="/schedule/:id">
                  <ScheduleItem />
                </Route>
                <Route path="/schedule">
                  <Schedule />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer>
        rakugakito
      </Footer>
    </Layout>
  );
}

export default App;
