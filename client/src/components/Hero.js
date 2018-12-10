import React from 'react';
import cn from 'classnames';
import {hero, heroInner, title, headphones, left, h2} from './Hero.css';
import {REVERSIM_SUMMIT} from '../utils';

const Hero = () => (
  <section className={cn(hero, 'd-flex justify-content-center align-items-center')}>
    <div className={cn(heroInner, 'd-flex align-items-center text-center text-md-left')}>
      <div className={cn(left, 'text-white')}>
        <div className="px-2">
          <h1 className={cn('mb-6 text-uppercase line-height-1', title)}>{REVERSIM_SUMMIT}</h1>
          <h2 className={cn(h2, 'mb-6')}>Coming Soon...</h2>
        </div>
      </div>
      <div className={headphones} />
    </div>
  </section>
);

export default Hero;
