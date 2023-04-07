import styled from 'styled-components'

const NavBarStyled = createNavBarStyled()

export default function NavBar(props) {
  setOnScroll()
  return (
    <NavBarStyled className={`${props.className} navbar container`}>
      <div className='navbar--logo'/>
      <span>STOCK</span>
      <nav className='primary-menu'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Journal</a></li>
        <li><a href="">Media</a></li>
        <li><a href="">Contact</a></li>
      </nav>
      <div className="hamburger-menu"/>
    </NavBarStyled>
  );
}

function createNavBarStyled() {
  return styled.div`
    --navbar-height: 7em;
    background-color: transparent;
    color: white;
    height: var(--navbar-height);
    display: grid;
    grid-template-areas: "logo name . nav hamburger";
    grid-template-columns: min-content min-content auto min-content min-content;
    align-items: center;
    position: fixed;
    top: 0;
    transition-property: top, height;
    transition-duration: 500ms;
    transition-timing-function: ease-out;

    .navbar--logo {
      grid-area: logo;
      background-image: url('/badge-logo.svg');
      background-repeat: no-repeat;
      background-size: cover;
      --width: 80px;
      width: var(--width);
      height: calc(var(--width) * (207/216));
    }

    span {
      grid-area: name;
      font-family: 'Lora', serif;
      font-weight: 400;
      font-size: 3.5em;
      letter-spacing: .3em;
      margin-inline-start: .2em;

      transition-property: font-size;
      transition-duration: 500ms;
      transition-timing-function: ease-out;
    }

    .primary-menu {
      grid-area: nav;
      list-style: none;
      display: flex;
      align-items: center;
      font-weight: 700;
      text-transform: uppercase;

      li:not(li:last-child) {
        margin-inline-end: 1em;
      }

      li {
        position: relative;
        display: flex;
      }

      li:after {
        content: "";
        display: inline-block;
        width: 100%;
        height: .2em;
        transition: transform 300ms ease-out;
        background-color: white;
        position: absolute;
        top: 100%;
        left: 0;
        transform: scaleX(0);
        transform-origin: right;
      }

      li:hover:after {
        transform: scaleX(1);
        transform-origin: left;
      }
      
    }

    .hamburger-menu {
      grid-area: hamburger;
      --width: 80px;
      width: var(--width);
      height: calc(var(--width) * (207/216));
      background-color: lightblue;
      display: none;
    }
    /* div {
      width: 100%;
      height: 100%;
      background-color: darksalmon;
    } */

    &.scrolled:not(&.scrolled.scrolling-down) {
      --navbar-height: 4em;
      background-color: rgba(255,192,203,.8);

      .navbar--logo {
        display: none;
      }

      span {
        font-size: 2em;
        margin-inline-start: 0;
        transition-property: none;
      }
    }

    &.scrolling-down {
      top: calc(var(--navbar-height) * -1);
    }
  `
}

function setOnScroll() {
  if (typeof document !== 'undefined') {

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