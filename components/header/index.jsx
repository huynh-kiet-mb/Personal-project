import styled from "styled-components";
import logoImage from "../../assets/207c4f36152570b34a31a46837a7f472.jpg";

import { Signika_Negative } from "@next/font/google";

const signikaNegative = Signika_Negative({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <HeaderWrapper>
      <LeftContentWrapper>
        <LogoWrapper>
          <Logo src={logoImage.src}></Logo>
        </LogoWrapper>
        <MenuWrapper>
          <MenuItem>Home</MenuItem>
          <MenuItem>
            Story
            <SmallMenuWrapper className="item">
              <div>Event</div>
              <div>The world</div>
              <div>Witcher schools</div>
            </SmallMenuWrapper>
          </MenuItem>
          <MenuItem>
            About
            <SmallMenuWrapper className="item">
              <span>Content</span>
            </SmallMenuWrapper>
          </MenuItem>
          <MenuItem>
            Forum
            <SmallMenuWrapper className="item">
              <span>Content</span>
            </SmallMenuWrapper>
          </MenuItem>
        </MenuWrapper>
      </LeftContentWrapper>
      <RightContentWrapper>INFOR</RightContentWrapper>
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
  padding: 0 5vw 0 5vw;
  color: white;
  font-family: ${signikaNegative.style.fontFamily};
`;
// Left components
const LeftContentWrapper = styled.div`
  width: 100%;
  background: red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 15px;
`;

const LogoWrapper = styled.div`
  background-color: yellow;
`;

const Logo = styled.img`
  width: 65px;
  height: 60px;
  border-radius: 50%;
  box-shadow: inset 0 3px 6px #613a3a28, 0 4px 6px #741a1a72;
`;

const MenuWrapper = styled.div`
  width: 100%;
  background-color: green;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 15px;
`;

const SmallMenuWrapper = styled.div`
  height: fit-content;
  display: none;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #e5ff00;
`;
const MenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  height: 30px;
  background-color: #2b587ea4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  &:hover ${SmallMenuWrapper} {
    display: flex;
    flex-direction: column;
    max-width: max-content;
  }
  &:hover {
    justify-content: flex-start;
    padding: 0px 10px 10px 10px;
  }
`;

// Right components
const RightContentWrapper = styled.div`
  width: 50%;
  padding: 10px;
  background: #001aff;
  display: flex;
  justify-content: flex-end;
`;

export default Header;
