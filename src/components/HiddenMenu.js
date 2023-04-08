import styled from 'styled-components'

const HiddenMenuStyled = createHiddenMenuStyled()

export default function HiddenMenu(props) {
  return (
    <HiddenMenuStyled className='hidden-menu'>
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
    background-color: lightblue;
    z-index: 998;
    display: none;

    &.open {
      display: block;
    }
  `
}