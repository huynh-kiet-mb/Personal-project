import styled from "styled-components";
import logoImage from "../../assets/207c4f36152570b34a31a46837a7f472.jpg";

import Link from "next/link";
import { navLinks } from "../../utils/nav-link";


const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBar>
        {navLinks.map((link, index) =>
        (    <StyledLink key={index} href={link.path}>{link.name}</StyledLink>)
        )}
      </HeaderBar>
    </HeaderWrapper>
  );
};
// Header Wrapper
const HeaderWrapper = styled.div`
  width: 100vw;
  height: 20vh;
  background: #94b5da77;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
// Header bar
const HeaderBar = styled.div`
  /* background: #143d1e; */
  display: grid;
  /* 30% có thể thiết lập */
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 30px;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  background-color: #C2E9FB;
  border-radius: 10px;
  box-shadow: rgba(44, 77, 187, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 77, 187, 0.2) 0 1px 2px, rgba(44, 77, 187, 0.2) 0 2px 4px,
    rgba(44, 77, 187, 0.2) 0 4px 8px, rgba(44, 77, 187, 0.2) 0 8px 16px,
    rgba(44, 77, 187, 0.2) 0 16px 32px;
  color: #003c80;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    box-shadow: rgba(44, 65, 187, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 65, 187, 0.35) 0 1px 2px, rgba(44, 65, 187, 0.35) 0 2px 4px,
      rgba(44, 65, 187, 0.35) 0 4px 8px, rgba(44, 65, 187, 0.35) 0 8px 16px,
      rgba(44, 65, 187, 0.35) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

export default Header;
