import React, { Component } from 'react';
import propTypes from 'prop-types';
import MainLayout from '../layout/MainLayout';
// import { } from 'antd';
// import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <MainLayout>
        <div>Home</div>
      </MainLayout>
    );
  }
}
Home.propTypes = {};
Home.defaultProps = {};
export default Home;
