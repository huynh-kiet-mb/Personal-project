import styled from "styled-components";
import logoImage from "../../assets/207c4f36152570b34a31a46837a7f472.jpg";

import Link from "next/link";
import { navLinks } from "../../utils/nav-link";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBar>
        {navLinks.map((link, index) => (
          <StyledLink key={index} href={link.path} leftPadding={link.leftPadding}>
            {link.name}
          </StyledLink>
        ))}
      </HeaderBar>
    </HeaderWrapper>
  );
};
// Header Wrapper
const HeaderWrapper = styled.div`
  width: 100vw;
  padding: 20px 30px;
  background: #94b5da77;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
`;
// Header bar
const HeaderBar = styled.div`
  background: #1f4258;
  display: grid;
  width: 100%;
  /* 30% có thể thiết lập */
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 25px;
  align-items: center;
  justify-content: flex-start;
`;
const StyledLink = styled(Link)`
  color: #e9e9e9;
  background: #1f4258;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 20px 30px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  font-size: 20px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  ::before {
    position: absolute;
    content: "";
    top: 20px;
    left: ${props => props.leftPadding? props.leftPadding : "30px" };
    opacity: 0;
    height: 0;
    width: 115px;
    background: rgba(255, 255, 255, 0.11);
    border-top: 5px solid #01b3a7;
    transform: translate3d(-100%, 0, 0);
    transition: all 0.35s cubic-bezier(0.05, 0.29, 0.11, 1.54), height 0.3s ease;
    visibility: hidden;
    box-sizing: border-box;
    /* z-index: -1; */
    /* transform: translate3d(0, 0, 0); */
  }
  :hover {
    background: #51687575;
    /* border-top: 0.5rem solid;
    border-color: #46C9D3D5; */
    ::before {
      opacity: 1;
      visibility: visible;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default Header;
