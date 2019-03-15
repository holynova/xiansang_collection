import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div className='Header' >Header</div>
    );
  }
}
Header.propTypes = {};
Header.defaultProps = {};
export default Header;
