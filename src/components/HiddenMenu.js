import styled from 'styled-components'

const HiddenMenuStyled = createHiddenMenuStyled()

export default function HiddenMenu() {
  return (
    <HiddenMenuStyled className='hidden-menu container'>
      <nav className='hidden-nav'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Journal</a></li>
        <li><a href="">Media</a></li>
        <li><a href="">Contact</a></li>
      </nav>
    </HiddenMenuStyled>
  );
}

function createHiddenMenuStyled() {
  return styled.div`
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20vh;
    background-color: lightblue;
    z-index: 998;
    display: none;
    &.open {
      display: block;
    }

    .hidden-nav {
      list-style: none;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      li {
        margin-block: .75em;
        position: relative;
        display: inline-flex;

          &:after {
          content: "";
          display: inline-block;
          width: 100%;
          height: .15em;
          transition: transform 300ms ease-out;
          background-color: white;
          position: absolute;
          top: 100%;
          left: 0;
          transform: scaleX(0);
          transform-origin: right;
        }

        &:hover:after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
      
      li > a {
        font-family: 'Lora', serif;
        font-size: 2em;
        font-weight: 400;
      }
      
    }
  `
}