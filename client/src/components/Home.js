import React, {createElement} from 'react';
import homeSections from '../data/home-sections';
import Page from './Page';
import Hero from '../components/Hero';

const Home = props => (
  <Page {...props}>
    <Hero />
  </Page>
);

export default Home;
