import { useRef } from 'react';
import styled from 'styled-components'
import media from '@/utils/media';
import setStyleTag from '@/utils/cssvar';

const Hamburger2Styled = createHamburger2Styled()

export default function Hamburger2(props) {

  const hamburgerRef = useRef()

  function toggleHamburger() {
    const hamburger = hamburgerRef.current.classList
    const navbar = document.querySelector('div.navbar').classList
    const hiddenMenu = document.querySelector('div.hidden-menu').classList
    hamburger.toggle('open')
    navbar.toggle('open')
    hiddenMenu.toggle('open')

    let style = ``

    if (hamburger.contains('open')) {
      style = `
        body {
          overflow: hidden;
        }
      `
    } 

    setStyleTag('data-hidden-menu', style)
  }

  return (
    <Hamburger2Styled ref={hamburgerRef} className={`hamburger`} onClick={toggleHamburger}>
      <div class="burger top-bun"></div>
      <div class="burger meat"></div>
      <div class="burger bottom-bun"></div>
      <div class="cross left-cross"></div>
      <div class="cross right-cross"></div>
    </Hamburger2Styled>
  );
}

function createHamburger2Styled() {
  return styled.div`
    --hamburger-size: .8em;
    grid-area: hamburger;
    ${media('display', 'block', 'block', 'none')}
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    position: relative;

    div {
      font-size: var(--hamburger-size);
      position: relative;
      width: 2.5em;
      height: .2em;
      border-radius: 3px;
      background-color: white;
    }

    div:not(div:first-child) {
      margin-top: .4em;
    }

    .burger {
      transition: scale 0.5s cubic-bezier(.17,.29,.59,1);
    }

    .top-bun {
      transform-origin: left;
      transition-delay: .6s;
    }

    .meat {
      transform-origin: right;
      transition-delay: .8s;
    }

    .bottom-bun {
      transform-origin: left;
      transition-delay: 1s;
    }

    .cross {
      position: absolute;
      top: .2em;
      width: 0;
      transition: width 0.5s cubic-bezier(.17,.29,.59,1);
    }

    .left-cross {
      right: 0;
      transform: translateX(-0.35em) translateY(-0.9em) rotate(-45deg);
      transform-origin: right center;
      transition-delay: .1s;
    }

    .right-cross {
      left: 0;
      transform: translateX(0.35em) translateY(-0.9em) rotate(45deg);
      transform-origin: left center;
    }

    &.open {
      
      .burger {
        scale: 0;
      }
  
      .cross {
        width: 2.5em;
      }

      .top-bun {
        transition-delay: 1ms;
      }

      .meat {
        transition-delay: .2s;
      }

      .bottom-bun {
        transition-delay: .4s;
      }

      .left-cross {
        transition-delay: 1s;
      }
      .right-cross {
        transition-delay: .9s;
      }
    }

  `
}

