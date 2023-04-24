import styled from 'styled-components'
import media from '@/utils/media';
import setStyleTag from '@/utils/cssvar';

import Hamburger from './hamburger/Hamburger';
import Hamburger2 from './hamburger/Hamburger2';
import Nav from './Nav';

const NavBarStyled = createNavBarStyled()

export default function NavBar(props) {
  setOnScroll()
  return (
    <NavBarStyled className="navbar container">
      <div className='navbar--logo'/>
      <span className='navbar--title'>STOCK</span>
      <Nav/>
      <Hamburger2/>
    </NavBarStyled>
  );
}

function createNavBarStyled() {
  return styled.div`
    --navbar-height: 6em;
    --navbar-color: rgb(181, 150, 158);
    background-color: var(--navbar-color);
    color: white;
    height: var(--navbar-height);
    display: grid;
    grid-template-areas: "logo title . nav hamburger";
    grid-template-columns: min-content min-content auto min-content min-content;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;
    transition-property: top, height;
    transition-duration: 500ms;
    transition-timing-function: ease-out;

    .navbar--logo {
      grid-area: logo;
      background-image: url('/badge-logo.svg');
      background-repeat: no-repeat;
      background-size: cover;
      --width: 60px;
      width: var(--width);
      height: calc(var(--width) * (207/216));
      margin-inline-end: calc(var(--width) * .2);
      ${media('display', 'none', 'none', 'block')}
    }

    .navbar--title {
      grid-area: title;
      font-family: 'Lora', serif;
      font-weight: 400;
      font-size: 2.5em;
      ${media('font-size', '2em', '2em', '2.5em')}
      letter-spacing: .3em;

      transition-property: font-size;
      transition-duration: 500ms;
      transition-timing-function: ease-out;
    }

    &.scrolled {
      --navbar-height: 4em;

      .navbar--logo {
        display: none;
      }

      .navbar--title {
        font-size: 2em;
        margin-inline-start: 0;
        transition-property: none;
      }
    }

    &.scrolling-down {
      top: var(--navbar-top);
    }

    &.open {
      --navbar-color: #636f65;
    }
  `
}

function setOnScroll() {
  if (typeof document !== 'undefined') {

    let style = `
      .navbar {
        --navbar-top: calc(var(--navbar-height) * -1);
      }
    `

    setStyleTag('data-nav', style)

    let previousTop = 0

    document.onscroll = function() {
      const navbar = document.querySelector('div.navbar').classList
      const top = document.body.getBoundingClientRect().top
            
      if (top < 0) {
        navbar.add('scrolled')
      } else {
        navbar.remove('scrolled')
      }

      if (top < previousTop) {
        navbar.add('scrolling-down')
      } else {
        navbar.remove('scrolling-down')
      }

      previousTop = top
    }
  }
}