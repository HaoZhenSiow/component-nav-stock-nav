import styled from 'styled-components'
import media from '@/utils/media';
import setStyleTag from '@/utils/cssvar';
import { useRef } from 'react';

const HamburgerStyled = createHamburgerStyled()

export default function Hamburger(props) {

  const hamburgerRef = useRef()

  function toggleHamburger() {
    const hamburger = hamburgerRef.current.classList
    const hiddenMenu = document.querySelector('div.hidden-menu').classList
    hamburger.toggle('open')
    hiddenMenu.toggle('open')

    let style = ``

    if (hamburger.contains('open')) {
      style = `
        body {
          overflow: hidden;
        }
        .navbar {
          --navbar-top: 0;
        }
      `
    } else {
      style = `
        .navbar {
          --navbar-top: calc(var(--navbar-height) * -1);
        }
      `
    }

    setStyleTag('data-nav', style)
  }

  return (
    <HamburgerStyled ref={hamburgerRef} className={`hamburger`} onClick={toggleHamburger}>
      <div class="top-bun"></div>
      <div class="meat"></div>
      <div class="bottom-bun"></div>
    </HamburgerStyled>
  );
}

function createHamburgerStyled() {
  return styled.div`
    grid-area: hamburger;
    ${media('display', 'block', 'block', 'none')}
    cursor: pointer;

    div {
      font-size: .8em;
      position: relative;
      width: 2.5em;
      height: .2em;
      border-radius: 3px;
      background-color: white;
      transition: all 0.3s ease-in-out;
    }

    div:not(div:first-child) {
      margin-top: .4em;
    }

    &.open {
      
      .top-bun {
        transform: rotate(-45deg);
        margin-top: .6em;
      }

      .meat {
        transform: rotate(45deg);
        margin-top: -.2em;
      }

      .bottom-bun {
        opacity: 0;
        transform: rotate(45deg);
      }

    }

  `
}

