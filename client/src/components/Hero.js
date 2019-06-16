import React from "react";
import cn from "classnames";
import {
  hero,
  heroInner,
  heroContent,
  title,
  subtitle,
  headphones,
  left,
  separator,
  h2,
  heroCounterWrapper,
  rs19Logo
} from "./Hero.css";
import { Container, Button } from "reactstrap";
import { REVERSIM_SUMMIT } from "../utils";
import { Link } from "react-router-dom";
import CountDown from "./CountDown";
import logoImg from "../images/SVG/logo.svg";
import homeBG from "../images/home-reg-bg.png";
import {
  faMapMarkerAlt,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faMapMarkerAlt, faCalendarAlt);

const Hero = ({ eventConfig }) => (
  <section
    className={cn(
      hero,
      "d-flex justify-content-center align-items-center bg-purple2 navbar-margin"
    )}
  >
    <Container>
      <div
        className={cn(
          heroInner,
          "d-flex align-items-center text-center text-md-left text-white"
        )}
      >
        <div className={cn("d-flex flex-column my-8 bg-purple2", heroContent)}>
          {/*<div className='d-flex'>*/}
          <div className="rs19Logo">
            <img src={logoImg} alt="rs19" />
          </div>

          {/*<div className={cn(left, 'text-white')}>*/}
          <div className={cn(subtitle, "p-2 d-flex mt-4 justify-content-around")}>
            <div>
              <FontAwesomeIcon className="mr-2" icon="calendar-alt" />
              16-17.6.2019
            </div>
            <a href="https://goo.gl/maps/HMRwNsM7Jpcz4j3p9" target="_blank">
              <div className="ml-4 text-white">
                <FontAwesomeIcon className="mr-2" icon="map-marker-alt" />
                TLV Convention center
              </div>
            </a>
          </div>
          <div className={cn(subtitle, "p-2 d-flex mt-1 mb-6")}>{"Registration is closed. See you at the conference"}</div>
          <div className="text-align-left">
            {eventConfig.voting && (
              <Link to="/proposals" className="unstyled-link">
                <Button className="styled-button on-purple">
                  {"VOTE FOR SESSIONS"}
                </Button>
              </Link>
            )}
          </div>
          <div className="d-flex justify-content-center mobile-flex-column">
          {/*  <a href="https://ti.to/reversim-summit/2019" className="unstyled-link mb-4">*/}
          {/*    <Button className="styled-button on-purple">*/}
          {/*      {"Get Tickets"}*/}
          {/*    </Button>*/}
          {/*  </a>*/}
            <Link to="/agenda" className="unstyled-link mb-4">
              <Button className="styled-button on-purple">
                {"View Agenda"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
    <div>
      <i className="fas fa-angle-down" />
    </div>
  </section>
);

export default Hero;
