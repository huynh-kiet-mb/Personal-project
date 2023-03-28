import styled from "styled-components";
import Header from "../header/index";
// Main page wrapper
const MainPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000000;
    display: flex;
    justify-content: center;
    
`;

const MainPage = () => {
    return(
        <MainPageWrapper>
            <Header/>
        </MainPageWrapper>
    );
}

export default MainPage;


