import React, {Component} from 'react';
import Footer from './Footer';
import {REVERSIM_SUMMIT} from '../utils';

class Page extends Component {
  componentDidMount() {
    document.title = this.props.title
      ? `${this.props.title} · ${REVERSIM_SUMMIT}`
      : REVERSIM_SUMMIT;
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div
        className='page-single-content'>
        {children}
        <Footer/>
      </div>
    );
  }
}

export default Page;
