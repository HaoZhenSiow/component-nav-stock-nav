import styled from 'styled-components'
import media from '@/utils/media';

const NavStyled = createNavStyled()

export default function Nav() {
  return (
    <NavStyled className='primary-nav'>
      <li><a href="">About</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Journal</a></li>
      <li><a href="">Media</a></li>
      <li><a href="">Contact</a></li>
    </NavStyled>
  );
}

function createNavStyled() {
  return styled.nav`
    grid-area: nav;
    list-style: none;
    ${media('display', 'none', 'none', 'flex')}
    align-items: center;
    font-weight: 700;
    text-transform: uppercase;

    li {
      position: relative;
      display: flex;

      &:not(li:last-child) {
        margin-inline-end: 1em;
      }

      a {
        font-size: .9em;
      }
      
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
  `
}