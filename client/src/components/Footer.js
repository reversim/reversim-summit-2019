import React from 'react';
import {Container, Row} from 'reactstrap';
import IconLink from './IconLink';

const Footer = () => (
  <footer className="bg-darkblue2 py-6 font-size-md">
    <Container>
      <Row className="footer-content align-items-center" noGutters>
        <div className="d-flex">
          <a className="text-white mr-6" href="mailto:rs18-team@googlegroups.com">
            Contact Us
          </a>
        </div>
        <div className="d-flex align-items-center">
          <IconLink href="https://twitter.com/reversim" icon="twitter" isLarge className="mr-5" />
          <IconLink
            href="https://www.facebook.com/groups/806177629478248/"
            icon="facebook"
            isLarge
            className="mr-7"
          />
          <span>All Rights Reserved © 2019</span>
        </div>
      </Row>
    </Container>
  </footer>
);

export default Footer;
