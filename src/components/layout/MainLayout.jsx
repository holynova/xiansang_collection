import React, { Component } from 'react';
import propTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
// import { } from 'antd';
// import './MainLayout.scss';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div className='MainLayout'>
        <Header></Header>
        <div className="mainContent">
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
MainLayout.propTypes = {};
MainLayout.defaultProps = {};
export default MainLayout;
