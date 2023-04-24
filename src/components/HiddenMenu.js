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
      <aside>
        <div className="lookbook">
          <h3>Lookbook</h3>
          <ul>
            <li><a href="">Embracing & Toasting</a></li>
            <li><a href="">Cooking & Sharing</a></li>
            <li><a href="">Splattering & Dreaming</a></li>
            <li><a href="">Creating & Playing Style</a></li>
            <li><a href="">Stock Originals</a></li>
            <hr></hr>
            <li><a href="">All Projects</a></li>
            <li><a href="">Testimonials</a></li>
          </ul>
        </div>
      </aside>
    </HiddenMenuStyled>
  );
}

function createHiddenMenuStyled() {
  return styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 10em;
    padding-bottom: 2em;
    background-color: #636f65;
    z-index: 998;
    overflow-y: scroll;
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

    aside {
      color: white;
    }

    aside ul {
      list-style: none;
      padding-inline-start: 0;

      li {
        margin-block: .5em;
      }

    }

    .lookbook > hr {
    }
  `
}