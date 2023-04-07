import styled from 'styled-components'

const NavStyled = createNavStyled()

export default function Nav(props) {
  return (
    <NavStyled className={props.className}>
    </NavStyled>
  );
}

function createNavStyled() {
  return styled.nav``
}